import React from "react";

function Form({ updateMainCat }) {
	const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣#%^&]/i.test(text);
	const [value, setValue] = React.useState("");
	const [errorMsg, setErrorMsg] = React.useState("");

	function handleInputChange(e) {
		const userValue = e.target.value;
		setErrorMsg("");
		if (includesHangul(userValue)) {
			setErrorMsg("한글과 특수기호는 입력이 불가능합니다. 영어로 적어주세요!");
		} else {
			setErrorMsg("");
		}
		setValue(userValue.toUpperCase());
	}
	function handleFormSubmit(e) {
		e.preventDefault();
		setErrorMsg("");
		if (value === "") {
			setErrorMsg("아무것도 입력하지 않았습니다. 내용을 입력해주세요!");
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
			<button type="submit">생성</button>
			<p style={{ color: "red" }}>{errorMsg}</p>
		</form>
	);
}

export default Form;
