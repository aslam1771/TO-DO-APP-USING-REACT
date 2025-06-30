import React from 'react'

const List = ({task,index,removeTask}) => {
  return (
    <>
    <div className='list-task'>
        
           {task.title}
            <button onClick={()=>{removeTask(index)}} className='delete-button'>DELETE</button>
        </div>

    </>
  )
}

export default List