const originKey = 'pub.v2.8115650120946270.aHR0cDovL2xvY2FsaG9zdDozMDAw.KlMY38Xu1nZtfysivH8kCK8qfh06rj-LY73wXnlWLsc'

//grabbing payment methods available and creating an instance of AdyenCheckout
grabPaymentMethods().then(response => {
	const checkout = new AdyenCheckout({
		locale: "en-US",
		environment: 'test',
		originKey : originKey,
		paymentMethodsResponse : response,
		removePaymentMethods : ['paypal']
	});
//creating instance of dropin and handling the submit by calling makepayment with state.data
	const dropin = checkout
	.create('dropin', {
		paymentMethodsConfiguration: {
			card: {
				hasHolderName: true,
				holderNameRequired: true,
				name: 'Credit/Debit Card'
			}
		},
		onSubmit: (state, dropin) => {
			if (state.isValid){
				makePayment(state.data)
			}
		}

	})
	.mount('#dropin');

})
