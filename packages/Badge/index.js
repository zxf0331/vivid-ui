import vBadge from './index.vue'

vBadge.install = (app) => {
  app.component(vBadge.name, vBadge)
}

export default vBadge
