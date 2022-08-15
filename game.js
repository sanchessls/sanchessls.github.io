class WordGame{
    WordOfGame = "";
    isRight = false;
    attepmts = 0;
    WordsAttempted = []

    constructor(theWord)
    {
       this.WordOfGame = theWord;
    }

    reportItemDiv(ShowListOfErrors)
    {
        
        var retn = "<div class='reportItem'>" + this.WordOfGame + " Attempts: " + this.attepmts;
        if (ShowListOfErrors)
        {
            if (this.WordsAttempted.length > 0 ){
                    retn += "Attempts: " + "<br>"
                    this.WordsAttempted.forEach(element => {
                        retn += element + "<br>"
                    });
                    retn += "<br>"
              }        
        }
        
        return retn + '</div>';
    }
}

class LearningGame {
    WordList = [];
    WordIndex = -1
    LabelUpdate;
    GameOver;
    SongTitle;

    constructor(GameWordList,songName,labelUpdate,gameOver)
    {
        this.SongTitle = songName
        this.LabelUpdate = labelUpdate
        this.GameOver = gameOver
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
        console.log("/" + wordToCheck.toLowerCase().trim() +"\\")
        console.log("/" + actualWord.toLowerCase().trim() +"\\")
        if (wordToCheck.toLowerCase().trim() == actualWord.toLowerCase().trim())
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
        beep();
    }   

    SpeakActualWord(){
        textToAudio(this.GetActualWord());  
    }
	
	Translate()
	{
		Who();
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
        var rightOnes = 0;
        var WrongOnes = 0;
        var total = this.WordList.length;

        let report = "<div id='Summary' class='report'>";

        report += "<div class='reportTitle'>" + this.SongTitle+ "</div>";
        report += "<div class='reportGroup'>";
        report += "<div class = 'reportTitle'>Wrong Words: " + "</div>";
      
        this.WordList.forEach(element => {     
            if (!element.isRight)
            {       
                WrongOnes += 1;
                const itemDiv = element.reportItemDiv(true);
                console.log(itemDiv)
                report += itemDiv;
                
            }
        });

        report += "<div class = 'reportTitle'>Total Wrong Words: " + WrongOnes+"</div>";        
        report += "</div>";

        report += "  <button type='button' class='collapsible'>Click here to see the Right Words</button>";
        report += "<div class='content reportGroup'>";
        report += "<div class = 'reportTitle'>Right Words: " + "</div>";        

        this.WordList.forEach(element => {
            if (element.isRight)
            {       
                rightOnes += 1;
                report += element.reportItemDiv() + "<br>";
            }
        });
        
        report += "<div class = 'reportTitle'>Total Right Words: " + rightOnes+"</div>";
        report += "</div>";
        var perc = rightOnes/total * 100;
        report += "<div class='reportScore'>";
        report += "Score: " + perc.toFixed(2) + "%\n";

        report += "</div>";
        report += "</div>";

        return report;

    }


}

function GetSummaryTest()
{
    a = new LearningGame(["word1","word2","word3"],"songName",null,null);
    return a.ReportDiv();
}