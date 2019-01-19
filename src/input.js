import React, {Component} from 'react';
import {connect} from 'react-redux';
import { guessWord } from './actions';

class Input extends Component {
  render(){
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input 
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          placeholder="enter guess"
          type="text"/>
          <button type="submit" data-test="submit-button" className="btn btn-primary mb-2">
            Submit
          </button>
      </form>
    );

    return (
    <div data-test="component-input">
      {content}
    </div>)
  }
}

const mapStateToProps = ({success}) => {

  return {success};

}

export default connect(mapStateToProps, {guessWord})(Input);