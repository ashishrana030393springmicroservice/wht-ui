import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { UserManager, User } from 'oidc-client';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import * as Oidc from 'oidc-client';
@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  private _userManager: UserManager;
  private _user?: User | null;
  private _loginChangedSubject = new Subject<boolean>();
  public readonly loginChanged$ = this._loginChangedSubject.asObservable();

  constructor() {
    Oidc.Log.logger = console
    
    const stsSetting = {
      authority: environment.stsAuthority,
      client_id: environment.clientId,
      client_secret: 'jskex-kwics-iecmw-aziec',
      redirect_uri: `${environment.clientRoot}signin-callback`,
      scope: 'openid',
      response_type: 'code',
      automaticSilentRenew: true,
      token_endpoint_auth_methods_supported: ['client_secret_basic'],
      silent_redirect_uri: `${environment.clientRoot}assets/silent-callback.html`,
      post_logout_redirect_uri: `${environment.clientRoot}signout-callback`,
      metadata: {
        issuer: `${environment.stsAuthority}`,
        authorization_endpoint: `${environment.stsAuthority}oauth2/authorize`,
        jwks_uri: `${environment.stsAuthority}${environment.openIdConfig}`,
        token_endpoint: `${environment.stsAuthority}oauth2/token`,
        userinfo_endpoint: `${environment.stsAuthority}userinfo`,
        token_endpoint_auth_methods_supported: ['client_secret_basic'],
        end_session_endpoint: `${
          environment.stsAuthority
        }/connect/logout?clientId=${environment.clientId}&returnTo=${encodeURI(
          environment.clientRoot
        )}signout-callback`,
      },
    };
    this._userManager = new UserManager(stsSetting);
  }

  login() {
    this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then((user) => {
      const currentUser = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(currentUser);
      }
      this._user = user;
      return currentUser;
    });
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then((user) => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }
}
