import {Component} from "@angular/core";

interface Nav {
	link: string,
	name: string,
	exact: boolean
}

@Component({
	selector: 'app-root',
	styleUrls: ['app.component.scss'],
	templateUrl: 'app.component.html'
})

export class AppComponent {
	title: string;
	logo: string = 'img/logo.svg';
	numberOne: number = 1;
	numberTwo: number = 2;
	isHappy: boolean = false;
	name: string = "";

	nav: Nav[] = [
		{
			link: '/',
			name: 'Home',
			exact: true
		},
		{
			link: '/passengers',
			name: 'Passengers',
			exact: true
		},
		{
			link: '/oops',
			name: '404',
			exact: false
		}
	]


	constructor() {
		this.title = 'Ultimate Angular'
	}

	handleChange(value: string) {
		this.name = value;
	}

	handleClick(value: string) {
		this.name = value;
	}

}