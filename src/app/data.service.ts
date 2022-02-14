import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

info1:string[]=['Jean Akide','2000','ja@ec.com']

info2:string[]=['Emily Fields','2001','ef@ec.com']

info3:string[]=['Michelle Wambui','2002','mw@ec.com']

getInfo1():string[]{
  return this.info1
}

getInfo2():string[]{
  return this.info2
}

getInfo3():string[]{
  return this.info3
}

  constructor() { }
}