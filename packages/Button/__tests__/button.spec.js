import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VButton from '../index.vue'

describe('VButton', () => {
  it('renders a default button', () => {
    const wrapper = mount(VButton)

    // 断言按钮是否渲染为默认样式
    expect(wrapper.classes()).toContain('v-button') 
  })

  it('renders a primary button', () => {
    const wrapper = mount(VButton, {
      props: {
        type: 'primary'
      }
    })

    // 断言按钮是否渲染为主要按钮样式
    expect(wrapper.classes()).toContain('v-button-primary')
  })

  it('renders a plain button', () => {
    const wrapper = mount(VButton, {
      props: {
        plain: true
      }
    })

    // 断言按钮是否渲染为朴素按钮样式
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('renders a round button', () => {
    const wrapper = mount(VButton, {
      props: {
        round: true
      }
    })

    // 断言按钮是否渲染为圆形按钮样式
    expect(wrapper.classes()).toContain('is-round')
  })

  it('renders a disabled button', () => {
    const wrapper = mount(VButton, {
      props: {
        disabled: true
      }
    })

    // 断言按钮是否渲染为禁用状态
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('renders a button with custom width and height', () => {
    const wrapper = mount(VButton, {
      props: {
        width: 100,
        height: 50
      }
    })

    // 断言按钮是否具有自定义宽度和高度样式
    expect(wrapper.attributes('style')).toContain('width: 100px;')
    expect(wrapper.attributes('style')).toContain('height: 50px;')
  })
})
