'use strict';

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema({
    title: {
        type: String,
        required: true,
        trim: true //remove espaço antes e depois do texto
    },
    slug: {
        type: String,
        required: [true, 'O Slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
    // image: {
    //     type: String,
    //     required: true,
    //     trim: true 
    // }
});


//module.exports = mongoose.model('Product', Product);
mongoose.model('Product', Product);