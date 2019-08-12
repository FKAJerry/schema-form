import { assign } from '../lib/object'

export default {
  functional: true,
  render (h, { data, props, slots }) {
    const { input, field, components } = data
    const { value, name = field.attrs.name } = props
    const inputData = assign({}, input.data)

    inputData.attrs.name = inputData.props.name = name
    inputData.attrs.value = inputData.props.value =
      typeof value === 'object' ? value[name] : value

    inputData.components = components

    return h('div', {}, [
      h(input.element.component, inputData, slots().default),
      h('a', data.removeItemButton)
    ])
  }
}
