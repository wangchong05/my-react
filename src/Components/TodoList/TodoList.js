import React, { useState, useEffect, useRef } from 'react'
import './todoList.css';

const listOrigin = [
  {
    action: 'drink',
    complete: false
  }, {
    action: 'eat',
    complete: true
  }
]

function TodoList() {

  const [list, setList] = useState(
    listOrigin
  )

  const [updateTime, setUpdateTime] = useState(null)
  const [num, setNum] = useState(1)

  const myRef = useRef()

  useEffect(()=>{
    setUpdateTime(new Date().toLocaleString())
  }, [list])

  // 添加
  const addItem = () => {
    if(!myRef.current.value || list.find((e) => { return e.action === myRef.current.value })) {
      alert('请输入内容或内容重复')
      return
    }
    const newList = [...list, {action: myRef.current.value}]
    setList(() => {
      console.log(newList, list)
      return newList
    })
    myRef.current.value = ''
  }

  // 删除
  const deleteItem = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  // 更新单项
  const updateItem = (index) => {
    const newList = [...list]
    newList[index]['complete'] = !newList[index]['complete']
    setList(newList)
  }

  const allData = ()=> {
    setNum(1)
    const newList = [...listOrigin]
    setList(newList)
  } 

  const isComplete = ()=> {
    setNum(2)
    const newList = listOrigin.filter((e) => {
      return e.complete
    })
    setList(newList)
  } 

  const notComplete = ()=> {
    setNum(3)
    const newList = listOrigin.filter((e) => {
      return !e.complete
    })
    console.log(newList)
    setList(newList)
  } 

  return (
    <div>
      <div>更新时间：{updateTime}</div>
      <br/>
      
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <input type="text" ref={myRef}/>
        <button onClick={addItem}>添加</button>
      </div>
      <br/>

      {
        list.map((item, index) => {
          return <TodoItem item={item} key={index} index={index} deleteItem={deleteItem} updateItem={updateItem}></TodoItem>
        })
      }
      <br />
      <br />
      <div>{num}</div>
      <button onClick={()=>{allData()}}>全部</button>
      <button onClick={()=>{isComplete()}}>完成</button>
      <button onClick={()=>{notComplete()}}>未完成</button>
    </div>
  );
}

// 列表的每一项
function TodoItem({item, index, deleteItem, updateItem}) {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{color: item.complete?'green':'red'}}>{item.action}</div>
      <button onClick={()=>{updateItem(index)}}>{item.complete?'完成':'未完成'}</button>
      <button onClick={()=>{deleteItem(index)}}>删除</button>
    </div>
  )
}

export default TodoList;
