import { apiClient } from "./ApiClient";

export function retrieveHelloWorldBean() {
	return apiClient.get("/hello-world-bean")
}


export function retrieveHelloWorldPathVariable(username, token) {
	return apiClient.get(`hello-world/path-variable/${username}`, {
		headers : {
			Authorization: token
		}
	});
}


export function executeBasicAuthenticationService(token) {
	return apiClient.get(`/basicauth`, {
		headers : {
			Authorization: token
		}
	});
}

