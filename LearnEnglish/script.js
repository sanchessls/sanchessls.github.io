function NewGame(song){
    console.log("NewGame()") + song;
    //Go To Right Page
    location.href = 'SongFrame.html?song='+song;       
}

function textToAudio(text) {
    console.log("textToAudio()" + text);
    
    let msg = text;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    console.log("textToAudio()END" );
}

function GetSongWords(songName)
{
    console.log("GetSongWords(songName)" + songName);


    var SongObj = GetSongObj(GetSongDatabaseObj(),songName)

    console.log(SongObj)

    return GetWordListFromSongObj(SongObj);
}


