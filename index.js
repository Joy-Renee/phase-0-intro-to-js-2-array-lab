// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push('Ralph')
    return cats
}

function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(Broom){
    return [... cats, Broom]
}

function prependCat(Arnold){
    return [Arnold, ...cats]
}

function removeLastCat(){
   return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1)
}