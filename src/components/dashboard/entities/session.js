export default (nga,session,formation,trainer,client)=>{
  session.dashboardView()
    .title('Sessions de formations')
    .sortField('createdAt')
    .sortDir('DESC')
    .perPage(10)
    .fields([
      nga.field('start', 'date')
        .label('Date de début'),
      nga.field('end', 'date')
        .label('Date de fin'),
      nga.field('formation', 'reference')
        .label('Formation')
        .targetEntity(formation)
        .targetField(nga.field('name')),
      nga.field('trainer', 'reference')
        .label('Formateur')
        .targetEntity(trainer)
        .targetField(nga.field('displayName')),
      nga.field('client', 'reference')
        .label('Client')
        .targetEntity(client)
        .targetField(nga.field('name'))
    ]);

  session.listView()
    .title('Sessions de formation')
    .actions(['export'])
    .sortField('createdAt')
    .sortDir('DESC')
    .description('La liste de toutes les sessions de formation animés par des formateurs ambient-IT')
    .infinitePagination(true)
    .fields([
      session.dashboardView().fields()
    ])
    .actions(['create','export'])
    .listActions(['show','edit', 'delete']);

  session.showView()
      .title('Session de formation {{ entry.values.formation.name}} de la société {{ entry.values.client.name }}')
    .actions(['list'])
    .fields([
      session.listView().fields(),
      nga.field('students', 'template')
        .label('stagiaires')
        .template('<admin-relation-repeter entity-name="student" data="entry.values.students"></admin-relation-repeter>')
    ]);

  session.creationView()
    .fields([
      session.listView().fields(),
      nga.field('students', 'template')
        .label('stagiaires')
        .template('<admin-relation-select label="stagiaire" attr-name="students" relation-name="student" data="entry.values" multiple="true"></admin-relation-select>')
    ]);

  session.editionView()
    .title('Edition de la session {{ entry.values.id}}')
    .actions(['list','show', 'delete'])
    .fields([
      session.creationView().fields()
    ]);

  session.deletionView()
    .title('Confirmez vous la suppression de la session {{ entry.values.id }} ?')
    .description('Attention Toute suppression est definitive');
}
