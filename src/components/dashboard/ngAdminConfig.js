import categoryUi from './entities/category';
import trainerUi from './entities/trainer';
import contactUi from './entities/contact';
import formationUi from './entities/formation';
import mediaUi from './entities/media';
import userUi from './entities/user';
import projectUi from './entities/project';

import customLayoutTemplate from './custom/views/layout.tpl.html';
import listViewTemplate from './custom/views/list.tpl.html';

export default (NgAdminConfigurationProvider, config)=>{
  let nga = NgAdminConfigurationProvider;


  let admin = nga.application('AmbientIT Back-Office')
    .baseApiUrl(config.api.baseUrl);

  admin.layout(customLayoutTemplate);

  //admin.customTemplate(function(viewName) {
  //  if (viewName === 'ListView') {
  //    return listViewTemplate;
  //  }
  //});

  let contact = nga.entity('contact')
    .identifier(nga.field('slug'));

  let formation = nga.entity('formation')
    .identifier(nga.field('slug'));

  let category = nga.entity('category')
    .identifier(nga.field('slug'));

  let user = nga.entity('user')
    .identifier(nga.field('slug'));

  let media = nga.entity('media')
    .identifier(nga.field('slug'));

  let trainer = nga.entity('trainer')
    .identifier(nga.field('slug'));

  let project = nga.entity('project')
    .identifier(nga.field('slug'));

  admin
    .addEntity(contact)
    .addEntity(user)
    .addEntity(category)
    .addEntity(formation)
    .addEntity(trainer)
    .addEntity(media)
    .addEntity(project);

  categoryUi(nga,category);
  trainerUi(nga, trainer,user);
  mediaUi(nga, media);
  userUi(nga, user);
  formationUi(nga, formation,category);
  contactUi(nga,contact);
  projectUi(nga, project, media, user);

  admin.menu(nga.menu().title('Ambient')
      .addChild(nga.menu(contact).icon('<i class="ion-person-stalker"></i>'))
      .addChild(nga.menu(user).icon('<i class="ion-person"></i>'))
      .addChild(nga.menu(media).icon('<i class="ion-images"></i>'))
      .addChild(nga.menu().title('Projects').icon('<i class="ion-erlenmeyer-flask"></i>')
        .addChild(nga.menu(project).icon('<i class="ion-nuclear"></i>'))
      )
      .addChild(nga.menu().title('Formations').icon('<i class="ion-erlenmeyer-flask"></i>')
        .addChild(nga.menu(category).icon('<i class="ion-pricetag"></i>'))
        .addChild(nga.menu(formation).icon('<i class="ion-university"></i>'))
        .addChild(nga.menu(trainer).icon('<i class="ion-person-add"></i>'))
      )
  );

  nga.configure(admin);
}
