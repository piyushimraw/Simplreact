import SimplReact from '../../dist/simplreact.es5'

const rootDom = document.getElementById('root')

function tick(elements = [1, 2]) {
  const time = new Date().toLocaleTimeString()
  const clockElement = <div>{elements.map(item => item)}</div>
  SimplReact.render(clockElement, rootDom)
}

tick()
window.tick = tick
// setInterval(tick, 1000)
