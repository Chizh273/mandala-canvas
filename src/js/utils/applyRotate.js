import curry from 'ramda/es/curry'

export const applyRotate = curry((angle, {x, y}) => ({
  x: x * Math.cos(angle) - y * Math.sin(angle),
  y: x * Math.sin(angle) + y * Math.cos(angle)
}))
