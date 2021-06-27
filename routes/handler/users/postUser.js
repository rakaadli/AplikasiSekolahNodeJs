const { Student } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const schema = {
        first_name: 'string|empty:false',
        last_name: 'string|empty:false',
        email: 'email|empty:false',
        gender: 'string',
        birth_date: 'string|empty:false',
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json({
        status: 'error',
        message: validate
        });
    }

    const id = req.params.id;
    const studentUser = await Student.findByPk(id);

    if (!studentUser) {
        return res.status(404).json({
          status: 'error',
          message: 'user not found'
        });
      }

      const email = req.body.email;
      if (email) {
        const checkEmail = await Student.findOne({
          where: { email }
        });
    
        if (checkEmail && email !== studentUser.email) {
          return res.status(409).json({
            status: 'error',
            message: 'email already exist'
          })
        }
      }
    
      await Student.update({
        email,
        first_name,
        last_name,
        gender,
        birth_date
      });

      return res.json({
        status: 'success',
        data: {
          id: studentUser.id,
          email,
          first_name,
          last_name,
          gender,
          birth_date
        }
      });

}