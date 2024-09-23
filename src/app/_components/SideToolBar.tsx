"use client";
import React, { useEffect } from 'react'
import { useElementSlice } from '@tstudio/stores/elementProps'; 

const SideToolBar = () => {

  const width = useElementSlice((state) => state.width);
  const height = useElementSlice((state) => state.height);

  const setWidth = useElementSlice((state) => state.setWidth);
  const setHeight = useElementSlice((state) => state.setHeight);

  useEffect(() => {
   console.log(width, height);
  }, [width, height]);

  return (
    <aside className='fixed top-0 left-0 bg-slate-500 w-[20rem] h-[95%] m-5 z-[2] rounded-md p-3'>
        <label
            htmlFor='width'
        >
            Width
            <input 
                type='number' 
                id="width" 
                className='w-full 
                p-2 rounded-md my-2' 
                placeholder='Width' 
                onChange={(e) => setWidth(parseInt(e.target.value))}
                value={width}
            />
        </label>
        <label
            htmlFor='height'
        >
            Height
            <input 
                type='number' 
                id="height" 
                className='w-full p-2 rounded-md my-2' 
                placeholder='Height' 
                onChange={(e) => setHeight(parseInt(e.target.value))}
                value={height}
            />
        </label>
    </aside>
  )
}

export default SideToolBar