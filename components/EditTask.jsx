import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { useForm } from '../hooks/useForm';

import CategoryTag from './CategoryTag';
const categories = [
	{
		id: 111,
		name: 'work',
	},
	{
		id: 222,
		name: 'study',
	},
	{
		id: 333,
		name: 'entert',
	},
	{
		id: 444,
		name: 'family',
	},
];
export default function AddTask({
	id,
	title,
	description,
	editTaskToggle,
	setEditTaskToggle,
}) {
	const initialState = {
		title: title,

		description: description,
	};
	const [form, setForm] = useForm(initialState);
	const { tasks, setTasks } = useContext(TaskContext);
	const editTask = () => {
		setEditTaskToggle();

		setTasks([
			{
				...tasks,
				...form,
				id: id,
				title: form.title,
				description: form.description,
			},
		]);
	};
	return (
		<>
			<div className="addTaskCtn">
				<div className="addTaskHeader">
					<span onClick={setEditTaskToggle}>Cancel</span>
					<button onClick={editTask}>Edit</button>
				</div>
				<div className="form-wrapper">
					<form>
						<div className="input-group-ctn">
							<label htmlFor="">Title</label>
							<input
								type="text"
								name="title"
								value={form.title}
								onChange={setForm}
								placeholder="add a title ..."
							/>
						</div>
						<div className="input-group-ctn">
							<label htmlFor="">Description</label>
							<textarea
								name="description"
								value={form.description}
								onChange={setForm}
								placeholder="add a description ..."
							/>
						</div>
					</form>
				</div>
				<div className="task-tags-wrapper">
					<h4>Tags</h4>
					<nav className="categories-nav-ctn">
						{categories.map(({ id, name }) => (
							<CategoryTag key={id} name={name}></CategoryTag>
						))}
					</nav>

					<form>
						<label>Choose a car:</label>
						<select name="cars" id="cars" multiple>
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
						<br></br>
						<input type="button" value="Submit" />
					</form>
				</div>
			</div>
			<style jsx>
				{`
					.addTaskCtn {
						display: ${editTaskToggle === true ? 'block' : 'none'};
						height: 100vh;
						background-color: var(--white);
						width: 100%;
						border-radius: 5px;
						padding: 10px;
						position: fixed;
						z-index: 50;
						overflow: auto;
						left: 0;
						top: 0;
					}
					.addTaskHeader {
						display: flex;
						padding: 20px 0;
						justify-content: space-between;
						align-items: center;
					}
					.addTaskHeader span {
						cursor: pointer;
					}
					.addTaskHeader button {
						padding: 10px 30px;
						border: none;
						border-radius: 5px;
						background-color: var(--brown);
						color: var(--white);
						font-size: 14px;
						cursor: pointer;
					}
					.form-wrapper {
						padding: 20px 0;
					}
					.input-group-ctn {
						display: flex;
						flex-direction: column;
						margin-bottom: 10px;
					}
					.input-group-ctn label {
						font-weight: bold;
					}
					.input-group-ctn textarea,
					.input-group-ctn input {
						background-color: var(--tag-bg);
						border: none;
						padding: 10px;
						color: inherit;
						font-family: inherit;
					}
					.input-group-ctn textarea {
						resize: none;
						height: 170px;
					}
					.task-tags-wrapper {
						padding: 20px 0;
					}
				`}
			</style>
		</>
	);
}
