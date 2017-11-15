import 'scss/index.scss'
import random from 'lodash.random'
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
    sectors: generateMandala(random(50, 100), random(25, 35), random(25, 35)),
    time: 0.1,
    angle: 0,
    color: `hsl(${random(50, 360)}, ${random(10, 100)}%, ${random(10, 100)}%)`,
    direction: random(0, 10) % 2 === 1 ? 1 : -1
  })

  console.log(mandals)
})

const ctx = canvas.getContext('2d')

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let mandala of mandals) {
    drawMandal(ctx, mandala.sectors, mandala.center, mandala.time, mandala.angle, mandala.color)
    mandala.time = mandala.time < 1 ? mandala.time + 0.01 : 1
    mandala.angle += RADIAN_IN_ONE_DEG * mandala.direction
  }

  requestAnimationFrame(render)
}
render()
