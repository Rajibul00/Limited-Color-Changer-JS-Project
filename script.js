/*function colorchange(){
    let hashtag = '#';
    let numalpha = '0123456789abcdef'
    for(i=0;i<6;i++){
     hashtag = hashtag + 
    }
 document.body.style.backgroundColor ='#0abcdef'

     
}*/
/*let numalpha = '0123456789abcdef'
console.log(Math.floor(Math.random()*16));
*/
let index = 0
function colorchange(){
    let colors =[
        'red','blue','yellow','violet','pink'
    ];

        document.body.style.backgroundColor =colors[index++];
        console.log(index);
        if(index==colors.length-1){
            index = 0
        }
   
}