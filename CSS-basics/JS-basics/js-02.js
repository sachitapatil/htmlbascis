let x=5000 
let y= 9999
//let result = x >=9999 || y <= 5000
//console.log(result); 

let number = max(150,25)
console.log(number)
function max (number1 ,number2){
    if (number1>number2)
     return number1;
     else
     number2;
}

function root(n)
{
    let cbrt=n/3 ;
    let temp =0;
    while (cbrt !=temp)
    {
      temp=cbrt;
      cbrt=(n/(temp*temp)+(temp*2))/3

    }
    return cbrt;
}
    console.log("64 cube root is"+root(64));
    console.log("125 cube root is"+root(125));

    function inchtofeet(inch)
    {
        var feet=inch/12;
        return feet;

    }
    let result =inchtofeet(60);
    console.log(result);

    const state ={
    
    "state1" : "Arizona",
    "feature":["Beautiful state","natural state"],
    "state 2":"california",
    "feature2":["lots of energy","lots of enthusiaum"],
    "state3":"Delaware",
    "feature3":["Home of tax free shopping"],
    "state 4":"florida",
    "feature4":["sunshine state"],
     "state5":"Hawaii",
     "feature5":["Home state of Barak Obama"],
     "state6":"New Jersey",
     "feature6":["garden state","started revolution"],
     "state 7":"Washington",
     "feature7":["proud to be democrates n their values"],
     "state8":"North carolina",
     "feature8":["land of great basketball"],
     "state9":"virgina",
     "state 10":"New York",
     
    }
    console.log(state.state6 )
    console.log(state.feature4)

    const str='hello java world';
    const longestword =(Str) =>{
        const strArray = str.split(' ');
        const sortedstrArray =strArray.sort(
            (strA, strB) =>
         {
            return strB.length - strA.length;

        }

          return sortedstrArray[0] ;

    }
    console.log(longestword(str));



