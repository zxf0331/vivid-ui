import vDialog from './index.vue'

vDialog.install = (app) => {
  app.component(vDialog.name, vDialog)
}

export default vDialog
