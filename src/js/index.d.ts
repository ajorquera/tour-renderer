declare module "*.json" {
	const value: any;
	export default value;
}

declare module '*.less' {
	const content: any;
	export default content;
}

declare module JSX {
	interface IntrinsicElements {
		"info-element": any;
	}
}

declare const panellum: any;
declare const anchorme: any;