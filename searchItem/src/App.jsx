
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

const App=()=>{
  const [input,setInput]=useState([]);
    const [record, setRecord] = useState(input);

useEffect(()=>{
  const fetchData=async (value)=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users", {
         headers: { accept: "application/json" }})
      setInput(await res.data);
       console.log(await res.data);
       setRecord(await res.data)
       
      };
      fetchData();
      },[]);
  
  const handleChange=(e)=>{
    setRecord(input.filter((f)=>{ return (f.name.toLowerCase().includes(e.target.value))}))
   
   
  }
  return (
    <>
      <div className="search-bar">
      
        <div>
          <input
            className="input"
            type="text"
            placeholder="search bar"
         
            onChange={handleChange}
          />
        </div>
        <div className='bar'>
          <table style={{borderRadius:"black solid 1"}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>USERNAME</th>
              </tr>
            </thead>
            <tbody>
              {record.map((arr, index) => {
                return (
                  <tr key={index}>
                    <td>{arr.id}</td>
                    <td>{arr.name}</td>
                    <td>{arr.username}</td>
                    <td>{arr.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default App
