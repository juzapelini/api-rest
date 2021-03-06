'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

//exemplo: Design patters 

exports.get = async() => {
    var res = await Customer.find();
    return res;
};

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
};

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
};

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
};



