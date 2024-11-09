{
    // Problem-1 (Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.)

    const sumArray = (value : number[]) : number => {
        const sum = value.reduce((add, num) => add + num, 0);
        return sum;
    };

    const sumOfArray = sumArray([1,2,3]);
    console.log(sumOfArray);
}