import { createContext, useState } from 'react';
const TaskContext = createContext();
const initialState = [
	{
		id: 1,
		title: 'Task 1',
		description: 'This is task 1',
		status: 'pending',
		tag: ['work', 'study'],
	},
];
const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(initialState);

	const data = { tasks, setTasks };
	return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>;
};

export { TaskProvider };
export default TaskContext;
