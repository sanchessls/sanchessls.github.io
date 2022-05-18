class LearningGame {
    WordList = null;
    WordIndex = -1
    LabelUpdate;
    GameOver;
    constructor(GameWordList,labelUpdate,gameOver)
    {
        LabelUpdate = labelUpdate
        GameOver = gameOver
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

    GetLastWord()
    {
        if (this.WordIndex > 0)
        {
            return this.WordList[this.WordIndex-1];  
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

    GetActualWord(){
        console.log("GetActualWord()");
        return this.WordList[this.WordIndex];
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
            report += element + "\n";
        });

        report += "Right Words: " + "\n";
        this.WordList.forEach(element => {
            report += element + " , ";
        });

        return report;

    }


}