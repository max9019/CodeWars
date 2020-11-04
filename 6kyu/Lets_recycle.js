/*

https://www.codewars.com/kata/5b6db1acb118141f6b000060

You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
 */

function recycle(a) {
    let arr = [[], [], [], []];
    let arr2 = [];
    for (let i = 0; i < a.length; i++) {
        a[i].material === "paper" ? arr[0].push(a[i].type) : a[i].material === "glass" ? arr[1].push(a[i].type) : a[i].material === "organic" ? arr[2].push(a[i].type) : arr[3].push(a[i].type);
        a[i].secondMaterial === "paper" ? arr[0].push(a[i].type) : a[i].secondMaterial === "glass" ? arr[1].push(a[i].type) : a[i].secondMaterial === "organic" ? arr[2].push(a[i].type) : a[i].secondMaterial === "plastic" ? arr[3].push(a[i].type) : arr2.push("none");
    } return arr;
}