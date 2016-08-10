export class ValitionService{
	static getValidatorsErrorMessage(validatorName: string, validatorValue?: any){
		let config = {
			'required': 'Required',
			'invalidName': "Invalid Firstname"
		};

		return config[validatorName];
	}

	static firstname(control){
		if(control.value.match(/^[a-zA-Z]+$/) )
			return null;
		else
			return{ "invalidName": true };
	}
}