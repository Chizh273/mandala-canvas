import random from 'lodash.random'
import { DEG_360, RADIAN_IN_ONE_DEG } from '../constants'

export const generateMandala = (radius, countSide) => {
  const points = generateBasePoints(radius)
  const sectors = []

  for (let i = 0; i < countSide; i++) {
    sectors[i] = []
    for (let point of points) {
      sectors[i].push(getNextPoint(point, countSide, i))
    }
  }

  return sectors
}

export const getNextPoint = ({x, y}, countSide, i) => {
  const angle = (DEG_360 / countSide) * RADIAN_IN_ONE_DEG * i

  return {
    x: x * Math.cos(angle) - y * Math.sin(angle),
    y: x * Math.sin(angle) + y * Math.cos(angle)
  }
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
