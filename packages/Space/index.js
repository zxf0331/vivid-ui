import vSpace from './index.vue'

vSpace.install = (app) => {
  app.component(vSpace.name, vSpace)
}

export default vSpace
