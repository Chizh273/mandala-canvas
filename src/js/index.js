import 'sanitize.css'
import '../css/main.css'
import random from 'lodash.random'
import append from 'ramda/es/append'
import { createCanvas } from './utils/crateCanvas'
import { getClickPoint } from './utils/getClickPoint'
import { generateMandala } from './utils/generateMandala'
import { getFigurePoints } from './utils/getFigurePoints'
import { drawFigure } from './draw'
import { RADIAN_IN_ONE_DEG } from './constants'

const canvas = createCanvas(document, window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

let figures = []

canvas.addEventListener('click', e => {
  figures = append({
    offset: getClickPoint(e),
    rows: random(0, 10) % 2 === 1
      ? generateMandala(random(50, 100), random(25, 35), random(25, 35))
      : getFigurePoints(random(100, 200), random(3, 5), random(10, 15)),
    scale: 0.00001,
    angle: 0,
    color: `hsl(${random(50, 360)}, ${random(10, 100)}%, ${random(50, 100)}%)`,
    direction: random(0, 10) % 2 === 1 ? 1 : -1
  }, figures)
})

const ctx = canvas.getContext('2d')

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  figures.forEach(figure => {
    ctx.strokeStyle = figure.color

    drawFigure(ctx, figure)

    figure.scale = figure.scale < 1 ? figure.scale + 0.01 : 1
    figure.angle += RADIAN_IN_ONE_DEG * figure.direction
  })

  requestAnimationFrame(render)
}
render()
