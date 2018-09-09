import random from 'lodash.random'
import { DEG_360, RADIAN_IN_ONE_DEG } from '../constants'
import { applyRotate } from './applyRotate'
import range from 'ramda/es/range'
import map from 'ramda/es/map'

export const generateMandala = (radius, countSide, countPoints) => {
  const points = generateBasePoints(radius, countPoints)
  const angle = (DEG_360 / countSide) * RADIAN_IN_ONE_DEG

  return map(
    (i) => map(
      applyRotate(angle * i),
      points
    ),
    range(0, countSide)
  )
}

export const generateBasePoints = (radius, countPoints) => map(
  () => getPoint(radius),
  range(0, countPoints)
)

const getPoint = (radius) => ({
  x: random(0, radius),
  y: random(0, radius)
})
