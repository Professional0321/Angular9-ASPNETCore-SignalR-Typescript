import { Component, OnInit } from 'angular2/core';
import { Router} from 'angular2/router';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../services/foodDataService';
import { IFoodItem } from '../models/IFoodItem';
import { Http, Response } from 'angular2/http';
import {FoodList} from '../food/foodList';

@Component({
    selector: 'home',
    providers: [DataService],
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES, FoodList]
})

export class HomeComponent implements OnInit {

    public foodItems: IFoodItem[];

    constructor(private _router: Router, private _dataService: DataService) { }

    ngOnInit() {
        this.getAllFood();
    }

    private getAllFood(): void {
        this._dataService
            .GetAllFood()
            .subscribe(
            data => this.foodItems = data,
            err => console.log(err),
            () => console.log('Random Quote Complete'));
    }
}
