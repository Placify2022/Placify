import React, { useState, useEffect } from "react";
import data from './asset/data.json';
import JobBoardComponent from "./components/JobBoardComponent";
// console.log(data);
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(data), []);
 
  // useEffect(() => {
  //   fetch('./asset/data')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setJobs(data);
  //   });
  //   // setJobs(data);
  // }, []);
  // console.log(jobs);
  return (
    <div className='App'>

      <header className="bg-blue-500 mb-10 ">
        <img className= 'w-full' src='/images/background.png' alt='background' />
      </header>
      {
        jobs.length ===0?(
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map((job) => (
            <JobBoardComponent job={job} key={job.id}/>
          ))
        )
      }
     
    </div>
  );
}

export default App;
//  Todo
//1. study the design
//2.job board component
//3. get the data from Json
//4.pass down the data to the jbc
//5. style it
//6. filter Component
//7. filter the data 


