import 'scss/index.scss'
import createCanvas from './utils/crateCanvas'
import { generateMandala } from './utils/generateMandala'
import { drawMandal } from './draw'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

const ctx = canvas.getContext('2d')
const sectors = generateMandala(300, 12)

let time = 0.1
function render () {
  if (time < 1) {
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(time, time)
    drawMandal(ctx, sectors, center)

    time += 0.001

    console.log(time)
    requestAnimationFrame(render)
    ctx.restore()
  }
}
render()
