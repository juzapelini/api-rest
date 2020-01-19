'use strict';

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Customer = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'O Slug é obrigatório'],
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});


mongoose.model('Customer', Customer);