import HTMLInput from './HTMLInput.vue';

export default (type = 'text') => {
  return {
    functional: true,
    render(h, context) {
      return h(HTMLInput, {
        ...context.data,
        props: {
          ...context.data.props,
          type,
        },
      }, context.children);
    },
  };
};
