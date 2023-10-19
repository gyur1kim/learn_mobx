import TodoList from './Stores/TodoListStore'
import Todo from './Stores/TodoStore'
import TodoListView from './Components/TodoListView'

const store = new TodoList([
  new Todo("Get Coffee"),
  new Todo("Write Simpler code")
]);

function App() {
  return (
    <TodoListView todoList={store} />
  )
}

export default App
