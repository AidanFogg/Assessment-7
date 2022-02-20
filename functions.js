function addToZero(){

}

function hasUniqueChars(string){
    for(let i = 0; i < string.length; i++){
        const el = string[i];
        if(string.indexOf(el) !== string.lastIndexOf(el)){
           return false;
        };
     };
     return true;
}

//this would be O(n) linear. The time scales based off the 
//length of the string.

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  //This would be O(n) linear. The time it takes grows at a steady
  //rate depending on te length of the input.

  function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    console.log(word);
  }

  let wordArr = ['hi', 'hello', 'racecar']

  findLongestWord(wordArr)

  //This would have an index of O(n) linear. The time it takes scales
  //depencing on the length of the array passed in.