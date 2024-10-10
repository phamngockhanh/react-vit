const TodoNew =(props)=>{
    console.log(">>>>check",props);
    const {addNewTodo} = props;
    addNewTodo("ditmemay");
    return(
        <div className='todo-new'>
            <input type='text'/>
            <button>Add</button>
        </div>
    );
}
export default TodoNew;