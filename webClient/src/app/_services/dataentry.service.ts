import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  getData(name:string){
    if(name.length <= 0)
      return {};

    if(!name || !localStorage.getItem(name))
      return {};

      return JSON.parse(localStorage.getItem(name) ?? '')
  }
}
