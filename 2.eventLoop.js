// 栈 执行代码  堆 存放引用

// 宏任务  第一次代码执行的时候 script标签  setTimeout
// 单线程 主线程   工作线程 webworker 辅助线程

// 微任务 Promise.then 

// ....
setTimeout(()=>{
    console.log(1);
    Promise.resolve().then(()=>{
        console.log("settimeout then1");
        Promise.resolve().then(()=>{
            console.log("settimeout then2");
        });
    });
});
setTimeout(()=>{
    console.log(2);
});
setTimeout(()=>{
    console.log(3);
});
Promise.resolve().then(()=>{
    console.log("then1");
});
Promise.resolve().then(()=>{
    console.log("then2");
});

// script标签代码属于宏任务 放到执行栈去执行，执行完成后，会清空微任务，然后再去看宏任务的队列，
// 拿出队列中的第一个宏任务执行，执行完成后，再去清空微任务,...