import React from 'react'
import { Link } from 'react-router-dom';
import Images from '../Components/Images/Images'

export function Done() {
  return (
    <>
    <section className="px-10 py-20 w-[430px] h-[932px] bg-gray-500">
        <div>
            <Link className="link" to="/">
                <img src={Images.back_arrow} alt="" />
            </Link>
            <h1 className="mt-6 mb-8 font-bold">Done</h1>
        </div>
    </section>
  </>
  )
}
