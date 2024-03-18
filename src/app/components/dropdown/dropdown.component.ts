import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {
  @Input() placement: string = 'bottom';
  @Input() isOpen: boolean = false;
  @Input() overlay: any; // 要投影的內容
  @Input() themeColor: string = 'bottom';

  @Output() onClick: EventEmitter<void> = new EventEmitter();
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  childrenSize = { width: 0, height: 0 };
  position = { top: 0, left: 0 };

  private clickSubscription: Subscription | null = null;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit(): void {
    this.calculateChildrenSize();
    this.calculatePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.calculateChildrenSize();
    this.calculatePosition();
  }

  calculateChildrenSize(): void {
    const children = this.hostElement.nativeElement.children[0];
    this.childrenSize = {
      width: children.offsetWidth,
      height: children.offsetHeight,
    };
  }

  calculatePosition(): void {
    const rect = this.hostElement.nativeElement.children[0].getBoundingClientRect();
    this.position = {
      top: rect.top,
      left: rect.left,
    };
  }

  handleOutsideClick(event: MouseEvent): void {
    // 實現點擊外部關閉功能
    if (!this.hostElement.nativeElement.contains(event.target)) {
      this.onClose.emit();
    }
  }

  ngOnInit(): void {
    this.clickSubscription = fromEvent<MouseEvent>(document, 'click').subscribe((event) => this.handleOutsideClick(event));
  }

  ngOnDestroy(): void {
    this.clickSubscription?.unsubscribe();
  }
}
