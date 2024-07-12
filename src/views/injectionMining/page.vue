<script setup lang="ts">
import * as THREE from 'three'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import gsap from 'gsap'
import useCreateModel from './useCreateModel.ts'

let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let camera: THREE.PerspectiveCamera
const scene = new THREE.Scene()
const gui = new GUI()
const rgbeLoader = new RGBELoader()
const { loadModel, animationMixer } = useCreateModel(scene)

onMounted(() => {
  init()
})
// 创建灯光
// const light_1 = new THREE.AmbientLight(0x404040, 0.1)
// const light_2 = new THREE.AmbientLight(0x404040, 1)
// light_1.position.set(0, 10, 0)
// light_2.position.set(0, -40, 0)
// scene.add(light_1, light_2)

// 添加hdr
rgbeLoader.load('/hdr/sky.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping
  scene.background = texture
  scene.environment = texture
  scene.backgroundBlurriness = 0.1
})

// 添加辅助线
const axesHelper = new THREE.AxesHelper(1000)
scene.add(axesHelper)
// 加载模型
loadModel()

// 绘制油层
// createOilModel()

function init() {
  const canvas = document.getElementById('container') as HTMLCanvasElement
  camera = new THREE.PerspectiveCamera(
    75,
    canvas.offsetWidth / canvas.offsetHeight,
    0.01,
    1000,
  )
  // 41.847011785134086, y: .29, z: 107.09978087461073
  camera.position.set(-1.7517202787427801, 26.43999999999999, 147.13962370768894)
  camera.updateProjectionMatrix()
  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  controls = new OrbitControls(camera, canvas)
  controls.target.set(-2.5975225620803326, -32.09878534386024, 5.114109914079815)
  controls.update()
  gui.add(camera.position, 'x').step(0.01).min(-100).max(100)
  gui
    .add(camera.position, 'y')
    .step(0.01)
    .min(-100)
    .max(100)
    .onChange(() => {
      console.log(controls)
      console.log(camera.view, camera.position, camera.zoom)
    })
  animate()
}
const clock = new THREE.Clock()
let flag = true
function animate() {
  const elapsedTime = clock.getElapsedTime()
  const water = scene.getObjectByName('water')
  const boat = scene.getObjectByName('oilBoat')
  const model = scene.getObjectByName('model')
  if (model) {
    const oliLayer = model.getObjectByName('you')
    if (oliLayer) {
      const texture = oliLayer.material.map
      if (flag) {
        flag = false
        texture.offset.x = 0
        setInterval(() => {
          texture.offset.x += 0.2
          if (texture.offset.x >= 1) {
            texture.offset.x = 0
          }
        }, 1000)
      }
    }
  }
  // const map = scene.getObjectByName('map')
  if (animationMixer.value) {
    animationMixer.value.update(1 / 60)
  }
  if (water) {
    water!.material.uniforms.time.value += 1.0 / 60.0
  }
  if (boat) {
    boat.position.y = Math.sin(elapsedTime) * 0.4
  }
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(animate)
}

function changeViewHandler(type: string) {
  switch (type) {
    case '1': {
      gsap.to(camera.position, {
        x: -1.7517202787427801,
        y: 26.43999999999999,
        z: 147.13962370768894,
        duration: 2,
      })
      gsap.to(controls.target, {
        x: -2.5975225620803326,
        y: -32.09878534386024,
        z: 5.114109914079815,
        duration: 2,
      })
      break
    }
    case '2':{
      gsap.to(camera.position, {
        x: -36.071310875860576,
        y: -43.16,
        z: 62.818337737944006,
        duration: 2,
      })
      gsap.to(controls.target, {
        x: -54.44930110188891,
        y: -58.920404628575895,
        z: 10.110082453530318,
        duration: 2,
      })
      break
    }
    case '3':{
      gsap.to(camera.position, {
        x: 11.795745132544438,
        y: -47.06,
        z: 99.44729997341037,
        duration: 2,
      })
      gsap.to(controls.target, {
        x: 8.083993027880142,
        y: -52.247304953708294,
        z: 12.30929308083013,
        duration: 2,
      })
      break
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <canvas
      id="container"
      width="1480"
      height="862"
      style="margin-right: 10px"
    />
    <div class="view-btn-wrapper">
      <el-button type="primary" @click="changeViewHandler('1')">
        海平面视角
      </el-button>
      <el-button type="primary" @click="changeViewHandler('2')">
        管道视角
      </el-button>
      <el-button type="primary" @click="changeViewHandler('3')">
        油层视角
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 90vh;
  #container {
    position: absolute;
    width: 1480px;
    height: 862px;
  }
  .view-btn-wrapper {
    position: fixed;
    top: vh(120);
    right: vw(20);
  }
}
</style>
