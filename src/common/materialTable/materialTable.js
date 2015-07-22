import './materialTable.scss'
import template from './material-table.tpl.html';

export default ()=>{
  return {
    transclude: true,
    template: template,
    link: (scope,element,attrs)=>{

    }
  }
}
