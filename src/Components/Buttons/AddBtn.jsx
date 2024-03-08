import React from 'react'

export function AddBtn({txt}) {
  return (
    <>
      <input className='m-bottom text-center text-white bg-black w-[350px] block fixed bottom-10 p-3 rounded-lg' type="submit" value={txt}/>
    </>
  )
}
