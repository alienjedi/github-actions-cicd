/*
 * Simple calculator for testing ci/cd with github actions
 *
 */

const express = require('express');
const request = require('request');
const http = require('http');
const path = require('path');
const app = express();

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
server.on('listening', () => console.log(`Server listening on port ${process.env.PORT || '3000'}`));

const add = function(num1, num2, ...num3) {
    let total = num1+num2;
    num3.forEach((val, idx, arr) => {
        total+=val;
    });
    return total;
};

const sub = function(num1, num2, ...num3) {
    let res = num1-num2;
    num3.forEach((val, idx, arr) => {
        res-=val;
    });
    return res;
};

const fetchData = function() {
    request(`https://api.deywuro.com/bulksms/credit_bal.php?username=${process.env.DEYWURO_USER}&password=${process.env.DEYWURO_PASSWORD}`, (error, response, body) => {
        if (error) return error;

        if (response.statusCode === 200) {
            try {

                message = JSON.parse(response.body);
                return message;

            } catch (error) {

                return "Failed to parse response";
            }

        }
    });
};


module.exports = { add, sub, fetchData };
