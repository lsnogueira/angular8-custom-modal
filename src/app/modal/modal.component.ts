import { Component, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { Size } from '../models/size.model';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  /**
   * @description property size controls width margin and heigth margin to define modal size
   * @type { width: string, height: string }
   * @example { width: '30%', height: '200px' }
   */
  @Input() size: Size = null;
  @Input() name: string = null;
  private readonly element: any;
  isMobile: boolean;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private generalService: GeneralService
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    const modal = this;
    this.isMobile = this.generalService.isMobile();

    if (!this.name) {
      console.error('modal must have a name');
      return;
    }

    if (this.size) {
      this.changeSize(this.size);
    }

    document.body.appendChild(this.element);

    // close modal on background click
    this.addEvent('click', 'modal', modal);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.name);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  addEvent(event: string, styleClass: string, modal: any): void {
    this.element
      .addEventListener(event,
      (e: any) => {
        if (e.target.className === styleClass) {
          modal.close();
        }
      });
  }

  changeSize(size: Size): void {
    if (!this.isMobile) {
      const body = document.getElementById('modal-template');

      const width = size.width ? size.width : '100%';
      body.style.setProperty('--width-size', width);

      const height = size.height ? size.height : '';
      body.style.setProperty('--height-size', height);
    }
  }
}
