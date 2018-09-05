import curry from 'ramda/es/curry'

export const applyScale = curry((scale, {x, y}) => ({
  x: x * scale,
  y: y * scale
}))
