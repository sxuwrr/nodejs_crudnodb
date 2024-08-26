let users = [];

// Get all users
export const getUsers = (req, res) => {
  res.render('index', { users });
};

// Get a single user for editing
export const getUser = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  res.render('edit-user', { user });
};

// Add a new user
export const addUser = (req, res) => {
  const newUser = {
    id: `${Date.now()}`,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.redirect('/users');
};

// Edit a user
export const editUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  users[index] = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
  };
  res.redirect('/users');
};

// Delete a user
export const deleteUser = (req, res) => {
  users = users.filter((u) => u.id !== req.params.id);
  res.redirect('/users');
};
