import { Component, Input, OnChanges, SimpleChanges, HostListener, ElementRef, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input () isOpen: boolean = false;
  @Input () hasMask: boolean = true;
  @Input () animationDuration: number = 200;
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onModalClicked(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
