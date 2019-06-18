import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  public isMobile() {
    return /iPhone|iPad|iPod|Android|BlackBerry|Kindle|KFAPWI|Windows Phone/i.test(
      navigator.userAgent
    );
  }
}
