import curry from 'ramda/es/curry'

export const applyOffset = curry((offset, point) => ({
  x: point.x + offset.x,
  y: point.y + offset.y
}))
