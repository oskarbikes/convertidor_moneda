var monedas = ["pesos colombianos","dolar canadiense","dolar estadounidense","euro"];

var cantidadAConvertir = 100;
var deQueAQue = [3,0];

switch(deQueAQue[0]){
    case 0:
        if (deQueAQue[1]==monedas.indexOf("dolar canadiense")){
            var result = cantidadAConvertir / 2966.34 *1;
            console.log(`los ${cantidadAConvertir} pesos son ${result} dolares canadienses`);
        }else if (deQueAQue[1]==monedas.indexOf("dolar estadounidense")){
            var result =  cantidadAConvertir / 3704.50 *1;
            console.log(`los ${cantidadAConvertir} pesos son ${result} dolares estadounidenses`);
        }else if (deQueAQue[1]==monedas.indexOf("euro")){
            var result =   cantidadAConvertir / 4065.84 *1;
            console.log(`los ${cantidadAConvertir} pesos son ${result} euros`);
        }else{
            console.log("la opcion no corresponde a la lista de monedas");
        }
        break
    case 1:
        if (deQueAQue[1]==monedas.indexOf("pesos colombianos")){
            var result = cantidadAConvertir / 0.00033 *1;
            console.log(`los ${cantidadAConvertir} dolar canadiense son ${result} pesos`);
        }else if (deQueAQue[1]==monedas.indexOf("dolar estadounidense")){
            var result =  cantidadAConvertir / 1.25 *1;
            console.log(`los ${cantidadAConvertir} dolar canadiense son ${result} estadounidense`);
        }else if (deQueAQue[1]==monedas.indexOf("euro")){
            var result =   cantidadAConvertir / 1.37 *1;
            console.log(`los ${cantidadAConvertir} dolar canadiense son ${result} euros`);
        }else{
            console.log("la opcion no corresponde a la lista de monedas");
        }
    break
    case 2:
        if (deQueAQue[1]==monedas.indexOf("dolar estadounidense")){
            var result = cantidadAConvertir / 3704.50 *1;
            console.log(`los ${cantidadAConvertir} dolar estadounidense son ${result} pesos`);
        }else if (deQueAQue[1]==monedas.indexOf("dolar canadiense")){
            var result =  cantidadAConvertir / 0.80 *1;
            console.log(`los ${cantidadAConvertir} dolar estadounidense son ${result} dolares canadiense`);
        }else if (deQueAQue[1]==monedas.indexOf("euro")){
            var result =   cantidadAConvertir / 0.91 *1;
            console.log(`los ${cantidadAConvertir} "dolar estadounidense" son ${result} euros`);
        }else{
            console.log("la opcion no corresponde a la lista de monedas");
        }
    break
    case 3:
        if (deQueAQue[1]==monedas.indexOf("euros")){
            var result = cantidadAConvertir / 4064.13 *1;
            console.log(`los ${cantidadAConvertir} euro son ${result} pesos`);
        }else if (deQueAQue[1]==monedas.indexOf("dolar canadiense")){
            var result =  cantidadAConvertir / 1.37 *1;
            console.log(`los ${cantidadAConvertir} euro son ${result} dolar canadiense`);
        }else if (deQueAQue[1]==monedas.indexOf("dolar estadounidense")){
            var result =   cantidadAConvertir / 1.10 *1;
            console.log(`los ${cantidadAConvertir} euro son ${result} dolares estadounidense`);
        }else{
            console.log("la opcion no corresponde a la lista de monedas");
        }
    break

}












