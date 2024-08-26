import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.redirect('/users');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
