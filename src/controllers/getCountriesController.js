import Country from "../models/Country.js";

const getCountriesController = async (req, res) => {
  try {
    const response = await Country.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getCountriesController };