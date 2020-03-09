const { post } = require('request');
const apiUtil = require('./apiHelper');

module.exports = (res, request) => {
	const apiCall = apiUtil('/payments', request);

	post(apiCall, (error, response, body) =>  {
		console.error('error:', error);
		console.log('statusCode:', response && response.statusCode)
		console.log('body:', body);
		res.send(body)
	})	
}