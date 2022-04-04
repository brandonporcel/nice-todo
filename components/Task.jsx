import React, { useState } from 'react';
import TaskCss from '../styles/Task.module.css';
import MoreSvg from './MoreSvg';
import TagDot from './TagDot';
export default function Task({ title, description }) {
	const [detailsShow, setDetailsShow] = useState(false);
	const showDetails = () => setDetailsShow((prev) => !prev);
	return (
		<article className={TaskCss.taskWrapper}>
			<header className={TaskCss.headerCtn}>
				<h4>{title}</h4>
				<MoreSvg showDetails={showDetails} />
				<div
					className={TaskCss.taskDetailsCtn}
					style={{ display: `${detailsShow === false ? 'none' : 'flex'}` }}
				>
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
					<label htmlFor={`${title}-a`}>done</label>
					<input type="checkbox" id={`${title}-a`} />
				</div>
			</footer>
		</article>
	);
}
