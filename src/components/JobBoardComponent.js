import React from 'react';
const JobBoardComponent = ({job}) => (
    // <div>
    //     <h1 className='text-3xl'>{job.company}</h1>
    //     <p>Hi, I am a Job Board</p>
    //     </div>
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-blue-700 border-solid' } ${job.isnew && 'border-l-4 border-blue-400 border-solid' }`}>
        <div >
            <img className="-mt-16 mb-4 w-30 h-20  "  src = {`${job.logo}`} alt = {job.company}/>
        </div>
        <div className='flex flex-col justify-between ml-4'>
            <h3 className='font-bold text-purple-500 ' >{job.company}{job.isnew &&(<span className= " bg-blue-500 text-blue-100 font bold py-1 px-2 ml-1 rounded-full">New</span>)} {job.featured && <span className= "bg-gray-800 text-white  py-1 px-2 rounded-full">Featured</span>}</h3>
            <h2 className='font-bold text-xl my-2'>{job.position}</h2>
            <h2><span className='flex justify-end mr-5 -mt-10 ' ><button type="button" className=" text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-3 px-3 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold">
    <a href ={job.links}>Visit</a>
    <svg class="w-5 h-5 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button></span></h2>
            <p className='text-gray-500 '>
                {job.Posted} . {job.contract} .  {job.location}
            </p>
        </div>
        <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-200 border-solid'>
            {job.languages?job.languages.map((language) => <span className='text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded'>
                {language}</span>) : ''}
          
        </div>

    </div>

);
export default JobBoardComponent;