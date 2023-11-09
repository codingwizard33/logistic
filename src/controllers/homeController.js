const homeController = async (req, res) => {
  return res.status(200).json({ message: 'Signed In' });
};

export { homeController };