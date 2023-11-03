const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

const conn = mysql.createConnection({
    host: 'www.db4free.net',     // Укажите хост базы данных
    user: 'meirzhan06', // Укажите имя пользователя базы данных
    password: '06miko06miko06', // Укажите пароль пользователя
    database: 'react_todolist' // Укажите имя базы данных
  });
  
  // Установка соединения
  conn.connect(err => {
    if (err) {
      console.error('Ошибка подключения к базе данных:', err);
      return;
    }
    else{
        console.log('ok')
    }
  });

app.get('/tasks', (req, res) => {
    const query = "SELECT * FROM Tasks WHERE user_id = 1";
  
    conn.query(query, (err, result, fields) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
            return;
        }
        res.json(result);
    });
});




const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});