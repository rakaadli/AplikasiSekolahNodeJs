const { Subject } = require('../../../models');

module.exports = async (req, res) => {
  const id = req.params.id;

  const user = await Subject.findByPk(id, {
    attributes: ['id', 'subject_name']
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