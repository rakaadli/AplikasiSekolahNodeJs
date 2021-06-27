const { Student } = require('../../../models');

module.exports = async (req, res) => {
  const email = req.params.id;

  const user = await Student.findOne({where:{email:email}},{
    attributes: ['id', 'first_name','last_name', 'email', 'gender','birth_date', 'createdAt','updatedAt']
  })

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