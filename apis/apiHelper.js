require('dotenv').config();

const apiKey = process.env.API_KEY;
const merchAccount = process.env.MERCHANT_ACCOUNT;
const apiUrl = 'https://checkout-test.adyen.com/v51';

module.exports = (endpoint, request) => {
    const body = JSON.stringify({
        merchantAccount: 'TestAccountNY',
        ...request
    });

    return {
        body,
        url: `${apiUrl}/${endpoint}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey
        }
    };
};
