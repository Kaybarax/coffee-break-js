
/**
 * Returns a dom node with the passed id
 * @param domNode
 * @returns {HTMLElement | null}
 */
const getDomNode = domNode => document.getElementById(domNode);

const injectStyle = (domNode, styleInjectorFunctionsArray) => {
    if (isEmptyString(domNode))
        throw 'Node is undefined';
    //check if it has style attribute
    let hasStyle = getDomNode(domNode).hasAttribute('style');
    if (hasStyle) {
        appendStyle(domNode, styleInjectorFunctionsArray);
    } else {
        addStyle(domNode, styleInjectorFunctionsArray);
    }
};

const appendStyle = (domNode, styleInjectorFunctionsArray) => {
    let node = getDomNode(domNode);
    let style = ''+node.getAttribute('style');
    if (style.length > 0 && style.substring(style.length - 1) !== ';') {
        style += ';';
    }
    let newStyleString = '';
    for (let style of styleInjectorFunctionsArray) {
        newStyleString += styleStringBuilder(style);
    }
    style += newStyleString;
    node.setAttribute('style', style);
};

const addStyle = (domNode, styleInjectorFunctionsArray) => {
    let node = getDomNode(domNode);
    let newStyleString = '';
    for (let style of styleInjectorFunctionsArray) {
        newStyleString += styleStringBuilder(style);
    }
    node.setAttribute('style', newStyleString);
};

const styleStringBuilder = (object) => {
    let styleStringBuilder = '';
    for (let key in object) {
        let keyArray = getCamelCaseArray(key);
        if (keyArray.includes(',')) {
            styleStringBuilder += keyArray.replace(',','-');
            styleStringBuilder += ' : ' + style[key] + ';';
            console.log('styleStringBuilder: ', styleStringBuilder);//log
        } else {
            styleStringBuilder += keyArray;
            styleStringBuilder += ' : ' + style[key] + ';';
            console.log('styleStringBuilder: ', styleStringBuilder);//log
        }
    }
    return styleStringBuilder;
};

const getCamelCaseArray = (camel) => {
    let reg = /([a-z0-9])([A-Z])/g;
    return camel.replace(reg, '$1 $2').split(' ');
};

const isEmptyString = (string) => {
    if (isNullUndefined(string)) {
        return true;
    }
    if (typeof string !== 'string') {
        return true;
    }
    return string === '' || string.trim() === '';
};

const isNullUndefined = (item) => {
    return item === null || item === undefined;
};

const isObject = () => {};

const isArray = () => {};

export {getDomNode, injectStyle};
