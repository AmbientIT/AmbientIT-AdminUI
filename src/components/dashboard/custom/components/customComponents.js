import textTemplate from './text-field.tpl.html';
import inputTemplate from './input-field.tpl.html';
import checkboxTemplate from './checkbox-field.tpl.html';
import fileTemplate from './file-field.tpl.html';
import choiceTemplate from './choice-field.tpl.html';


export default (NgAdminConfigurationProvider, $provide)=>{
  $provide.decorator('maTextFieldDirective', ['$delegate', function ($delegate) {
    $delegate[0].template = textTemplate;
    return $delegate;
  }]);

  $provide.decorator('maInputFieldDirective', ['$delegate', function ($delegate) {
    $delegate[0].template = inputTemplate;
    return $delegate;
  }]);

  $provide.decorator('maCheckboxFieldDirective', ['$delegate', function ($delegate) {
    $delegate[0].template = checkboxTemplate;
    return $delegate;
  }]);

  $provide.decorator('maFileFieldDirective', ['$delegate', function ($delegate) {
    $delegate[0].template = fileTemplate;
    return $delegate;
  }]);

  $provide.decorator('maChoiceFieldDirective', ['$delegate', function ($delegate) {
    $delegate[0].template = choiceTemplate;
    return $delegate;
  }]);

}
