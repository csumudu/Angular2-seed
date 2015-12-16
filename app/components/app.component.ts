import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h4>Author : {{author}}</h4><h5>Hero : {{hero.name}}</h5>'
})
export class AppComponent {
	public title = "Angular 2 Seed Project";
	public author = "Sumudu Jayasinghe";
	public hero:iHero = {
		id : 1,
		name : 'TOM CRUSE'		
	};
}