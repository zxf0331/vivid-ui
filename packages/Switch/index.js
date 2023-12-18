import vSwitch from './index.vue'

vSwitch.install = (app) => {
  app.component(vSwitch.name, vSwitch)
}

export default vSwitch
