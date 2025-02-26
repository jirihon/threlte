import { types } from '@theatre/core'
import { createTransformer } from '../createTransformer'
import { BackSide, DoubleSide, FrontSide } from 'three'

export const side = createTransformer({
  transform(value) {
    // TODO: Fix this type error
    return types.stringLiteral(
      value === FrontSide ? 'f' : value === BackSide ? 'b' : 'd',
      { f: 'Front', b: 'Back', d: 'Double' },
      { as: 'switch' }
    ) as any
  },
  apply(target, path, value) {
    target[path] = value === 'f' ? FrontSide : value === 'b' ? BackSide : DoubleSide
  }
})
