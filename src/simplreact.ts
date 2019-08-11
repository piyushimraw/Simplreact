import element from './types/element';
export default class SimplReact {
    static render(element: element, parentDom: any) {
        const { type, props } =  element;
        const dom = document.createElement(type);
        const childElements = props.children || [];
        childElements.forEach(childElement => this.render(childElement, dom));
        parentDom.appendChild(dom);
    }
}
