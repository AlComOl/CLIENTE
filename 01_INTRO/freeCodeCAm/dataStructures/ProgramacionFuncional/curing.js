function add(x) {//llamas a la primera funcion y le pasas 10
  return function(y) { //=> la primera funcion devuelve otra funcion , la que espera otro parametro
    return function(z) {//=> la segunda funcion devuelve una tercera , la que espera otro parametro
      return x + y + z;// => ahora esta tercera devuelve el resultado
    };
  };
}

console.log(add(10)(20)(30));//por eso hay que pasasr 3 argumentos