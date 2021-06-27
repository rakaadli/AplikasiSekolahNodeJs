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

    const isEmailExists = await Student.findOne({
        where: { email: req.body.email }
    });

    if (isEmailExists) {
        return res.status(409).json({
          status: 'error',
          message: 'email already exist'
        });
    }

    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birth_date: req.body.birth_date,
    };
    
    const createdUser = await Student.create(data);

    return res.json({
        status: 'success',
        data: {
          id: createdUser.id
        }
      });
}