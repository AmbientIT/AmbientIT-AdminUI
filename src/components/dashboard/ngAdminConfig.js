import layoutTemplate from './layout/layout.tpl.html';

import categoryUi from './entities/category';
import trainerUi from './entities/trainer';
import contactUi from './entities/contact';
import formationUi from './entities/formation';
import mediaUi from './entities/media';
import userUi from './entities/user';
import projectUi from './entities/project';
import studentUi from './entities/student';
import sessionUi from './entities/session';
import clientUi from './entities/client';


export default
/* @ngInject */
(NgAdminConfigurationProvider, config)=>{
  let nga = NgAdminConfigurationProvider;

  let admin = nga.application('AmbientIT Back-Office')
    .baseApiUrl(config.api.baseUrl);

  let contact = nga.entity('contact')
    .identifier(nga.field('id'));

  let formation = nga.entity('formation')
    .identifier(nga.field('slug'));

  let category = nga.entity('category')
    .identifier(nga.field('slug'));

  let user = nga.entity('user')
    .identifier(nga.field('id'));

  let media = nga.entity('media')
    .identifier(nga.field('slug'));

  let trainer = nga.entity('trainer')
    .identifier(nga.field('id'));

  let project = nga.entity('project')
    .identifier(nga.field('slug'));

  let student = nga.entity('student')
    .identifier(nga.field('id'));

  let session = nga.entity('session')
    .identifier(nga.field('id'));

  let client = nga.entity('client')
    .identifier(nga.field('name'));

  admin
    .addEntity(contact)
    .addEntity(user)
    .addEntity(category)
    .addEntity(formation)
    .addEntity(trainer)
    .addEntity(media)
    .addEntity(project)
    .addEntity(student)
    .addEntity(session)
    .addEntity(client);

  categoryUi(nga,category);
  trainerUi(nga, trainer,user);
  mediaUi(nga, media, config);
  userUi(nga, user);
  formationUi(nga, formation,category, config);
  contactUi(nga,contact);
  projectUi(nga, project, media, user);
  studentUi(nga,student);
  sessionUi(nga,session,formation,trainer, client);
  clientUi(nga, client);

  admin.menu(nga.menu().title('Ambient IT')
    .addChild(nga.menu().title('Bizness').icon('<i class="ion-social-euro"></i>')
      .addChild(nga.menu(contact).icon('<i class="ion-person"></i>'))
      .addChild(nga.menu(client).icon('<i class="ion-earth"></i>'))
    )
    .addChild(nga.menu().title('Admin').icon('<i class="ion-erlenmeyer-flask"></i>')
      .addChild(nga.menu(project).title('Projets').icon('<i class="ion-nuclear"></i>'))
      .addChild(nga.menu(user).title('Utilisateurs').icon('<i class="ion-person"></i>'))
      .addChild(nga.menu(media).title('Media').icon('<i class="ion-images"></i>'))
    )
    .addChild(nga.menu().title('Formations').icon('<i class="ion-erlenmeyer-flask"></i>')
      .addChild(nga.menu(category).title('Categories').icon('<i class="ion-pricetag"></i>'))
      .addChild(nga.menu(formation).title('Formations').icon('<i class="ion-university"></i>'))
      .addChild(nga.menu(trainer).title('Formateurs').icon('<i class="ion-person-add"></i>'))
      .addChild(nga.menu(student).title('Stagiaire').icon('<i class="ion-person-add"></i>'))
      .addChild(nga.menu(session).title('Sessions').icon('<i class="ion-easel"></i>'))
    )
  );

  admin.layout(layoutTemplate);

  nga.configure(admin);
}
