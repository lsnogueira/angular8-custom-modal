import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {}

  private modals: any[] = [];

  add(modal: any): void {
    this.modals.push(modal);
  }

  remove(name: string): void {
    this.modals = this.modals.filter(x => x.name !== name);
  }

  open(name: string): void {
    const modal: any = this.modals.filter(x => x.name === name)[0];
    modal.open();
  }

  close(name: string): void {
    const modal: any = this.modals.filter(x => x.name === name)[0];
    modal.close();
  }
}
