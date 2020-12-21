/*
https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice
and digital data communication channels, it still has its use in some applications around the world.
 */

decodeMorse = function(morseCode){
    let arr = morseCode.split("   ");
    let string = "";
    for (let i in arr){
        if(arr[i] != ''){
            let word = arr[i].split(" ");
            for(let j in word){
                if(word[j] != ''){
                    string += MORSE_CODE[word[j]];
                }
            }
            if(i < arr.length-1){
                string += " ";
            }
        }
    }
    return string;
}
