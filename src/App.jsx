import TodoList from './Stores/TodoListStore'
import Todo from './Stores/TodoStore'

import TodoListView from './Components/TodoListView'
import ComputedTotal from './Components/OrderLine';

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write Simpler code")
]);

function App() {
  return (
    <>
      <TodoListView todoList={store} />
      <hr />
      <ComputedTotal />
    </>
  )
}

export default App
