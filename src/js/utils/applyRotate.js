import curry from 'ramda/es/curry'

export const applyRotate = curry((angle, point) => ({
  x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
  y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
}))
