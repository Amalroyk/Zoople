let pal = (a) => {
    let rev = "";
    for(let i = 0; i<a.length; i++ )
    {    let  letter = a[i];
         rev = letter + rev ;
    }

    a == rev ? console.log( a + " is a palindrom") : console.log( a + " is not a palindrom")
    
}

pal("1122332211");