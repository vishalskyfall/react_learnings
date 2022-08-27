const express = require('express');
const cors = require('cors');
const app = express();
const { Users } = require('./users');
app.use(cors());

app.get('/', (req, res) => {
    const { query } = req.query;
    const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
        return data.filter(
            (item) => keys.some((key) => item[key].toLowerCase().includes(query))
            //some will do same job as || means or
            // (user) => user.first_name.toLowerCase().includes(query)
        );
    };

    // for mongodb no need to write above ones from keys
    //const users = User.find({$regex:query})
    res.json(search(Users).splice(0, 10))
});

app.listen(5000, () => console.log("API for search is running..."));