import element, { Instance } from '../types/element'
import { instantiate } from '../lib/Instantiate'
export const Reconcile = (
  parentDom: HTMLElement | Text,
  instance: Instance | null,
  element: element
) => {
  if (instance === null) {
    const newInstance = instantiate(element)
    parentDom.appendChild(newInstance.dom)
    return newInstance
  } else {
    const newInstance = instantiate(element)
    parentDom.replaceChild(newInstance.dom, instance.dom)
    return newInstance
  }
}
