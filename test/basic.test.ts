import { describe, it, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { fileURLToPath } from "node:url";
import { setup, $fetch } from "@nuxt/test-utils";
import NuxtRating from "./src/runtime/components/NuxtRating.vue";
import type { Props } from "./src/runtime/types";


describe("rendering nuxtRating component", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url))
  });

  it("rendering nuxtRating component", async () => {
    const html = await $fetch("/");
    expect(html).toContain('class="average-rating"');
  });
});

const testProps = (propsData: Partial<Props>) => {
  const wrapper = mount(NuxtRating, { propsData });

  expect(wrapper.props().ratingCount).toBe(propsData.ratingCount);
  expect(wrapper.props().ratingValue).toBe(propsData.ratingValue);
  expect(wrapper.props().ratingSize).toBe(propsData.ratingSize);
  expect(wrapper.props().activeColor).toBe(propsData.activeColor);
  expect(wrapper.props().inactiveColor).toBe(propsData.inactiveColor);
  expect(wrapper.props().ratingContent).toBe(propsData.ratingContent);
  expect(wrapper.props().readOnly).toBe(propsData.readOnly);
};

const testEvent = async (event: string, trigger: string) => {
  const wrapper = mount(NuxtRating, {
    props: {
      readOnly: false,
    },
  });

  await wrapper.find(".average-rating").trigger(trigger);

  expect(wrapper.emitted()).toHaveProperty(event);
  expect(wrapper.emitted()[event]).toBeTruthy();

  const emitted = wrapper.emitted();
  expect(emitted).toHaveProperty(event);

  const ratingValue = wrapper.emitted()[event][0];

  expect(ratingValue).toEqual([0]);
};

test("testing props", () => {
  const propsData = {
    ratingCount: 10,
    ratingSize: "40px",
    activeColor: "red",
    inactiveColor: "gray",
    ratingValue: 5,
    ratingContent: "❤",
    readOnly: false,
  };

  testProps(propsData);
});

it('should emit "ratingSelected" event when clicked', async () => {
  await testEvent("ratingSelected", "click");
});

it('should emit "ratingHovered" event when mouse is moved', async () => {
  await testEvent("ratingHovered", "mousemove");
});
