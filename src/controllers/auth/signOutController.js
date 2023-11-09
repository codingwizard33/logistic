const sginOutController = async (req, res) => {
  await res.setHeader('Authorization', '');

  return res.status(200).json('Successfully signed out.');
};

export { sginOutController };