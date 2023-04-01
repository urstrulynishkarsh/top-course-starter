import React from 'react'

const Filter=(props)=> {
  let filterData=props.filterData;
  let category=props.category;
  let setcategory=props.setcategory;

  function filterHandler(title){
    setcategory(title)
  }
  return (
    <div className='flex w-11/12 flex-wrap max-w-max  space-x-4 py-4 mx-auto py-4 justify-center '>
        {
            filterData.map((data)=>{
                return(
                <button onClick={()=>filterHandler(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white hover:bg-opacity-50 border-2 transition-all duration-200 bg-orange-300 ${category===data.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`} key={data.id}>{data.title}</button>
                )

            })
        }
    </div>
  )
}

export default Filter