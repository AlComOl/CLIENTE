function Converter(numero){
 function convertToRoman(numero) {
    const romanNumeralConverter = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let resultado = "";

    for (let simbolo in romanNumeralConverter) {
        let valor = romanNumeralConverter[simbolo];
        while (numero >= valor) {
            resultado += simbolo;
            numero -= valor;
        }
    }

    return resultado;
}

}








console.log(Converter(1975));


