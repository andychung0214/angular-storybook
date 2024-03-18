import { Component, Input, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() content: string | TemplateRef<any> | null = null;
  @Input() type: 'success' | 'info' | 'warn' | 'error' = 'info';
  @Input() duration: number = 3000;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    setTimeout(() => this.toastService.removeToast(this), this.duration);
  }

  ngOnDestroy(): void {
    console.log('Toast destroyed');
  }
}
