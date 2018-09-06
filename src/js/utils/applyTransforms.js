import compose from 'ramda/es/compose'
import map from 'ramda/es/map'
import { applyOffset } from './applyOffset'
import { applyRotate } from './applyRotate'
import { applyScale } from './applyScale'

export const applyTransforms = (offset, rotate, scale) => map(
  compose(
    applyOffset(offset),
    applyScale(scale),
    applyRotate(rotate)
  )
)
