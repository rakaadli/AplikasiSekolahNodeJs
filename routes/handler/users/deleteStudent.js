const { User } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
  
    const user = await User.findByPk(id, {
      attributes: ['id', 'first_name','last_name', 'email', 'gender','birth_date']
    });
  
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found'
      });
    }else{
      await User.destroy({
        where: { id: id }
      })
    }

    const sqlOPtions ={
      attributes: ['id', 'first_name','last_name', 'email', 'gender','birth_date']
    }
    
    const newUsers = await User.findAll(sqlOPtions);
  
    return res.json({
      status: `delete ${id} success`,
      data: newUsers
    });
  }