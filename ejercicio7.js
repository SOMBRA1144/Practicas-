var palabra = prompt ("Cual es la palabra: ");
var a = 0;
var vocales = ['a','e','i','o','u']


for(var b=0; b<=palabra.length; b++){

    if(vocales.indexOf(palabra[b])>=0){
        
        ++a;
    }
}

console.log("Las vocales son: " + a);