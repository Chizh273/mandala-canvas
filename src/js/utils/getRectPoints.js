import { applyRotate } from './applyRotate'
import { applayOffset } from './applyOffset'

export const getRectPoints = (center, width, height, angle) => ([
  {
    x: width / 2,
    y: height / 2
  },
  {
    x: width / 2,
    y: -height / 2
  },
  {
    x: -width / 2,
    y: -height / 2
  },
  {
    x: -width / 2,
    y: height / 2
  },
  {
    x: width / 2,
    y: height / 2
  }
]
  .map(applyRotate(angle))
  .map(applayOffset(center))
)
