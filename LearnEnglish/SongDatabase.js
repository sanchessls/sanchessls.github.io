//https://tools.knowledgewalls.com/online-multiline-to-single-line-converter

var songDatabaseSTR = 
`{
    "Songs" : [
    {
        "SongName":"2Step",
        "SongLyrics":"I had a bad week Spent the evening pretending it wasn't that deep You could see in my eyes that it was taking over I guess I was just blind and caught up in the moment You know you take all of my stress right down Help me get it off my chest and out Into the ether with the rest of this mess that just keeps us depressed We forget that we're here right now 'Cause we're living life at a different pace, stuck in a constant race Keep the pressure on, you're bound to break Something's got to change We should just be cancelling all our plans, and not give a damn If we're missing out on what the people think is right Seeing through a picture behind the screen and forget to be Lose the conversation for the message that you'll never read I think maybe you and me Oh, we should head out to the place where the music plays And then we'll go all night Two-stepping with the woman I love All my troubles turn to nothing when I'm in your eyes Electrified, we'll keep turning up and go all night Oh, we had dips and falls in our time But we know what it feels to be low then up, alone in love And all we need is us to go all Night, night Two-stepping with the woman I love Night, yeah All we need is us What do you reckon, is it just me? Words are weapons and occasionally they cut deep Crisis of confidence, it tends to come when I feel the dark And I open my heart If you don't see it, you should trust me I feel like I got nothing left right now Except this beauty in a dress right now She got me feeling like the best, and the rest are just less Than she needs, so we press play and step to the beat 'Cause we're living life at a different pace, stuck in a constant race Keep the pressure on, you're bound to break Something's got to change We should just be cancelling all our plans, and not give a damn Head out to the place where it plays And we'll go all night Two-stepping with the woman I love All my troubles turn to nothing when I'm in your eyes Electrified, we'll keep turning up and go all night Oh, we had dips and falls in our time But we know what it feels to be low then up, alone in love And all we need is us to go all Night, night Two-stepping with the woman I love Night, yeah All we need is us to go all night Night, night Two-stepping with the woman I love Night, yeah All we need is us to go all night"
    },
    {
        "SongName":"Song2",
        "SongLyrics":"Letra da Song 2"
    },
    {
        "SongName":"Song3",
        "SongLyrics":"varias varias varias letras da song 3"
    }
]
}`;

function GetSongDatabaseObj()
{
    console.log("GetSongDatabaseObj");
    console.log(songDatabaseSTR);
    return JSON.parse(songDatabaseSTR);
}

function GetSongObj(database,song)
{
    valueToReturn = null;
    console.log("GetSongObj");
    console.log(database);
    database.Songs.forEach(element => {                
        console.log(("song="+element.SongName))
        console.log(song)
        if (("song="+element.SongName) == song)
        {
            console.log("Entrou")
            valueToReturn = element;    
            return;                    
        }
    });

    return valueToReturn;
}

function GetWordListFromSongObj(song)
{
    ret = [];
    console.log("GetWordListFromSongObj")

    regexExpression = `([A-Za-z']+)`;

    console.log(regexExpression);
    regexObj = new RegExp(regexExpression, 'g');
    console.log(regexObj);

    while((result = regexObj.exec(song.SongLyrics)) !== null) {
       console.log(result)
       console.log(result[0])
       ret.push(result[0]);
    }
    
    console.log(ret)

    return ret;


}



