import React,{Component} from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import PersonalInformation from './PersonalInfo';
import SkillsLocation from './Skills_Location'; 
import Portfolio from './Portfolio';
import Home from './Home';
import { applyMiddleware } from '../../node_modules/redux';
import ShowResults from './ShowResults';

class Form extends Component {
    constructor(props) {
      super(props)
      this.nextPage = this.nextPage.bind(this)
      this.previousPage = this.previousPage.bind(this)
      this.state = {
        page: 1
      }
    }
    nextPage() {
      this.setState({ page: this.state.page + 1 })
    }
  
    previousPage() {
      this.setState({ page: this.state.page - 1 })
    }
  
    render() {
      
    //   const { handleSubmit } = this.props
      const { page } = this.state
      return (
        <div>
          {page === 1 && <Home onSubmit={this.nextPage}/>}
          {page === 2 && <PersonalInformation previousPage={this.previousPage} onSubmit={this.nextPage} />}
          {page === 3 && (
            <SkillsLocation
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 4 && (
            <Portfolio
              previousPage={this.previousPage}
              onSubmit={ShowResults}/>
          )}
        </div>
      )
    }
  }
  Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
export default reduxForm({
    form: 'LetsTalkForm',   
})(Form);

// export default Form;