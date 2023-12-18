import vSkeleton from './index.vue'
import vSkeletonItem from './v-skeleton-item.vue'

vSkeleton.install = (app) => {
  app.component(vSkeleton.name, vSkeleton)
  app.component(vSkeletonItem.name, vSkeletonItem)
}

export default vSkeleton
