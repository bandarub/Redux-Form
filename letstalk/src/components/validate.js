const validate = values =>{
    
    const errors = {}
    if(!/[a-zA-Z]+[\s|.][a-zA-Z]+$/.test(values.FullName)){
        errors.FullName= 'Please enter full name(firstname lastname)'
    }
    if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(values.Email)){
     errors.Email= 'Required'
     }
     if(values.EmailAgain!==values.Email){
         errors.EmailAgain= 'emails should match'
     }
     if(!/^(0{2}|\+)[0-9]{3}[0-9]{9}/.test(values.PhoneNumber)){
        errors.PhoneNumber= 'Enter phone number in international format'
    }
    if(!/[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/.test(values.Address)){
        errors.Address= 'Plaese enter valid address'
    }
    if(!values.City){
        errors.City= 'Required'
    }
    if(!values.State){
        errors.State= 'Required'
    }
    if(!values.Country){
        errors.Country= 'Required'
    }
    if(!/^[0-9]{3,6}$/.test(values.PostalCode)){
        errors.PostalCode= 'Enter valid Postal Code'
    }
    if(!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(values.Link)){
        errors.Link='Enter Valid link'
    }
    if(values.Decipline=== undefined) {
        errors.Decipline='You must select atleast one decipline'
    }
    if(values.Experience===undefined){
   
        errors.Experience='Please select at least one experience field'
    }
    if(values.Location===undefined){    
            errors.Location='Please select at least one location'
        }

     return errors;
 }

 export default validate;