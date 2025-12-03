const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('Deu certo!');
});

// add job via post
router.post('/add', (req, res) => {

    let { title, description, company, salary, email, new_job } = req.body;

    // insert
    Job.create({
        title,
        description,
        company,
        salary,
        email,
        new_job
    }).then(() => {
        res.redirect('/');
    }).catch((err) => {
        console.log('Erro ao inserir vaga: ' + err);

    })

});

module.exports = router;