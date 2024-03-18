import { Injectable, ComponentRef, ApplicationRef, ComponentFactoryResolver, Injector, EmbeddedViewRef } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastContainerRef: ComponentRef<any> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  private createToastContainer(): void {
    if (this.toastContainerRef) return;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastContainerComponent);
    const componentRef = componentFactory.create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.toastContainerRef = componentRef;
  }

  showToast(message: string, type: 'success' | 'info' | 'warn' | 'error', duration: number = 3000): void {
    this.createToastContainer();
    if (this.toastContainerRef) {
      this.toastContainerRef.instance.addToast(message, type, duration);
    }
  }

  removeToast(toastComponent: ToastComponent): void {
    this.toastContainerRef?.instance.removeToast(toastComponent);
  }
}
