import { applyRotate } from './applyRotate'
import { applayOffset } from './applyOffset'
import { RADIAN_IN_ONE_DEG } from '../constants'

export const getFigurePoints = (center, radius, countSides, angle) => {
  let polarAngle = 0
  const stepAngle = (360 / countSides) * RADIAN_IN_ONE_DEG
  const points = []

  for (let i = 0; i <= countSides; i++) {
    points.push({
      x: radius * Math.cos(polarAngle),
      y: radius * Math.sin(polarAngle)
    })

    polarAngle += stepAngle
  }

  return points
    .map(applyRotate(angle))
    .map(applayOffset(center))
}
