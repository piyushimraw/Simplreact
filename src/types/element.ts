import props from './props'

interface element {
  type: string
  key: string
  props: props
}

export interface Instance {
  dom: HTMLElement | Text
  element: element
  childInstances: Array<Instance | null>
}

export default element
