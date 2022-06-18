import { log } from "./log";


export function use_jQuery (className : string) {
    // @ts-expect-error
	$("." + className).remove();
	log("Removed flag alert using jQuery");
}