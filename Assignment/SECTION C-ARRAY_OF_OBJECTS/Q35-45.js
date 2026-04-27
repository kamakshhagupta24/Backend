// Question 35:-Produce object { userId: totalSpent }.
const users =[
    {id:1,name:"Aman",age:22,isActive:true},
    {id:2,name:"Riya",age:17,isActive:false},
    {id:3,name:"Rahul",age:25,isActive:true},
    {id:4,name:"Neha",age:19,isActive:false}
];

const orders = [
    {id:1,userId:1,total:500,status:"completed"},
    {id:2,userId:2,total:300,status:"pending"},
    {id:3,userId:1,total:200,status:"completed"},
    {id:4,userId:3,total:700,status:"completed"}
];
const totalSpending = orders.reduce((acc,{userId,total})=>{
    acc[userId] = (acc[userId] || 0) + total;
    return acc;
},{});

console.log(totalSpending);


// Question 36:-Return orders with status === 'completed'.
const completedOrders = orders.filter(order => order.status === "completed");
console.log(completedOrders);


// Question 37:-For each order, add userName from users dataset. If user not found, userName: null.
const userById = Object.fromEntries(
    users.map(user => [user.id,user])
);

const ordersWithUser = orders.map(order => ({
    ...order,
    userName: userById[order.userId]?.name || null
}));

console.log(ordersWithUser);


// Question 38:-Return { userId: [orders...] }.
const grouped = orders.reduce((acc, o) => {
  (acc[o.userId] = acc[o.userId] || []).push(o);
  return acc;
}, {});


// Question 39:-Return top N orders sorted by total descending.
const topN = (N) => [...orders]
  .sort((a,b) => b.total - a.total)
  .slice(0, N);


// Question 40:-Produce { userId: average }.
const avg = Object.entries(
  orders.reduce((acc,o)=>{
    acc[o.userId] = acc[o.userId] || {sum:0,count:0};
    acc[o.userId].sum += o.total;
    acc[o.userId].count++;
    return acc;
  },{})
).reduce((res,[id,val])=>{
  res[id] = val.sum / val.count;
  return res;
}, {});


// Question 41:-Return array of user names who have orders
const userIds = new Set(orders.map(o => o.userId));
const names = users
  .filter(u => userIds.has(u.id))
  .map(u => u.name);


// Question 42:-Return names of users who placed zero orders.
const ids = new Set(orders.map(o=>o.userId));
const noOrders = users.filter(u => !ids.has(u.id)).map(u=>u.name);


// Question 43:-Implement a function to return page p with limit items from orders (1-indexed).
//  Also return totalPages.
function paginate(arr, page, limit){
  const totalPages = Math.ceil(arr.length / limit);
  const start = (page - 1) * limit;
  return {
    page,
    totalPages,
    data: arr.slice(start, start + limit)
  };
}


// Question 44:-Return users whose name contains query string.
const search = (q) =>
  users.filter(u =>
    u.name.toLowerCase().includes(q.toLowerCase())
  );


// Question 45:-Return object {status: count}.
const statusCount = orders.reduce((acc,o)=>{
  acc[o.status] = (acc[o.status] || 0) + 1;
  return acc;
}, {});


