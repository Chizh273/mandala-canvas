import 'scss/index.scss'
import createCanvas from './utils/crateCanvas'
import { generateMandala } from './utils/generateMandala'
import { drawMandal } from './draw'
import { RADIAN_IN_ONE_DEG } from './constants'
import { getClickPoint } from './utils/getClickPoint'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

let mandals = []

canvas.addEventListener('click', e => {
  mandals.push({
    center: getClickPoint(e),
    sectors: generateMandala(100, 25, 25),
    time: 0.1,
    angle: 0
  })
})

const ctx = canvas.getContext('2d')

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let mandala of mandals) {
    drawMandal(ctx, mandala.sectors, mandala.center, mandala.time, mandala.angle)
    mandala.time = mandala.time < 1 ? mandala.time + 0.01 : 1
    mandala.angle += RADIAN_IN_ONE_DEG
  }

  requestAnimationFrame(render)
}
render()
