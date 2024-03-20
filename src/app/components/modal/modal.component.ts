import { Component, Input, OnChanges, SimpleChanges, HostListener, ElementRef, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true, // Mark as standalone
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('{{duration}}ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('{{duration}}ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  imports: [ButtonComponent, CommonModule], // Import ButtonComponent here,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() hasMask: boolean = true;
  @Input() animationDuration: number = 200;
  @Input() onClose: () => void = () => {};

  constructor(private elRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && !this.isOpen) {
      setTimeout(() => this.onClose(), this.animationDuration);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.hasMask && !this.elRef.nativeElement.contains(event.target)) {
      this.onClose();
    }
  }
}
