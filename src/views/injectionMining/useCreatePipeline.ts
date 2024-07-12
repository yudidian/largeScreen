import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()
const rustyMap = textureLoader.load('/textures/rusty/rusty_metal_03_diff_2k.jpg')
const rustyAoMap = textureLoader.load('/textures/rusty/rusty_metal_03_ao_2k.jpg')
const rustyRoughMap = textureLoader.load('/textures/rusty/rusty_metal_03_rough_2k.jpg')
const rustyNormalMap = textureLoader.load('/textures/rusty/rusty_metal_03_nor_dx_2k.jpg')
const rustyDisplacementMap = textureLoader.load('/textures/rusty/rusty_metal_03_disp_2k.png')
setTexture([rustyMap, rustyAoMap, rustyRoughMap, rustyNormalMap, rustyDisplacementMap])

function setTexture(texture: THREE.Texture[]) {
  texture.forEach((item) => {
    item.wrapS = item.wrapT = THREE.RepeatWrapping // CHANGED
    item.repeat.set(1, 1) // CHANGED
  })
}

function useCreatePipeline(scene: THREE.Scene) {
  function createOilLine() {
    const points: THREE.Vector3[] = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -20, 0),
      new THREE.Vector3(0, -35, 0),
      new THREE.Vector3(0.5, -36, 0),
      new THREE.Vector3(2.5, -38, 0),
      new THREE.Vector3(9.5, -40, 0),
    ]
    const curve = new THREE.CatmullRomCurve3(points)
    const geometry = new THREE.TubeGeometry(curve, 40, 1.5, 16, false)
    geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2))
    const material = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      map: rustyMap,
      aoMap: rustyAoMap,
      roughnessMap: rustyRoughMap,
      normalMap: rustyNormalMap,
      displacementMap: rustyDisplacementMap,
      roughness: 1,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  }
  function createWaterLine() {

  }
  function createBoatLine() {

  }
  return {
    createOilLine,
    createWaterLine,
    createBoatLine,
  }
}
export default useCreatePipeline
