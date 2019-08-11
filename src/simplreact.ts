import element from './types/element';
import { isAttribute, isListener } from './utils/DomUtils';
export default class SimplReact {
    static render(element: element, parentDom: any) {
        const { type, props } =  element;
        const dom = document.createElement(type);

        // attach listeners 
        const listeners = Object.keys(props).filter(isListener)
        listeners.forEach((name: string) => {
            const event = name.toLowerCase().substring(2);
            dom.addEventListener(event, props[name]);
        })

        const childElements = props.children || [];
        childElements.forEach(childElement => this.render(childElement, dom));
        parentDom.appendChild(dom);
    }
}
