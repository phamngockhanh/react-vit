const TodoContent = (props) => {
  // const {name,age,country} =props;
  const { name, age, country } = props;

  console.log("check props", props);

  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div>Learning React </div>
      <div>Watching Youtube</div>
    </div>
  );
};
export default TodoContent;
