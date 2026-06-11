import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function ActivityFeedComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "app-avatar", 2);
    i0.ɵɵelementStart(2, "div", 3)(3, "p", 4)(4, "span", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 7);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(11, "svg", 9);
    i0.ɵɵelement(12, "path", 10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_3_r2 = ctx.$index;
    const ɵ$count_3_r3 = ctx.$count;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r1.candidateName)("color", item_r1.avatarColor);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pb-4", !(ɵ$index_3_r2 === ɵ$count_3_r3 - 1))("border-b", !(ɵ$index_3_r2 === ɵ$count_3_r3 - 1))("border-slate-100", !(ɵ$index_3_r2 === ɵ$count_3_r3 - 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1.candidateName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r1.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.timeAgo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.getTypeStyle(item_r1.type).bg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.getTypeStyle(item_r1.type).color);
    i0.ɵɵadvance();
    i0.ɵɵattribute("d", ctx_r3.getTypeStyle(item_r1.type).icon);
} }
export class ActivityFeedComponent {
    constructor() {
        this.activities = input.required(...(ngDevMode ? [{ debugName: "activities" }] : []));
    }
    getTypeStyle(type) {
        const styles = {
            application: { bg: 'bg-blue-50', color: 'text-blue-500', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
            stage_change: { bg: 'bg-indigo-50', color: 'text-indigo-500', icon: 'M13 7l5 5m0 0l-5 5m5-5H6' },
            interview_scheduled: { bg: 'bg-violet-50', color: 'text-violet-500', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            feedback: { bg: 'bg-amber-50', color: 'text-amber-500', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
            offer: { bg: 'bg-emerald-50', color: 'text-emerald-500', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        };
        return styles[type];
    }
    static { this.ɵfac = function ActivityFeedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActivityFeedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActivityFeedComponent, selectors: [["app-activity-feed"]], inputs: { activities: [1, "activities"] }, decls: 3, vars: 0, consts: [[1, "space-y-4"], [1, "flex", "items-start", "gap-3"], ["size", "sm", 3, "name", "color"], [1, "flex-1", "min-w-0"], [1, "text-sm", "text-slate-800", "leading-snug"], [1, "font-medium"], [1, "text-slate-500"], [1, "text-xs", "text-slate-400", "mt-0.5"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", "mt-0.5", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3", "h-3", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round"]], template: function ActivityFeedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, ActivityFeedComponent_For_2_Template, 13, 14, "div", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.activities());
        } }, dependencies: [CommonModule, i1.NgClass, AvatarComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivityFeedComponent, [{
        type: Component,
        args: [{
                selector: 'app-activity-feed',
                standalone: true,
                imports: [CommonModule, AvatarComponent],
                template: `
    <div class="space-y-4">
      @for (item of activities(); track item.id; let last = $last) {
        <div class="flex items-start gap-3">

          <app-avatar
            [name]="item.candidateName"
            [color]="item.avatarColor"
            size="sm"
          />

          <div class="flex-1 min-w-0" [class.pb-4]="!last"
               [class.border-b]="!last"
               [class.border-slate-100]="!last">
            <p class="text-sm text-slate-800 leading-snug">
              <span class="font-medium">{{ item.candidateName }}</span>
              <span class="text-slate-500"> {{ item.message }}</span>
            </p>
            <p class="text-xs text-slate-400 mt-0.5">{{ item.timeAgo }}</p>
          </div>

          <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
               [ngClass]="getTypeStyle(item.type).bg">
            <svg class="w-3 h-3" [ngClass]="getTypeStyle(item.type).color"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    [attr.d]="getTypeStyle(item.type).icon" />
            </svg>
          </div>

        </div>
      }
    </div>
  `
            }]
    }], null, { activities: [{ type: i0.Input, args: [{ isSignal: true, alias: "activities", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ActivityFeedComponent, { className: "ActivityFeedComponent", filePath: "src/app/shared/components/activity-feed/activity-feed.component.ts", lineNumber: 46 }); })();
