import * as THREE from 'three'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Water } from 'three/addons/objects/Water.js'
import * as d3 from 'd3'

const animationMixer = ref<THREE.AnimationMixer | null>(null)
const colors = ['#443bea', '#fc2924', '#faf639']
// 创建模型解压器
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')
// 创建模型加载器
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
const textureLoader = new THREE.TextureLoader()

const waterArrow = textureLoader.load('/textures/test.png')
const oilArrow = textureLoader.load('/textures/oilArrow.png')

// function setTexture(texture: THREE.Texture[], x: number = 0.01, y: number = 0.01) {
//   texture.forEach((item) => {
//     item.wrapS = item.wrapT = THREE.RepeatWrapping // CHANGED
//     item.repeat.set(x, y) // CHANGED
//   })
// }
// 生成40到60之间的随机数
// function getRandomInRange(min: number, max: number) {
//   return Math.random() * (max - min) + min
// }

function pipelineAnimate(mesh: THREE.Mesh, texture: THREE.Texture, callback: () => void) {
  if (!mesh) {
    return
  }
  texture.wrapS = THREE.ClampToEdgeWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 20)
  texture.rotation = Math.PI / 2
  mesh.material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 1,
    map: texture,
    side: THREE.DoubleSide,
  })
  callback()
}
function useCreateModel(scene: THREE.Scene) {
  function loadModel() {
    gltfLoader.load('/model/oilWell.glb', (gltf) => {
      console.log(gltf)
      animationMixer.value = new THREE.AnimationMixer(gltf.scene)
      const haiMian = gltf.scene.getObjectByName('haimian') as THREE.Mesh
      const waterLayer = new THREE.PlaneGeometry(493, 347, 20, 20)
      // const layer01 = gltf.scene.getObjectByName('layer01') as THREE.Mesh
      const waterPipeline = gltf.scene.getObjectByName('曲线相关')!.getObjectByName('注水管道001') as THREE.Mesh
      const oilPipeline = gltf.scene.getObjectByName('曲线相关')!.getObjectByName('采油管道001') as THREE.Mesh
      pipelineAnimate(waterPipeline, waterArrow, () => {
        setInterval(() => {
          waterArrow.offset.y += 0.01
        }, 10)
      })
      pipelineAnimate(oilPipeline, oilArrow, () => {
        setInterval(() => {
          oilArrow.offset.y -= 0.01
        }, 10)
      })
      // layer01.material = new THREE.MeshStandardMaterial({
      //   color: '#6bdcf8',
      //   transparent: true,
      //   opacity: 0.5,
      // })
      haiMian!.visible = false
      const water = new Water(
        waterLayer,
        {
          textureWidth: 1024,
          textureHeight: 1024,
          waterNormals: textureLoader.load('/textures/waternormals.jpg', (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          }),
          sunDirection: new THREE.Vector3(),
          sunColor: 0xFFFFFF,
          waterColor: 0x001E0F,
          distortionScale: 3.7,
          fog: scene.fog !== undefined,
          alpha: 0.8,
          eye: new THREE.Vector3(0, 0, 0),
        },
      )
      water.rotation.x = -Math.PI / 2
      water.position.copy(haiMian!.position)
      water.position.y += 0.1
      water.name = 'water'
      scene.add(water)
      gltf.animations.forEach((item) => {
        animationMixer.value?.clipAction(item).play()
      })
      // gltf.scene.position.z = -30
      const mesh = gltf.scene
      mesh.name = 'model'
      scene.add(mesh)
    })
  }
  function createOilModel() {
    const loader = new THREE.FileLoader()
    loader.load('/map/data.json', (data) => {
      const map = new THREE.Group()
      const jsonData = JSON.parse(data as string)
      const features = jsonData.features
      // 墨卡托投影转换
      const projection = d3.geoMercator().center([104.0, 37.5]).translate([0, 0])
      features.forEach((elem: any) => {
        // 定一个省份3D对象
        const province = new THREE.Object3D()
        // 每个的 坐标 数组
        const coordinates = elem.geometry.coordinates
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 'white',
        })
        // 循环坐标数组
        coordinates.forEach((multiPolygon: [number, number][][]) => {
          multiPolygon.forEach((polygon) => {
            const shape = new THREE.Shape()
            const lineGeometry = new THREE.BufferGeometry()
            const lineGeometryArray = []
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i]) as [number, number]
              if (i === 0) {
                shape.moveTo(x, -y)
              }
              shape.lineTo(x, -y)
              const point = new THREE.Vector3(x, -y, 1)
              lineGeometryArray.push(point.x, point.y, point.z)
            }
            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineGeometryArray, 3))
            const extrudeSettings = {
              depth: Math.random() * 3 + 1,
              bevelEnabled: false,
            }

            const geometry = new THREE.ExtrudeGeometry(
              shape,
              extrudeSettings,
            )
            const material = new THREE.MeshBasicMaterial({
              color: colors[Math.floor(Math.random() * colors.length)],
              transparent: true,
              opacity: 1,
            })
            const mesh = new THREE.Mesh(geometry, material)
            const line = new THREE.Line(lineGeometry, lineMaterial)
            // 将省份的属性 加进来
            province.name = elem.properties.name
            // water.material = [water.material, material]
            province.add(mesh)
            province.add(line)
          })
        })
        map.add(province)
      })
      map.scale.set(30, 30, 4)
      map.rotation.x = -Math.PI / 2
      map.rotation.z = -Math.PI * 0.03
      map.position.set(-810, -68.73, -10.89)
      map.name = 'map'
      scene.add(map)
    })
  }
  return {
    loadModel,
    createOilModel,
    animationMixer,
  }
}

export default useCreateModel
