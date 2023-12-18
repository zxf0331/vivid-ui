import vCol from './index.vue'

vCol.install = (app) => {
  app.component(vCol.name, vCol)
}

export default vCol
