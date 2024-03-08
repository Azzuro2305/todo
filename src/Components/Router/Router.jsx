import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { Notifications } from '../../Pages/Notifications';
import { CategoryForm } from '../../Pages/CategoryForm';
import { TaskForm } from '../../Pages/TaskForm';
import { Profile } from '../../Pages/Profile';
import { Important } from '../../Pages/Important';
import { Done } from '../../Pages/Done';


export function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/notifications" element={<Notifications />} ></Route>
          <Route path="/categoryform" element={<CategoryForm />} ></Route>
          <Route path="/categoryform/:id" element={<CategoryForm />} ></Route>
          <Route path="/taskform" element={<TaskForm />} ></Route>
          <Route path="/taskform/:id" element={<TaskForm />} ></Route>
          <Route path="/profile" element={<Profile />} ></Route>
          <Route path="/important" element={<Important />} ></Route>
          <Route path="/done" element={<Done />} ></Route>
        </Routes>
      </BrowserRouter>
  )
}
