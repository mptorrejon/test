export class ValidationService{
	static getValidatorsErrorMessage(validatorName: string, validatorValue?: any){
		let config = {
			'required': 'Required',
			'invalidFirstname': "Invalid Firstname",
			'invalidLastname': "Invalid Lastname",
			'invalidTitle': "Invalid Professional Title",
			'invalidLocation': 'Invalid Location',
			"invalidEmailAddress": "Invalid Email Address"
		};

		return config[validatorName];
	}
	//====================================================================
	//====================================================================
	// THERE MUST BE A WAY TO COMBINE THIS 3 FUNCTIONS INTO ONLY 1
	// TRY TO DO A SERVICE ON CLICK...
	static Firstname(control){
		return (control.value.match(/^[-,' ,a-zA-Z]+$/) )?null: { "invalidFirstname": true };
	}
	static Lastname(control){
		return (control.value.match(/^[-,' ,a-zA-Z]+$/) )?null: { "invalidLastname": true };
	}
	static Title(control){
		return (control.value.match(/^[-,' ,a-zA-Z]+$/) )?null: { "invalidTitle": true };
	}
	static Location(control){
		return (control.value.match(/^[-,' ,a-zA-Z]+$/) )?null: { "invalidLocation": true };
	}
	//====================================================================
	//====================================================================
	static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
}