import element, { Instance } from '../types/element'
import { elementTypes } from '../lib/CreateElement'
import { isListener, setAttributes, isAttribute } from '../utils/DomUtils'

export const instantiate = (element: element): Instance => {
  const { type, props } = element
  const isTextElement = type === elementTypes.TEXT_NODE
  const dom: HTMLElement | Text = isTextElement
    ? document.createTextNode('')
    : document.createElement(type)

  /**
   * attach listeners to `{DOM}` elements
   *
   */
  const listeners = Object.keys(props).filter(isListener)
  listeners.forEach((name: string) => {
    const event = name.toLowerCase().substring(2)
    dom.addEventListener(event, props[name])
  })

  const attributes = Object.keys(props).filter(isAttribute)
  attributes.forEach((attribute: string) => setAttributes(dom, attribute, props))

  const childElements = props.children || []

  const childInstances = childElements.map(instantiate)
  const childDOM = childInstances.map(instance => instance.dom)
  childDOM.forEach(childDOM => dom.appendChild(childDOM))
  const instance: Instance = { dom, element, childInstances }

  return instance
}
