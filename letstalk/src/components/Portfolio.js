import React ,{ Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import RenderInput from './RenderInput';
import validate from './validate';


class Portfolio extends Component{    
    render(){  
    const { handleSubmit, previousPage,pristine,submitting} = this.props
       return(
        <form onSubmit={handleSubmit}>
            <div className="portfolio">
            <div className="headings"><h4>3. Portfolio</h4> </div>
                <div>
                    <p>Prove thet you are next IBM'S greatest designer by showing us who you are.What you have done.How you think. Tell us your story</p>
                    <Field
                        name='Link'
                        type='link'
                        lable='PortfolioLink'
                        component = {RenderInput}
                        />
                    <Field 
                        component='textarea'
                        name='anythingElse'                                            
                        placeholder="Anything else?(another link,availability,etc.)?" />
                   
                </div>
        <div className='btn-grp'>    
        <button type="button" className='previous-button'  onClick={previousPage}>
          Previous
        </button>
        <button className='next-button' type="submit" disabled={pristine || submitting}>
            Submit
        </button>
        </div>         
        </div>
        </form>
        );
    }
    }


export default reduxForm({
        form: 'LetsTalkForm',
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        validate
})(Portfolio);
