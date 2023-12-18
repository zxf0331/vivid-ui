import vDrawer from './index.vue'

vDrawer.install = (app) => {
  app.component(vDrawer.name, vDrawer)
}

export default vDrawer
