import React from "react";
import { Link } from 'react-router-dom'
import Images from '../Components/Images/Images'

export function Footer() {
    return (
    <>
        <footer className="flex justify-between bg-white p-4 relative">
            <div className="flex gap-20">
                <Link to="/"><img src={Images.home} alt="" /></Link>
                <Link to="/done"><img src={Images.done} alt="" /></Link>
            </div>
            <div className='flex justify-center'>
                <Link className='link text-white absolute bottom-5' to='/taskform'><img src={Images.add_task} alt="" /></Link>
            </div>
            <div className="flex gap-20">
                <Link to="/important"><img src={Images.important} alt="" /></Link>
                <Link to="/profile"><img src={Images.profile} alt="" /></Link>
            </div>
        </footer>
    </>
    )
    
}
