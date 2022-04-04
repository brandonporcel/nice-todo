import React from 'react';
import useToggle from '../hooks/useToggle';
import HeaderCss from '../styles/Header.module.css';
import AddSvg from './AddSvg';
import AddTask from './AddTask';
export default function Header() {
	const [addTaskToggle, setAddTaskToggle] = useToggle(false);
	return (
		<header
			style={{ padding: `${addTaskToggle === true ? 0 : '20px 0'}` }}
			className={HeaderCss.header}
		>
			<h1>todo</h1>
			<div className={HeaderCss.addSvgCtn}>
				<AddSvg setAddTaskToggle={setAddTaskToggle} />
			</div>
			<AddTask
				addTaskToggle={addTaskToggle}
				setAddTaskToggle={setAddTaskToggle}
			></AddTask>
		</header>
	);
}
