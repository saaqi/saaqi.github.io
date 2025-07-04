// Store Universal Data for app usage.
interface Data {
	title: string;
	tagLine: string;
	author: string;
	baseURL: string;
	primaryColor: string;
	secondaryColor: string;
}

export const appData: Data = {
	// Data for the application
	title: 'Saqib Islam',
	tagLine: 'Web Developer, UI/UX, Digital Marketing, SEO.',
	author: 'Saqib Islam',
	baseURL: 'https://saqibtech.com',
	primaryColor: '#2b2e4a',
	secondaryColor: '#afc68b'
};
export default appData;