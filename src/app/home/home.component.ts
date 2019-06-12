import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bodyText: string;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = `Mussum Ipsum, cacilds vidis litro abertis.
      Quem manda na minha terra sou euzis!
      In elementis mé pra quem é amistosis quis leo.
      Manduma pindureta quium dia nois paga.
      Quem num gosta di mé, boa gentis num é.`;
  }

  openModal(name: string) {
    this.modalService.open(name);
  }

  closeModal(name: string) {
    this.modalService.close(name);
  }
}
