
const mainContainer = document.querySelector('#root')

function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)

    domElement.innerHTML=reactElement.children 
    // domElement.setAttribute('href', reactElement.props.href )
    // domElement.setAttribute('target',reactElement.props.target);

    for (const prop in reactElement.props) {
        if(prop=== 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)


}

const reactElement= {
    type: 'a',
    props: {
         href:"www.google.com",
         target:'blank'
    },
    children:"click me to visit google"
}




customRender(reactElement, mainContainer)



