import React from 'react'
import { useState } from 'react';

export const Cards = ({username, post="PM-MM" , setColor}) => {
    const [color , setColorr] = useState("olive")

    console.log(username);
  return (
    <div class="flex items-center  flex-col mt-10" style={{backgroundColor:color}}>
          <img className="h-20  w-20  rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div className='mt-3' >
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{username}</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">{post}</p>
            <div className='flex gap-1 p-3 flex-wrap rounded-lg'
            style={{backgroundColor:"white"}}>
            <button onClick={() => { setColorr("pink");
                                     setColor("purple");
                        
            }}
             className='bg-pink-400 text-white px-4  rounded-full shadow-lg'>pink </button>
            <button onClick={() => { setColorr("white");
                                     setColor("#1057b5");
                        
            }}
             className='bg-blue-600 text-white px-4 py-1 rounded-full shadow-lg'>blue</button>
            <button  onClick={() => { setColorr("#2abfb2");
                                     setColor("#055989");
                        
            }}
             className='bg-purple-400 text-white px-4 py-1 rounded-full shadow-lg'>purple </button>
            </div>
          </div>
        </div>
  )
}
  