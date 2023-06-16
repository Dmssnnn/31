// 1. შექმენით ფუნქია, რომელიც არგუმენტად მიიღებს რიცხვების  მასივს და დააბრუნებს ჯამს;

const numbersMassive = [1,2,3,4,5];
let sum = 0;

const getSum = (numbersMassive) => {
    for(let i = 0 ; i < numbersMassive.length ; i++ ){
        sum += numbersMassive[i];
    }
    return sum;
}
console.log(getSum(numbersMassive));

// 2 შექმენით ფუნქცია, რომელიც გამოიძახებს სხვა ფუნქციას

// const getName = (name) =>  {
//     alert(`hello ${name}`);
// }

// const callFunctionBack = (callback) => {
//     const name = (`enter ur name `);
//     callback(name);
// }
// callFunctionBack(getName);


// 3. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს

const getNumber = (a) => {
    const result = a * a ;
    return result;
}
console.log(getNumber(3));


// 5. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და შეადარებს ამ ორ რიცხვს, თუ a > b-ზე დააბრუნოს
//  1, თუ  a < b  დააბრუნოს -1, სხვა შემთხვევაში 0;

const myFunction = (a,b) => {
    if ( a > b){
        return `result is 1`;
    }else if ( b > a){
        return `result is -1`;
    }else 
    return `result is 0`

}
console.log(myFunction(9,9))

// 6.შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ტექსტს, თუ ტექსტის სიგრძე ნაკლებია 6
//  ზე ფუნქციამ  არაფერი დააბრუნოს  (დაწერთ if პირობას და შიგნით უბრალოდ return)



const getText = (firstText) => {
    if(firstText.length < 6 ){
        return `araferi`;
    }else 
    return `yvelaferi`;
}
console.log(getText("zd"));



// 8. დაწერეთ ფუნქცია რომელიც არგუმენტად მიიღებს მასივს და დააბრუნებს სტრინგს (გამოიყენეთ toString() მეთოდი)

const massive = ["dima", "jora", " gvanca"];

const getString = (massive) => {
    return massive.toString();
}
console.log(getString(massive));

