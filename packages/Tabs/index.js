import vTabs from './index.vue'
import vPane from './tab-pane.vue'

vTabs.install = (app) => {
  app.component(vTabs.name, vTabs)
  app.component(vPane.name, vPane)
}

export default vTabs
