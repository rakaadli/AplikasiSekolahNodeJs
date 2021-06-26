const { User } = require('../../../models');

module.exports = async (req, res) => {

  const userIds = req.query.user_ids || [];

  const sqlOPtions ={
    attributes: ['id', 'firstName','lastName', 'email', 'role','birthDate', 'userName','phoneNumber','locked','enabled','avatar']
  }

  if (userIds.length) {
    sqlOPtions.where = {
      id: userIds
    }
  }

  const users = await User.findAll(sqlOPtions);

  return res.json({
    status: 'success', 
    data: users
  });
}