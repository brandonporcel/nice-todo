import { useContext } from 'react';
import CategoriesNav from '../components/CategoriesNav';
import Task from '../components/Task';
import TaskContext from '../context/TaskContext';

export default function Home() {
	const { tasks } = useContext(TaskContext);

	return (
		<>
			{/* 426px ancho */}
			<CategoriesNav />
			<div className="main-content">
				{tasks.length === 0
					? 'No Tasks. Add a new one!'
					: tasks.map(({ id, title, description, tag }) => (
							<Task
								key={id}
								id={id}
								title={title}
								description={description}
								tag={tag}
							/>
					  ))}
			</div>
			<style jsx>
				{`
					.main-content {
						grid-area: main-content;
						padding: 20px 0;
					}
				`}
			</style>
		</>
	);
}
