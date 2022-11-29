// Code your solution in this file!
const x= 42;
function distanceFromHqInBlocks(y) {
    let z= (y-x);
    let resultz= Math.abs(z);
    return(resultz);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
function distanceFromHqInFeet(w) {
    let z= (w-x);
    let v=(z *= 264);
    let resultsInFeet= Math.abs(v);
    return(resultsInFeet);
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));
function distanceTravelledInFeet(a, b) {
    let c=(b-a);
    let d=(c*264);
    let distTravelled= Math.abs(d)
    return(distTravelled);
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));
function calculatesFarePrice(start, destination) {
    let dist=(destination-start);
    let ground=(dist*264);
    let groundDist= Math.abs(ground);
    if (groundDist<=400){
        let fare=0;
        return(fare);
    }
    else if (groundDist > 400 && groundDist <= 2000) {
        let totalFeetTravelled=(groundDist - 400);
        let fare=(totalFeetTravelled/50);
        return(fare);
    }
    else if (groundDist > 2000 && groundDist <= 2500) {
        let fare=25;
        return(fare);
    }
    else if (groundDist > 2500) {
        let reply= 'cannot travel that far';
        return(reply);
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));