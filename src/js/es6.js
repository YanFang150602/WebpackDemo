function babelES6() {
    const arr = [
        new Promise(() => {}),
        new Promise(() => {})
    ];

    arr.map(item => {
        console.log(item);
    })
}

export default babelES6;