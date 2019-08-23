import SimplReact from '../../dist/simplreact.es5'

const element = (
  <div>
    <div>Please Enter some Text</div>
    <input value="123" onClick={e => console.log(e)} />
  </div>
)

SimplReact.render(element, document.getElementById('root'))
