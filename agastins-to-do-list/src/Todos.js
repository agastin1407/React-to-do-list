

function Todos({todos,deleteTask}){

    const taskList = todos.length ? (
        todos.map(task =>{
            return(
                <div className="collection-item" key={task.id}>
                    <span onClick={()=>{deleteTask(task.id)}}>{task.content}</span>
                </div>
            )
        })
    ) : (
        <h6 className="center red-text">You have no tasks to commit</h6>
    )
        return(
            <div className="tasks collection">
                {taskList}
            </div>
        )
    }


export default Todos;