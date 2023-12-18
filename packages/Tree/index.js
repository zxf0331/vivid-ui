import vTree from './index.vue'

vTree.install = (app) => {
  app.component(vTree.name, vTree)
}

export default vTree
