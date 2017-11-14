import 'scss/index.scss'
import createCanvas from './utils/crateCanvas'
import {generateMandala} from './utils/generateMandala'

const canvas = createCanvas(window.innerHeight, window.innerWidth)

document.getElementsByTagName('body')[0]
  .appendChild(canvas)

// below is optional
const ctx = canvas.getContext('2d')
const points = generateMandala(500)

ctx.beginPath()

ctx.moveTo(points[0].x, points[0].y)
ctx.fillStyle = 'rgb(255, 0, 0)'
ctx.strokeStyle = 'rgb(255, 0, 0)'
for (let point of points) {
  ctx.lineTo(point.x, point.y)
}

ctx.stroke()
