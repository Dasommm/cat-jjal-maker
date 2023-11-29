import CatItem from "./CatItem";

function Favorites({ favorites }) {
	if (favorites.length === 0) {
		return <div style={{color:"red", fontSize:'10pt'}}> 이미지 우측 하단의 하트 버튼을 눌러 즐겨찾기로 저장해보세요!</div>;
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
