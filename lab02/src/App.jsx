import { useState } from 'react'



function App() {
  
    const [name,setName]=useState('')
  function handleClick(){
    setName(name)
  }
  function handleChange(e){
    setName(e.target.value);
  }

  const [a,setA]=useState(0)
  const [b,setB]=useState(0)

  const [result,setResult]=useState(0)
  function handleChangeA(e){
    setA(e.target.value);
  }
  function handleChangeB(e){
    setB(e.target.value);
  }
  function handleClickSum(){
    setResult(parseInt(a)+parseInt(b))
  }
  const [c,setC]=useState(0)
  const [d,setD]=useState(0)
  const [oper,setOper]=useState('')
  function handleChangeC(e){
    setA(e.target.value);
  }
  function handleChangeD(e){
    setB(e.target.value);
  }
  function handleChangetinh(){

  }
  return (
    <>
       <>
       <span>bai1</span>k
       <br />
      <input onChange={handleChange} type="text" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>{name}</span>
<br />
      <span>bai2</span>
       <br />

       <input type="text" onChange={handleChangeA} placeholder='nhap a' /><br />
       <input type="text" onChange={handleChangeB} placeholder='nhap b' /><br />
       <button onClick={handleClickSum}>Sum</button><br />
       <span>{result}</span><br />
       <span>bai3</span>
       <br />
       <input type="text" onChange={handleChangeC} placeholder='nhap c' /><br />
       <input type="text" onChange={handleChangeD} placeholder='nhap d' /><br />
       <input type="radio" value='+' name='group' onChange={handleChangetinh} /> <span>+</span>
       <input type="radio" value='-'name='group' onChange={handleChangetinh} /> <span>-</span>
       <input type="radio" value='*' name='group'onChange={handleChangetinh}/> <span>*</span>
       <input type="radio" value='/'name='group' onChange={handleChangetinh} /> <span>/</span><br />
       <button >Tinh</button><br />
       <span></span>









    </>
    </>
  )
}

export default App
