import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles:Array<string> = [];

  constructor() { }

  public setToken(token:string):void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string {
    if(sessionStorage.getItem(TOKEN_KEY)) {
      return sessionStorage.getItem(TOKEN_KEY);
    }
    return "null"
  }

  public setUserName(username:string):void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUserName():string {
    if(sessionStorage.getItem(USERNAME_KEY)) {
      return sessionStorage.getItem(USERNAME_KEY);
    }
    return "null"
  }

  public setAuthorities(authorities:string[]):void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities():string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY))
      .forEach((autority: { autority: string; }) => {
        this.roles.push(autority.autority)
      })
    }
    return this.roles
  }

  public logOut():void {
    window.sessionStorage.clear();
  }
}
