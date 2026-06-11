import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { JobsApiService } from '../../../core/services/jobs-api.service';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { ScoreRingComponent } from '../../../shared/components/score-ring/score-ring.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/recruiter/candidates", a0];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.stage;
const _forTrack2 = ($index, $item) => $item.label;
function PipelineComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const job_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", job_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(job_r1.title);
} }
function PipelineComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", col_r2.countColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.countByStage(col_r2.stage), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r2.label);
} }
function PipelineComponent_For_27_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 43);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 44);
    i0.ɵɵelement(3, "path", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 41);
    i0.ɵɵtext(5, "No candidates");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 46);
    i0.ɵɵtext(7, "Drop a card here");
    i0.ɵɵelementEnd()();
} }
function PipelineComponent_For_27_For_11_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getScoreClass(c_r7.score));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r7.score);
} }
function PipelineComponent_For_27_For_11_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 62);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tag_r8);
} }
function PipelineComponent_For_27_For_11_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵrepeaterCreate(1, PipelineComponent_For_27_For_11_Conditional_11_For_2_Template, 2, 1, "span", 62, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(c_r7.tags.slice(0, 2));
} }
function PipelineComponent_For_27_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵlistener("dragstart", function PipelineComponent_For_27_For_11_Template_div_dragstart_0_listener($event) { const c_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDragStart($event, c_r7.id)); })("dragend", function PipelineComponent_For_27_For_11_Template_div_dragend_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDragEnd()); })("click", function PipelineComponent_For_27_For_11_Template_div_click_0_listener() { const c_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectCandidate(c_r7)); });
    i0.ɵɵelementStart(1, "div", 48);
    i0.ɵɵelement(2, "app-avatar", 49);
    i0.ɵɵelementStart(3, "div", 50)(4, "p", 51);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 52);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, PipelineComponent_For_27_For_11_Conditional_8_Template, 2, 2, "span", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 54);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, PipelineComponent_For_27_For_11_Conditional_11_Template, 3, 0, "div", 55);
    i0.ɵɵelementStart(12, "div", 56)(13, "span", 57);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 58)(16, "a", 59);
    i0.ɵɵlistener("click", function PipelineComponent_For_27_For_11_Template_a_click_16_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(17, "svg", 60);
    i0.ɵɵelement(18, "path", 61);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("opacity", ctx_r2.draggingId() === c_r7.id ? "0.4" : "1")("transform", ctx_r2.draggingId() === c_r7.id ? "rotate(1.5deg)" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", c_r7.name)("color", c_r7.avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r7.currentRole);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r7.score > 0 ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r7.jobTitle);
    i0.ɵɵadvance();
    i0.ɵɵconditional(c_r7.tags.length > 0 ? 11 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.formatDate(c_r7.appliedDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, c_r7.id));
} }
function PipelineComponent_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("dragover", function PipelineComponent_For_27_Template_div_dragover_0_listener($event) { const col_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDragOver($event, col_r5.stage)); })("dragleave", function PipelineComponent_For_27_Template_div_dragleave_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDragLeave()); })("drop", function PipelineComponent_For_27_Template_div_drop_0_listener($event) { const col_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDrop($event, col_r5.stage)); });
    i0.ɵɵelementStart(1, "div", 33)(2, "div", 7);
    i0.ɵɵelement(3, "div", 34);
    i0.ɵɵelementStart(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 36);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 37);
    i0.ɵɵconditionalCreate(9, PipelineComponent_For_27_Conditional_9_Template, 8, 0, "div", 38);
    i0.ɵɵrepeaterCreate(10, PipelineComponent_For_27_For_11_Template, 19, 15, "div", 39, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 40)(13, "span", 41);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 42);
    i0.ɵɵtext(16, " View \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("border-color", ctx_r2.dragOverStage() === col_r5.stage ? "#6366F1" : null)("background-color", ctx_r2.dragOverStage() === col_r5.stage ? "#EEF2FF" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("background-color", col_r5.dotColor);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r5.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", col_r5.countBadge);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.countByStage(col_r5.stage), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.candidatesForStage(col_r5.stage).length === 0 ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.candidatesForStage(col_r5.stage));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.countByStage(col_r5.stage), " ", ctx_r2.countByStage(col_r5.stage) === 1 ? "candidate" : "candidates", " ");
} }
function PipelineComponent_For_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "app-avatar", 49);
    i0.ɵɵelementStart(2, "div", 63)(3, "p", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 65);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, c_r9.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", c_r9.name)("color", c_r9.avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatDate(c_r9.appliedDate));
} }
function PipelineComponent_Conditional_42_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 91);
    i0.ɵɵelement(2, "path", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 93);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const info_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", info_r11.iconPath);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(info_r11.value);
} }
function PipelineComponent_Conditional_42_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", skill_r12, " ");
} }
function PipelineComponent_Conditional_42_For_35_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 95);
    i0.ɵɵlistener("click", function PipelineComponent_Conditional_42_For_35_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const col_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.moveFromPanel(col_r14.stage)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", col_r14.moveBtnClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2192 ", col_r14.label, " ");
} }
function PipelineComponent_Conditional_42_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PipelineComponent_Conditional_42_For_35_Conditional_0_Template, 2, 2, "button", 94);
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(col_r14.stage !== ctx_r2.selectedCandidate().stage ? 0 : -1);
} }
function PipelineComponent_Conditional_42_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 83);
    i0.ɵɵtext(2, "Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 96);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" \"", ctx_r2.selectedCandidate().notes, "\" ");
} }
function PipelineComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 66)(2, "h3", 67);
    i0.ɵɵtext(3, "Quick View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 68);
    i0.ɵɵlistener("click", function PipelineComponent_Conditional_42_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectedCandidate.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 69);
    i0.ɵɵelement(6, "path", 70);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "div", 71)(8, "div", 72);
    i0.ɵɵelement(9, "app-avatar", 73);
    i0.ɵɵelementStart(10, "div", 50)(11, "p", 74);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 75);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 76);
    i0.ɵɵelement(16, "app-stage-badge", 77);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 78);
    i0.ɵɵelement(18, "app-score-ring", 79);
    i0.ɵɵelementStart(19, "p", 80);
    i0.ɵɵtext(20, "Composite Score");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 81);
    i0.ɵɵrepeaterCreate(22, PipelineComponent_Conditional_42_For_23_Template, 5, 2, "div", 82, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div")(25, "p", 83);
    i0.ɵɵtext(26, "Skills");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 84);
    i0.ɵɵrepeaterCreate(28, PipelineComponent_Conditional_42_For_29_Template, 2, 1, "span", 85, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "p", 83);
    i0.ɵɵtext(32, "Move to Stage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 86);
    i0.ɵɵrepeaterCreate(34, PipelineComponent_Conditional_42_For_35_Template, 1, 1, null, null, _forTrack1);
    i0.ɵɵelementStart(36, "button", 87);
    i0.ɵɵlistener("click", function PipelineComponent_Conditional_42_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.moveFromPanel("rejected")); });
    i0.ɵɵtext(37, " \u2715 Reject ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(38, PipelineComponent_Conditional_42_Conditional_38_Template, 5, 1, "div");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 88)(40, "a", 89);
    i0.ɵɵtext(41, " Full Profile ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "a", 90);
    i0.ɵɵtext(43, " Schedule ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("name", ctx_r2.selectedCandidate().name)("color", ctx_r2.selectedCandidate().avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.selectedCandidate().name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedCandidate().currentRole);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("stage", ctx_r2.selectedCandidate().stage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("score", ctx_r2.selectedCandidate().score)("size", 76)("showLabel", true);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.quickInfo());
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.selectedCandidate().skills.slice(0, 6));
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.columns);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r2.selectedCandidate().notes ? 38 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, ctx_r2.selectedCandidate().id));
} }
function PipelineComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 97);
    i0.ɵɵelement(2, "path", 98);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.toastMessage(), " ");
} }
export class PipelineComponent {
    constructor() {
        this.candidatesApi = inject(CandidatesApiService);
        this.jobsApi = inject(JobsApiService);
        this._candidates = signal([], ...(ngDevMode ? [{ debugName: "_candidates" }] : []));
        this.jobFilter = '';
        this.draggingId = signal(null, ...(ngDevMode ? [{ debugName: "draggingId" }] : []));
        this.dragOverStage = signal(null, ...(ngDevMode ? [{ debugName: "dragOverStage" }] : []));
        this.selectedCandidate = signal(null, ...(ngDevMode ? [{ debugName: "selectedCandidate" }] : []));
        this.toastMessage = signal(null, ...(ngDevMode ? [{ debugName: "toastMessage" }] : []));
        this.columns = [
            { stage: 'applied', label: 'Applied', dotColor: '#3B82F6', countColor: 'text-blue-600', countBadge: 'bg-blue-100 text-blue-700', moveBtnClass: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100' },
            { stage: 'shortlisted', label: 'Shortlisted', dotColor: '#6366F1', countColor: 'text-indigo-600', countBadge: 'bg-indigo-100 text-indigo-700', moveBtnClass: 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100' },
            { stage: 'assessment', label: 'Assessment', dotColor: '#F59E0B', countColor: 'text-amber-600', countBadge: 'bg-amber-100 text-amber-700', moveBtnClass: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100' },
            { stage: 'interview', label: 'Interview', dotColor: '#8B5CF6', countColor: 'text-violet-600', countBadge: 'bg-violet-100 text-violet-700', moveBtnClass: 'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100' },
            { stage: 'hr_round', label: 'HR Round', dotColor: '#F97316', countColor: 'text-orange-600', countBadge: 'bg-orange-100 text-orange-700', moveBtnClass: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100' },
            { stage: 'selected', label: 'Selected', dotColor: '#10B981', countColor: 'text-emerald-600', countBadge: 'bg-emerald-100 text-emerald-700', moveBtnClass: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100' },
        ];
        this.filteredCandidates = computed(() => this._candidates().filter(c => !this.jobFilter || c.jobId === this.jobFilter), ...(ngDevMode ? [{ debugName: "filteredCandidates" }] : []));
        this.activeCount = computed(() => this.filteredCandidates().filter(c => c.stage !== 'rejected').length, ...(ngDevMode ? [{ debugName: "activeCount" }] : []));
        this.rejectedCount = computed(() => this.filteredCandidates().filter(c => c.stage === 'rejected').length, ...(ngDevMode ? [{ debugName: "rejectedCount" }] : []));
        this.quickInfo = computed(() => {
            const c = this.selectedCandidate();
            if (!c)
                return [];
            return [
                { label: 'Job', value: c.jobTitle, iconPath: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22A1.97 1.97 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0' },
                { label: 'Location', value: c.location, iconPath: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
                { label: 'Experience', value: `${c.experience} yrs`, iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Assigned', value: c.assignedTo, iconPath: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
            ];
        }, ...(ngDevMode ? [{ debugName: "quickInfo" }] : []));
    }
    async ngOnInit() {
        const [candidates] = await Promise.all([
            this.candidatesApi.loadAll(),
            this.jobsApi.loadAll(),
        ]);
        this._candidates.set(candidates);
    }
    candidatesForStage(stage) {
        return this.filteredCandidates().filter(c => c.stage === stage);
    }
    countByStage(stage) {
        return this.filteredCandidates().filter(c => c.stage === stage).length;
    }
    onDragStart(e, id) {
        e.dataTransfer?.setData('candidateId', id);
        this.draggingId.set(id);
    }
    onDragOver(e, stage) {
        e.preventDefault();
        this.dragOverStage.set(stage);
    }
    onDragLeave() { this.dragOverStage.set(null); }
    onDragEnd() { this.draggingId.set(null); this.dragOverStage.set(null); }
    onDrop(e, targetStage) {
        e.preventDefault();
        const id = e.dataTransfer?.getData('candidateId');
        if (id)
            this.moveCandidate(id, targetStage);
        this.draggingId.set(null);
        this.dragOverStage.set(null);
    }
    async moveCandidate(id, newStage) {
        const c = this._candidates().find(x => x.id === id);
        if (!c || c.stage === newStage)
            return;
        await this.candidatesApi.updateStage(id, newStage);
        this._candidates.update(list => list.map(x => x.id === id ? { ...x, stage: newStage } : x));
        if (this.selectedCandidate()?.id === id) {
            this.selectedCandidate.set(this._candidates().find(x => x.id === id) ?? null);
        }
        const stageName = this.columns.find(col => col.stage === newStage)?.label ?? newStage;
        this.showToast(`${c.name} moved to ${stageName}`);
    }
    moveFromPanel(stage) {
        const c = this.selectedCandidate();
        if (c)
            void this.moveCandidate(c.id, stage);
    }
    selectCandidate(c) {
        this.selectedCandidate.set(this.selectedCandidate()?.id === c.id ? null : c);
    }
    async refreshBoard() {
        this._candidates.set(await this.candidatesApi.loadAll());
        this.showToast('Board refreshed');
    }
    showToast(msg) {
        this.toastMessage.set(msg);
        setTimeout(() => this.toastMessage.set(null), 2500);
    }
    getScoreClass(s) {
        if (s >= 80)
            return 'bg-emerald-100 text-emerald-700';
        if (s >= 60)
            return 'bg-amber-100 text-amber-700';
        return 'bg-rose-100 text-rose-600';
    }
    formatDate(iso) {
        return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    static { this.ɵfac = function PipelineComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PipelineComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PipelineComponent, selectors: [["app-pipeline"]], decls: 44, vars: 7, consts: [[1, "flex", "flex-col", "h-full", "overflow-hidden"], [1, "px-6", "pt-5", "pb-4", "border-b", "border-slate-200", "bg-white", "flex-shrink-0"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3", "mb-4"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "text-slate-300", "mx-1.5"], [1, "text-indigo-600", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "font-medium", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "w-9", "h-9", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-slate-200", "bg-white", "text-slate-400", "hover:bg-slate-50", "hover:text-slate-600", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"], [1, "grid", "grid-cols-6", "gap-2"], [1, "text-center", "py-1.5", "px-2", "rounded-lg", "border", "border-slate-100", "bg-slate-50"], [1, "flex-1", "overflow-auto"], [1, "flex", "gap-3", "p-4", "h-full", "min-w-max"], [1, "flex", "flex-col", "w-60", "rounded-xl", "border", "bg-slate-50", "border-slate-200", "transition-all", "duration-150", "flex-shrink-0", 3, "border-color", "background-color"], [1, "flex", "flex-col", "w-48", "rounded-xl", "border", "border-rose-100", "bg-rose-50", "flex-shrink-0"], [1, "flex", "items-center", "justify-between", "px-3", "py-2.5", "border-b", "border-rose-100", "flex-shrink-0"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-rose-400"], [1, "text-xs", "font-bold", "text-rose-700"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-rose-100", "text-rose-700"], [1, "flex-1", "p-2", "space-y-1.5", "overflow-y-auto", "scrollbar-thin"], [1, "flex", "items-center", "gap-2", "p-2", "bg-white", "rounded-lg", "border", "border-rose-100", "opacity-60", "hover:opacity-100", "transition-opacity", "cursor-pointer", "group", 3, "routerLink"], [1, "px-3", "py-2", "border-t", "border-rose-100", "flex-shrink-0"], [1, "text-xs", "text-rose-400", "font-medium"], [1, "fixed", "inset-y-0", "right-0", "w-76", "bg-white", "border-l", "border-slate-200", "shadow-2xl", "z-40", "flex", "flex-col", 2, "width", "300px"], [1, "fixed", "bottom-6", "left-1/2", "-translate-x-1/2", "bg-slate-900", "text-white", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-xl", "shadow-xl", "z-50", "flex", "items-center", "gap-2.5"], [1, "text-base", "font-bold", 3, "ngClass"], [1, "text-xs", "text-slate-500", "font-medium", "mt-0.5", "leading-tight"], [1, "flex", "flex-col", "w-60", "rounded-xl", "border", "bg-slate-50", "border-slate-200", "transition-all", "duration-150", "flex-shrink-0", 3, "dragover", "dragleave", "drop"], [1, "flex", "items-center", "justify-between", "px-3", "py-2.5", "border-b", "border-slate-200", "flex-shrink-0"], [1, "w-2.5", "h-2.5", "rounded-full", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-slate-700"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "flex-1", "p-2", "space-y-2", "overflow-y-auto", "min-h-48", "scrollbar-thin"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "text-center"], ["draggable", "true", 1, "bg-white", "rounded-lg", "border", "border-slate-200", "p-3", "hover:shadow-card-hover", "transition-all", "duration-150", "cursor-grab", "active:cursor-grabbing", "group", "select-none", 3, "opacity", "transform"], [1, "px-3", "py-2", "border-t", "border-slate-200", "flex-shrink-0", "flex", "items-center", "justify-between"], [1, "text-xs", "text-slate-400", "font-medium"], ["routerLink", "/recruiter/candidates", 1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-semibold"], [1, "w-8", "h-8", "rounded-full", "bg-slate-200", "flex", "items-center", "justify-center", "mb-2", "mx-auto"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"], [1, "text-xs", "text-slate-400", "mt-0.5"], ["draggable", "true", 1, "bg-white", "rounded-lg", "border", "border-slate-200", "p-3", "hover:shadow-card-hover", "transition-all", "duration-150", "cursor-grab", "active:cursor-grabbing", "group", "select-none", 3, "dragstart", "dragend", "click"], [1, "flex", "items-start", "gap-2", "mb-2"], ["size", "sm", 3, "name", "color"], [1, "flex-1", "min-w-0"], [1, "text-xs", "font-bold", "text-slate-900", "truncate"], [1, "text-xs", "text-slate-500", "truncate", "mt-0.5"], [1, "text-xs", "font-bold", "px-1.5", "py-0.5", "rounded", "flex-shrink-0", "leading-none", 3, "ngClass"], [1, "text-xs", "text-indigo-600", "font-medium", "truncate", "mb-1.5"], [1, "flex", "flex-wrap", "gap-1", "mb-2"], [1, "flex", "items-center", "justify-between", "pt-2", "border-t", "border-slate-100"], [1, "text-xs", "text-slate-400"], [1, "flex", "gap-1", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "w-5", "h-5", "flex", "items-center", "justify-center", "rounded", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "transition-colors", 3, "click", "routerLink"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"], [1, "text-xs", "bg-indigo-50", "text-indigo-600", "px-1.5", "py-0.5", "rounded", "font-semibold", "leading-none"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-semibold", "text-slate-700", "truncate"], [1, "text-xs", "text-slate-400", "truncate"], [1, "flex", "items-center", "justify-between", "px-5", "py-4", "border-b", "border-slate-100", "flex-shrink-0"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "w-7", "h-7", "flex", "items-center", "justify-center", "rounded-lg", "hover:bg-slate-100", "text-slate-400", "hover:text-slate-600", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "p-5", "space-y-5", "scrollbar-thin"], [1, "flex", "items-start", "gap-3"], ["size", "lg", 3, "name", "color"], [1, "font-bold", "text-slate-900", "text-sm"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "mt-1.5"], [3, "stage"], [1, "text-center"], [3, "score", "size", "showLabel"], [1, "text-xs", "text-slate-400", "mt-1.5", "font-medium"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider", "mb-2"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "text-xs", "bg-slate-100", "text-slate-600", "px-2", "py-0.5", "rounded-md", "font-medium"], [1, "grid", "grid-cols-2", "gap-1.5"], [1, "text-xs", "font-semibold", "py-1.5", "px-2", "rounded-lg", "border", "border-rose-200", "bg-rose-50", "text-rose-700", "hover:bg-rose-100", "transition-colors", "text-left", 3, "click"], [1, "px-5", "py-4", "border-t", "border-slate-100", "flex", "gap-2", "flex-shrink-0"], [1, "flex-1", "btn", "btn-primary", "btn-sm", "normal-case", "font-medium", "text-center", 3, "routerLink"], ["routerLink", "/recruiter/interviews", 1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-slate-600", "truncate", "text-xs"], [1, "text-xs", "font-semibold", "py-1.5", "px-2", "rounded-lg", "border", "transition-colors", "text-left", "leading-tight", 3, "ngClass"], [1, "text-xs", "font-semibold", "py-1.5", "px-2", "rounded-lg", "border", "transition-colors", "text-left", "leading-tight", 3, "click", "ngClass"], [1, "text-xs", "text-slate-600", "italic", "bg-amber-50", "border", "border-amber-100", "rounded-lg", "p-3", "leading-relaxed"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function PipelineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
            i0.ɵɵtext(5, "Pipeline Board");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementStart(8, "span", 5);
            i0.ɵɵtext(9, "\u00B7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11, "Drag cards to move stages");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 7)(13, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function PipelineComponent_Template_select_ngModelChange_13_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.jobFilter, $event) || (ctx.jobFilter = $event); return $event; });
            i0.ɵɵelementStart(14, "option", 9);
            i0.ɵɵtext(15, "All Jobs");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(16, PipelineComponent_For_17_Template, 2, 2, "option", 10, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 11);
            i0.ɵɵlistener("click", function PipelineComponent_Template_button_click_18_listener() { return ctx.refreshBoard(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(19, "svg", 12);
            i0.ɵɵelement(20, "path", 13);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(21, "div", 14);
            i0.ɵɵrepeaterCreate(22, PipelineComponent_For_23_Template, 5, 3, "div", 15, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 16)(25, "div", 17);
            i0.ɵɵrepeaterCreate(26, PipelineComponent_For_27_Template, 17, 12, "div", 18, _forTrack1);
            i0.ɵɵelementStart(28, "div", 19)(29, "div", 20)(30, "div", 7);
            i0.ɵɵelement(31, "div", 21);
            i0.ɵɵelementStart(32, "span", 22);
            i0.ɵɵtext(33, "Rejected");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "span", 23);
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 24);
            i0.ɵɵrepeaterCreate(37, PipelineComponent_For_38_Template, 7, 7, "div", 25, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 26)(40, "span", 27);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(42, PipelineComponent_Conditional_42_Template, 44, 12, "div", 28);
            i0.ɵɵconditionalCreate(43, PipelineComponent_Conditional_43_Template, 4, 1, "div", 29);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate2(" ", ctx.activeCount(), " active \u00B7 ", ctx.rejectedCount(), " rejected ");
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.jobFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.jobsApi.jobs());
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.columns);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.columns);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" ", ctx.rejectedCount(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.candidatesForStage("rejected"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.rejectedCount(), " rejected");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.selectedCandidate() ? 42 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.toastMessage() ? 43 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, StageBadgeComponent, AvatarComponent, ScoreRingComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PipelineComponent, [{
        type: Component,
        args: [{
                selector: 'app-pipeline',
                standalone: true,
                imports: [CommonModule, RouterLink, FormsModule, StageBadgeComponent, AvatarComponent, ScoreRingComponent],
                template: `
    <div class="flex flex-col h-full overflow-hidden">

      <div class="px-6 pt-5 pb-4 border-b border-slate-200 bg-white flex-shrink-0">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h1 class="text-xl font-bold text-slate-900">Pipeline Board</h1>
            <p class="text-sm text-slate-500 mt-0.5">
              {{ activeCount() }} active · {{ rejectedCount() }} rejected
              <span class="text-slate-300 mx-1.5">·</span>
              <span class="text-indigo-600 font-medium">Drag cards to move stages</span>
            </p>
          </div>
          <div class="flex items-center gap-2">
            <select [(ngModel)]="jobFilter"
              class="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                     text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
              <option value="">All Jobs</option>
              @for (job of jobsApi.jobs(); track job.id) {
                <option [value]="job.id">{{ job.title }}</option>
              }
            </select>
            <button (click)="refreshBoard()"
              class="w-9 h-9 flex items-center justify-center rounded-lg border
                     border-slate-200 bg-white text-slate-400 hover:bg-slate-50
                     hover:text-slate-600 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-2">
          @for (col of columns; track col.stage) {
            <div class="text-center py-1.5 px-2 rounded-lg border border-slate-100 bg-slate-50">
              <div class="text-base font-bold" [ngClass]="col.countColor">
                {{ countByStage(col.stage) }}
              </div>
              <div class="text-xs text-slate-500 font-medium mt-0.5 leading-tight">{{ col.label }}</div>
            </div>
          }
        </div>
      </div>

      <div class="flex-1 overflow-auto">
        <div class="flex gap-3 p-4 h-full min-w-max">

          @for (col of columns; track col.stage) {
            <div class="flex flex-col w-60 rounded-xl border bg-slate-50 border-slate-200
                        transition-all duration-150 flex-shrink-0"
                 [style.border-color]="dragOverStage() === col.stage ? '#6366F1' : null"
                 [style.background-color]="dragOverStage() === col.stage ? '#EEF2FF' : null"
                 (dragover)="onDragOver($event, col.stage)"
                 (dragleave)="onDragLeave()"
                 (drop)="onDrop($event, col.stage)">

              <div class="flex items-center justify-between px-3 py-2.5
                          border-b border-slate-200 flex-shrink-0">
                <div class="flex items-center gap-2">
                  <div class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                       [style.backgroundColor]="col.dotColor"></div>
                  <span class="text-xs font-bold text-slate-700">{{ col.label }}</span>
                </div>
                <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                      [ngClass]="col.countBadge">
                  {{ countByStage(col.stage) }}
                </span>
              </div>

              <div class="flex-1 p-2 space-y-2 overflow-y-auto min-h-48 scrollbar-thin">

                @if (candidatesForStage(col.stage).length === 0) {
                  <div class="flex flex-col items-center justify-center py-10 text-center">
                    <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center
                                justify-center mb-2 mx-auto">
                      <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"/>
                      </svg>
                    </div>
                    <p class="text-xs text-slate-400 font-medium">No candidates</p>
                    <p class="text-xs text-slate-400 mt-0.5">Drop a card here</p>
                  </div>
                }

                @for (c of candidatesForStage(col.stage); track c.id) {
                  <div draggable="true"
                       (dragstart)="onDragStart($event, c.id)"
                       (dragend)="onDragEnd()"
                       (click)="selectCandidate(c)"
                       class="bg-white rounded-lg border border-slate-200 p-3
                              hover:shadow-card-hover transition-all duration-150
                              cursor-grab active:cursor-grabbing group select-none"
                       [style.opacity]="draggingId() === c.id ? '0.4' : '1'"
                       [style.transform]="draggingId() === c.id ? 'rotate(1.5deg)' : null">

                    <div class="flex items-start gap-2 mb-2">
                      <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm"/>
                      <div class="flex-1 min-w-0">
                        <p class="text-xs font-bold text-slate-900 truncate">{{ c.name }}</p>
                        <p class="text-xs text-slate-500 truncate mt-0.5">{{ c.currentRole }}</p>
                      </div>
                      @if (c.score > 0) {
                        <span class="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 leading-none"
                              [ngClass]="getScoreClass(c.score)">{{ c.score }}</span>
                      }
                    </div>

                    <p class="text-xs text-indigo-600 font-medium truncate mb-1.5">{{ c.jobTitle }}</p>

                    @if (c.tags.length > 0) {
                      <div class="flex flex-wrap gap-1 mb-2">
                        @for (tag of c.tags.slice(0, 2); track tag) {
                          <span class="text-xs bg-indigo-50 text-indigo-600 px-1.5 py-0.5
                                       rounded font-semibold leading-none">{{ tag }}</span>
                        }
                      </div>
                    }

                    <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span class="text-xs text-slate-400">{{ formatDate(c.appliedDate) }}</span>
                      <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a [routerLink]="['/recruiter/candidates', c.id]"
                           (click)="$event.stopPropagation()"
                           class="w-5 h-5 flex items-center justify-center rounded
                                  text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                  </div>
                }

              </div>

              <div class="px-3 py-2 border-t border-slate-200 flex-shrink-0 flex
                          items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">
                  {{ countByStage(col.stage) }}
                  {{ countByStage(col.stage) === 1 ? 'candidate' : 'candidates' }}
                </span>
                <a routerLink="/recruiter/candidates"
                   class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  View →
                </a>
              </div>
            </div>
          }

          <div class="flex flex-col w-48 rounded-xl border border-rose-100 bg-rose-50 flex-shrink-0">
            <div class="flex items-center justify-between px-3 py-2.5 border-b border-rose-100 flex-shrink-0">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <span class="text-xs font-bold text-rose-700">Rejected</span>
              </div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                {{ rejectedCount() }}
              </span>
            </div>
            <div class="flex-1 p-2 space-y-1.5 overflow-y-auto scrollbar-thin">
              @for (c of candidatesForStage('rejected'); track c.id) {
                <div class="flex items-center gap-2 p-2 bg-white rounded-lg border
                            border-rose-100 opacity-60 hover:opacity-100 transition-opacity
                            cursor-pointer group"
                     [routerLink]="['/recruiter/candidates', c.id]">
                  <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm"/>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-semibold text-slate-700 truncate">{{ c.name }}</p>
                    <p class="text-xs text-slate-400 truncate">{{ formatDate(c.appliedDate) }}</p>
                  </div>
                </div>
              }
            </div>
            <div class="px-3 py-2 border-t border-rose-100 flex-shrink-0">
              <span class="text-xs text-rose-400 font-medium">{{ rejectedCount() }} rejected</span>
            </div>
          </div>

        </div>
      </div>

      @if (selectedCandidate()) {
        <div class="fixed inset-y-0 right-0 w-76 bg-white border-l border-slate-200
                    shadow-2xl z-40 flex flex-col"
             style="width:300px">

          <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
            <h3 class="text-sm font-bold text-slate-900">Quick View</h3>
            <button (click)="selectedCandidate.set(null)"
              class="w-7 h-7 flex items-center justify-center rounded-lg
                     hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin">
            <div class="flex items-start gap-3">
              <app-avatar [name]="selectedCandidate()!.name"
                          [color]="selectedCandidate()!.avatarColor" size="lg"/>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-900 text-sm">{{ selectedCandidate()!.name }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ selectedCandidate()!.currentRole }}</p>
                <div class="mt-1.5"><app-stage-badge [stage]="selectedCandidate()!.stage"/></div>
              </div>
            </div>

            <div class="text-center">
              <app-score-ring [score]="selectedCandidate()!.score" [size]="76" [showLabel]="true"/>
              <p class="text-xs text-slate-400 mt-1.5 font-medium">Composite Score</p>
            </div>

            <div class="space-y-2">
              @for (info of quickInfo(); track info.label) {
                <div class="flex items-center gap-2 text-sm">
                  <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="info.iconPath"/>
                  </svg>
                  <span class="text-slate-600 truncate text-xs">{{ info.value }}</span>
                </div>
              }
            </div>

            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Skills</p>
              <div class="flex flex-wrap gap-1.5">
                @for (skill of selectedCandidate()!.skills.slice(0, 6); track skill) {
                  <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>

            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Move to Stage</p>
              <div class="grid grid-cols-2 gap-1.5">
                @for (col of columns; track col.stage) {
                  @if (col.stage !== selectedCandidate()!.stage) {
                    <button (click)="moveFromPanel(col.stage)"
                      class="text-xs font-semibold py-1.5 px-2 rounded-lg border
                             transition-colors text-left leading-tight"
                      [ngClass]="col.moveBtnClass">
                      → {{ col.label }}
                    </button>
                  }
                }
                <button (click)="moveFromPanel('rejected')"
                  class="text-xs font-semibold py-1.5 px-2 rounded-lg border
                         border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100
                         transition-colors text-left">
                  ✕ Reject
                </button>
              </div>
            </div>

            @if (selectedCandidate()!.notes) {
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Notes</p>
                <p class="text-xs text-slate-600 italic bg-amber-50 border border-amber-100
                           rounded-lg p-3 leading-relaxed">
                  "{{ selectedCandidate()!.notes }}"
                </p>
              </div>
            }
          </div>

          <div class="px-5 py-4 border-t border-slate-100 flex gap-2 flex-shrink-0">
            <a [routerLink]="['/recruiter/candidates', selectedCandidate()!.id]"
               class="flex-1 btn btn-primary btn-sm normal-case font-medium text-center">
              Full Profile
            </a>
            <a routerLink="/recruiter/interviews"
               class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                      hover:bg-slate-50 normal-case font-medium">
              Schedule
            </a>
          </div>

        </div>
      }

      @if (toastMessage()) {
        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white
                    text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xl z-50
                    flex items-center gap-2.5">
          <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ toastMessage() }}
        </div>
      }

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PipelineComponent, { className: "PipelineComponent", filePath: "src/app/features/recruiter/pipeline/pipeline.component.ts", lineNumber: 324 }); })();
