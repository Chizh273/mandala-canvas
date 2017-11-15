import 'scss/index.scss'
import createCanvas from './utils/crateCanvas'
import { generateMandala } from './utils/generateMandala'
import { drawMandal } from './draw'
import { RADIAN_IN_ONE_DEG } from './constants'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

const ctx = canvas.getContext('2d')
const sectors = generateMandala(300, 15)

let time = 0.1
let angle = 0
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawMandal(ctx, sectors, center, time, angle)
  time = time < 1 ? time + 0.01 : 1
  angle += RADIAN_IN_ONE_DEG

  requestAnimationFrame(render)
}
render()
