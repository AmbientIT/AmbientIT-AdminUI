export default (nga, project, media, user)=>{
  project.dashboardView()
    .title('Nos projets')
    .sortField('createdAt')
    .sortDir('DESC')
    .perPage(20)
    .fields([
      nga.field('name'),
      nga.field('content', 'wysiwyg'),
      nga.field('picture', 'reference')
        .label('Image')
        .targetEntity(media)
        .targetField(nga.field('name'))
    ]);

  project.listView()
    .title('Nos Projets')
    .sortField('name')
    .sortDir('ASC')
    .fields([
      project.dashboardView().fields(),
      nga.field('user', 'reference')
        .label('Chef de projet')
        .targetEntity(user)
        .targetField(nga.field('displayName'))
    ])
    .listActions(['show', 'edit', 'delete']);

  project.creationView()
    .title('Ajout d\'un nouveau projet')
    .fields([
      project.listView().fields()
    ]);

  project.editionView()
    .title('Edition du projet {{ entry.values.name }}')
    .actions(['list','show', 'delete'])
    .fields([
      project.creationView().fields()
    ]);

  project.showView()
    .title('Projet {{ entry.values.name }}')
    .actions(['list','edit', 'delete'])
    .fields([
      project.creationView().fields()
    ]);


  project.deletionView()
    .title('Confirmez vous la suppression du project {{ entry.values.name }} ?')
    .description('Attention Toute suppression est definitive');
}
