import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "HelloWorld",
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template: " <HelloWorld />",
});

export const Primary = Template.bind({});
