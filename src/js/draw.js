import {applyTransforms} from './utils/applyTransforms'
import {getFigurePoints} from './utils/getFigurePoints'
import {RADIAN_IN_ONE_DEG} from './constants'

export const drawMandala = (ctx, {sectors, center, scale, angle, color}) => {
  ctx.beginPath()

  for (let sector of sectors) {
    ctx.moveTo(sector[0].x + center.x, sector[0].y + center.y)
    ctx.strokeStyle = color

    applyTransforms(center, angle, scale)(sector)
      .map(point => ctx.lineTo(point.x, point.y))
  }
  ctx.stroke()
  ctx.closePath()
}

export const drawFigure = (ctx, {count, center, radius, countSides, color, angle, countFigures}) => {
  for (let i = 0; i < countFigures; i++) {
    angle += RADIAN_IN_ONE_DEG * i * (360 / count)

    ctx.beginPath()

    const points = applyTransforms(center, angle)(getFigurePoints(radius, countSides))

    ctx.moveTo(points[0].x, points[0].y)
    ctx.strokeStyle = color

    points.map(point => ctx.lineTo(point.x, point.y))

    ctx.stroke()
    ctx.closePath()
  }
}
