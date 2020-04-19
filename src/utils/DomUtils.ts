import Props from '../types/props'
export const isListener = (name: string) => name.startsWith('on')

export const isAttribute = (name: string) => !isListener(name) && name !== 'children'

export const setAttributes = (dom: any, attribute: any, props: any) =>
  (dom[attribute] = props[attribute])

export const updateAttributes = (
  dom: HTMLElement | Text | any,
  prevProps: Props,
  nextProps: Props
): HTMLElement | Text => {
  // Remove Event Listeners
  Object.keys(prevProps)
    .filter(isListener)
    .forEach(listener => {
      const event = listener.toLowerCase().substring(2)
      dom.removeEventListener(event, prevProps[listener])
    })

  // Add new Event Listeners
  Object.keys(nextProps)
    .filter(isListener)
    .forEach(listener => {
      const event = listener.toLowerCase().substring(2)
      dom.addEventListener(event, nextProps[listener])
    })

  // Remove Old Attributes
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach(attribute => {
      dom[attribute] = null
    })

  // Add New Attributes
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(attribute => {
      dom[attribute] = nextProps[attribute]
    })

  return dom
}
