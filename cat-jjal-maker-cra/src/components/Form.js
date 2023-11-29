import React from "react";

function Form({ updateMainCat }) {
	const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
	const [value, setValue] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");

	function handleInputChange(e) {
		const userValue = e.target.value;
		setErrorMsg("");
		if (includesHangul(userValue)) {
			setErrorMsg("한글노노");
		} else {
			setErrorMsg("");
		}
		setValue(userValue.toUpperCase());
	}
	function handleFormSubmit(e) {
		e.preventDefault();
		setErrorMsg("");
		if (value === "") {
			setErrorMsg("빈값이에요");
			return;
		}
		updateMainCat(value);
	}
	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				name="name"
				placeholder="영어 대사를 입력해주세요"
				onChange={handleInputChange}
				value={value}
			/>
			<button type="submit">생성22</button>
			<p style={{ color: "red" }}>{errorMsg}</p>
		</form>
	);
}

export default Form;
