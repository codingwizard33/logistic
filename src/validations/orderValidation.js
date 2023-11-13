import joi from "joi";

const orderValidation = joi.object({
  tags: joi.array().items(joi.string()),
  acceptedDate: joi.date().required(),
  deliveryDate: joi.date().required(),
  collection: joi.object({
    company: joi.string().required(),
    constactPerson: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().required(),
    details: joi.string(),
    email: joi.string().email(),
    postCode: joi.string().required(),
    city: joi.string().required(),
    country: joi.string(),
    message: joi.string(),
  }).required(),
  delivery: joi.object({
    company: joi.string().required(),
    constactPerson: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().required(),
    details: joi.string(),
    email: joi.string().email(),
    postCode: joi.string().required(),
    city: joi.string().required(),
    country: joi.string(),
    message: joi.string(),
  }).required(),
  goods: joi.object({
    pcs: joi.number().required(),
    type: joi.string(),
    weight: joi.number().required(),
    length: joi.number(),
    width: joi.number(),
    height: joi.number(),
    volume: joi.number(),
    ldm: joi.string(),
    description: joi.string(),
  }).required(),
  incoterms: joi.object({
    code: joi.string(),
    contactPerson: joi.string(),
  }),
  costomRef: joi.object({
    docNumber: joi.string(),
  }),
  remarks: joi.string()
});

export { orderValidation };