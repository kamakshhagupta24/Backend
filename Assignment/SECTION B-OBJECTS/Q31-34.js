// Question 31:-Update user.address.city immutably.
const user = {
    name: "A",
    address: {
        city: "Old",
        zip: 123
    }
};

const updatedUser = {
    ...user,
    address: {
        ...user.address,
        city: "New"
    }
};

console.log(updatedUser);



// Question 32:-Rename fullName → name while preserving value.
const obj = {
    fullName: "A",
    age: 20
};

const {fullName, ...rest}=obj;
const newObj = {
    name: fullName,
    ...rest
};

console.log(newObj);


// Question 33:-Given defaults and config, return merged config where config overrides defaults.
const defaults = {
    retries: 3
};

const config = {
    timeout: 100
};

const finalConfig = {
    ...defaults,
    ...config
};

console.log(finalConfig);


// Question 34:-Return boolean whether object has no own keys.
const data = {};
const isEmpty = Object.keys(data).length === 0;
console.log(isEmpty);