// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Onboarding
import Login from '../pages/Login/login';
import ResetPassword from '../pages/Login/resetPassword';
import NewPassowrdScreen from '../pages/Login/newPasswordScreen';
import CreateAccount from '../pages/CreateAccount/createAccount';

// Dashboard
// import Dashboard from '../screens/dashboard/index';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
	// <BrowserRouter>
	// 	<Switch>
	// 		<Route exact path='/' component={Login} />
	// 		<Route exact path='/OSC-Legal' component={Login} />

	// 		<Route path='/resetcode' component={ResetPasswordCode} />
	// 		<Route path='/resetpassword' component={ResetPasswordEmailScreen} />
	// 		<Route path='/newpassword' component={NewPassowrdScreen} />
	// 		<Route path='/createuser' component={CreateUserScreen} />

	// 		<Route path='/sucessfully' component={ModalSucessfully} />
	// 		<PrivateRoute path='/organizations' component={OrganizationScreen} />
	// 		<Route path='/documents' component={DocumentsScreen} />
	// 	</Switch>
	// </BrowserRouter>
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/OSC-Legal" component={Login} />
			<Route path='/resetpassword' component={ResetPassword} />
			<Route path='/newpassword' component={NewPassowrdScreen} />
			<Route path="/createaccount" component={CreateAccount} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
