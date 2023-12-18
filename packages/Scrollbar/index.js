import vScrollbar from './index.vue'

vScrollbar.install = (app) => {
  app.component(vScrollbar.name, vScrollbar)
}

export default vScrollbar
