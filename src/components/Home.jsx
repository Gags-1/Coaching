import React from 'react'
import student from "../assets/student.png"

const Home = () => {
  return (
    <div>
      <div className="w-full flex justify-evenly p-10 items-center">
        <div className='Font w-[500px] text-[44px]'>
          Unleash your potential, transform your life.
        </div>
        <div className="">
          <img src={student} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
