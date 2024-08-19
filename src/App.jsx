import { useState } from 'react'
import AppTask from './components/AppTask'
import Todo from './components/Todo'



function App() {
  const [taskList, setTaskList] = useState([])
   
  return (
  <>
  <h1 className=' text-2xl font-bold py-4 pl-6'>Task Tracker</h1>
  <div className='flex flex-row items-center'>
  <p className='text-2xl pl-6'>click</p>
  <AppTask  taskList={taskList} setTaskList={setTaskList}/>
  <p className='text-2xl my-2'> to add a new Task</p>
  </div>
  <div>
    <h2 className="ml-6 text-xl w-3/4 max-w-lg py-1 px-2 font-semibold bg-gray-300"> To do</h2>
    {taskList.slice(0).reverse().map((task,i) =>
       <>
       <Todo key={new Date().getTime()} task={task} index={1} taskList={taskList} setTaskList={setTaskList}/>
       </>
   )}
   </div>
   
   
  </>
  )
}

export default App
