// dividable by 3 = fizz
// dividable by 5 = buzz
// dividable by 15 = fizz buzz

for (let i = 1; i < 19; i++) {
    if(i % 15 == 0 && i != 0){
        console.log("FIZZBUZZ")
    } else if(i % 3 == 0 && i != 0){
        console.log("fizz");
    } else if(i % 5 == 0 && i != 0){
        console.log("buzz");
    } else {
        console.log(i);
    }
}