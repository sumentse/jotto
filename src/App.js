import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './input';

export class UnconnectedApp extends Component {
  
  componentDidMount(){
    //get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  const {
    success,
    secretWord,
    guessedWords
  } = state;

  return {
    success, secretWord, guessedWords
  };
};

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
