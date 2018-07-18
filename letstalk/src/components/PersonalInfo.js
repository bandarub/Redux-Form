import React,{ Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import validate from './validate';
import RenderInput from './RenderInput';

class   PersonalInformation extends Component{    
    render(){      
        // const initialvalues = this.props.initialvalues;
        const { handleSubmit , previousPage} = this.props; 
          
    return(
            <form onSubmit={handleSubmit} >          
            <div className="PersonalInfo">
            <div className="headings"> <h4>1. Personal information</h4></div>
            <div className="personal-container1">               
                <div className="name">             
                    <Field  name="FullName" 
                            label="Full Name" 
                            component={RenderInput} />                   
                    <Field  name="Email" 
                            label="Email" 
                            component={RenderInput} />
                                          
                    <Field  label='email again' 
                            name='EmailAgain'
                            component={RenderInput}
                            type="email" 
                            id="email1"/>
                                                       
                </div> 
                <div className="phone-number">
                    <Field  label='Phone Number' 
                            name='PhoneNumber'
                            component={RenderInput}
                            id="phone"/>
                                               
                </div>
            </div>

            <div className="personal-container2">
                <div className="adderess">
                    <div id="adderess" >
                        <Field  label='Address' 
                            name='Address'
                            component={RenderInput}/>                                             
                    </div> 
                    <div  className="place" >                
                                                  
                            <Field
                                label='City'
                                component={RenderInput}
                                name='City'
                                id="city"/>                                                                       
                        
                                                   
                            <Field 
                                value='State'
                                label='State'
                                name='State'
                                component={RenderInput}                              
                                type="text"id="state" />              
                            <Field
                                value='Country'
                                component={RenderInput}
                                name='Country' 
                                label='Country'                                
                                type="text" id="country" />                                          
                            <Field
                                value='postalcode'
                                component={RenderInput}
                                name='PostalCode'
                                label='Postalcode'                                
                                type="number" id="zipcode" />
                                           
                                        
                    </div>
                    <Field type="text"  label='How Hear' component="input" name='HowHear'   placeholder=" How did you hear about us"/>
            </div>
        </div>
        <div className='btn-grp'>
        <button type="button" className="previous-button" onClick={previousPage}>
          Previous
        </button>
        <button className="next-button" type="submit"  >
          Next
        </button>
        </div>
    </div>       
    </form>);
    }  
}
export default reduxForm({
    form: 'LetsTalkForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PersonalInformation);