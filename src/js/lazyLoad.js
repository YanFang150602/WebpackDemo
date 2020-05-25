// function createObject() {
//     return import(/* webpackChunkName:"jquery" */'jquery').then(({default: $}) => {
//         var txt1 = "<p>文本。</p>";              // 使用 HTML 标签创建文本
//         var txt2 = $("<p></p>").text("文本。");  // 使用 jQuery 创建文本
//         var txt3 = document.createElement("p");
//         txt3.innerHTML = "文本。";               // 使用 DOM 创建文本 text with DOM
//         $("#root").append(txt1,txt2,txt3);   
//     });
// }

// async定义的函数，返回的是Promise对象
async function createObject() {
    const { default: $} = await import(/* webpackChunkName:"jquery" */'jquery');
    var txt1 = "<p>文本。</p>";              // 使用 HTML 标签创建文本
    var txt2 = $("<p></p>").text("文本。");  // 使用 jQuery 创建文本
    var txt3 = document.createElement("p");
    txt3.innerHTML = "文本。";               // 使用 DOM 创建文本 text with DOM
    $("#root").append(txt1,txt2,txt3); 
}

function createObjectHandler() {
    document.addEventListener('click', () => {
        createObject().then(() => {
            console.log("click to create object");
        })
    });
}

export default createObjectHandler;