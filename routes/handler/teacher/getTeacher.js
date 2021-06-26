const { Teacher } = require('../../../models');

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await Teacher.findByPk(id, {
    attributes: ['id', 'first_name','last_name', 'email', 'gender', 'createdAt','updatedAt']
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found'
    });
  }

  return res.json({
    status: 'success',
    data: user
  });
}