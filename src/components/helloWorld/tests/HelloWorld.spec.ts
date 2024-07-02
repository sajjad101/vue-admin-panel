import { describe, it, expect } from 'vitest'
import i18n from '@/plugins/i18n'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { getByTestId } from 'test/vitest/setup-file'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'سلام' }
    })
    const vitejsLink = getByTestId('vitejsLink', wrapper)
    expect(getByTestId('msgTest', wrapper).text()).toBe(i18n.global.t('test.hello'))
    expect(vitejsLink.attributes().href).toBe('https://vitejs.dev/')
  })
})
