import React, { useState } from 'react'
function Slider() {
    const [Course, setCourse] = useState("")
    const [Year, setYear] = useState("0")
    function handleCourse(){
        var val = "http://ajs-nitmz-questionbank.epizy.com/" + Course + Year + ".html"
        console.log(val)
        window.location.href = val
    }
  return (
    <div>
    
    <div className="h-screen bg-rose-400 p-3 relative transition-opacity ease-in duration-1000 opacity-30 hover:opacity-100">
    <div className="w-96 mx-auto">
       
       <div className="">
          <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" defaultChecked />
         
          <div
             className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
             <img className="rounded-t-lg w-96 h-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qJRRWpLlK9_qdqKfn844DSkzjyDT97ItHQ&usqp=CAU" alt="" />
             <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">B.Tech
                </h1>
                <p className="hover:cursor-pointer py-3 text-gray-600 text-xs leading-6">
                   <input type={'radio'} name="Civil Engineering" onClick={() => setCourse("CE") } className='py-3' />Civil Engineering<br />
                   <input type={'radio'} name="Civil Engineering" onClick={() => setCourse("CSE") } className='py-3' />Computer Science and Engineering<br />
                   <input type={'radio'} name="Civil Engineering" onClick={() => setCourse("EEE") } className='py-3' />Electrical Engineering<br />
                   <input type={'radio'} name="Civil Engineering" onClick={() => setCourse("ECE") } className='py-3' />Electronics and Communication Engineering<br />
                   <input type={'radio'} name="Civil Engineering" onClick={() => setCourse("ME") } className='py-3' />Mechanical Engineering<br />
                </p>
                <div className='text-xs flex justify-center'>
                <select value={Year} id='selectbox' onChange={e => setYear(e.target.value)}>
                        <option value="0">SELECT YEAR</option>
                        <option value="1">FIRST</option>
                        <option value="2">SECOND</option>
                        <option value="3">THIRD</option>
                        <option value="4">FOURTH</option>
                    </select>
                    <button onClick={()=>handleCourse()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Button
                    </button>
                </div>
             </div>
            
             <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label htmlFor="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                   </svg>
                </label>
                <label htmlFor="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                   </svg>
                </label>
             </div>
          </div>
       </div>

       <div className="">
          <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
         
          <div
             className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
             <img className="rounded-t-lg w-96 h-64" src="https://collegevidya.com/blog/wp-content/uploads/2021/09/what-is-m-tech-master-of-technology.jpg" alt="" />
             <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                  M.Tech
                </h1>
                <p className="hover:cursor-pointer py-3 text-xs text-gray-600 leading-6">
                <input type={'radio'} name="Civil Engineering" className='py-3' />Civil Engineering<br />
                   <input type={'radio'} name="Civil Engineering" className='py-3' />Computer Science and Engineering<br />
                   <input type={'radio'} name="Civil Engineering" className='py-3' />Electrical Engineering<br />
                   <input type={'radio'} name="Civil Engineering" className='py-3' />Electronics and Communication Engineering<br />
                   <input type={'radio'} name="Civil Engineering" className='py-3' />Mechanical Engineering<br />
                </p>
                <div className='text-xs flex justify-center'>
                <select>
                        <option value="0">SELECT YEAR</option>
                        <option value="1">SECOND</option>
                        <option value="2">THIRD</option>
                        <option value="3">FOURTH</option>
                    </select>
                </div>
                <div className='text-xs flex justify-center my-4'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Button
                    </button>
             </div>
             </div>
          
             <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label htmlFor="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                   </svg>
                </label>
                <label htmlFor="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                   </svg>
                </label>
             </div>
          </div>
       </div>
      
       <div className="">
          <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" />
          
          <div
             className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
             <img className="rounded-t-lg w-96 h-64" src="https://www.shutterstock.com/image-photo/phd-doctor-philosophy-degree-education-260nw-524863171.jpg" alt="" />
             <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                  PHD
                </h1>
                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Hang on..! It'll be live soon...!! :)
                </p>
             </div>
           
             <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label htmlFor="carousel-2" className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                   </svg>
                </label>
                <label htmlFor="carousel-1" className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                   </svg>
                </label>
             </div>
          </div>
       </div>
    </div>
 </div>
</div>
  )
}

export default Slider