import { applayOffset } from './utils/applyOffset'
import { applyScale } from './utils/applyScale'
import { applyRotate } from './utils/applyRotate'

export const drawMandal = (ctx, sectors, center, scale, angel) => {
  ctx.beginPath()

  for (let sector of sectors) {
    ctx.moveTo(sector[0].x + center.x, sector[0].y + center.y)
    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.strokeStyle = 'rgb(255, 0, 0)'

    for (let point of sector) {
      const translatePoint = applayOffset(
        applyScale(
          applyRotate(point, angel),
          scale
        ),
        center
      )
      ctx.lineTo(translatePoint.x, translatePoint.y)
    }
  }
  ctx.stroke()
  ctx.closePath()
}
