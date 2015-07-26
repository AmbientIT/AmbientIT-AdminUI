export default (nga, trainer, user)=>{
  trainer.dashboardView()
    .title('formateurs')
    .sortField('createdAt')
    .sortDir('DESC')
    .perPage(5)
    .fields([
      nga.field('displayName'),
      nga.field('email'),
      nga.field('formations','template')
        .template('<admin-relation-repeter data="entry.values.formations" entity-name="formation"></admin-relation-repeter>'),
      nga.field('price', 'template')
        .label('tarif journalier')
        .template('<span>{{ entry.values.price | currency:"€":2:true }}</span>')
    ]);

  trainer.listView()
    .title('Formateurs')
    .sortField('displayName')
    .sortDir('ASC')
    .fields([
      trainer.dashboardView().fields()
    ])
    .listActions(['show', 'edit', 'delete']);

  trainer.creationView()
    .title('Ajout d\'un nouveau formateur')
    .fields([
      nga.field('user', 'template')
        .label('user')
        .template(`<admin-relation-select label="utilisateurs ambient-it" attr-name="user" relation-name="user" data="entry.values"></admin-relation-select>`),
      nga.field('firstName', 'template')
        .template(`<md-input-container>
                    <label>Prénom</label>
                    <input type="text" ng-model="entry.values.firstName" ng-disabled="entry.values.user"/>
                    </md-input-container>`),
      nga.field('lastName','template')
          .template(`<md-input-container>
                    <label>Nom</label>
                    <input type="text" ng-model="entry.values.lastName" ng-disabled="entry.values.user"/>
                    </md-input-container>`),
      nga.field('email','template')
        .template(`<md-input-container>
                    <label>Email</label>
                    <input type="email" ng-model="entry.values.email" ng-disabled="entry.values.user"/>
                    </md-input-container>`),
      nga.field('formations','template')
        .label('formations')
        .template(`<admin-relation-select attr-name="formations" data="entry.values" relation-name="formation"></admin-relation-select>`),
      nga.field('price', 'template')
        .label('prix')
        .template(`<admin-slider label="prix €/jour" data="entry.values" attr-name="price" min="0" max="1500" step="50"></admin-slider>`),
      nga.field('extrenal', 'boolean')
        .label('est une resource externe ?'),
      nga.field('home', 'boolean')
        .label('affiché en home ? (4 max)')
    ]);

  trainer.editionView()
    .title('Edition du formateur {{ entry.values.displayName }}')
    .actions(['list','show', 'delete'])
    .fields([
      trainer.creationView().fields()
    ]);

  trainer.showView()
    .title('Formateur {{ entry.values.name }}')
    .actions(['list','edit', 'delete'])
    .fields([
      nga.field('displayName')
        .label('Nom du formateur')
        .attributes({placeholder: 'le nom du formateur'})
        .validation({ minlength: 2, maxlength:30}),
      nga.field('email')
        .label('email')
        .attributes({placeholder: 'l\'email du formateur'})
        .validation({ email: true}),
      nga.field('formations','template')
        .label('formations')
        .template('<div admin-relation-repeter data="entry.values.formations" relation-name="formation"></div>'),
      nga.field('price', 'number')
        .label('prix')
        .attributes({placeholder: 'le tarif journalier du formateur'})
        .validation({number: true}),
      nga.field('extrenal', 'boolean')
        .label('est une resource externe ?'),
      nga.field('home', 'boolean')
        .label('affiché en home ? (4 max)')
    ]);
  trainer.deletionView()
    .title('Confirmez vous la suppression du formateur {{ entry.values.displayName }} ?')
    .description('Attention Toute suppression est definitive');

}
