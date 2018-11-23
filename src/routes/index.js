var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var moment = require('moment')
var path = require('path')
var bodyParser = require('body-parser')


router.post('/save', function (req, res, next) {
    console.log('start to save...')
    console.log('================')
    console.log(req.query)
    res.send({
        status: 200
    })
})

router.get('/test', function (req, res, next) {
    res.send({
        status: 200
    })
})

module.exports = router