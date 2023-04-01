import React, { useState } from 'react'
import Card from './Card';


function Cards(props) {
    let courses = props.courses;
    let category=props.category;
    // console.log("printing the data")
    // console.log(courses);

    const[LikedCourse,setLikedCourse]=useState([])

    function getCourses(){
        if(category==="All"){
        let allCourses=[]
        Object.values(courses).forEach(array=>{
            array.forEach(coursesData=>{
                allCourses.push(coursesData)
            })
        })
        return allCourses;
        }
        else{
            return courses[category]
        }

    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4' >
        {
            getCourses().map( (course)=>(
                <Card key={course.id} course={course} LikedCourse={LikedCourse} setLikedCourse={setLikedCourse}/>

            ))
        }
    </div>
  )
}

export default Cards