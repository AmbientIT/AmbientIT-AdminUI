export default (nga,student)=>{
  student.listView()
    .title('Stagiaires')
    .actions(['export'])
    .sortField('createdAt')
    .sortDir('DESC')
    .description('La liste de toutes les personnes ayant suivis une formation')
    .infinitePagination(true)
    .fields([
      nga.field('displayName')
        .label('nom'),
      nga.field('email')
    ])
    .actions(['create','export'])
    .listActions(['show','edit', 'delete']);

  student.showView()
    .title('Contact {{ entry.values.displayName }} de la société {{ entry.values.company }} ?')
    .actions(['list'])
    .fields([
      student.listView().fields(),
      nga.field('sessions','template')
        .template('<admin-relation-repeter entity-name="session" data="entry.values.sessions"></admin-relation-repeter>')
    ]);

  student.creationView()
    .fields([
      nga.field('firstName'),
      nga.field('lastName'),
      nga.field('email'),
      nga.field('sessions','template')
        .template('<admin-relation-select label="sessions" attr-name="sessions" data="entry.values" relation-name="session" multiple="true""></admin-relation-select>')
    ]);

  student.editionView()
    .title('Edition de l\'étudiant {{ entry.values.name }}')
    .actions(['list','show', 'delete'])
    .fields([
      student.creationView().fields()
    ]);



  student.deletionView()
    .title('Confirmez vous la suppression de l\'étudiant {{ entry.values.displayName }} ?')
    .description('Attention Toute suppression est definitive');
}
