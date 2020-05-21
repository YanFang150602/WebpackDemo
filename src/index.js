//import '@babel/polyfill'; //useBuiltIns:'entry'
import { createElement, createImage} from './js/createHtml';
import counter from './js/counter';
import number from './js/number';
import babelES6 from './js/es6';
import { add } from './js/math';
import App from './jsx/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

console.log("测试watch>>>");
console.log("运行的环境是：" + process.env.NODE_ENV);

//createElement();
createElement().then(dom => {
    document.body.appendChild(dom);
}); 
createImage();
counter();
number();

babelES6();

add(61, 3);

ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept('./js/number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    });
}

// consele.log('error'); 用来验证sourceMap