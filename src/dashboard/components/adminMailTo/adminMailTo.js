import template from './admin-mailto.tpl.html';

export default ()=>{
  return {
    scope:{
      email: '@'
    },
    template: template
  }
}
