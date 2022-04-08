import React from 'react';
import CategoryTag from './CategoryTag';
const categories = [
	{
		id: 11,
		name: 'work',
	},
	{
		id: 22,
		name: 'study',
	},
	{
		id: 33,
		name: 'entert',
	},
	{
		id: 43,
		name: 'family',
	},
];
export default function CategoriesNav() {
	return (
		<>
			<nav className="categories-nav-ctn">
				{categories.map(({ id, name }) => (
					<CategoryTag key={id} name={name}></CategoryTag>
				))}
			</nav>

			<style jsx>{`
				.categories-nav-ctn {
					display: grid;
					/* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
					grid-template-columns: repeat(auto-fit, 100px);
					grid-area: categories-nav;
				}
			`}</style>
		</>
	);
}
