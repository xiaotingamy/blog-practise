module.exports = {
	getToken() {
		return window.localStorage.token
	},
	logout() {
		delete window.localStorage.token
	},
	loggedIn() {
		return !!window.localStorage.token
	}
}
