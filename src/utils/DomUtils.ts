import element, { Instance } from '../types/element'
import { elementTypes } from '../lib/CreateElement'

export const isListener = (name: string) => name.startsWith('on')

export const isAttribute = (name: string) => !isListener(name) && name !== 'children'

export const setAttributes = (dom: any, attribute: any, props: any) =>
  (dom[attribute] = props[attribute])

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

  const childInstances = props.children.map(instantiate)

  const instance: Instance = { dom, element, childInstances }

  return instance
}
