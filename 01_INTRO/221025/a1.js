//https://marcosruiz.github.io/posts/desestructuracion-javascript/

const user={
    name1:"maz",
    role:"streamer",
    life:99
}
//

const {name1,role:type,life}=user;

let a={
    name1,
    type,
    life
}


console.log(name1,type,life);
console.log("a");

