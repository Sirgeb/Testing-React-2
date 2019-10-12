import React from 'react';
import { connect } from 'react-redux';

import GuessedWords from './components/GuessedWords/GuessedWord';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';

import { getSecretWord } from './redux/actions/index';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { getSecretWord })(App);
