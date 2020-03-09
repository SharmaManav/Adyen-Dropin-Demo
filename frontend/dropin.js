const originKey = 'pub.v2.8115650120946270.aHR0cDovL2xvY2FsaG9zdDozMDAwL3BheW1lbnRNZXRob2Rz.IOdMa84Pi-SPVYeTMk-5nXZUVuyczswhlGSHJ6wdeCg'

//grabbing payment methods available and creating an instance of AdyenCheckout
grabPaymentMethods().then(response => {
	const checkout = new AdyenCheckout({
		locale: "en-US",
		environment: 'test',
		originKey : originKey,
		paymentMethodsResponse : response
	});
//creating instance of dropin and handling the submit by calling makepayment with state.data
	const dropin = checkout
	.create('dropin', {
		onSubmit: (state, component) => {
			makePayment(state.data);
		}
	})
	.mount('#dropin');
})
