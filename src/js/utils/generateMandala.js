import random from 'lodash.random'
import { DEG_360, RADIAN_IN_ONE_DEG } from '../constants'
import { applyRotate } from './applyRotate'

export const generateMandala = (radius, countSide) => {
  const points = generateBasePoints(radius)
  const sectors = []
  const angle = (DEG_360 / countSide) * RADIAN_IN_ONE_DEG

  for (let i = 0; i < countSide; i++) {
    sectors[i] = []
    for (let point of points) {
      sectors[i].push(applyRotate(point, angle * i))
    }
  }

  return sectors
}

export const generateBasePoints = (radius) => {
  const points = []

  for (let i = 0; i < 250; i++) {
    const point = {
      x: random(0, radius),
      y: random(0, radius)
    }

    points.push(point)
  }

  return points
}
