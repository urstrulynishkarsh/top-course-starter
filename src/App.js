import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const[courses,setcourses]=useState([]);
  const[loader,setloader]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);


  // calling api async
  async function fetchData(){
    setloader(true);
    try{
      let response=await fetch(apiUrl)
      let output=await response.json()
      setcourses(output.data);

    }
    catch(error)
    {
      toast.error("Network error")
    }
    setloader(false);
  }
    
useEffect(() => {
  fetchData()
},[])


  return( 

  
  <div className="min-h-screen flex bg-bgDark2 flex-col">
    <div>
    <Navbar/>
    </div>
    <div >
    <div>
    <Filter filterData={filterData} category={category} setcategory={setcategory}/>
    </div>

    <div className=" w-11/12 max-w-[1200px] mx-auto flex-wrap flex justify-center min-h-[50vh] items-center">
      {
        loader?(<Spinner/>):(<Cards category={category} courses={courses}/>)
      }
    </div>
    </div>
    
    
    
    
    </div>
    );
};

export default App;
