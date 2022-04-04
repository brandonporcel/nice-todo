import React from 'react';
import HeaderCss from '../styles/Header.module.css';
import AddSvg from './AddSvg';
export default function Header() {
	return (
		<header className={HeaderCss.header}>
			<h1>todo</h1>
			<div className={HeaderCss.addSvgCtn}>
				<AddSvg color="var(--brown)" />
			</div>
		</header>
	);
}
