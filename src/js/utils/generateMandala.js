import random from 'lodash.random'
import { DEG_360, RADIAN_IN_ONE_DEG } from '../constants'

export const generateMandala = (radius) => {
  const points = []

  for (let i = 0; i < 100; i++) {
    const point = {
      x: random(0, radius),
      y: random(0, radius)
    }

    points.push(point)
  }

  return points
}

export const getNextPoint = ({x, y}, countSide) => {
  const angle = (DEG_360 / countSide) * RADIAN_IN_ONE_DEG

  return {
    x: x * Math.cos(angle) - y * Math.sin(angle),
    y: x * Math.sin(angle) + y * Math.cos(angle)
  }
}
