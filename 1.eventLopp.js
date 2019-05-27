// 浏览器的事件环
// 作用域 定义的时候  
// 执行上下文  执行的时候
// 执行上下文栈  来管理执行上下文的 ECS  
// 栈  堆  
// 栈 (先进后出) 和  队列 (先进先出)  区别

function a(){
    b();
    console.log('a');
    function b(){
        c();
        console.log('b');
        function c(){
            console.log('c');
        }
    }
}
a();

// ECS = [
//     globalContext
// ]
// ECS.push(aContext);
// ECS.push(bContext);
// ECS.push(cContext);
// ECS.pop() // c
// ECS.pop() // b
// ECS.pop() // a

// [].push()   [].shift()