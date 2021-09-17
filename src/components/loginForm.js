import React from 'react';

export default class LoginForm extends React.Component {
	//Defines what HTML is going to be rendered to the app -- what it will look like
	render() {
		return (
			<div className="container card mt-3">
				<div className="card-body">
					<h3 className="card-title mx-4">Login</h3>
					<div className="card-body mx-4">
						<label for="input1" className="form-label">
							Username:
						</label>
						<br />
						<input
							type="text"
							className="form-control"
							id="input1"
							placeholder="username"
						/>
					</div>
					<div className="card-body mx-4">
						<label for="input2" className="form-label">
							Password:
						</label>
						<input
							type="password"
							className="form-control"
							id="input2"></input>
					</div>
					<div className="card-body mx-4">
						<button className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		);
	}
}
