import React from 'react'
import { useEffect,useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillCheckCircle} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
const Show = ({data}) => {
    const [students,setStudents]=useState([])


const fetchdata = async () => {
    const url = "https://wce-attendance.up.railway.app/api/get-all/";
    console.log(data.date);
    const send = {
        date:data.date,
        batch: data.batch,
        sub:data.sub
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
        </tr>
      </thead>
      <tbody>
      {students.map((student) => {
        console.log("hello");
        const { prn , present} = student;
        console.log(prn);
        return (
          <tr>
          <td>{prn}</td>
          <td><button  style={{fontSize:"1rem",color:"white"}}onClick={()=>handlePresent(prn)}>
              {present?<AiFillCheckCircle/>:<ImCross/>}
            </button></td>

        </tr>
        );
      }
      )
      }
        
        
      </tbody>
    </Table>

    </div>
  )
}

export default Show