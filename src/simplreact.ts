import element, { Instance } from './types/element'
import { createElement } from './lib/CreateElement'
import { instantiate } from './lib/Instantiate'
import { Reconcile } from './lib/Reconcile'

export default class SimplReact {
  static createElement = createElement
  private static rootInstance: Instance | null = null
  static render(element: element, parentDom: HTMLElement | Text) {
    const prevInstance = this.rootInstance
    const nextInstance = Reconcile(parentDom, prevInstance, element)
    this.rootInstance = nextInstance
  }
}
