import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from './models';
import { UserService } from './services';

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users: User[];
  public limit = 5;
  constructor(private _userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._userService
      .list({ _limit: this.limit.toString() } as any as HttpParams)
      .pipe(tap((users) => (this.users = users)))
      .subscribe(console.log);
  }
}
