const express =require('express');
const app= express();
const port =  3000;
app.use(express.json());
require('./migration')(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Test Demo Project.." });
});

// router
require('./routes')(app);
app.listen(port, () => console.log(`Listen on port ${port}`)) 
module.exports = app;