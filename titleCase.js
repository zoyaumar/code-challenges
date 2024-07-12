function titleCase(title, minorWords) {
  let arr = title.split(" ");
  let minor=[""];
  if(minorWords!=undefined)
    minor = minorWords.toLowerCase().split(" ");
  arr.forEach((word, index) => {
    word = word.toLowerCase();
    if(minor.indexOf(word) < 0 || index==0)
      word = word.charAt(0).toUpperCase() + word.substring(1);
    arr[index] = word;
  });
  return arr.join(" ");
}
