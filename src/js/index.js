import 'sanitize.css'
import '../css/main.css'
import random from 'lodash.random'
import createCanvas from './utils/crateCanvas'
import {RADIAN_IN_ONE_DEG} from './constants'
import {getClickPoint} from './utils/getClickPoint'
import {drawFigure, drawMandala} from './draw'
import {generateMandala} from './utils/generateMandala'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

let figures = []

canvas.addEventListener('click', e => {
  figures.push({
    center: getClickPoint(e),
    sectors: random(0, 10) % 2 === 1
      ? generateMandala(random(50, 100), random(25, 35), random(25, 35))
      : false,
    countSides: random(3, 7),
    radius: random(100, 200),
    count: random(10, 20),
    countFigures: 1,
    time: 0,
    scale: 0,
    angle: 0,
    color: `hsl(${random(50, 360)}, ${random(10, 100)}%, ${random(10, 100)}%)`,
    direction: random(0, 10) % 2 === 1 ? 1 : -1
  })

  console.log(figures)
})

const ctx = canvas.getContext('2d')

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let figure of figures) {
    figure.sectors
      ? drawMandala(ctx, figure)
      : drawFigure(ctx, figure)

    figure.time++
    figure.scale = figure.scale < 1 ? figure.scale + 0.01 : 1

    figure.angle += RADIAN_IN_ONE_DEG * figure.direction

    if (figure.time % 30 === 0 && figure.count > figure.countFigures) figure.countFigures++
  }

  ctx.stroke()
  ctx.closePath()

  requestAnimationFrame(render)
}
render()
