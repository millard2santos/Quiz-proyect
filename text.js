for(i=60; i <= 0; i++){
    const promise = new Promise((res,rej) => {
        setTimeout(() => {
            ;
        }, i + 1000)
    }
    
)
promise().then(res => console.log(i))
}