import React from 'react';
import './App.css';
import English from '../English/English';
import Arabic from '../Arabic/Arabic';


const englishWords = ['accommodation', 'accompany', 'achievement', 'accurately', 'beauty', 'become', 'beef', 'beer', 'begin', 'onion', 'butterfly', 'see', 'alert', 'behave', 'consequence',
    'chiken', 'building', 'coat', 'clogging', 'mock', 'clinging', 'descent', 'swirling', 'funnel', 'slam', 'imminent', 'bib', 'nappy', 'numb'];

const arabicWords = ['لسان', 'ضفدع', 'كنبه', 'كرسى', 'الكرامة', 'الحقوق', 'جميع', 'عطلة', 'ساعة', 'امرأة', 'دجاجة', 'جميلة', 'مدرسة', 'الشهر', 'الخريف',
    'غداً', 'البارحة', 'أسبوع', 'قاموس', 'لسان', 'جزيرة', 'جريدة', 'الناس', 'دقيقة', 'الليل', 'يقفز', 'وجه'];

const arabicProverbs = ['إبرة في كومة قش', 'أبطأ من سلحفاة', 'اتق شر الحليم اذا غضب', 'إيش صبرك عالمر قال الأمر منو', 'بيت المحسن عمار', 'الحب أعمى', 'حبر على ورق', 'خادم سيدين يكذب على أحدهما', 'اكفي القدره على فمها تتطلع البنت لأمها', 'اللى اخدته القرعه تاخده ام الشعور', 'النهار له عينين', 'خد من التل يختل'];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGame: false,
            hiddenWord: ''
        }

        this.startGame = this.startGame.bind(this);
        this.randomWord = this.randomWord.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    componentDidMount() {
        document.getElementById("english-keyboard").style.display = "none";
        document.getElementById("arabic-keyboard").style.display = "none";
    }

    startGame() {
        this.setState({ inGame: true });
        this.randomWord();
    }

    newGame() {
        this.setState({ inGame: false });
        document.getElementById("english-keyboard").style.display = "none";
        document.getElementById("arabic-keyboard").style.display = "none";
    }

    randomWord() {
        let e = document.getElementById("drop-down");
        let value = e.options[e.selectedIndex].value;

        if (value === 'english-words') {
            let englishWord = englishWords[Math.floor(Math.random() * englishWords.length)];
            this.setState({ hiddenWord: englishWord });
            document.getElementById("english-keyboard").style.display = "block";
        } else if (value === 'arabic-words') {
            let arabicWord = arabicWords[Math.floor(Math.random() * arabicWords.length)];
            console.log(arabicWord);
            this.setState({ hiddenWord: arabicWord });
            document.getElementById("arabic-keyboard").style.display = "block";
        } else {
            let arabicProverb = arabicProverbs[Math.floor(Math.random() * arabicProverbs.length)];
            this.setState({ hiddenWord: arabicProverb });
            document.getElementById("arabic-keyboard").style.display = "block";
        }
    }

    render() {
        return (
            <div className='app'>
                <div id='new-game' style={{ display: this.state.inGame ? 'none' : 'block' }}>
                    <h1 className='center'>H&nbsp;a&nbsp;n&nbsp;<span id='black'>g</span>&nbsp;m&nbsp;a&nbsp;n</h1>
                    <div className='drop-list'>
                        <h2>Which one you prefer?</h2>
                        <select id="drop-down">
                            <option value="english-words">English Words</option>
                            <option value="arabic-words">Arabic Words</option>
                            <option value="arabic-proverbs">Arabic Proverbs</option>
                        </select>
                    </div>
                    <div className='button'>
                        <button id='button' className='start' onClick={this.startGame} >Start Game</button>
                    </div>
                </div>
                <div id='english-keyboard'>
                    <English hiddenWord={this.state.hiddenWord} newGame={this.newGame} />
                </div>
                <div id='arabic-keyboard'>
                    <Arabic hiddenWord={this.state.hiddenWord} newGame={this.newGame} />
                </div>
            </div>
        );
    }
}

export default App;