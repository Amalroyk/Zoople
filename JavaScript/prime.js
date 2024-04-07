
let prime = (a) => {
    let flag = 0;
    for(let i = 2 ; i<a; i++)
    {
        a%i == 0 ? flag = 0  : flag = 1

        if(flag == 0)
        {
            break;
        }
    }
    
    flag == 0 ? console.log(a + " is  not a prime") : console.log( a + " is a prime")
}

let num = 55 ; 
prime(num);

