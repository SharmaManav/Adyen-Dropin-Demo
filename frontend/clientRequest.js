// Body for /paymentMethods

const paymentMethodsBody = {
	shopperReference: 'manav test',
	reference: 'manav test',
	countryCode: 'NL',
	amount: {
		value: 2000,
		currency: 'EUR'
	}
};

// Body for /payments

const paymentBody = {
	shopperReference: 'manav test',
	reference: 'manav test',
	countryCode: 'NL',
	channel: 'Web',
	returnUrl: 'http://localhost:3000',
	amount: {
		value: 2000,
		currency: 'EUR'
	}
};

//POST request through fetch to our endpoints that will query Adyen's API

const grabPaymentMethods = () =>
	fetch('http://localhost:3000/paymentMethods', {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(paymentMethodsBody)
	}).then(response => response.json())
	  .then(json => {
	  	return json;
	  }).catch(console.error);

//makePayment makes the actual payment request with the state.data that gets passed onSubmit from the dropin instance

const makePayment = (stateData) => {
    const paymentRequest = { ...paymentBody, ...stateData };

	fetch('http://localhost:3000/payments', {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(paymentRequest)
	}).then(response => response.json())
	  .then(json => {
	  	return json;
	  }).catch(console.error);
};
