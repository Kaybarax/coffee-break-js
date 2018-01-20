
const crosswordGridsCSS = (columns=1) => {

    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.crossword-grid { color: #F00; }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementById('someElementId').className = 'cssClass';



};
