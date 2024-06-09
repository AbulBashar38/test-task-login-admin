
import { lazy } from 'react';

const AdminProfile = lazy(() => import('./AdminProfile'));

const AdminProfileConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'admin/profile',
			element: <AdminProfile />
		}
	],
	auth: ['admin']
};

export default AdminProfileConfig;
