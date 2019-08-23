import element from './types/element'
import { createElement, elementTypes } from './lib/CreateElement'
import { isAttribute, isListener, setAttributes } from './utils/DomUtils'
export default class SimplReact {
  static createElement = createElement
  static render(element: element, parentDom: any) {
    console.log(element)
    const { type, props } = element
    const isTextElement = type === elementTypes.TEXT_NODE
    const dom = isTextElement ? document.createTextNode('') : document.createElement(type)
    // attach listeners
    const listeners = Object.keys(props).filter(isListener)
    listeners.forEach((name: string) => {
      const event = name.toLowerCase().substring(2)
      dom.addEventListener(event, props[name])
    })

    const attributes = Object.keys(props).filter(isAttribute)
    attributes.forEach((attribute: string) => setAttributes(dom, attribute, props))

    const childElements = props.children || []
    childElements.forEach(childElement => this.render(childElement, dom))
    parentDom.appendChild(dom)
  }
}
