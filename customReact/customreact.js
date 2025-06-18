function customRender(reactElement,container){
    // const dom = document.createElement(reactElement.type)
    // dom.innerHTML = reactElement.children
    // dom.setAttribute('href',reactElement.props)
    // dom.setAttribute('target',reactElement.target)
    // container.appendChild(dom);

    //Method2:
    const dom = document.createElement(reactElement.type);
    dom.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        dom.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(dom);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click'
}

const container = document.querySelector('#root')

customRender(reactElement,container)
