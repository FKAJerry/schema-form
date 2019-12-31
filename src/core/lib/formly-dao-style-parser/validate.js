import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

function createAjvInstance() {
  return new Ajv({
    errorDataPath: 'property',
    allErrors: true,
    multipleOfPrecision: 8,
    schemaId: 'auto',
    unknownFormats: 'ignore',
  });
}

export default function validateFormData(formData, schema) {
  const ajv = createAjvInstance();
  ajvErrors(ajv);
  try {
    ajv.validate(schema, formData);
  } catch (err) {
    console.log(err);
  }

  return ajv;
}
