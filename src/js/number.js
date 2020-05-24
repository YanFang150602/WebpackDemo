// import _ from 'lodash';

function number() {
    const div = document.createElement('div');
    div.setAttribute('id', 'number');
    div.innerHTML = _.join(['3000','+','3434','=','?'], '');
    document.body.appendChild(div);
}

export default number;