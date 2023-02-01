/*import { mount } from "@vue/test-utils";
import Footer from "..components/footer.vue";

describe("Footer.vue", () => {
  it("Mesajda vans yazı içeriği bulunmalı", () => {
    const wrapper = mount(Footer, {
      props: {
        msg: "Vans",
      },
    });
    expect(wrapper.text()).toContain("Vans");
  });
});
