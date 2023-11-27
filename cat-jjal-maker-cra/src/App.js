import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";

const jsonLocalStorage = {
	setItem: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	},
	getItem: (key) => {
		return JSON.parse(localStorage.getItem(key));
	},
};

const fetchCat = async (text) => {
	const OPEN_API_DOMAIN = "https://cataas.com";
	const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
	const responseJson = await response.json();
	return `${OPEN_API_DOMAIN}/cat/${responseJson._id}`;
};

console.log("야옹");
// import { css, jsx } from "@emotion/react";

// function TestCss() {
// 	return (
// 		<div
// 			css={css`
// 				padding: 32px;
// 				background-color: hotpink;
// 				font-size: 24px;
// 				border-radius: 4px;
// 				&:hover {
// 					color: ${color};
// 				}
// 			`}>
// 			Hover to change color.
// 		</div>
// 	);
// }

const App = () => {
	const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
	const CAT2 = "https://cataas.com//cat/VKsaYlVRCMgrCL9Z";
	const CAT3 =
		"https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";
	// const [counter, setCounter] = React.useState(
	// 	jsonLocalStorage.getItem("counter")
	// );
	const [counter, setCounter] = React.useState(() => {
		return jsonLocalStorage.getItem("counter");
	});
	// const counter = counterState[0];
	// const setCounter = counterState[1];
	const [catChange, setCatChange] = React.useState(CAT1);
	// const [favorites, setFavorites] = React.useState(
	// 	jsonLocalStorage.getItem("favorites") || []
	// );
	const [favorites, setFavorites] = React.useState(() => {
		return jsonLocalStorage.getItem("favorites") || [];
	});

	const alreadyFavorite = favorites.includes(catChange);

	async function setInitialCat() {
		const newCat = await fetchCat("first cat");
		setCatChange(newCat);
	}

	React.useEffect(() => {
		setInitialCat();
	}, []);

	async function updateMainCat(value) {
		const newCat = await fetchCat(value);

		setCatChange(newCat);
		//setCounter(nextCounter);
		setCounter((prev) => {
			const nextCounter = prev + 1;
			jsonLocalStorage.setItem("counter", nextCounter);

			return prev + 1;
		});
	}

	function handleHeartClick() {
		const nextFavorites = [...favorites, catChange];
		setFavorites(nextFavorites);
		jsonLocalStorage.setItem("favorites", nextFavorites);
	}

	// const counterTitle = counter === null ? "" : counter + "번째";
	// 이렇게 선언하고 title에 counterTitle을 불러도 된다.

	//counter === null || counter === 0	? "고양이 가라사대" : counter + "번째 고양이 가라사대"
	//(counter === null || counter ===0)? "고양이 가라사대": `${counter}번째 고양이 가라사대`

	return (
		<div>
			<Title>
				{counter === null || counter === 0
					? "고양이 가라사대"
					: counter + "번째 고양이 가라사대"}
			</Title>
			<Form updateMainCat={updateMainCat} />
			<MainCard
				img={catChange}
				onHeartClick={handleHeartClick}
				alreadyFavorite={alreadyFavorite}
			/>
			<Favorites favorites={favorites} />
		</div>
	);
};

export default App;
