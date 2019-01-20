import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props)=>{

  let contents = '';

  if(props.guessedWords.length === 0){
    contents = (
      <div data-test="component-instruction">
        <span>Try to guess the secret word!</span>
      </div>
    );  
  } else {
    const guessedWordRows = props.guessedWords.map((item, index)=>{
      return (
        <tr key={index} data-test="guessed-word">
          <td>{item.guessedWord}</td>
          <td>{item.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <h2>Guessed Words</h2>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>
                <span>Guess</span>
              </th>
              <th>
                <span>Matching Letters</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {guessedWordRows}
          </tbody>
        </table>
        <div>Total number of guesses: <span data-test="total-guess">{props.guessedWords.length}</span></div>
      </div>
    );
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;