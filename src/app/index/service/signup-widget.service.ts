import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRegistration } from 'src/app/core/models/user-registration.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupWidgetService {
  public readonly _length = 4;
  private _current: number = 1;
  private readonly _step: BehaviorSubject<number> = new BehaviorSubject<number>(
    this._current
  );
  public readonly step$: Observable<number> = this._step.asObservable();
  constructor(private httpClient: HttpClient) {}

  next() {
    this._current = (this._current + 1) % (this._length + 1);
    this._step.next(this._current);
  }

  complete(user: UserRegistration): Observable<UserRegistration> {
    return this.httpClient.post<UserRegistration>(
      environment.apiRoot + 'sign-up',
      user
    );
  }
}
