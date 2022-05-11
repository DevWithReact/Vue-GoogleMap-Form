import { shallowMount } from '@vue/test-utils'
import SideBar from '@/src/component/SideBar.vue'


describe('Header.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(SideBar, {
      propsData: {
        title: 'Vue Project'
      }
    })

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('Header')

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Vue Project')
  })
})