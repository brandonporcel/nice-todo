import React from 'react';

import TagDot from './TagDot';
export default function CategoryTag({ name }) {
	return (
		<>
			<div className="tagCtn">
				<TagDot tag={name}></TagDot>
				<span>{name}</span>
			</div>
			<style jsx>{`
				.tagCtn {
					margin-right: 15px;
					padding: 5px 10px 0 0;
					border-radius: 5px;
					background-color: var(--tag-bg);

					font-size: 15px;
					line-height: 1.5;
					cursor: pointer;
					display: flex;
					min-width: 75px;
					max-width: min-content;
					align-items: center;
					justify-content: space-around;
					text-transform: lowercase;
					border-radius: 10px;
				}
			`}</style>
		</>
	);
}
