var layoutTemplate = require('../view/layout.html'),
    dashboardTemplate = require('../view/dashboard.html'),
    errorTemplate = require('../view/404.html');

function dataStoreProvider() {
    return ['AdminDescription', function (AdminDescription) {
        return AdminDescription.getDataStore();
    }];
}

function entryConstructorProvider() {
    return ['AdminDescription', function (AdminDescription) {
      console.log(AdminDescription);
        return AdminDescription.getEntryConstructor();
    }];
}

function routing($stateProvider, $urlRouterProvider) {

    $stateProvider.state('main', {
        abstract: true,
        controller: 'AppController',
        controllerAs: 'appController',
        templateProvider: ['NgAdminConfiguration', function(Configuration) {
            return Configuration().layout() || layoutTemplate;
        }]
    });

    $stateProvider.state('dashboard', {
        parent: 'main',
        url: '/dashboard?sortField&sortDir',
        params: {
            sortField: null,
            sortDir: null
        },
        controller: 'DashboardController',
        controllerAs: 'dashboardController',
        templateProvider: ['NgAdminConfiguration', function(Configuration) {
            return Configuration().dashboard().template() || dashboardTemplate;
        }],
        resolve: {
            dataStore: dataStoreProvider(),
            Entry: entryConstructorProvider(),
            hasEntities: ['NgAdminConfiguration', function(Configuration) {
                return Configuration().entities.length > 0;
            }],
            collections: ['NgAdminConfiguration', function(Configuration) {
                return Configuration().dashboard().collections();
            }],
            responses: ['$stateParams', '$q', 'collections', 'dataStore', 'Entry', 'ReadQueries', function($stateParams, $q, collections, dataStore, Entry, ReadQueries) {
                var sortField = 'sortField' in $stateParams ? $stateParams.sortField : null;
                var sortDir = 'sortDir' in $stateParams ? $stateParams.sortDir : null;

                var promises = {},
                    collection,
                    collectionSortField,
                    collectionSortDir,
                    collectionName;

                for (collectionName in collections) {
                    collection = collections[collectionName];
                    collectionSortField = collection.getSortFieldName();
                    collectionSortDir = collection.sortDir();
                    if (sortField && sortField.split('.')[0] === collection.name()) {
                        collectionSortField = sortField;
                        collectionSortDir = sortDir;
                    }
                    promises[collectionName] = (function (collection, collectionSortField, collectionSortDir) {
                        var rawEntries, nonOptimizedReferencedData, optimizedReferencedData;

                        return ReadQueries
                            .getAll(collection, 1, {}, collectionSortField, collectionSortDir)
                            .then(response => {
                                rawEntries = response.data;
                                return rawEntries;
                            })
                            .then(rawEntries => ReadQueries.getFilteredReferenceData(collection.getNonOptimizedReferences(), rawEntries)
                            )
                            .then(nonOptimizedReference => {
                                nonOptimizedReferencedData = nonOptimizedReference;
                                return ReadQueries.getOptimizedReferencedData(collection.getOptimizedReferences(), rawEntries);
                            })
                            .then(optimizedReference => {
                                optimizedReferencedData = optimizedReference;

                                var references = collection.getReferences(),
                                    referencedData = angular.extend(nonOptimizedReferencedData, optimizedReferencedData),
                                    referencedEntries;

                                for (var name in referencedData) {
                                    referencedEntries = Entry.createArrayFromRest(
                                        referencedData[name],
                                        [references[name].targetField()],
                                        references[name].targetEntity().name(),
                                        references[name].targetEntity().identifier().name()
                                    );

                                    dataStore.setEntries(
                                        references[name].targetEntity().uniqueId + '_values',
                                        referencedEntries
                                    );
                                }
                            })
                            .then(() => {
                                var entries = collection.mapEntries(rawEntries);

                                // shortcut to display collection of entry with included referenced values
                                dataStore.fillReferencesValuesFromCollection(entries, collection.getReferences(), true);

                                return entries;
                            });
                    })(collection, collectionSortField, collectionSortDir);
                }

                return $q.all(promises)
            }],
            entries: ['responses', 'collections', function(responses, collections) {
                var collectionName,
                    entries = {};

                for (collectionName in responses) {
                    entries[collections[collectionName].name()] = responses[collectionName];
                }

                return entries;
            }]
        }
    });

    $stateProvider.state('ma-404', {
        parent: 'main',
        template: errorTemplate
    });

    $urlRouterProvider.when('', '/dashboard');

    $urlRouterProvider.otherwise(function($injector, $location) {
        var state = $injector.get('$state');
        state.go('ma-404');
        return $location.path();
    });
}

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = routing;
