
import { lazy } from 'react';

const UserDash = lazy(() => import('./UserDash'));

const userDashConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'user/profile',
			element: <UserDash />
		}
	],
	auth: ['user']
};

export default userDashConfig;
