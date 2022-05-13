class LearningGame {
    WordList = null;
    WordIndex = -1
    
    constructor(GameWordList)
    {
        console.log("constructor(GameWordList)");
        this.WordList = GameWordList;        
    }

    CheckWord(wordToCheck){
        console.log("CheckWord()");
        let actualWord =this.GetActualWord()
        if (wordToCheck.toLowerCase() == actualWord.toLowerCase())
        {
           console.log("MesmaPalavra");
           this.NextWord();
           return true;
        }
        else
        {
            console.log("Errou!");
            console.log(wordToCheck);
            console.log(actualWord);
            return false;
        }

    }

    NextWord(){
        console.log("NextWord()");
        this.WordIndex += 1;
        let word = this.GetActualWord()
        console.log("Falando a Palavar: " + word)      
        textToAudio(word);  
    }

    GetActualWord(){
        console.log("GetActualWord()");
        return this.WordList[this.WordIndex];
    }

    StartGame()
    {
        console.log("StartGame()");
        this.NextWord();        
    }


}