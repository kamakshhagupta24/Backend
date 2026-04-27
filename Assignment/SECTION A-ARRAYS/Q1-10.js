
// Question 1:-Print every element of an array, one per line.
const arr=[10,20,30,40];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Question 2:-Compute total sum.
// Using for loop
const a = [1,2,3,4];
let total=0;
for(let i=0;i<a.length;i++){
    total+=a[i];
}
console.log(total);

// Using reduce refactor
const num = [1,2,3,4];
const sum = num.reduce((acc,curr)=> acc + curr,0);
console.log(sum);


// Question 3:-Find largest number by scanning once
const n = [5,1,9,3];
let max=n[0];
for(let i=0;i<n.length;i++){
    if(n[i]>max){
        max=n[i];
    }
}
console.log(max);

// Question 4:-Find minimum using reduce.
const nums = [7,3,9,0];
const min = nums.reduce((min,v)=>{
    return v < min ? v : min;
},Infinity);
console.log(min);


// Question 5:-Produce reversed array without .reverse(). Return new array (immutable).
const b = [1,2,3];
const rev =[];
for(let i=b.length-1;i>=0;i--){
    rev.push(b[i]);
}
console.log(rev);


// Question 6:-Remove duplicates, keep first occurrence. NO Set
const number = [1,2,2,3,1];
const result = [];
for(let i=0;i<number.length;i++){
    if(!result.includes(number[i])){
        result.push(number[i]);
    }
}
console.log(result);


// Question 7:-Return an object mapping value → count.
const str = ['a','b','a','c'];
const freq = {};

for(let i=0;i<str.length;i++){
    const val = str[i];

    if(freq[val]){
        freq[val]++;
    }else{
        freq[val]=1;
    }
}
console.log(freq);


// Question 8:- Flatten only one nesting level: [1,[2,3],4] -> [1,2,3,4]
const array = [1,[2,3],4];
const res=[];

for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
        for(let j=0;j<array[i].length;j++){
            res.push(array[i][j]);
        }
    }
    else{
        res.push(array[i]);
    }
}
console.log(res);


// Question 9:-Rotate right by k positions; immutably return result.
const numbers=[1,2,3,4];
let k=1;

k=k%numbers.length;

const results = new Array(numbers.length);
for(let i=0;i<numbers.length;i++){
    results[(i+k)%numbers.length] = numbers[i];
}
console.log(results);


// Question 10:-Split into subarrays of length n.
const d = [1,2,3,4,5];
const size=2;

const ans = [];

for(let i=0;i<d.length;i+=size){
    ans.push(d.slice(i,i+size));
}
console.log(ans);