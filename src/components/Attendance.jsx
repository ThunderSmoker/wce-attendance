import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillCheckCircle} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
const Attendance = ({ data }) => {
  const [students, setStudents] = useState([]);
  
  const handlePresent=async(prn)=>{
    const url = "https://wce-attendance.up.railway.app/api/attendance/";
    const send = {
      date:data.date,
      prn:prn,
      batch: data.batch,
      sub:data.sub,
      present:"True"
    };
    try {
      const res = await axios({
        method: "POST",
        url: url,
        data: send,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  const handleAbsent=async(prn)=>{
    const url = "https://wce-attendance.up.railway.app/api/attendance/";
    const send = {
      date:data.date,
      prn:prn,
      batch: data.batch,
      sub:data.sub,
      present:"False"
    };
    try {
      const res = await axios({
        method: "POST",
        url: url,
        data: send,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  const fetchdata = async () => {
    const url = "https://wce-attendance.up.railway.app/api/get-batch/";
    const send = {
      batch: data.batch,
    };
    try {
      const res = await axios({
        method: "POST",
        url: url,
        data: send,
        
      });
      console.log(res.data);
      setStudents(res.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Table striped className='table' style={{width:"45rem"}}>
      <thead>
        <tr>
          <th><strong>PRN</strong></th>
          <th><strong>Present</strong></th>
          <th><strong>Absent</strong></th>
        </tr>
      </thead>
      <tbody>
      {students.map((student) => {
        console.log("hello");
        const { prn } = student;
        console.log(prn);
        return (
          <tr>
          <td>{prn}</td>
          <td><button style={{fontSize:"1rem",color:"green"}} onClick={()=>handlePresent(prn)}>
              <AiFillCheckCircle/>
            </button></td>
          <td><button style={{fontSize:"1rem",color:"red"}} onClick={()=>handleAbsent(prn)}>
              <ImCross/>
            </button></td>

        </tr>
        );
      }
      )
      }
        
        
      </tbody>
    </Table>
     
    </div>
  );
};

export default Attendance;
