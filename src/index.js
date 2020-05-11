import _ from "loadsh";
import "./style/index.css";
import "./style/scssdex.scss";
import avatar from "./image/avatar.jpg";

function createElement() {
    let dom = document.createElement("div");
    dom.innerHTML = _.join(["学习webpack","第一天"]," ");
    //dom.className = "box";
    dom.classList.add("box");
    dom.classList.add("boxtwo");
    document.body.appendChild(dom);
}

function createImage() {
    const image = new Image();
    image.src = avatar;
    document.body.append(image);
}

createElement();
createImage();