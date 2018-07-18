import React,{Component} from 'react';
import {reduxForm } from 'redux-form';

class Home extends Component{
    render(){           
    const {handleSubmit}=this.props;
    return(<div className="home">
    <h1> Welcome to Form</h1>
    <form className="home" onSubmit={handleSubmit}>
    <button type='submit' className='start-button'>Start</button>
    </form>
    </div>)
} }
export default reduxForm({
    form: 'LetsTalkForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,    
})(Home);