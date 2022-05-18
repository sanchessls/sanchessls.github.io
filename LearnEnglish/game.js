class WordGame{
    WordOfGame = "";
    isRight = false;
    attepmts = 0;
    WordsAttempted = []

    constructor(theWord)
    {
       this.WordOfGame = theWord;
    }

    report(ShowListOfErrors)
    {
        var retn =  this.WordOfGame + " Attempts: " + this.attepmts + "\n"
        if (ShowListOfErrors)
        {
            retn += "Attempts: " + "\n"
            this.WordsAttempted.forEach(element => {
                retn += element + "\n"
            });
            retn += "\n"
        }
        
        return retn;
    }
}

class LearningGame {
    WordList = [];
    WordIndex = -1
    LabelUpdate;
    GameOver;

    constructor(GameWordList,labelUpdate,gameOver)
    {
        LabelUpdate = labelUpdate
        GameOver = gameOver
        console.log("constructor(GameWordList)");

        GameWordList.forEach(element => {
            this.WordList.push(new WordGame(element))
        });  
        
    }

    AddToWrongList(wrd)
    {
        console.log(" AddToWrongList(wrd)")
        console.log(wrd)
        this.GetActualWordObj().WordsAttempted.push(wrd);

        console.log(this.GetActualWordObj().WordsAttempted.length)
    }

    AddAttempt()
    {
        this.GetActualWordObj().attepmts += 1;
    }

    SetRight()
    {
        this.GetActualWordObj().isRight = true;
    }


    CheckWord(wordToCheck){
        console.log("CheckWord()2");
        this.AddAttempt();
        let actualWord = this.GetActualWord()
        if (wordToCheck.toLowerCase() == actualWord.toLowerCase())
        {
           this.SetRight();
           console.log("MesmaPalavra");
           this.NextWord();
           return true;
        }
        else
        {
            this.AddToWrongList(wordToCheck);
            console.log("Errou!");
            console.log(wordToCheck);
            console.log(actualWord);            
            return false;
        }
    }

    GetLastWord()
    {
        if (this.WordIndex > 0)
        {
            return this.WordList[this.WordIndex-1].WordOfGame;  
        }

        return "";
    }

    EndGame()
    {
        GameOver(this);
    }

    NextWord()
    {
        console.log(this.WordIndex);
        console.log(this.WordList.length);
    
        if (this.WordIndex == this.WordList.length -1) {
            GameOver(this);
            return;
        }

        console.log("NextWord()");
        this.WordIndex += 1;
        console.log(this.WordList)
        LabelUpdate(this.WordIndex + 1,this.WordList.length,this.GetLastWord());
        let word = this.GetActualWord()
        console.log("Falando a Palavar: " + word)      
        textToAudio(word);  
    }

    WrongSound(){
        console.log("Wrong word noise");
    }

    SpeakActualWord(){
        textToAudio(this.GetActualWord());  
    }

    GetActualWordObj()
    {
        console.log("GetActualWord()");
        return this.WordList[this.WordIndex];
    }

    GetActualWord(){
        console.log("GetActualWord()");
        return this.GetActualWordObj().WordOfGame;
    }

    StartGame()
    {
        console.log("StartGame()");
        this.NextWord();        
    }

    ReportDiv()
    {
        let report = "";

        report += "Song: " + this.SongName + "\n" +  "\n";

        report += "Wrong Words: " + "\n";
        this.WordList.forEach(element => {     
            if (!element.isRight)
            {       
                report += element.report(true);
            }
        });

        report += "Right Words: " + "\n";
        this.WordList.forEach(element => {
            if (element.isRight)
            {       
                report += element.report();
            }
        });

        return report;

    }


}