import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  readonly clickOutside = output<MouseEvent>();

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;
    if (target && !this.elementRef.nativeElement.contains(target)) {
      this.clickOutside.emit(event);
    }
  }
}
