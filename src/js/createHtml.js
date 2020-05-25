import "../style/index.css";
import "../style/scssdex.scss";
import avatar from "../image/avatar.jpg";

function createElement() {
    // return import(/* webpackChunkName:"lodash" */'lodash').then(({default: _}) => {
    //     let dom = document.createElement("div");
    //     dom.innerHTML = _.join(["学习webpack","第一天"]," ");
    //     dom.classList.add("iconfont");
    //     dom.classList.add("icon-xiangmuguanlix");
    //     return dom;
    // });
    let dom = document.createElement("div");
    dom.innerHTML = _.join(["学习webpack","第一天"]," ");
    // dom.innerHTML = "学习webpack 第一天";
    dom.className = "box";
    dom.classList.add("iconfont");
    dom.classList.add("icon-xiangmuguanlix");
    dom.classList.add("boxfont");
    dom.classList.add("box");
    dom.classList.add("boxtwo");
    document.body.appendChild(dom);
}

function createImage() {
    const image = new Image();
    image.src = avatar;
    image.classList.add("transcss");
    document.body.append(image);
}

export { createElement, createImage };