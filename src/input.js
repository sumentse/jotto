import React, {Component} from 'react';
import {connect} from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props){
    super(props);
    this.inputBox = React.createRef();

  }

  submitGuessWord(evt){
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if(guessedWord && guessedWord.length > 0){
      this.props.guessWord(guessedWord);
    }
  }

  render(){
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input 
          data-test="input-box"
          ref={this.inputBox}
          className="mb-2 mx-sm-3"
          id="word-guess"
          placeholder="enter guess"
          type="text"/>
          <button type="submit" onClick={(e)=>this.submitGuessWord(e)} data-test="submit-button" className="btn btn-primary mb-2">
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

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);