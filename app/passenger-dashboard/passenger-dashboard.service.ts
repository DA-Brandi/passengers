import {Passenger} from "./models/passenger.interface";
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

// use one of the below
// import 'rxjs/add/operator/toPromise'; // option to use promise instead of map
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable() // makes the below class injectable. what?
export class PassengerDashboardService {
	constructor(private http: Http) {}

	getPassengers(): Observable<Passenger[]> {
		return this.http
			.get(PASSENGER_API)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	getPassenger(id: number): Observable<Passenger> {
		return this.http
			.get(`${PASSENGER_API}/${id}`)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	updatePassenger(passenger: Passenger): Observable<Passenger> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({
			headers: headers
		})
		return this.http
			.put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	removePassenger(passenger: Passenger): Observable<Passenger> {
		return this.http
			.delete(`${PASSENGER_API}/${passenger.id}`)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json()));
	}
}