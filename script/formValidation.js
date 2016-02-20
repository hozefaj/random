/*jslint white: true */
(function(){
    'use strict';
	var globalValidation = {

		validateName : function (elemValue){
			return (/^[A-Za-z0-9 ]{3,20}$/.test(elemValue));
		},

		validateEmail : function (elemValue){
			return (/^[\w\._]+@[a-zA-Z-]+\.?[a-zA-Z-]{1,}\.[a-zA-Z-]{2,}$/.test(elemValue));
		},

		clearFormErrors : function(frmObject){
			var frmErrorObjects = frmObject.getElementsByClassName('errorMsg'),
                count=0;
		
			for (count; count < frmErrorObjects.length; count++){
				frmErrorObjects[count].style.display = "none";
			}
		},

		showFormErrors : function(elemObject){
			elemObject.parentNode.getElementsByClassName('errorMsg')[0].style.display="block";
		}
	};

	var validateContactForm = {

		doValidation : function(event){
			
			/* clear all error messages in form */
			globalValidation.clearFormErrors(window.contactForm);

			var fName = document.getElementById("firstName"),
                lName = document.getElementById("lastName"),
                emailID = document.getElementById("emailID"),
				errFocusObject = [];

			if(!globalValidation.validateName(fName.value)){
				 globalValidation.showFormErrors(fName);
				 errFocusObject.push(fName);
			}
			if(!globalValidation.validateName(lName.value)){
				globalValidation.showFormErrors(lName);
				errFocusObject.push(lName);
			}
			if(!globalValidation.validateEmail(emailID.value)){
				globalValidation.showFormErrors(emailID);
				errFocusObject.push(emailID);
			}

			/* Prevent Form Submission If any errors */
			if(errFocusObject.length > 0){
				/* Focussing First Error Object */
				errFocusObject[0].focus();
				event.preventDefault();
			}
		},

		init : function(){
			// add event listener to submit button
			var frmContact = document.getElementById("contactForm");
			frmContact.addEventListener("submit", validateContactForm.doValidation);
		}
	};
	validateContactForm.init();	
}());
