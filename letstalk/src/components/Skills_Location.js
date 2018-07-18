import React,{Component} from 'react';
// import { NavLink} from 'react-router-dom';
import { Field,reduxForm ,getFormSyncErrors } from 'redux-form';
import { connect} from 'react-redux';

import validate from './validate';
import CheckboxGroup from './CheckboxGroup';

const experienceOptions = [
    {label: 'Visual Design', value: 'Visual Design'},
    {label: 'UX Design', value: 'UX Design'},
    {label: 'Frontend-dev', value: 'Frontend-dev'}
  ];
const locationOptions =[
    {label: 'Austin, Texas', value: 'Austin, Texas'},
    {label: 'New York,New York', value: 'New York,New York'},
    {label: 'Toronto, Canada', value: 'Toronto, Canada'},
    {label: 'Shanghai, China', value: 'Shanghai, China'},
    {label: 'Dublin, Ireland', value: 'Dublin, Ireland'},
    {label: 'Hursley, United Kingdom  some where else', value: 'Hursley, United Kingdom'},
    {label: 'Boeblingen, Germany', value: 'Boeblingen, Germany'},
    {label: 'some where else', value: 'some where else'},
]
class SkillsLocation extends Component{
    render(){
        // console.log(this.props.SkillsLocationFormError)
        const { handleSubmit, previousPage } = this.props
        return(
           <form onSubmit={handleSubmit}>           
                <div className="skills-location">
                    <div className="headings">
                        <h4>2. Skills and location</h4>
                    </div>
                    <h4>which is your primary design decipline?*</h4>
                    <div>
                    <div className="radio">
                        <div>
                        <Field  id="btn1" 
                                component="input"
                                value = "Design Research"
                                type="radio" name="Decipline" 
                        />

                                <label htmlFor="btn1" className="radio" >Design Research </label>
                        </div>
                        <div>
                        <Field  id="btn2" 
                                value = "Visual Design" 
                                component="input"
                                type="radio" name="Decipline" 
                        /> 
                        <label htmlFor="btn2" className="radio">Visual Design</label>
                        </div>
                        <div>
                        <Field  id="btn3" 
                                value = "UX Design"  
                                type="radio" 
                                component="input"
                                name="Decipline" 
                            /> 
                        <label htmlFor="btn3" className="radio">UX Design</label>
                        </div>
                        <div>
                        <Field  id="btn4" 
                                value = "Front-end-Dev" 
                                component="input" 
                                type="radio" name="Decipline" 
                         />
                        <label htmlFor="btn4" className="radio"> Front-end-Dev</label>
                        </div>
                    </div>
                    <div style={{ color: 'red' }}>
				    {this.props.SkillsLocationFormError.Decipline} 
                    </div>  
                     
                    </div>                 
                    <div className="check-box" >
                        <div>
                        <div className="left">
                            <h4>Do you have experience with any other deceplines?*</h4>
                            <CheckboxGroup name="Experience" options={experienceOptions} className="checkbox" />
                            <div style={{ color: 'red' }}>
                                {this.props.SkillsLocationFormError.Experience}
                            </div>
                        </div>                        
                        </div>                        
                        <div className="right">
                            <h4>Where are you interested in working?*</h4>
                            <p>you must leagally authorized to work without visa and sponsership in the region you chosen</p>
                            <CheckboxGroup name="Location" options={locationOptions} className="checkbox" />
                            <div style={{ color: 'red' }}>
                                {this.props.SkillsLocationFormError.Location}
                            </div>
                        </div>
                    </div>
                </div>
        <div className='btn-grp'>                
        <button type="button" className="previous-button" onClick= {previousPage}>
          Previous
        </button>
        <button type="submit" className="next-button">
          Next
        </button>
        </div>
       </form>
        )   
}
}

const mapStateToProps =(state)=>{
    
    return{
        initialvalues:state,
        SkillsLocationFormError: getFormSyncErrors('LetsTalkForm')(state)
    }
}
export default connect(mapStateToProps)(reduxForm({
    form: 'LetsTalkForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SkillsLocation));

