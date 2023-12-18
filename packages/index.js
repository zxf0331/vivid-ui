//导入所有组件
import vButton from './Button/index'
import vInput from './Input/index'
import vSpace from './Space/index'
import vRate from './Rate/index'
import vLink from './Link/index'
import vDropdown from './Dropdown/index'
import vRow from './vRow'
import vCol from './vCol'
import vSwitch from './Switch' 
import Loading from './Loading/index'
import Message from './Message/index'
import vBadge from './Badge/index'
import vTabs from './Tabs/index'
import vScrollbar from './Scrollbar/index'
import vTable from './Table/index'
import vDialog from './Dialog/index'
import Confirm from './Confirm/index'
import vDrawer from './Drawer/index'
import vRadio from './Radio/index'
import vSkeleton from './Skeleton/index'
import Notification from './Notification/index'

const components = [
  vButton,
  vInput,
  vSpace,
  vRate,
  vLink,
  vDropdown,
  vRow,
  vCol,
  vSwitch,
  vBadge,
  vTabs,
  vScrollbar,
  vTable,
  vDialog,
  vDrawer,
  vRadio,
  vSkeleton
]

const install = (App) => {
  components.forEach((item) => {
    App.use(item)
  })
  App.config.globalProperties.$message = Message
  App.config.globalProperties.$loading = Loading
  App.config.globalProperties.$confirm = Confirm
  App.config.globalProperties.$notification = Notification
}

const VividUi = {
  install
}

export {
  install,
  vButton,
  vInput,
  vSpace,
  vRate,
  vLink,
  vDropdown,
  vRow,
  vCol,
  vSwitch,
  Message,
  Loading,
  Confirm,
  vBadge,
  vTabs,
  vScrollbar,
  vTable,
  vDialog,
  vDrawer,
  vRadio,
  vSkeleton,
  Notification
}
export default VividUi
