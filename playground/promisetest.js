var asyncAdd = (a,b) => {
    
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
              } else {
                reject('Arguments must be numbers');
              }
        },2000)
        
    });
};



/* asyncAdd("A",4).then((sum) => {
    console.log(sum);
    return asyncAdd("A",4)
}, (err)=> {
    console.log(err);
}); */

asyncAdd(9,4).then((sum) => {
    console.log(sum);
    return asyncAdd('a',sum);
}).then((res2) => {
    console.log(res2);
}).catch((err) => {
    console.log(err);
})

//Arrays Promise

var arr = [1,2,3,4];

var promiseFn = (inpArr,callback) => {
    return new Promise((resolve,reject) => {
        if (inpArr.length < 1) {
            reject("Not enough length");
        } else {
         resolve(inpArr.map(squareFn));
        }
        //callback(newArr)
    });
}

function squareFn(a) {
    return a * a; 
}

var x = promiseFn(arr).then((x) => {
    console.log(x);
}).catch(err => console.log(err));


/* for (var x in jsobObjs ) {

    console.log("Player ---> "+x.name);
    console.log("Age ---> "+x.age);
    console.log("hob ---> ");
    x.hob.forEach((hobi) => {
        console.log(hobi);
    })
} */
console.log("Done");

