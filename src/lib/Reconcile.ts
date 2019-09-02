import element, { Instance } from '../types/element'
import { instantiate } from '../lib/Instantiate'
import { updateAttributes } from '../utils/DomUtils'

export const Reconcile = (
  parentDom: HTMLElement | Text,
  instance: Instance | null,
  element: element
) => {
  debugger
  if (instance === null) {
    const newInstance = instantiate(element)
    parentDom.appendChild(newInstance.dom)
    return newInstance
  } else if (instance.element.type === element.type) {
    // Update DOM Properties
    updateAttributes(instance.dom, instance.element.props, element.props)

    /**
     *  TODO: Implement ChildReconciler which reconcile children of a given element if
     * `types` are same
     *
     */
    instance.element = element
    return instance
  } else {
    const newInstance = instantiate(element)
    parentDom.replaceChild(newInstance.dom, instance.dom)
    return newInstance
  }
}
