/*
https://www.codewars.com/kata/52b23340c65ea422b1000045/train/javascript

Santa's elves are boxing presents, and they need your help!
Write a function that takes two sequences of dimensions of the present and the box, respectively, and returns a
Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick,
so be sure to take that in to account.

 */

function willFit(present, box){
    present = present.sort((a,b) => a-b);
    box = box.sort((a,b) => a-b);
    return box.every((v,i)=>v>=(present[i]+2));
}