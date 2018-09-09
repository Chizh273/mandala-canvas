import { applyTransforms } from './utils/applyTransforms'
import compose from 'ramda/es/compose'
import map from 'ramda/es/map'

export const drawFigure = (ctx, {rows, offset, angle, scale}) => {
  ctx.beginPath()

  map(
    compose(
      transformedPoints => {
        ctx.moveTo(transformedPoints[0].x, transformedPoints[0].y)
        transformedPoints.map(point => ctx.lineTo(point.x, point.y))
      },
      applyTransforms(offset, angle, scale)
    ),
    rows
  )

  ctx.stroke()
  ctx.closePath()
}
