import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';
import useToggle from '../hooks/useToggle';
import TaskCss from '../styles/Task.module.css';
import MoreSvg from './MoreSvg';
import EditTask from './EditTask';
import TagDot from './TagDot';
export default function Task({ id, title, description, tag }) {
	const [detailsShow, setDetailsShow] = useState(false);
	const [editTaskToggle, setEditTaskToggle] = useToggle(false);
	const showDetails = () => setDetailsShow((prev) => !prev);
	const { tasks, setTasks } = useContext(TaskContext);
	const deleteTask = () => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	return (
		<article className={TaskCss.taskWrapper}>
			<header className={TaskCss.headerCtn}>
				<h4>{title}</h4>
				<MoreSvg showDetails={showDetails} />
				<div
					className={TaskCss.taskDetailsCtn}
					style={{ display: `${detailsShow === false ? 'none' : 'flex'}` }}
				>
					<div onClick={setEditTaskToggle} className={TaskCss.editCtn}>
						Edit...
					</div>
					<span onClick={deleteTask} className={TaskCss.deleteCtn}>
						Delete
					</span>
				</div>
				<EditTask
					id={id}
					title={title}
					description={description}
					editTaskToggle={editTaskToggle}
					setEditTaskToggle={setEditTaskToggle}
				></EditTask>
			</header>
			<div className={TaskCss.descripCtn}>
				<p> {description} </p>
			</div>
			<footer className={TaskCss.footer}>
				<div className={TaskCss.taskTagsCtn}>
					<TagDot tag="study"></TagDot>
					<TagDot tag="work"></TagDot>
				</div>
				<div className={TaskCss.taskCheckCtn}>
					<label htmlFor={`${title}-a`}>done</label>
					<input type="checkbox" id={`${title}-a`} />
				</div>
			</footer>
		</article>
	);
}
