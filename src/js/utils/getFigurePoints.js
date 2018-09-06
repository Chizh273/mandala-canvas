import { RADIAN_IN_ONE_DEG } from '../constants'
import map from 'ramda/es/map'
import range from 'ramda/es/range'
import multiply from 'ramda/es/multiply'
import compose from 'ramda/es/compose'

export const getFigurePoints = (radius, countSides) => {
  const stepAngle = (360 / countSides) * RADIAN_IN_ONE_DEG
  const radiusMultiply = multiply(radius)

  return map(
    compose(
      angle => ({
        x: radiusMultiply(Math.cos(angle)),
        y: radiusMultiply(Math.sin(angle))
      }),
      multiply(stepAngle)
    ),
    range(0, countSides + 1)
  )
}
