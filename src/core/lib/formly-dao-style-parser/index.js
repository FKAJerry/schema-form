import { loadFields, parseDefaultObjectValue } from './parse';

export { default as validateFormData } from './validate';

export function fromJSONSchema(schema) {
  return loadFields(schema);
}

export function getInitialState(schema, fields) {
  return parseDefaultObjectValue(schema, fields);
}

export const getModel = getInitialState;

export const toFormly = fromJSONSchema;
