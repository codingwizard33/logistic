import { createOrderService } from "../services/createOrderService.js";

const createOrderController = async (req, res) => {
  const response = await createOrderService(req);

  return res.status(response.status).json(response.message);
};

export { createOrderController };