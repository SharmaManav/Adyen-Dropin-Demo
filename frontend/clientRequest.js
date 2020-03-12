// Body for /paymentMethods

const paymentMethodsBody = {
	shopperReference: 'manav test',
	reference: 'manav test',
	countryCode: 'US',
	amount: {
		value: 2000,
		currency: 'USD'
	}
};

// Body for /payments

const paymentBody = {
	shopperReference: 'manav test',
	reference: 'manav test',
	countryCode: 'US',
	channel: 'Web',
	returnUrl: 'http://localhost:3000/thanks',
	amount: {
		value: 2000,
		currency: 'USD'
	}
};

//POST request through fetch to our endpoints that will query Adyen's API

const grabPaymentMethods = () =>
	fetch('http://localhost:3000/paymentMethods', {
		method: 'POST',
		headers: {
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
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(paymentRequest)
	}).then(response => response.json())
	  .then(answer => {
	  	if ((JSON.stringify(answer.resultCode)) != JSON.stringify("Authorised")){
	  		window.location.href = "/unsuccessful";
	  	} else {
	  		window.location.href = "/success";
	  	}
	  	return answer;
	  }).catch(console.error);
};


function callServer(url, data) {
  return fetch('http://localhost:3000/payments', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
