import { types } from '@theatre/core'
import { DEG2RAD, RAD2DEG } from 'three/src/math/MathUtils'
import { createTransformer } from '../createTransformer'

export const euler = createTransformer({
  transform(value) {
    return types.compound({
      x: value.x * RAD2DEG,
      y: value.y * RAD2DEG,
      z: value.z * RAD2DEG
    })
  },
  apply(target, path, value) {
    target[path].x = value.x * DEG2RAD
    target[path].y = value.y * DEG2RAD
    target[path].z = value.z * DEG2RAD
  }
})
