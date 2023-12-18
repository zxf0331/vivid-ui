import { mount } from '@vue/test-utils';
import vDropdown from '../index.vue'
import { describe, it, expect } from 'vitest'

describe('vDropdown', () => {
  it('渲染默认属性正确', async () => {
    const wrapper = mount(vDropdown)

    // 假设默认标题为'下拉菜单'
    expect(wrapper.find('.v-dropdown-default-menu span').text()).toBe('下拉菜单')

    // 触发鼠标悬停事件
    await wrapper.trigger('mouseenter')

    // 检查悬停后下拉列表是否可见
    expect(wrapper.find('.v-dropdown-list').isVisible()).toBe(true)

    // 触发点击事件
    await wrapper.trigger('click')

    // 检查点击后下拉列表是否隐藏
    expect(wrapper.find('.v-dropdown-list').isVisible()).toBe(false)
  })

  it('在项点击时触发change事件', async () => {
    const wrapper = mount(vDropdown)

    // 触发点击事件以显示下拉列表
    await wrapper.trigger('click')

    // 查找第一个下拉项并点击它
    await wrapper.find('.v-dropdown-list-item').trigger('click')

    // 检查是否触发了'change'事件
    expect(wrapper.emitted().change).toBeTruthy()

    // 检查是否将第一个项作为参数传递给'change'事件
    expect(wrapper.emitted().change[0][0]).toEqual({
      label: '菜单1'
    })
  })

  // 根据组件的功能和任何自定义进行必要的调整并添加更多测试用例
})