import './index.css'
import './a.scss'

console.log(1212)
const hello = require('./hello')
document.querySelector('#root').appendChild(hello())
console.log('结束111')