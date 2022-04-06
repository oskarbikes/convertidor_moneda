var monedas = ["pesos colombianos","dolar canadiense","dolar estadounidense","euro"];
var cantidadAConvertir  = document.getElementById("#cantidad")
var initial = document.getElementById("#valorInicial")
var finish = document.getElementById("#valorFinal")
var deQueAQue = [initial,finish];
var pesosCol = 1;
var dolarCa = 2989.62;
var dolarEs = 3732.97;
var euro = 4071.43;
var valoresMonedas = [pesosCol, dolarCa, dolarEs, euro];
function currency_convert(a, b, c, d) {

    if(c[0]==0){
        result = b / d[c[1]]
        alert(`los ${b} pesos son ${result} ${a[c[1]]}`)
    }else{
        bEnPesos =b*d[c[0]]
        result =bEnPesos/d[c[1]]
        alert(`los ${b} ${a[c[0]]} son ${result} ${a[c[1]]}`)
    }
 }
 function prueba(){

     monedas = ["pesos colombianos","dolar canadiense","dolar estadounidense","euro"];
     cantidadAConvertir  = document.querySelector("#cantidad").value
     initial = document.querySelector("#valorInicial").value
     finish = document.querySelector("#valorFinal").value
     deQueAQue = [initial,finish];
     pesosCol = 1;
     dolarCa = 2989.62;
     dolarEs = 3732.97;
     euro = 4071.43;
     valoresMonedas = [pesosCol, dolarCa, dolarEs, euro];
     console.log(cantidadAConvertir)
     console.log(initial)
     console.log(finish)
    currency_convert(monedas, cantidadAConvertir, deQueAQue, valoresMonedas)

 }