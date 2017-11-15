import 'scss/index.scss'
import createCanvas from './utils/crateCanvas'
import { generateMandala } from './utils/generateMandala'
import { drawMandal } from './draw'
import { RADIAN_IN_ONE_DEG } from './constants'
import { getClickPoint } from './utils/getClickPoint'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

let center = {}

canvas.addEventListener('click', e => {
  center = getClickPoint(e)
})

const ctx = canvas.getContext('2d')
const sectors = generateMandala(100, 8, 100)

let time = 0.1
let angle = 0
const render = () => {
  if (center.x && center.y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawMandal(ctx, sectors, center, time, angle)
    time = time < 1 ? time + 0.01 : 1
    angle += RADIAN_IN_ONE_DEG
  }

  requestAnimationFrame(render)
}
render()
