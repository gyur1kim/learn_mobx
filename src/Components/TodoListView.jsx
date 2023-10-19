import { observer } from "mobx-react-lite";
import TodoView from "./TodoView";

const TodoListView = observer(({todoList}) => 
  <div>
    <ul>
      {todoList.todos.map(todo => 
        <TodoView todo={todo} key={todo.id} />
      )}
    </ul>
    남은 일 : {todoList.unfinishedTodoCount}
  </div>
)

export default TodoListView