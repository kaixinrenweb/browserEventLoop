## 浏览器的事件环
- `node 11+` 事件环和浏览器的事件环是一致的
- 作用域 定义的时候产生
- 执行上下文  执行的时候产生
- 执行上下文栈  来管理执行上下文的 ECS
- 栈 (先进后出) 和  队列 (先进先出)  区别

## 宏任务
- setimeout
- ui渲染
- script标签代码
- setImmediate
- MessageChannel
- postMessage

## 微任务
- Promise.then
- MutationObserver

```
vue.$nextTick(()=>{
    //dom加载完成后 to do sth
})
```

