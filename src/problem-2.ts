{
    // Problem-2 (Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.)

    const removeDuplicates = (value : number[]) : number[] => {
        return Array.from(new Set(value));
    };

    const withoutDupli = removeDuplicates([1,1,1,1,2,2,2,2,3]);
    console.log(withoutDupli);
}