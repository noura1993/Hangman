import React from 'react';
import './English.css';


const loser = ['Loooooooser!', 'Tough luck!', 'Well .... you lost!', 'Better luck next time', '3 things happened here ... you were born, you decided to play this, and you lost' ];
const winner = ['Sweet ... we found Nemo!', 'You win!', 'Haloloyaaaaa!', 'Hakuna matata!', 'What a relief!', 'You rock!'];

class English extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessedLetters: [],
            counter: 10
        }

        this.convertToDash = this.convertToDash.bind(this);
        this.countDown = this.countDown.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.outOfGuesses = this.outOfGuesses.bind(this);
        this.winOrLose = this.winOrLose.bind(this);
        this.newGame = this.newGame.bind(this);
    }


    convertToDash() {
        let word = this.props.hiddenWord;
        let letters = this.state.guessedLetters;
        let result = '';

        for (let i = 0; i < word.length; i++) {
            if (letters.includes(word[i])) {
                result = result + word[i]
            } else if (word[i] === ' ') {
                result = result + ' ';
            } else {
                result = result + '-';
            }
        }

        if (this.outOfGuesses()) {
            result = word;
        }
        return result;
    }

    countDown() {
        let word = this.props.hiddenWord;
        let letters = this.state.guessedLetters;
        let counter = 10;

        for (let i = 0; i < letters.length; i++) {
            if (!word.includes(letters[i])) {
                counter = counter - 1;
                console.log(counter)
            }
        }
        this.setState({counter: counter});
    }

    changeVisibility(letter) {
        let guessedLetters = this.state.guessedLetters;
        guessedLetters.push(letter);
        this.setState({ guessedLetters: guessedLetters });
        this.countDown();
    }

    outOfGuesses() {
        let word = this.props.hiddenWord;
        let letters = this.state.guessedLetters;
        let wrongLetters = 0;

        for (let i = 0; i < letters.length; i++) {
            if (!word.includes(letters[i])) {
                wrongLetters = wrongLetters + 1;
            }
        }


        return wrongLetters === 10;
    }

    winOrLose() {
        let gussedWord = this.convertToDash();
        let alert = '';

        if(this.outOfGuesses()) {
           alert = loser[Math.floor(Math.random()*loser.length)];
        } else if(!gussedWord.includes('-')) {
            alert = winner[Math.floor(Math.random()*winner.length)];
        }
         return alert;
    }

    newGame() {
        this.props.newGame();
        this.setState({ 
            guessedLetters: [], 
            counter: 10
        })
    }


    render() {
        return (
            <div className='wrapper'>
                <div className='counter'>
                    Remaining gusses <br/>
                    {this.state.counter}
                </div>
                <h3 className='state'>{this.winOrLose()}</h3>
                <div className='container'>
                    <div className='word'>
                        <span id='hidden' className='dash'>{this.convertToDash()}</span>
                    </div>
                    <div className='alphabet' style={{ pointerEvents: this.winOrLose() ? 'none' : '' }}>
                        <button className='letter' onClick={() => this.changeVisibility('a')} style={{ visibility: this.state.guessedLetters.includes('a') ? 'hidden' : '' }}>A</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('b')} style={{ visibility: this.state.guessedLetters.includes('b') ? 'hidden' : '' }}>B</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('c')} style={{ visibility: this.state.guessedLetters.includes('c') ? 'hidden' : '' }}>C</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('d')} style={{ visibility: this.state.guessedLetters.includes('d') ? 'hidden' : '' }}>D</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('e')} style={{ visibility: this.state.guessedLetters.includes('e') ? 'hidden' : '' }}>E</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('f')} style={{ visibility: this.state.guessedLetters.includes('f') ? 'hidden' : '' }}>F</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('g')} style={{ visibility: this.state.guessedLetters.includes('g') ? 'hidden' : '' }}>G</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('h')} style={{ visibility: this.state.guessedLetters.includes('h') ? 'hidden' : '' }}>H</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('i')} style={{ visibility: this.state.guessedLetters.includes('i') ? 'hidden' : '' }}>I</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('j')} style={{ visibility: this.state.guessedLetters.includes('j') ? 'hidden' : '' }}>J</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('k')} style={{ visibility: this.state.guessedLetters.includes('k') ? 'hidden' : '' }}>K</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('l')} style={{ visibility: this.state.guessedLetters.includes('l') ? 'hidden' : '' }}>L</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('m')} style={{ visibility: this.state.guessedLetters.includes('m') ? 'hidden' : '' }}>M</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('n')} style={{ visibility: this.state.guessedLetters.includes('n') ? 'hidden' : '' }}>N</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('o')} style={{ visibility: this.state.guessedLetters.includes('o') ? 'hidden' : '' }}>O</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('p')} style={{ visibility: this.state.guessedLetters.includes('p') ? 'hidden' : '' }}>P</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('q')} style={{ visibility: this.state.guessedLetters.includes('q') ? 'hidden' : '' }}>Q</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('r')} style={{ visibility: this.state.guessedLetters.includes('r') ? 'hidden' : '' }}>R</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('s')} style={{ visibility: this.state.guessedLetters.includes('s') ? 'hidden' : '' }}>S</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('t')} style={{ visibility: this.state.guessedLetters.includes('t') ? 'hidden' : '' }}>T</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('u')} style={{ visibility: this.state.guessedLetters.includes('u') ? 'hidden' : '' }}>U</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('v')} style={{ visibility: this.state.guessedLetters.includes('v') ? 'hidden' : '' }}>V</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('w')} style={{ visibility: this.state.guessedLetters.includes('w') ? 'hidden' : '' }}>W</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('x')} style={{ visibility: this.state.guessedLetters.includes('x') ? 'hidden' : '' }}>X</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('y')} style={{ visibility: this.state.guessedLetters.includes('y') ? 'hidden' : '' }}>Y</button>&nbsp;
                        <button className='letter' onClick={() => this.changeVisibility('z')} style={{ visibility: this.state.guessedLetters.includes('z') ? 'hidden' : '' }}>Z</button>&nbsp;
                    </div>
                </div>
                <div className='new-game-button'>
                    <button className='new' onClick={this.newGame}>New Game</button>
                </div>
            </div>
        )
    }

}

export default English;