const indexController = async (req, res) => {
  return res.json({ message: 'The logistic app started.' });
}

export { indexController };