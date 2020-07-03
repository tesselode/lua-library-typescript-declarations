/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SpecialPathComponent {}

export const KEY: SpecialPathComponent;
export const METATABLE: SpecialPathComponent;

export type PathComponent = any | SpecialPathComponent;

export interface Options {
	depth?: number;
	newline?: string;
	indent?: string;
	process?: (this: void, item: any, path: PathComponent[]) => any;
}

export function inspect(value: any, options?: Options): string;
