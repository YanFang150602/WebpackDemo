//import '@babel/polyfill'; //useBuiltIns:'entry'
import { createElement, createImage} from './js/createHtml';
import counter from './js/counter';
import number from './js/number';
import babelES6 from './js/es6';

console.log("测试watch>>>");
console.log("运行的环境是：" + PRODUCTION);

createElement(); 
createImage();
counter();
number();

babelES6();

if(module.hot) {
    module.hot.accept('./js/number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    });
}

// consele.log('error'); 用来验证sourceMap