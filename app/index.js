import printMe from './print.js';

import component from './component';

document.body.appendChild(component())

if(module.hot){
   module.hot.accept('./print.js', ()=>{
      console.log('update');
      printMe();
   })
}