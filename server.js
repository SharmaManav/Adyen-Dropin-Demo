const express = require('express');
const fetch = require('node-fetch');
let path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const getPaymentMethods = require('./apis/paymentMethods')
const sendPayment = require('./apis/payments')

module.exports = (() => {
	app.use(express.json());

	app.use(express.static(path.resolve(__dirname + '/frontend')));

	//paymentMethods and payments endpoints act as proxy servers to query Adyen's API since you'll run into CORS error with client side API calls

	app.all('/paymentMethods', (req, res) =>
		getPaymentMethods(res, req.body));

	app.all('/payments', (req, res) =>
		sendPayment(res, req.body));

	app.listen(port, () => {
		console.log(`Starting server at ${port}`);
	});
})();