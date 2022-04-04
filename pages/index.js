import CategoriesNav from '../components/CategoriesNav';
import Task from '../components/Task';

export default function Home() {
	return (
		<>
			{/* 426px ancho */}
			<CategoriesNav />
			<div className="main-content">
				<Task
					title={'Partido Mundial arg'}
					description="lorpem kdfekrek kdfekrek kdfekrek"
				/>
				<Task
					title={'Partido Mundial arg'}
					description="lorpem kdfekrek kdfekrek kdfekrek"
				/>
				<Task
					title={'Partido Mundial arg'}
					description="lorpem kdfekrek kdfekrek kdfekrek"
				/>
				<Task
					title={'Partido Mundial arg'}
					description="lorpem kdfekrek kdfekrek kdfekrek"
				/>
			</div>
			<style jsx>
				{`
					.main-content {
						grid-area: main-content;
						padding: 20px 0;
					}
				`}
			</style>
		</>
	);
}
