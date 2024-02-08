import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {};

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData"]
    });
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

};


export const authStore = new AuthStore();

