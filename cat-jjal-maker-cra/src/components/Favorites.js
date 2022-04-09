import CatItem from "./CatItem";

function Favorites({ favorites }) {
	if (favorites.length === 0) {
		return <div> 즐겨찾기 저장해보세여</div>;
	}

	return (
		<ul className="favorites">
			{favorites.map((cat) => (
				<CatItem img={cat} key={cat} />
			))}
		</ul>
	);
}

export default Favorites;
