import Order from "../models/Order.js";
import { orderValidation } from "../validations/orderValidation.js";

const createOrderService = async (req) => {
  const { error } = orderValidation.validate(req.body);
  if (error)
    return {
      status: 500,
      message: 'Internal server error.'
    };

  try {
    const order = await Order.create(req.body);
    await order.updateOne({ file: req.file.path });

    return {
      status: 200,
      message: 'Success!'
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message
    };
  }
};

export { createOrderService };