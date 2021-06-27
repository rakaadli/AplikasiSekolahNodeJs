const { Subject } = require('../../../models');

module.exports = async (req, res) => {

    const allIds = req.query.user_ids || [];

    const sqlOPtions ={
        attributes:  ['id', 'subject_name']
    }

    if (allIds.length) {
        sqlOPtions.where = {
          id: allIds
        }
      }

    const allSubject = await Subject.findAll(sqlOPtions);

    return res.json({
        status: 'success', 
        data: allSubject
      });

}