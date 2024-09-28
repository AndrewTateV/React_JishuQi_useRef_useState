import React from 'react'
import './App.css'
import Button from './components/Button'



export default function App() {



//  方法1  useRef                 
const state ={
                    count:0
}
// 获取真实节点
const ref =React.useRef()
const handleClick = ()=>{
                    console.log('love')

                    state.count += 1

                    ref.current.textContent = 'App:'+state.count
}





// 方法2 useState
// 跟渲染有关的状态
const [count,setCount] = React.useState(0)

const handleClick2 =()=>{

// setCount(count+1)
setCount(count=>count+1)
setCount(count=>count+1)
}

return (
                    <>
                       <btn ref={ref}
    className='bg_blue'
    onClick ={handleClick}
    
    >App:{state.count}</btn>
              <br/>      
                    
                    
                    
                    <btn 
    className='bg_red'
//    方法1 拽过去
    onClick ={handleClick2}
//     方法2 传递进里面自己再onclick
    handleClick={handleClick2}
    >App:{count}</btn>  

    <br/>
                    <Button id='ok' className='bg_red bg_blue'onClick={handleClick2}> Dick:{count}</Button>
                    </>
 
  )
}
