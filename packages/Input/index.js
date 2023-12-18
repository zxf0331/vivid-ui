import vInput from './index.vue'

vInput.install = (app) => {
  app.component(vInput.name, vInput)
}

export default vInput
