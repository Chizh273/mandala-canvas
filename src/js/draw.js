import { applayOffset } from './utils/applyOffset'
import { applyScale } from './utils/applyScale'
import { applyRotate } from './utils/applyRotate'
import { getFigurePoints } from './utils/getFigurePoints'
import { RADIAN_IN_ONE_DEG } from './constants'

export const drawMandal = (ctx, sectors, center, scale, angel, color) => {
  ctx.beginPath()

  for (let sector of sectors) {
    ctx.moveTo(sector[0].x + center.x, sector[0].y + center.y)
    ctx.strokeStyle = color

    for (let point of sector) {
      const translatePoint = applayOffset(
        center,
        applyScale(
          scale,
          applyRotate(angel, point)
        )
      )
      ctx.lineTo(translatePoint.x, translatePoint.y)
    }
  }
  ctx.stroke()
  ctx.closePath()
}

export const drawRect = (ctx, count, center, radius, countSides, color, angle, countNow) => {
  for (let i = 0; i < countNow; i++) {
    angle += RADIAN_IN_ONE_DEG * i * (360 / count)

    ctx.beginPath()

    const points = getFigurePoints(center, radius, countSides, angle)

    ctx.moveTo(points[0].x, points[0].y)
    ctx.strokeStyle = color

    for (let point of points) {
      ctx.lineTo(point.x, point.y)
    }

    ctx.stroke()
    ctx.closePath()
  }
}
