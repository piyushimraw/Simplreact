import element, { Instance } from '../types/element'
import { instantiate } from '../lib/Instantiate'
import { updateAttributes } from '../utils/DomUtils'
import AppUtils from '../utils/AppUtils'

export const Reconcile = (
  parentDom: HTMLElement | Text,
  instance: Instance | null,
  element: element
): Instance | null => {
  if (instance === null) {
    const newInstance = instantiate(element)
    parentDom.appendChild(newInstance.dom)
    return newInstance
  } else if (AppUtils.isNullorUndefined(element)) {
    parentDom.removeChild(instance.dom)
    return null
  } else if (instance.element.type === element.type) {
    // Update DOM Properties
    updateAttributes(instance.dom, instance.element.props, element.props)
    instance.childInstances = reconcileChildren(instance, element)
    instance.element = element
    return instance
  } else {
    const newInstance = instantiate(element)
    parentDom.replaceChild(newInstance.dom, instance.dom)
    return newInstance
  }
}

export const reconcileChildren = (instance: Instance, element: element): Array<Instance | null> => {
  const { dom } = instance
  const { childInstances } = instance
  const nextChildrentElements = element.props.children || []

  const newChildrenInstances = []

  const count = Math.max(childInstances.length, nextChildrentElements.length)

  for (let i = 0; i < count; i++) {
    const childInstance = childInstances[i]
    const childElement = nextChildrentElements[i]
    const newChildren = Reconcile(dom, childInstance, childElement)
    newChildrenInstances.push(newChildren)
  }

  return newChildrenInstances.filter((childInstance: Instance | null) => childInstance !== null)
}
