function dynamicModalActions(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("open");

		const closeBtn = modal.querySelector(".modal-close");

		closeBtn.addEventListener("click", () => {
			modal.classList.remove("open");
		});
	}
}

const form = document.querySelector("form");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userID = document.querySelector("#user-ID");
const userPhone = document.querySelector("#user-phone");
const userJob = document.querySelector("#user-job");
const userPassword = document.querySelector("#user-password");
const userNameMessage = document.querySelector("#user-name-message");
const userEmailMessage = document.querySelector("#user-email-message");
const userPasswordMessage = document.querySelector("#user-password-message");
const userIDMessage = document.querySelector("#user-ID-message");
const userPhoneMessage = document.querySelector("#user-phone-message");
const userJobMessage = document.querySelector("#user-job-message");

// 1. არსებულ ფორმში დაამატეთ 3 ველი personal_number, mobile_number, job_description

// 2.  personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.
function checkUserID() {
	if (!userID.validity.valid) {
		userIDMessage.textContent = "enter ID";
		userID.classList.remove("success");
		userID.classList.add("error");
		return false;
	} else if (userID.value.length !== 11) {
		userIDMessage.textContent = "ID must be 11 charachter";
		userID.classList.remove("success");
		userID.classList.add("error");
		return false;
	} else {
		userIDMessage.textContent = "";
		userID.classList.remove("error");
		userID.classList.add("success");
		return true;
	}
}
// 3.  mobile_number - ვალიდაცია: სავალდებულოა, უნდა შედგებოდეს 9 სიმბოლოსგან (მაგ. 599123456).
function checkMobileNumber() {
	if (!userPhone.validity.valid) {
		userPhoneMessage.textContent = "enter phone number";
		userPhone.classList.remove("success");
		userPhone.classList.add("error");
		return false;
	} else if (userPhone.value.length !== 9) {
		userPhoneMessage.textContent = "phone number must be 9 charachter";
		userPhone.classList.remove("success");
		userPhone.classList.add("error");
		return false;
	} else {
		userPhoneMessage.textContent = "";
		userPhone.classList.remove("error");
		userPhone.classList.add("success");
		return true;
	}
}
// 4.  job_description   - ვალიდაცია: არ არის სავალდებულო, მაქსიმალური სიმბოლების რაოდენობა 50.
function checkJob() {
	if (userJob.value.length <= 50) {
		userJob.classList.add("success");
		userJob.classList.remove("error");
		userJobMessage.textContent = "";
		return true;
	} else {
		userJob.classList.remove("success");
		userJob.classList.add("error");
		userJobMessage.textContent = "job description can be max.50 character";
		return false;
	}
}

function checkUserName() {
	if (userName.value === "") {
		userNameMessage.textContent = "enter user name";
		userName.classList.remove("success");
		userName.classList.add("error");
		return false;
	} else if (userName.value.length < 5) {
		userNameMessage.textContent = "enter min 5 char";
		userName.classList.remove("success");
		userName.classList.add("error");
		return false;
	} else {
		userNameMessage.textContent = "";
		userName.classList.remove("error");
		userName.classList.add("success");
		return true;
	}
}

function checkUserEmail() {
	if (!userEmail.validity.valid) {
		userEmailMessage.textContent = "enter email";
		if (userEmail.validity.typeMismatch) {
			userEmailMessage.textContent = "enter valid email";
		}
		userEmail.classList.remove("success");
		userEmail.classList.add("error");
		return false;
	} else {
		userEmailMessage.textContent = "";
		userEmail.classList.remove("error");
		userEmail.classList.add("success");
		return true;
	}
}

function checkPassword() {
	if (!userPassword.validity.valid) {
		userPasswordMessage.textContent = "enter password";
		if (userPassword.validity.tooShort) {
			userPasswordMessage.textContent = "password must be min 8 char";
		}
		userPassword.classList.remove("success");
		userPassword.classList.add("error");
		return false;
	} else {
		// console.log("valid");
		userPasswordMessage.textContent = "";
		userPassword.classList.remove("error");
		userPassword.classList.add("success");
		return true;
	}
}

userName.addEventListener("input", checkUserName);
userEmail.addEventListener("input", checkUserEmail);
userPassword.addEventListener("input", checkPassword);
userID.addEventListener("input", checkUserID);
userPhone.addEventListener("input", checkMobileNumber);
userJob.addEventListener("input", checkJob);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isValidUserName = checkUserName();
	const isUserEmailValid = checkUserEmail();
	const isUserPasswordValid = checkPassword();
	const isUserIDValid = checkUserID();

	const isPhoneValid = checkMobileNumber();
	const isJobValid = checkJob();

	// console.log(isValidUserName, isUserEmailValid, isUserPasswordValid);

	if (
		isValidUserName &&
		isUserEmailValid &&
		isUserPasswordValid &&
		isUserIDValid &&
		isPhoneValid &&
		isJobValid
	) {
		console.log("submit form");
		// form.submit();
		form.reset();

		dynamicModalActions("#form-modal");
	}
});
