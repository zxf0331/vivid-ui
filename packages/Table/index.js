import vTable from './index.vue'

vTable.install = (app) => {
  app.component(vTable.name, vTable)
}

export default vTable
