import vRate from './index.vue'

vRate.install = (app) => {
  app.component(vRate.name, vRate)
}

export default vRate
