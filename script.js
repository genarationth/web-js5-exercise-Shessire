//Ex 1.

const arr = ['Sofia', 'David', 'Juan'];
arr.push('Sara', 'Augustin');
arr.shift();
arr.splice(1,0,'Renata');
arr.push('Elena');
console.log(arr);

//Ex 2.

let star = '';
for (let i = 1; i <= 5; i++) {
  star += '*'
  console.log(star);
}

//Ex 3.

let i = 0

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i)
  }
  i++
}