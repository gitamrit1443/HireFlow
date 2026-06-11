import { Directive, ElementRef, inject, output } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickOutsideDirective {
    constructor() {
        this.elementRef = inject((ElementRef));
        this.clickOutside = output();
    }
    onDocumentClick(event) {
        const target = event.target;
        if (target && !this.elementRef.nativeElement.contains(target)) {
            this.clickOutside.emit(event);
        }
    }
    static { this.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClickOutsideDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, i0.ɵɵresolveDocument);
        } }, outputs: { clickOutside: "clickOutside" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[clickOutside]',
                standalone: true,
                host: {
                    '(document:click)': 'onDocumentClick($event)'
                }
            }]
    }], null, { clickOutside: [{ type: i0.Output, args: ["clickOutside"] }] }); })();
