import './css/common.css'
import layer from './componets/layer/layer.js'

const App = () => {
  let app = document.getElementById('app')
  let eml = new layer().tpl
  app.innerHTML = eml({
    name: 'aa',
    item: [1,2,3]
  })
}

new App()
