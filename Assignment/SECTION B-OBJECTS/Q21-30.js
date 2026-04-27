// QUESTION 21:-Print each key value pair.
const obj = {name:'Aman',age:22};

for(let key in obj){
    console.log(key,obj[key]);
}


// Question 22:-Add role: "admin" to object but return new object (no mutation).
const objects = {name:'Aman'};

const newObj = {
    ...objects,
    role:'admin'
};

console.log(newObj);


// Question 23:- Remove password field from user object and return a new object.
const user = {name:'A',password:'x'};

const {password, ...rest} = user;
console.log(rest);


// Question 24:-Merge a and b shallowly using spread, show limitation for nested objects.
const a = {x:1};
const b = {y:2};

const merged = {...a, ...b};
console.log(merged);


// Question 25:-Swap keys and values ({a:1,b:2} → {1:'a',2:'b'}). Assume values are strings/numbers & unique.
const object = {a:1,b:2};

const inverted = Object.entries(object).reduce((acc,[key,value])=>{
    acc[value]=key;
    return acc;
},{});

console.log(inverted);


// Question 26:-Make deep copy for object containing only plain values & arrays (no functions, no dates). Show difference from spread.
const original = {a:{b:2}};

const clone = JSON.parse(JSON.stringify(original));
clone.a.b = 10;

console.log(original);
console.log(clone);


// Question 27:-Return number of own enumerable keys.
const data = {a:1,b:2};
const count = Object.keys(data).length;
console.log(count);


// Question 28:-Extract name and role with default role='user'.
const profile = {name:'A'};
const {name,role='user'} = profile;
console.log(name);
console.log(role);


// Question 29:-Create new object containing only specified keys. (e.g., pick id and email)
const record = {id:1,name:'A',email:'a@x'};
const keys = ['id','email'];

const picked = keys.reduce((acc,key)=>{
    if(key in record){
        acc[key] = record[key];
    }
    return acc;
},{});

console.log(picked);


// Question 30:-Return new object without given keys (omit ['password']).
const userData = {user:'A',password:'x'};
const keysToOmit = ['password'];

const safeData = Object.keys(userData).reduce((acc,key)=>{
    if(!keysToOmit.includes(key)){
        acc[key] = userData[key];
    }
    return acc;
},{});

console.log(safeData);