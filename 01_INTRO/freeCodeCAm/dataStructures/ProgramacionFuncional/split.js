function splitify(str) {
  // Only change code below this line
  const newArray =str.split(/[\s,.-]+/);

  return newArray;

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));



// Only change code below this line
function urlSlug(title) {

  const newTitle = title.toLowerCase()
        newTitle.trim();

  const newUrl=newTitle.split(" ").filter(palabra => palabra.length>0).join("-");
 

return newUrl;

} 
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));