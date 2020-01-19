'use strict';

const config = require('../config');
const sendGrid = require('sendgrid')(config.sendGridKey);

exports.send = async (to, subject, body) => {
    sendGrid.send({
        to: to,
        from: 'hello@balta.io',
        subject: subject,
        html: body
    });
}
