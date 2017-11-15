import { applayOffset } from './utils/applyOffset'

export const drawMandal = (ctx, sectors, center) => {
  ctx.beginPath()

  for (let sector of sectors) {
    ctx.moveTo(sector[0].x + center.x, sector[0].y + center.y)
    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.strokeStyle = 'rgb(255, 0, 0)'

    for (let point of sector) {
      const movedPoint = applayOffset(point, center)
      ctx.lineTo(movedPoint.x, movedPoint.y)
    }
  }
  ctx.stroke()
  ctx.closePath()
}
