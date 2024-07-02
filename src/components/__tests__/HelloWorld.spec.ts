import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { getByTestId } from 'test/vitest/setup-file'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(getByTestId('msgTest', wrapper).text()).toBe('Hello Vitest')
  })
})
