// Behind The Scene React Working
function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    
    if (reactElement.props.children) {
        domElement.innerHTML = reactElement.props.children;
    } else if (reactElement.children) {
        domElement.innerHTML = reactElement.children;
    }
    
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }
    
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a', // May Be Div Or P Or Whatever
    props: {
        href: 'http://google.com',
        target: '_blank',
        children: 'Click me'
    }
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
