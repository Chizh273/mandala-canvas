import 'sanitize.css'
import '../css/main.css'
import random from 'lodash.random'
import createCanvas from './utils/crateCanvas'
import { RADIAN_IN_ONE_DEG } from './constants'
import { getClickPoint } from './utils/getClickPoint'
import { drawRect } from './draw'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

let rects = []

canvas.addEventListener('click', e => {
  const center = getClickPoint(e)

  rects.push({
    x: center.x,
    y: center.y,
    countSides: random(3, 7),
    radiius: random(100, 200),
    count: random(10, 20),
    countNow: 1,
    time: 0,
    angle: 0,
    color: `hsl(${random(50, 360)}, ${random(10, 100)}%, ${random(10, 100)}%)`,
    direction: random(0, 10) % 2 === 1 ? 1 : -1
  })

  console.log(rects)
})

const ctx = canvas.getContext('2d')

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let rect of rects) {
    drawRect(ctx, rect.count, rect, rect.radiius, rect.countSides, rect.color, rect.angle, rect.countNow)

    rect.time++
    rect.angle += RADIAN_IN_ONE_DEG * rect.direction

    if (rect.time % 30 === 0 && rect.count > rect.countNow) rect.countNow++
  }

  ctx.stroke()
  ctx.closePath()

  requestAnimationFrame(render)
}
render()
