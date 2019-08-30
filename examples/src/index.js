import SimplReact from '../../dist/simplreact.es5'

const rootDom = document.getElementById('root')

function tick() {
  const time = new Date().toLocaleTimeString()
  const clockElement = (
    <div>
      <h1>{time}</h1>
    </div>
  )
  SimplReact.render(clockElement, rootDom)
}

tick()
setInterval(tick, 1000000)
