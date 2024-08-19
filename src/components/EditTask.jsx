import React, { useEffect, useState } from 'react'

const EditTask = ({task, index, taskList, setTaskList}) => {
    const[editModal , setEditModal]= useState(false)
    const [projectName, setProjectName]= useState("")
    const [taskDescription, setTaskDescription]=useState("")
     
    
    useEffect(() => {
         setProjectName(task.projectName)
         setTaskDescription(task.taskDescription)
    },[task])

    const handleInput=e=>{
        const {name, value}= e.target;

        if (name==="projectName") setProjectName(value)
        if (name==="taskDescription") setTaskDescription(value)
    }

    const handleUpdate=e=>{
        e.preventDefault();
        let taskIndex= taskList.indexOf(task)
        taskList.splice(taskIndex,1)
        setTaskList(
            [...taskList,{projectName , taskDescription}]
         );
       setEditModal(false);
        }
  
  return (
    <div>
        <button className='bg-gray-500 text-white
                           text-sm-uppercase font-semibold
                           py-1.5 px-3 rounded-lg' 
                           onClick={()=>setEditModal(true)}>
            Edit

        </button>
        {editModal ? (
            <>
             <div className=' flex items-center justify-center overflow-x-hidden overfl0w-y-auto
                                       fixed inset-0 z-10'>
                         <div className=' w-9/12 bg-white rounded-lg shadow-md relative flex flex-col'>
                           <div className='  flex flex-row justify-between
                                           p-5 border-b border-slate-200 rounded-b'>
                                <h3 className='bg-white font-bold'>Edit Task</h3>
                                       <button className='px-1 text-gray-400 float-right text-3xl
                                                leading-none font-semibold block '
                                                  onClick={()=>
                                                     setEditModal(false)}
                                        >
                                       X
                                        </button>
                         </div>
                            <form className='px-6 pt-6 pb-4'>
                                 <div>
                                      <label className='track-wide uppercase text-gray-700 
                                            text-xs font-semibold mb-2 block ' htmlFor='project-name'>Project name
                                      </label>
                                      <input className='w-full bg-gray-200 text-gray-700 
                                            rounded py-3 mb-5 leading-tight focus:outline-none
                                            focus-bg-white '
                                            type='text'
                                            id='project-name'
                                            name='projectName'
                                            value={projectName}
                                            onChange={handleInput}
                                            placeholder='Project name' required
                                       />
                                    </div>
                                    <div>
                                    <label className='track-wide uppercase text-gray-700 
                                            text-xs font-semibold mb-2 block ' htmlFor='task-description'>Task Description
                                      </label>
                                     <textarea
                                        className='w-full bg-gray-200 text-gray-700 
                                        rounded py-3 mb-5 leading-tight focus:outline-none
                                        focus-bg-white '
                                        id='task-description'
                                        name='taskDescription'
                                        value={taskDescription}
                                        onChange={handleInput}
                                        rows='3'
                                        placeholder='Task Description'
                                         required
                                     />
                                    </div>
                                    
                            </form>
                            <div className='flex justify-end p-6 border-t border-slate-200 rounded-b'>
                                <button className='bg-blue-500 text-white font-semibold
                                 text-sm px-3 py-3 rounded hover:opacity-70
                                 ' onClick={handleUpdate}>
                                   UPDATE TASK
                                </button>
                            </div>
                        </div>
                    </div>
                        
            </>
         ): null
         }
    </div>
  )
}

export default EditTask