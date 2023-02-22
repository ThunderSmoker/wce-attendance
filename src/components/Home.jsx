import React from "react";
import { useState } from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
const Home = ({setdata}) => {
  const navigate = useNavigate();
  let today = new Date().toLocaleDateString();
  const [metaId, setMetdaId] = useState(today);
  const [values, setValues] = useState("CN");
  const [batch, setBatch] = useState("s4");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("btn");
    btn.classList.add("focus");

    setTimeout(() => {
      btn.classList.remove("focus");
    }, 500);
    console.log({
      date: metaId,
      values: values,
      batch:batch
    });
    setdata({
        "date":metaId,
        "sub":values,
        "batch":batch
    })
    console.log(metaId);
    navigate("/attendance");
  };
  const handleShow = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("btn1");
    btn.classList.add("focus");

    setTimeout(() => {
      btn.classList.remove("focus");
    }, 500);
    navigate("/show");
  };
  return (
    <div style={{margin:"5rem"}} className="content">
      <div style={{margin:"2rem"}}>

      <h1 style={{color:"black"}}>ATTENDANCE WCE</h1>
      </div>
      <form action="">
        <div>
          <div>
            <label htmlFor="user-id" style={{color:"black"}}>Date</label>
          </div>
          <input
            type="date"
            placeholder="Date"
            name="user-id"
            color="black"
            value={metaId}
            onChange={(e) => setMetdaId(e.target.value)}
            autoComplete
            required
            style={{
              width: "10rem",
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor="sub"  style={{color:"black"}}>Subject</label>
          </div>
          <select
            name="sub"
            id=""
            value={values}
            onChange={(e) => setValues(e.target.value)}
            style={{
              width: "11rem",
            }}
          >
            <option value="CN">CN</option>
            <option value="CN-LAB">CN-lab</option>
            <option value="PL-2">Pl-2</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="batch"  style={{color:"black"}}>Batch</label>
          </div>
          <select
            name="batch"
            id=""
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            style={{
              width: "11rem",
            }}
          >
            <option value="s4">s4</option>
            <option value="s2">s2</option>
            <option value="s1">s1</option>
          </select>
        </div>
        <div>
        <button id='btn' style={{marginTop:"1rem",color:"white"}} onClick={handleSubmit}>Submit</button>

        </div>
        <div>

        <button  id='btn1'  style={{marginTop:"1rem",color:"white"}} onClick={handleShow}>Show Attendance</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
