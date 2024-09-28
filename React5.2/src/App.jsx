import React from 'react'

export default function App() {

  const[count,setCount]=React.useState(10)

  const [state , dispatch]=React.useReducer(reducer,{count :0})



function reducer(state,action){

 switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }; // 立即返回新状态，函数执行结束
      case 'decrement':
        return { count: state.count - 1 }; // 立即返回新状态，函数执行结束
      default:
        return state // 处理未知的 action 类型
    }
  
  

}





  function decrement (){
    setCount(count-1)
  }
  function increment (){
    setCount(count+1)
  }





  return (
    <div>


<button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>

<br />
   


<button onClick={()=>dispatch({type :"decrement"})}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
  )
}
