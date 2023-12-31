import { observer } from "mobx-react-lite";

const TodoView = observer(({todo}) => 
	<li>
		<label>
			<input
				type="checkbox"
				defaultChecked={todo.isFinished}
				onClick={() => todo.toggle()}
			/>
			{todo.title}
		</label>
	</li>
)

export default TodoView