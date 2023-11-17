import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ScalarIcon from './ScalarIcon.vue'

describe('ScalarButton', () => {
  it('renders properly', async () => {
    const wrapper = mount(ScalarIcon, { props: { name: 'Logo' } })

    // Wait for icon to load
    await flushPromises()

    expect(wrapper.html({ raw: true }))
      .toBe(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593 593" class="flow-icon" height="100%" width="100%">
    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" d="M347 0c6 0 12 5 12 12v134l94-95c5-5 13-5 17 0l72 72c4 4 5 12 0 16v1l-95 94h134c7 0 12 5 12 12v101c0 7-5 12-12 12H447l95 94c4 5 5 13 0 17l-72 72c-4 4-12 5-16 0h-1l-94-95v134c0 7-5 12-12 12H246c-7 0-12-5-12-12v-70c0-22 9-43 24-59l130-130c14-14 14-37 0-51L259 142a84 84 0 0 1-25-59V12c0-7 5-12 12-12h101ZM138 52h1l219 219c14 14 14 37 0 51L139 542c-4 5-12 5-17 0l-71-70c-4-5-5-12 0-17l95-96H12c-7 0-12-5-12-12V246c0-7 5-12 12-12h134l-95-94c-4-5-4-12 0-17l71-71c4-5 12-5 16 0Z"></path>
</svg>`)
  })
})
