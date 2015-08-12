export default (nga, formation, category, config)=>{
  formation.dashboardView()
    .title('formations')
    .sortField('createdAt')
    .sortDir('DESC')
    .perPage(10)
    .fields([
      nga.field('avatar','template')
        .template('<admin-picture url="{{ entry.values.avatar }}" height="50px"></admin-picture>'),
      nga.field('name')
        .label('Nom'),
      nga.field('category', 'reference')
        .label('Category')
        .targetEntity(category)
        .targetField(nga.field('name')),
      nga.field('price', 'template')
        .label('prix')
        .template('<span>{{ entry.values.price | currency:"€":0:true }}</span>'),
      nga.field('duration', 'template')
        .template('<span>{{ entry.values.duration }} jours</span>')
    ]);
  formation.listView()
    .title('Formations')
    .sortField('name')
    .sortDir('ASC')
    .perPage(10)
    .fields([
      formation.dashboardView().fields(),
      nga.field('home', 'boolean')
        .label('homePage'),
      nga.field('trainers', 'template')
        .label('Formateurs')
        .template('<admin-relation-repeter entity-name="trainer" data="entry.values.trainers"></admin-relation-repeter>'),
      nga.field('next', 'template')
        .label('Les prérequis')
        .template('<admin-relation-repeter entity-name="formation" data="entry.values.previous"></admin-relation-repeter>')
    ])
    .listActions(['show', 'edit', 'delete']);

  formation.showView()
    .title('Formation {{ entry.values.name }}')
    .actions(['list','edit', 'delete'])
    .fields([
      formation.listView().fields(),
      nga.field('next', 'template')
        .label('Les formations suivantes')
        .template('<admin-relation-repeter entity-name="formation" data="entry.values.next"></admin-relation-repeter>'),
      nga.field('description')
        .label('description'),
      nga.field('program', 'wysiwyg')
        .label('Programme de cours'),
      nga.field('slides', 'template')
        .label('support de cours')
        .template('<admin-iframe url="{{entry.values.slides}}" width="100%" height="420"></admin-iframe>')
    ]);

  formation.creationView()
    .fields([
      nga.field('home', 'boolean')
        .label('Apparait en home'),
      nga.field('published', 'boolean')
        .label('est publié sur le site'),
      nga.field('name')
        .label('Nom')
        .validation({required: true, minlength: 2, maxlength: 40}),
      nga.field('category', 'template')
        .label('Categorie')
        .template(`<admin-relation-select label="categorie" attr-name="category" relation-name="category" data="entry.values"></admin-relation-select>`),
      nga.field('description','text')
        .label('Description')
        .attributes({placeholder: 'description de la fomation'})
        .validation({ minlength: 10, maxlength: 200}),
      nga.field('duration', 'template')
        .label('durée de la formation')
        .template('<admin-slider step="1" min="1" max="15"  data="entry.values" attr-name="duration" label="durée en jours"></admin-slider>'),
      nga.field('price', 'template')
        .label('Le prix de la formation')
        .template('<admin-slider step="50" min="400" max="5000"  data="entry.values" attr-name="price" label="prix en euros"></admin-slider>'),
      nga.field('avatar', 'file')
        .label('uploader un png carré')
        .uploadInformation({ 'url': config.api.baseUrl+'upload/avatar', 'fileFormDataName': 'file', 'apifilename': 'base64','accept': '.png' }),
      nga.field('slides')
        .label('support de cours')
        .validation({url: true, minlength: 15, maxlength: 100}),
      nga.field('previous','template')
        .label('Prérequis')
        .template(`<admin-relation-select label="prérequis" attr-name="previous" data="entry.values" relation-name="formation" multiple="true"></admin-relation-select>`),
      nga.field('trainers', 'template')
        .label('Formateurs')
        .template('<admin-relation-select label="formateurs" attr-name="trainers" relation-name="trainer" data="entry.values" multiple="true"></admin-relation-select>'),
      nga.field('program', 'wysiwyg')
        .label('Programme de cours')
        .attributes({placeholder: 'Programme détaillé de la formation'})
    ]);

  formation.editionView()
    .title('Edition de la formation {{ entry.values.name }}')
    .actions(['list','show', 'delete'])
    .fields([
      formation.creationView().fields()
    ]);

  formation.deletionView()
    .title('Confirmez vous la suppression de la formation {{ entry.values.name }} ?')
    .description('Attention Toute suppression est definitive');

}
