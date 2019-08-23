import Ajv from 'ajv';

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

  try {
    ajv.validate(schema, formData);
  } catch (err) {
    console.log(err);
  }

  return ajv.errors;
}
