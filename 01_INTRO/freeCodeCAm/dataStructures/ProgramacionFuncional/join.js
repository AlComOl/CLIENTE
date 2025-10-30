function sentensify(str) {
  // Only change code below this line
       const a= str.split(/[\s,.-]+/).join(" ");

    //    const phrase=a.join(" ");

    return  a;
}

console.log(sentensify("May-the-force-be-with-you"));