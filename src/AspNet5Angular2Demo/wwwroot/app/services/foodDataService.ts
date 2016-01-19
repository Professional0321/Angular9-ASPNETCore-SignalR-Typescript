import { Injectable } from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import {IFoodItem} from '../models/IFoodItem';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {
        this.actionUrl = 'http://localhost:5000/api/foodItems/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    GetAllFood(): Observable<Response> {
        return this._http.get(this.actionUrl).map(res => res.json());
    }

    GetSingleFood(id: number): Observable<Response> {
        return this._http.get(this.actionUrl + id).map(res => res.json());
    }

    AddFood(foodName: string): Observable<Response> {
        var toAdd = JSON.stringify({ ItemName: foodName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => res.json());
    }

    Update(id: number, foodToUpdate: IFoodItem): Observable<Response> {
        return this._http.put(this.actionUrl + id, JSON.stringify(foodToUpdate), { headers: this.headers }).map(res => res.json());
    }

    DeleteFood(id: number): Observable<Response> {
        return this._http.delete(this.actionUrl + id);
    }
}
