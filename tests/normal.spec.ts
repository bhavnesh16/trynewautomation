const users=new Map<number,string>();
users.set(1, 'John');
users.set(2, 'Alice');
console.log(users.get(1));
console.log(users.has(1));
const userss= new Map([
  [1, 'John'],
  [2, 'Alice']
]);

// for(const [id,name] of users)
// {
//   console.log(id,name);
// }


const arrr=[userss]

console.log(arrr);

const arr = [
  [1, 'John'],
  [2, 'Alice']
];

//const user1 = new Map(arr);

for (const key in users) {
  if (userss.hasOwnProperty(key)) {
    console.log(key);
  }
}

const str='banana';
const map=new Map<string, number>();
for(const ch of str)
{
    map.set(ch,(map.get(ch)||0)+1)
}
console.log(map);

const arr1 = [1, 2, 2, 3, 1, 4];
const map1=new Map<number, number>();

for(const num of arr1)
{
    map1.set(num, (map1.get(num) || 0) + 1);
}

console.log(map1);


interface User {
  name: string;
  role: string;
}

const use = new Map<number, User>();
use.set(1,{name:'John',role:'QA'})
console.log(use.get(1)?.role)

const numbers = [1, 2, 3];
const double = numbers.map(x=>x*2);

console.log(double);

users.set(2, 'Alice');
users.set(3, 'Bob');

users.forEach((value,key)=>{
    console.log(key,value);
})

userss.forEach((name,key)=>
    {
    if(name==='Alice')
    {
        console.log(key,name);
    }
})


try
{
    const name=undefined;

     const user = null;

  console.log(user.name);
    console.log(name.toUpperCase());

}
catch(e)
{
    console.log('error caubht:',e);
      console.log((e as Error).message);

}


try{
    console.log('excution')
    throw new Error('something went wrong');
}
catch(e)
{
    console.log('error caubht:',e);
    console.log((e as Error).message);
}

 finally {

  console.log(
    'Cleanup Executed'
  );


const num=[1,4,2,2,3,4,5]
console.log("test"+num.sort());
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const merged = [...array1, ...array2]; 

console.log(merged);

let largest = merged[0];
for (let i = 1; i < merged.length; i++) {
  if (merged[i] > largest) {
    largest = merged[i];
  }

}


 }