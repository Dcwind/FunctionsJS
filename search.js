/*jshint multistr:true */

var text = "Lorem Ipsum is simply dummy text of the printing \
and typesetting industry. Lorem Ipsum has been the industry's \
standard dummy text ever since Daniel the 1500s, when an unknown \
printer Daniel took a galley of type and scrambled it to \
make a type specimen book. ";

var myName = "Daniel";

var hits = [];

for(var i = 0; i < text.length; i++){
    
    if (text[i] === "D"){
        
        for(var j = i; j <(myName.length + i); j++ ){
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0){
    console.log( "Your name wasn't found!");
}else{
    console.log(hits);   
}
