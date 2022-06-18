import { log } from "./log";


export function no_jQuery (className : string) {

    // @ts-expect-error
	const elements : HTMLCollection[] = document.getElementsByClassName(className);
	while(elements.length > 0){
	    // @ts-expect-error
		elements[0].parentNode.removeChild(elements[0]);
	}
	log("Removed flag alert without jQuery");
}