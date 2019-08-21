const createElement = (type: any, config: any, ...args: any[]) => {
  const props = Object.assign({}, config)
  const hasChildren = args.length > 0
  props.children = hasChildren ? [].concat(...args) : []
  return { type, props }
}

export default createElement
