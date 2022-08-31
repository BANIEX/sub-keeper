import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function UsersFeed() {
  const [data, setData] = useState("hello")

  const fetchData = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(()=>{
    // setData("nice one")
    fetchData();

    
  }, [])



  return (
    <div> <div>{data}</div>
    <button onClick={() => setData("nice one")}>click me</button>


    </div>
  )
}
