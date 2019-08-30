import element, { Instance } from './types/element'
import { createElement, elementTypes } from './lib/CreateElement'
import { isAttribute, isListener, setAttributes, instantiate } from './utils/DomUtils'
export default class SimplReact {
  static createElement = createElement
  private static rootInstance: Instance | null = null
  static render(element: element, parentDom: HTMLElement | Text) {
    const prevInstance = this.rootInstance
    if (prevInstance === null) {
      console.log('instantiate Result', instantiate(element))
    }

    // const childElements = props.children || []
    // childElements.forEach(childElement => this.render(childElement, dom))

    // if (!parentDom.hasChildNodes()) {
    //   parentDom.appendChild(dom)
    // } else {
    //   if (parentDom.lastChild !== null) parentDom.replaceChild(dom, parentDom.lastChild)
    // }
  }
}
