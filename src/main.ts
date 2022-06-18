import { log } from "./log";
import { TARGET } from "./constants";
import { no_jQuery } from "./no_jQuery";
import { use_jQuery } from "./use_jQuery";

// @ts-expect-error
export function main (args : Array<string>) {

	try {
		use_jQuery(TARGET);
	} catch (e) {
		log("jQuery failed. Using non-jQuery approach.");
		no_jQuery(TARGET);
	}


	log("Done!");
}