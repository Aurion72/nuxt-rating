import { describe, it, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'
import NuxtRating from '../src/runtime/components/NuxtRating.vue'
import type { Props } from '../src/runtime/types'

describe('rendering nuxtRating component', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('rendering nuxtRating component', async () => {
    const html = await $fetch('/')
    expect(html).toContain('class="average-rating"')
  })
})

const testProps = (propsData: Partial<Props>) => {
  const wrapper = mount(NuxtRating, { propsData })

  expect(wrapper.props().ratingCount).toBe(propsData.ratingCount)
  expect(wrapper.props().ratingValue).toBe(propsData.ratingValue)
  expect(wrapper.props().ratingSize).toBe(propsData.ratingSize)
  expect(wrapper.props().activeColor).toBe(propsData.activeColor)
  expect(wrapper.props().inactiveColor).toBe(propsData.inactiveColor)
  expect(wrapper.props().ratingContent).toBe(propsData.ratingContent)
  expect(wrapper.props().readOnly).toBe(propsData.readOnly)
}

test('testing props', () => {
  const propsData = {
    ratingCount: 10,
    ratingSize: '40px',
    activeColor: 'red',
    inactiveColor: 'gray',
    ratingValue: 5,
    ratingContent: '❤',
    readOnly: false,
  }

  testProps(propsData)
})


const testEvent = async (event: string, trigger: string, clientX:number) => {
  const wrapper = mount(NuxtRating, {
    props: {
      readOnly: false,
    },
  })

  Object.defineProperty(wrapper.find('.average-rating').element, 'clientWidth', { value: 100 })

  const mockEvent = new MouseEvent(trigger, {
    clientX: clientX || 0,
  })

  wrapper.find('.average-rating').element.dispatchEvent(mockEvent)
  await wrapper.vm.$nextTick()

  expect(wrapper.exists()).toBe(true)
  expect(wrapper.emitted()).toHaveProperty(event)
  expect(wrapper.emitted()[event]).toBeTruthy()

  const emitted = wrapper.emitted()[event][0] as Record<string, unknown[]>
  const ratingValue = emitted[0]

  expect(typeof ratingValue).toBe('number')
  expect(ratingValue).toBeGreaterThanOrEqual(0)
  expect(ratingValue).toBeLessThanOrEqual(5)
}

it('should emit "ratingSelected" event when clicked', async () => {
  await testEvent('ratingSelected', 'click', 50)
})

it('should emit "ratingHovered" event when mouse is moved', async () => {
  await testEvent('ratingHovered', 'mousemove', 50)
})
