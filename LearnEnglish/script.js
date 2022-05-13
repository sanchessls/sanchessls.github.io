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

async function GetSongWords(songName)
{
    console.log("GetSongWords(songName)" + songName);
    return await fetch('SongDatabase.json').then((lyrinc) => 
    {
        
      console.log(lyrinc)

      var obj = JSON.parse( lyrinc);

      console.log(obj)

     return ["andre","sanches","lima","da","silva"]

    });
    



}