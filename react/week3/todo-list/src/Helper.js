const getNextId = (todos) => {
  const lastTodo = todos[todos.length - 1];
  const nextId = lastTodo === undefined ? 1 : lastTodo.id + 1;
  //const nextId = Math.max(...todos.map((item) => item.id)) + 1;
  return nextId;
};

export { getNextId };
