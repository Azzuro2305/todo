import React from 'react'
import Images from '../Components/Images/Images'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header>
        <section className='flex justify-between'>
          <div>
            <Link className="link" to="/"><img src={Images.menu} alt="" /></Link>
          </div>
          <nav>
            <ul className='flex gap-8'>
              <li>
                <button><img src={Images.search} alt="" /></button>
              </li>
              <li>
                <Link className="link bg-[#242627]" to="/notifications"><img className='rounded-[40px]' src={Images.bell} alt="" /></Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  )
}
