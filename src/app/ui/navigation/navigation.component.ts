import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  constructor(private _location: Location, private router: Router) {}

  ngOnInit(): void {}

  hasBack: boolean = this._location.path() !== '';

  back() {
    this._location.back();
  }
}
