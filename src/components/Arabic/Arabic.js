import React from 'react';

const loser = ['خسرنا يا عم', 'يافاشل يافاشل', 'وراحت ست الحته', 'عفوا لقد نفذ رصيدكم', 'يرجي اعاده المحاوله في وقت لاحق' ];
const winner = ['والله وعملوها الرجاله', 'الزهر بدأ يلعب', 'الناجح يرفع ايده', 'كنا هنضيع', 'ايه الشطاره دي', 'ايوه بقي'];

class Arabic extends React.Component {
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
        this.setState({ counter: counter });
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

        if (this.outOfGuesses()) {
            alert = loser[Math.floor(Math.random() * loser.length)];
        } else if (!gussedWord.includes('-')) {
            alert = winner[Math.floor(Math.random() * winner.length)];
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
                        <span id='hidden' dir='rtl' className='dash'>{this.convertToDash()}</span>
                    </div>
                    <div className='alphabet' style={{ pointerEvents: this.winOrLose() ? 'none' : '' }}>
                        <button className='letter' onClick={() => this.changeVisibility('ا')} style={{ visibility: this.state.guessedLetters.includes('ا') ? 'hidden' : '' }}>ا</button>
                        <button className='letter' onClick={() => this.changeVisibility('أ')} style={{ visibility: this.state.guessedLetters.includes('أ') ? 'hidden' : '' }}>أ</button>
                        <button className='letter' onClick={() => this.changeVisibility('إ')} style={{ visibility: this.state.guessedLetters.includes('إ') ? 'hidden' : '' }}>إ</button>
                        <button className='letter' onClick={() => this.changeVisibility('ب')} style={{ visibility: this.state.guessedLetters.includes('ب') ? 'hidden' : '' }}>ب</button>
                        <button className='letter' onClick={() => this.changeVisibility('ت')} style={{ visibility: this.state.guessedLetters.includes('ت') ? 'hidden' : '' }}>ت</button>
                        <button className='letter' onClick={() => this.changeVisibility('ث')} style={{ visibility: this.state.guessedLetters.includes('ث') ? 'hidden' : '' }}>ث</button>
                        <button className='letter' onClick={() => this.changeVisibility('ج')} style={{ visibility: this.state.guessedLetters.includes('ج') ? 'hidden' : '' }}>ج</button>
                        <button className='letter' onClick={() => this.changeVisibility('ح')} style={{ visibility: this.state.guessedLetters.includes('ح') ? 'hidden' : '' }}>ح</button>
                        <button className='letter' onClick={() => this.changeVisibility('خ')} style={{ visibility: this.state.guessedLetters.includes('خ') ? 'hidden' : '' }}>خ</button>
                        <button className='letter' onClick={() => this.changeVisibility('د')} style={{ visibility: this.state.guessedLetters.includes('د') ? 'hidden' : '' }}>د</button>
                        <button className='letter' onClick={() => this.changeVisibility('ذ')} style={{ visibility: this.state.guessedLetters.includes('ذ') ? 'hidden' : '' }}>ذ</button>
                        <button className='letter' onClick={() => this.changeVisibility('ر')} style={{ visibility: this.state.guessedLetters.includes('ر') ? 'hidden' : '' }}>ر</button>
                        <button className='letter' onClick={() => this.changeVisibility('ز')} style={{ visibility: this.state.guessedLetters.includes('ز') ? 'hidden' : '' }}>ز</button>
                        <button className='letter' onClick={() => this.changeVisibility('س')} style={{ visibility: this.state.guessedLetters.includes('س') ? 'hidden' : '' }}>س</button>
                        <button className='letter' onClick={() => this.changeVisibility('ش')} style={{ visibility: this.state.guessedLetters.includes('ش') ? 'hidden' : '' }}>ش</button>
                        <button className='letter' onClick={() => this.changeVisibility('ص')} style={{ visibility: this.state.guessedLetters.includes('ص') ? 'hidden' : '' }}>ص</button>
                        <button className='letter' onClick={() => this.changeVisibility('ض')} style={{ visibility: this.state.guessedLetters.includes('ض') ? 'hidden' : '' }}>ض</button>
                        <button className='letter' onClick={() => this.changeVisibility('ط')} style={{ visibility: this.state.guessedLetters.includes('ط') ? 'hidden' : '' }}>ط</button>
                        <button className='letter' onClick={() => this.changeVisibility('ظ')} style={{ visibility: this.state.guessedLetters.includes('ظ') ? 'hidden' : '' }}>ظ</button>
                        <button className='letter' onClick={() => this.changeVisibility('ع')} style={{ visibility: this.state.guessedLetters.includes('ع') ? 'hidden' : '' }}>ع</button>
                        <button className='letter' onClick={() => this.changeVisibility('غ')} style={{ visibility: this.state.guessedLetters.includes('غ') ? 'hidden' : '' }}>غ</button>
                        <button className='letter' onClick={() => this.changeVisibility('ف')} style={{ visibility: this.state.guessedLetters.includes('ف') ? 'hidden' : '' }}>ف</button>
                        <button className='letter' onClick={() => this.changeVisibility('ق')} style={{ visibility: this.state.guessedLetters.includes('ق') ? 'hidden' : '' }}>ق</button>
                        <button className='letter' onClick={() => this.changeVisibility('ك')} style={{ visibility: this.state.guessedLetters.includes('ك') ? 'hidden' : '' }}>ك</button>
                        <button className='letter' onClick={() => this.changeVisibility('ل')} style={{ visibility: this.state.guessedLetters.includes('ل') ? 'hidden' : '' }}>ل</button>
                        <button className='letter' onClick={() => this.changeVisibility('م')} style={{ visibility: this.state.guessedLetters.includes('م') ? 'hidden' : '' }}>م</button>
                        <button className='letter' onClick={() => this.changeVisibility('ن')} style={{ visibility: this.state.guessedLetters.includes('ن') ? 'hidden' : '' }}>ن</button>
                        <button className='letter' onClick={() => this.changeVisibility('ه')} style={{ visibility: this.state.guessedLetters.includes('ه') ? 'hidden' : '' }}>ه</button>
                        <button className='letter' onClick={() => this.changeVisibility('ة')} style={{ visibility: this.state.guessedLetters.includes('ة') ? 'hidden' : '' }}>ة</button>
                        <button className='letter' onClick={() => this.changeVisibility('و')} style={{ visibility: this.state.guessedLetters.includes('و') ? 'hidden' : '' }}>و</button>
                        <button className='letter' onClick={() => this.changeVisibility('ي')} style={{ visibility: this.state.guessedLetters.includes('ي') ? 'hidden' : '' }}>ي</button>
                        <button className='letter' onClick={() => this.changeVisibility('ى')} style={{ visibility: this.state.guessedLetters.includes('ى') ? 'hidden' : '' }}>ى</button>
                    </div>
                </div>
                <div className='new-game-button'>
                    <button className='new' onClick={this.newGame}>New Game</button>
                </div>
            </div>
        )
    }

}

export default Arabic;