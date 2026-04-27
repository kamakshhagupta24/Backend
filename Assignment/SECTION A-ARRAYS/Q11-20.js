// Question 11:-Remove false, 0, '', null, undefined, NaN.
const arr = [0,1,false,2,'',3,null];

const cleaned = arr.filter(Boolean);
console.log(cleaned);


// Question 12:-Implement indexOf manually (return -1 if not found).
const str = ['a','b','c'];
const target = 'b';

let index = -1;

for(let i=0;i<str.length;i++){
    if(str[i]===target){
        index=i;
        break;
    }
}
console.log(index);


// Question 13:-Merge arrays into a single array without concat() (but spread allowed).
const arr1 = [1,2];
const arr2 = [3,4];

const merged = [];
for(let i=0;i<arr1.length;i++){
    merged.push(arr1[i]);
}
for(let i=0;i<arr2.length;i++){
    merged.push(arr2[i]);
}

console.log(merged);


// Question 14:-Create array by alternating elements: [a1,a2] with [b1,b2] → [a1,b1,a2,b2]. If lengths differ, append rest.
const arr3 = [1,2];
const arr4 = [10,20];

const result = [];
const maxLength = Math.max(arr3.length,arr4.length);

for(let i=0;i<maxLength;i++){
    if(i<arr3.length){
        result.push(arr3[i]);
    }
    if(i<arr4.length){
        result.push(arr4[i]);
    }
}
console.log(result);


// Question 15:- For each window of size k, compute its sum (no reduce per window ideally).
const a = [1,2,3,4];
const k = 2;

const ans = [];
let windowSum = 0 ;

for(let i=0;i<k;i++){
    windowSum += a[i];
}
ans.push(windowSum);

for(let i=k;i<a.length;i++){
    windowSum = windowSum + a[i] - a[i-k];
    ans.push(windowSum);
}
console.log(ans);


// Question 16:-Build [start..end] numbers.
const start = 3;
const end = 6;

const range = [];

if(start <= end){
    for(let i=start;i<=end;i++){
        range.push(i);
    }
}
console.log(range);


// Question 17:-Remove element at index i and return new array (do not mutate original).
const num = [1,2,3];
const i = 1;

const updated = num.filter((_,index)=> index !== i);
console.log(updated);


// Question 18:-Count how many elements satisfy a given condition (e.g., > 10).
const nums = [5,12,8,20];
const isGreaterThan10 = (x) => x>10;

const count = nums.filter(isGreaterThan10).length;
console.log(count);


// Question 19:-Remove duplicates and return sorted ascending array of numbers.
const number = [3,1,2,3,2];
const uniqueSorted = [...new Set(number)].sort((a,b) => a-b);
console.log(uniqueSorted);


// Question 20:-Convert array into object where key is index and value is the element.
const s = ['a','b'];
const indexMap = {};

for(let i=0;i<s.length;i++){
    indexMap[i] = s[i];
}
console.log(indexMap);

