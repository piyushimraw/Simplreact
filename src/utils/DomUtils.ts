export const isListener = (name: string) => name.startsWith('on')

export const isAttribute = (name: string) => !isListener(name) && name !== 'children'

export const setAttributes = (dom: any, attribute: any, props: any) =>
  (dom[attribute] = props[attribute])
