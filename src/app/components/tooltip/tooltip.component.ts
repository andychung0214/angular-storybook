import { Directive, Input, ElementRef, HostListener, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TooltipContentComponent } from '../tooltip-content/tooltip-content.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipComponent {
  @Input('appTooltip') content: string | undefined;
  @Input() placement: string = 'top';
  @Input() themeColor: string = '#101010';
  @Input() showArrow: boolean = true;

  private tooltipComponentRef: ComponentRef<TooltipContentComponent> | undefined;

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.show();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hide();
  }

  private show(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipContentComponent);
    this.tooltipComponentRef = this.viewContainerRef.createComponent(componentFactory);
    this.tooltipComponentRef.instance.content = this.content ?? '';
    this.tooltipComponentRef.instance.placement = this.placement;
    this.tooltipComponentRef.instance.themeColor = this.themeColor;
    this.tooltipComponentRef.instance.showArrow = this.showArrow;

    // Positioning logic here
    // For simplicity, this example does not include auto-positioning logic based on screen boundaries
  }

  private hide(): void {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
  }
}
