
//FUNCIONANDOOOOOOOOOO

'use strict';

const callApiService = require('../services/callApi-service');

const http = require('http');

exports.get = async (req, res, next) => {
    callApiService.callApi(function(response){
        
        res.status(response.statusCode);
        res.json(response.body);
        res.end();
    })
    return;
};





