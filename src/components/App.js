
import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [details, setDetails]  = useState({
    name: "",
    age: ""
  })

  const [dynamicFieldsData, setDynamicFieldsData] = useState([])

  let form = useRef(null)

  function handleAddMore(){
    let obj = {}
    let div = document.createElement("div")
    let input1 = document.createElement("input")
    input1.type = "text"
    input1.placeholder = "Name"
    input1.name = "name"
    input1.addEventListener("change", (e) => handleChange(e, obj))
    let input2 = document.createElement("input")
    input2.type = "text"
    input2.placeholder = "Age"
    input2.name = "age"
    input2.addEventListener("change", (e) => handleChange(e, obj))
    let button = document.createElement("button")
    button.innerText = "Remove"
    button.addEventListener("click", (e) => handleRemove(e, div))
    div.append(input1, input2, button)
    form.current.append(div)
  }

  function handleRemove(e, div){
    e.preventDefault()
    div.remove()
  }

  function handleChange(e, obj){
    if(e.target.name === "name"){
      obj.name = e.target.value
    }
    if(e.target.name === "age"){
      obj.age = e.target.value
    }
    //console.log(obj)
    setDynamicFieldsData(prev => {
      let filteredData = prev.filter(item => item !== obj)
      return [...filteredData, obj]
    })
  }
  
  function handleSubmit(){
    //e.preventDefault()
    // let set = new Set(dynamicFieldsData);
    // let arr = [...set];
    let data = [details, ...dynamicFieldsData];
    console.log(data)
  }

  // console.log(data)
  
  return (
    <div>
        <form ref={form}>
          <div id="initial">
            <input type="text" placeholder="Name" name="name" value={details.name} onChange={(e) => setDetails({...details, [e.target.name]: e.target.value})} />
            <input type="text" placeholder="Age" name="age" value={details.age} onChange={(e) =>setDetails({...details, [e.target.name]: e.target.value})} />
            <button onClick={(e) => {
              e.preventDefault()
              let div = document.querySelector("#initial")
              div.remove()
            }}>Remove</button>
          </div>
        </form>
        <br />
        <button onClick={handleAddMore}>Add More...</button>&nbsp;
        <button onClick={handleSubmit}>Submit</button>
        <p>After clicking submit, check console for data</p>
    </div>
  )
}

export default App
