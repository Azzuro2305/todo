import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Task } from '../Components/Task/Task'
import Images from '../Components/Images/Images'
import axios from "axios";

export function TaskContainer() {
  const [tasks, setTasks] = useState([])
  const apiUrl = "http://localhost:8080/tasks";
  useEffect(() => {
    axios
   .get(apiUrl)
   .then((res) => {
        setTasks(res.data);
      })
   .catch((error) => console.error.apply(error));
  }, []);
  return (
    <>
    <div className='overflow-y-scroll mt-4 rounded-lg h-[500px]'>
      <h2 className='font-bold mb-4'>Today's Tasks</h2>
        <div className='flex flex-col gap-2 task-container'>
          {
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  txt={task.label}
                  id={task.id}
                />
              )
            })
          }
        </div>
    </div>
    </>
  )
}
