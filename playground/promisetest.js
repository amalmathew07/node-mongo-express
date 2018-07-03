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

