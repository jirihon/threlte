<script lang="ts">
	import { T } from '@threlte/core'
	import { AutoColliders } from '@threlte/rapier'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
</script>

<T.GridHelper args={[150, 15]} position.y={0.001} />

<AutoColliders shape={'cuboid'} position={[0, -0.5, 0]}>
	<T.Mesh
		receiveShadow
		geometry={new BoxGeometry(150, 1, 150)}
		material={new MeshStandardMaterial()}
	/>
</AutoColliders>
