const openRegFormBtn = document.querySelector("#open-reg-form");

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

openRegFormBtn.addEventListener("click", () => {
	dynamicModalActions("#reg-modal");
});

const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
	getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
	getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
	updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
	deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE

const regForm = document.querySelector("#reg"),
	userName = document.querySelector("#user_name"),
	userSurname = document.querySelector("#user_surname"),
	userEmail = document.querySelector("#user_email"),
	userPhone = document.querySelector("#user_phone"),
	userPersonalID = document.querySelector("#user_personal-id"),
	userZip = document.querySelector("#user_zip-code"),
	userGender = document.querySelector("#user_gender"),
	// user id ფორმში, რომელიც გვჭირდება დაედითებისთვის
	user_id = document.querySelector("#user_id");

// const user = {
// 	first_name: "steso",
// 	last_name: "text",
// 	phone: "123456789",
// 	id_number: "12345678909",
// 	email: "text@gmail.com",
// 	gender: "male",
// 	zip_code: "1245",
// };

// new Promise((resolve, reject)=>{

// })

function createUser(userData) {
	fetch("https://borjomi.loremipsum.ge/api/register", {
		method: "post",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(userData),
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			if (data.status === 1) {
			}
		})
		.catch((e) => {
			console.log("error", e);
		});
}

function getUsers() {
	fetch("https://borjomi.loremipsum.ge/api/all-users")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((e) => {
			console.log("error", e);
		});
}

async function getUsersAsyncFn() {
	const res = await fetch("https://borjomi.loremipsum.ge/api/all-users");
	const data = await res.json();
	console.log(data);
}

getUsers();
// getUsersAsyncFn();

regForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = {
		first_name: userName.value,
		last_name: userSurname.value,
		phone: userPhone.value,
		id_number: userPersonalID.value,
		email: userEmail.value,
		gender: userGender.value,
		zip_code: userZip.value,
	};

	// console.log(user);
	createUser(user);
	form.reset();
});
