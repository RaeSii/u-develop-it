const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

//   app.get('/', (req, res) => {
//       res.json({
//           message: 'Hello, Mamani'
//       });
//   });
  db.query(`SELECT * FROM candidates`, (err, rows) => {
      console.log(rows);
  });
  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
