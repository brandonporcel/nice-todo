import React from 'react';

export default function TagDot({ tag }) {
	return (
		<>
			<div className="dot"></div>
			<style jsx>{`
				.dot {
					display: inline-block;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					margin-right: 5px;
					background-color: ${tag == 'study'
						? 'var(--light-blue)'
						: tag == 'work'
						? 'var(--purple)'
						: tag == 'family'
						? 'var(--green)'
						: tag == 'entert'
						? 'var(--pink)'
						: 'black'};
				}
			`}</style>
		</>
	);
}
