const Employee = require('../models/employee');

/**
 * Vo kontrolerite ja cuvame biznis logikata.
 */

module.exports = {
  getAll: async (req, res) => {
    const employees = await Employee.find();

    res.render('employees/index', { employees: employees });
  },
  getCreate: (req, res) => {
    res.render('employees/create');
  },
  getUpdate: async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render('employees/update', { employee: employee })
  },
  postUpdate: async (req,res)=>{
    await Employee.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/employees');
  },
  postCreate: async (req, res) => {
    try {
      req.body.email += '@north-company-admin.com';
      await Employee.create(req.body, req.body.position.value);
      res.redirect('/employees');
    } catch (error) {
      res.render('employees/create', { error: error.message })
    }
  },
  delete: async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send('ok');
  }
}
