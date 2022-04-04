import React from 'react';
import CategoriesNav from './CategoriesNav';
import CategoryTag from './CategoryTag';

export default function AddTask({ addTaskToggle, setAddTaskToggle }) {
	return (
		<>
			<div className="addTaskCtn">
				<div className="addTaskHeader">
					<span onClick={setAddTaskToggle}>Cancel</span>
					<button onClick={setAddTaskToggle}>Add</button>
				</div>
				<div className="form-wrapper">
					<form>
						<div className="input-group-ctn">
							<label htmlFor="">Title</label>
							<input type="text" placeholder="add a title ..." />
						</div>
						<div className="input-group-ctn">
							<label htmlFor="">Description</label>
							<textarea placeholder="add a description ..." />
						</div>
					</form>
				</div>
				<div className="task-tags-wrapper">
					<h4>Tags</h4>
					<CategoriesNav></CategoriesNav>
				</div>
			</div>
			<style jsx>
				{`
					.addTaskCtn {
						display: ${addTaskToggle === true ? 'block' : 'none'};
						height: 100vh;
						background-color: var(--white);
						width: 100%;
						border-radius: 5px;
						padding: 10px;
						position: fixed;
						z-index: 50;
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
