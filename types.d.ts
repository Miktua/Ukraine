declare module '*.module.scss' {
	export const stylesheet: string;
	const classMap: {
		[key: string]: string;
	};
	export default classMap;
}

declare module '*.scss' {
	const css: string;
	export default css;
}
