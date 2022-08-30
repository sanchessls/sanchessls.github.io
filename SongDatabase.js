//https://tools.knowledgewalls.com/online-multiline-to-single-line-converter
console.log("songDatabaseCreiado")
var songDatabaseSTR = 
`{
    "Songs" : [
    {
        "SongName":"2Step-EdSheeran",
        "SongLyrics":"I had a bad week Spent the evening pretending it wasn't that deep You could see in my eyes that it was taking over I guess I was just blind and caught up in the moment You know you take all of my stress right down Help me get it off my chest and out Into the ether with the rest of this mess that just keeps us depressed We forget that we're here right now 'Cause we're living life at a different pace, stuck in a constant race Keep the pressure on, you're bound to break Something's got to change We should just be cancelling all our plans, and not give a damn If we're missing out on what the people think is right Seeing through a picture behind the screen and forget to be Lose the conversation for the message that you'll never read I think maybe you and me Oh, we should head out to the place where the music plays And then we'll go all night Two-stepping with the woman I love All my troubles turn to nothing when I'm in your eyes Electrified, we'll keep turning up and go all night Oh, we had dips and falls in our time But we know what it feels to be low then up, alone in love And all we need is us to go all Night, night Two-stepping with the woman I love Night, yeah All we need is us What do you reckon, is it just me? Words are weapons and occasionally they cut deep Crisis of confidence, it tends to come when I feel the dark And I open my heart If you don't see it, you should trust me I feel like I got nothing left right now Except this beauty in a dress right now She got me feeling like the best, and the rest are just less Than she needs, so we press play and step to the beat 'Cause we're living life at a different pace, stuck in a constant race Keep the pressure on, you're bound to break Something's got to change We should just be cancelling all our plans, and not give a damn Head out to the place where it plays And we'll go all night Two-stepping with the woman I love All my troubles turn to nothing when I'm in your eyes Electrified, we'll keep turning up and go all night Oh, we had dips and falls in our time But we know what it feels to be low then up, alone in love And all we need is us to go all Night, night Two-stepping with the woman I love Night, yeah All we need is us to go all night Night, night Two-stepping with the woman I love Night, yeah All we need is us to go all night"
    },
    {
        "SongName":"Perfect-EdSheeran",
        "SongLyrics":"I found a love for me Oh, darling, just dive right in and follow my lead Well, I found a girl, beautiful and sweet Oh, I never knew you were the someone waiting for me 'Cause we were just kids when we fell in love Not knowing what it was I will not give you up this time But darling, just kiss me slow Your heart is all I own And in your eyes, you're holding mine Baby, I'm dancing in the dark with you between my arms Barefoot on the grass, listening to our favourite song When you said you looked a mess, I whispered underneath my breath But you heard it, darling, you look perfect tonight Well, I found a woman, stronger than anyone I know She shares my dreams, I hope that someday I'll share her home I found a love, to carry more than just my secrets To carry love, to carry children of our own We are still kids, but we're so in love Fighting against all odds I know we'll be alright this time Darling, just hold my hand Be my girl, I'll be your man I see my future in your eyes Baby, I'm dancing in the dark, with you between my arms Barefoot on the grass, listening to our favorite song When I saw you in that dress, looking so beautiful I don't deserve this, darling, you look perfect tonight Baby, I'm dancing in the dark, with you between my arms Barefoot on the grass, listening to our favorite song I have faith in what I see Now I know I have met an angel in person And she looks perfect I don't deserve this, you look perfect tonight"
    },
    {
        "SongName":"WordsFromWork",
        "SongLyrics":"cash sales our lady's children hospital crumlin republic of ireland marketplace sallynoggin house charton swanlea park academy childcare cabinteely ballyboden primary care additional south western area health board maynooth community unit national rehabilitation ballinteer centre rathfarnham garda station clonskeagh administration st james rehab outreach team request for sites staff replacement the sunshine home cashel road adult mental services tallaght peadiatrics optamology unit and chamber drimnagh cherry orchard only pat mcauley peter trust monkstown joseph brennan bakery sick cover luke ashdale stepaside catering rathcoole beaufort, main street, depaul firhouse treatment killarney belvilla community children's elderly clondalkin ireland at rathminies marysrathmines"
    }        
]
}`;

function GetSongDatabaseObj()
{
    console.log("GetSongDatabaseObj");
    console.log(songDatabaseSTR);
    return JSON.parse(songDatabaseSTR);
}

function GetSongsList()
{
    console.log("GetSongsList");
    ret = [];
  
    GetSongDatabaseObj().Songs.forEach(element => {
        ret.push(element.SongName);
    });

    return ret;
}

function GetSongObj(database,song)
{
    valueToReturn = null;
    console.log("GetSongObj");
    console.log(database);
    database.Songs.forEach(element => {                
        console.log((element.SongName))
        console.log(song)
        if (element.SongName == song)
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


    //change 'cause to cause
    //remove oh ohh ohhh
    //remove yeah
    //do not accept weird char on input [ ] #  things that mislead what i am writing

    console.log(regexExpression);
    regexObj = new RegExp(regexExpression, 'g');
    console.log(regexObj);

    while((result = regexObj.exec(song.SongLyrics)) !== null) {
       console.log(result)
       console.log(result[0])       
       ret.push(result[0].toLowerCase());
    }
    
    console.log(ret)

    const unique = [...new Set(ret)];


    return shuffle(unique);


}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



