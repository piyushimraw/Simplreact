import props from './props'

interface element {
  type: string
  props: props
}

export interface Instance {
  dom: HTMLElement | Text
  element: element
  childInstances: Array<Instance>
}

export default element
