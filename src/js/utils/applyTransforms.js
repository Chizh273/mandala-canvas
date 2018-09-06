import compose from 'ramda/es/compose'
import ifElse from 'ramda/es/ifElse'
import always from 'ramda/es/always'
import map from 'ramda/es/map'
import { applyOffset } from './applyOffset'
import { applyRotate } from './applyRotate'
import { applyScale } from './applyScale'

export const applyTransforms = (offset, rotate, scale = false) => map(
  ifElse(
    always(scale),
    compose(
      applyOffset(offset),
      applyScale(scale),
      applyRotate(rotate)
    ),
    compose(
      applyOffset(offset),
      applyRotate(rotate)
    )
  )
)
