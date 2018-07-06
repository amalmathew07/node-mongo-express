
var arr = [1,2,3,4];
var newArr = [];
var sum = 0;

var fn = (arr) => {
    return new Promise((resolve,reject) => {
        resolve(arr.forEach(myFn));
    });
}
var myFn = (a) => {
    sum = sum+a
}
fn(arr).then(() => {
    console.log(sum);
});

var promisefn = (arr) => {
    return new Promise((resolve,rejec) => {
        resolve(arr.forEach(sqFn));
    })
}

var count = 0;
var sqFn = (b) => {
    newArr[count] = b+b;
    count++;
}

promisefn(arr).then(() => {
    console.log(newArr);
})

var array1 = [1, 4, 9, 16];

var xx = (a) => {
    return(a = a + 2);
}
// pass a function to map
const map1 = array1.map(xx);

const map2 = array1.map((curr,curri) => {
    return curri + 100;
});

console.log(map1);
console.log(map2);
console.log("Done");

var set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

set.forEach((a) => {
    console.log("--->"+a);
});

const map3 = map2.filter((a) => {
    if (a > 101) {
        return a;
    }
})

console.log(map3);

var set2 = new Set([...set].filter((a) => {
    if (a >1) {
        return a;
    }
}));

console.log(set);
