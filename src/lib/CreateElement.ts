export const elementTypes = {
  TEXT_NODE: 'TEXT_NODE'
}

export const createElement = (type: any, config: any, ...args: any[]) => {
  const props = Object.assign({}, config)
  const hasChildren = args.length > 0
  const rawChildren = hasChildren ? [].concat(...args) : []
  props.children = rawChildren
    .filter(children => children !== null && children !== false)
    .map((children: any) => (children instanceof Object ? children : createTextElement(children)))
  return { type, props, key: props.key && props.key.toString() }
}

export const createTextElement = (children: string) => {
  return createElement(elementTypes.TEXT_NODE, { nodeValue: children })
}
