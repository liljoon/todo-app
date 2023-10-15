import { useParams ,Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
	const {username} = useParams();

	const [message, setMessage] = useState(null);

	const authContext = useAuth();

	function callHelloWorldRestApi() {
		console.log('called');
		retrieveHelloWorldPathVariable(username, authContext.token)
		.then(
			(response) => successfulResponse(response)
		)
		.catch(
			(error) => errorResponse(error)
		)
		.finally(
			() => console.log('cleanup')
		)
	}

	function successfulResponse(response) {
		setMessage(response.data.message);
	}

	function errorResponse(response) {
		console.log(response);
	}

	return (
		<div className="WelcomeComponent">
			<h1>Welcome {username}</h1>
			<div>
				Manage your todos - <Link to="/todos">Go here</Link>
			</div>
			<div>
				<button className="btn btn-success" onClick={callHelloWorldRestApi}>Call Hello World</button>
			</div>
			<div className="text-info">
				{message}
			</div>
		</div>
	);
}
