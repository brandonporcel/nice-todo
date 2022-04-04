import React from 'react';
import TaskCss from '../styles/Task.module.css';
import MoreSvg from './MoreSvg';
import TagDot from './TagDot';
export default function Task({ title, description }) {
	return (
		<article className={TaskCss.taskWrapper}>
			<header className={TaskCss.headerCtn}>
				<h4>{title}</h4>
				<MoreSvg />
				<div className={TaskCss.taskDetailsCtn}>
					<div className={TaskCss.editCtn}>Edit...</div>
					<span className={TaskCss.deleteCtn}>Delete</span>
				</div>
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
					<label htmlFor="done-check">done</label>
					<input type="checkbox" id="done-check" />
				</div>
			</footer>
		</article>
	);
}
