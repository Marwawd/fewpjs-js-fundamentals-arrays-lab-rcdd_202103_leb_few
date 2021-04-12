// Write your solution here!
let pets=["Milo", "Otis", "Garfield"];
function append(){
let pets2=pets.push("Odie");}


function prepend(){
 let pets3=pets.unshift("Odie");
}

//pets.splice(4, 1, 'May');
function removeLast(){
  pets.pop();
}
function removeFirst(){
  pets.shift();
}

pets.append();
pets.prepend();
pets.removeLast();
pets.removeFirst();
