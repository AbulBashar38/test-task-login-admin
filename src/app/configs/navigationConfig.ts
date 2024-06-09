import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	}
];

export const adminNavigationConfig:FuseNavItemType[]=[
	{
		id:'admin',
		title:'Admin Dashboard',
		type: 'group',
		icon: 'heroicons-outline:home',
		children:[
			{
				id: 'admin.profile',
				title: 'Admin Profile',
				type: 'item',
				icon: 'heroicons-outline:clipboard-check',
				url: '/admin/profile',
			},
			{
				id: 'admin.analytics',
				title: 'Admin Analytics',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/admin/analytics',
			}
		]
	}
 ]
export const userNavigationConfig:FuseNavItemType[]=[
	{
		id:'user',
		title:'User Dashboard',
		type: 'group',
		icon: 'heroicons-outline:home',
		children:[
			{
				id: 'user.profile',
				title: 'User Profile',
				type: 'item',
				icon: 'heroicons-outline:clipboard-check',
				url: '/user/profile',
			},
			{
				id: 'user.analytics',
				title: 'User Analytics',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/user/analytics',
			}
		]
	}
 ]

 
export default navigationConfig;
