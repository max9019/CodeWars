/*

https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return
the name of the chosen Player(name is a property of Player objects, e.g Player.name)
 */

function duckDuckGoose(players, goose) {
    return players[(goose-1)%players.length].name;
}