import EkatAlina from "./EkatAlina"
import WomanBiography from "./WomanBiography"

const MainBlock = () => {
	const persons = {
		woman1: {
			profession: 'Адвокат',
			name: 'Сивкова Екатерина Алексеевна',
			description: 'Имею многолетний опыт работы по следующим направлениям: семейные споры, наследственные споры, любые вопросы по недвижимости (узаконение, сделки), арбитраж, корпоративные споры, административные и уголовные дела.',
			blockquote: '-“Моя работа - защита ваших прав и законных интересов по букве закона”',
		},
		woman2: {
			profession: 'Юрист',
			name: 'Абдрахманова Алина Рамилевна',
			description: 'Стаж работы более 15 лет в различных отраслях права: гражданского, арбитражного, наследственного, семейного и др. Услуги предоставляю во всех судебных инстанциях Республики Башкортостан и по всем регионам России',
			blockquote: '-“Приоритетом моей профессиональной деятельности являются интересы доверителя!”',
		},
	}
	return (
		<section className="main-block">
			<div className="main-block__images">
				<img className="main-block__images__img1" src="src/assets/images/whiteWoman.png" alt="" />
				<h1 className="main-text">Профессиональные юридические услуги</h1>
				<img className="main-block__images__img2" src="src/assets/images/blackWoman.png" alt="" />
			</div>
			<div className="main-block__gray-block">
				<WomanBiography 
					profession={persons.woman1.profession}
					name={persons.woman1.name}
					description={persons.woman1.description}
					blockquote={persons.woman1.blockquote}
				/>
				<EkatAlina />
				<WomanBiography 
					profession={persons.woman2.profession}
					name={persons.woman2.name}
					description={persons.woman2.description}
					blockquote={persons.woman2.blockquote}
				/>
			</div>
		</section>
	)
}

export default MainBlock