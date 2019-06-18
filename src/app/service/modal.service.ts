import { Injectable } from '@angular/core';
import { Size } from '../models/size.model';
import { Validator } from 'class-validator';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

constructor(private validator: Validator) {}

  private modals = [];

  add(modal: any): void {
    this.modals.push(modal);
  }

  remove(name: string): void {

    if (this.modalsNotEmpty()) {
      this.modals = this.modals.filter(x => x.name !== name);
    }
  }

  open(name: string): void {

    if (this.modalsNotEmpty()) {
      const modal: any = this.modals.filter(x => x.name === name)[0];
      modal.open();
    }
  }

  close(name: string): void {

    if (this.modalsNotEmpty()) {
      const modal: any = this.modals.filter(x => x.name === name)[0];

      if (this.validator.isDefined(modal)) {
        modal.close();
      }
    }
  }

  changeSize(name: string, size: Size): void {

    if (this.modalsNotEmpty()) {
      const modal: any = this.modals.filter(x => x.name === name)[0];

      if (this.validator.isDefined(modal)) {
        modal.changeSize(size);
      }
    }
  }

  private modalsNotEmpty(): boolean {
    return this.validator.arrayNotEmpty(this.modals);
  }
}
