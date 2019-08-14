import { loadFields } from './parse';

export function fromJSONSchema(schema) {
  return loadFields(schema);
}

export function getInitialState(schema) {}
