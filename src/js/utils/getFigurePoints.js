import { RADIAN_IN_ONE_DEG } from '../constants'
import multiply from 'ramda/es/multiply'
import compose from 'ramda/es/compose'
import range from 'ramda/es/range'
import map from 'ramda/es/map'

export const getFigurePoints = (radius, countSides, countFigures) => {
  const stepAngle = (360 / countFigures) * RADIAN_IN_ONE_DEG

  return map(
    compose(
      angle => getFigure(radius, countSides, angle),
      multiply(stepAngle)
    ),
    range(0, countFigures)
  )
}

const getFigure = (radius, countSides, offsetAngle) => {
  const stepAngle = (360 / countSides) * RADIAN_IN_ONE_DEG

  return map(
    compose(
      angle => ({
        x: radius * Math.cos(angle + offsetAngle),
        y: radius * Math.sin(angle + offsetAngle)
      }),
      multiply(stepAngle)
    ),
    range(0, countSides + 1)
  )
}
