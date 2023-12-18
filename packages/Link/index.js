import vLink from './index.vue'

vLink.install = (app) => {
  app.component(vLink.name, vLink)
}

export default vLink
