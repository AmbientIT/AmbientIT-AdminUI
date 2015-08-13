export default (nga,client)=>{
  client.listView()
    .title('Nos clients')
    .actions(['export'])
    .sortField('createdAt')
    .sortDir('DESC')
    .description('La liste de nos clients')
    .infinitePagination(true)
    .fields([
      nga.field('name')
        .label('nom'),
      nga.field('site')
        .label('page web'),
      nga.field('contacts', 'template')
        .template('<admin-relation-repeter entity-name="contact" data="entry.values.contacts"></admin-relation-repeter>')
    ])
    .actions(['create','export'])
    .listActions(['show','edit', 'delete']);

  client.showView()
    .title('Contact {{ entry.values.displayName }} de la société {{ entry.values.company }} ?')
    .actions(['list'])
    .fields([
      client.listView().fields(),
      nga.field('sessions','template')
        .template('<admin-relation-repeter entity-name="session" data="entry.values.sessions"></admin-relation-repeter>')
    ]);

  client.creationView()
    .fields([
      nga.field('name')
        .label('nom'),
      nga.field('site')
        .label('page web'),
      nga.field('contacts','template')
        .template('<admin-relation-select label="contacts" attr-name="contacts" data="entry.values" relation-name="contact" multiple="true"></admin-relation-select>')
    ]);

  client.editionView()
    .title('Edition du client {{ entry.values.name }}')
    .actions(['list','show', 'delete'])
    .fields([
      client.creationView().fields()
    ]);



  client.deletionView()
    .title('Confirmez vous la suppression du client {{ entry.values.name }} ?')
    .description('Attention Toute suppression est definitive');
}
