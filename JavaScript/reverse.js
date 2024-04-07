let wordrev = (sentence) => {
   let word = "";
   let revsentance = "";

   for(let i = 0 ; i < sentence.length ; i++)
   {
      let letter = sentence[i];
      if (letter != " ") {
        word = letter + word ;
      }
      revsentance = word + " " + revsentance;
      word = "";
    }
    console.log(revsentance);
}

wordrev(" Hi Dear How are You ? ");