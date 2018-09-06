import random from 'lodash.random'
import { DEG_360, RADIAN_IN_ONE_DEG } from '../constants'
import { applyRotate } from './applyRotate'

export const generateMandala = (radius, countSide, countPoints) => {
  const points = generateBasePoints(radius, countPoints)
  const sectors = []
  const angle = (DEG_360 / countSide) * RADIAN_IN_ONE_DEG

  for (let i = 0; i < countSide; i++) {
    sectors[i] = []
    for (let point of points) {
      sectors[i].push(applyRotate(angle * i, point))
    }
  }

  return sectors
}

export const generateBasePoints = (radius, countPoints) => {
  const points = []

  for (let i = 0; i < countPoints; i++) {
    const point = {
      x: random(0, radius),
      y: random(0, radius)
    }

    points.push(point)
  }

  return points
}
