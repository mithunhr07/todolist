module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  const { check, validationResult } = require('express-validator');

app.post('/tasks', [
check('Fname').isLength({ min: 5 }).isEmpty().not().trim().withMessage("Fname required"),
check('Lname').isLength({ min: 5 }).isEmpty().not().trim().withMessage("Lname required"),
check('Email').isEmail().isEmpty().not().trim().withMessage("email required")], 
todoList.create_a_task,(req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
}

User.create({
  Fname: req.body.Fname,
  Lname: req.body.Lname,
  Email: req.body.Email
}).then(user => res.json(user));
});
  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
