import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User, UserResponse } from '../models';
import { UserAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _userAdapter: UserAdapter) {}

  list(params?: HttpParams): Observable<User[]> {
    return this._http.get<UserResponse[]>(`/users`, { params }).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map((item) => this._userAdapter.adapt(item)))
    );
    // return this._http.get<UserResponse[]>(`/users`, { params });
  }
}
