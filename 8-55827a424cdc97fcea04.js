webpackJsonp([8],{184:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"sources",function(){return o});var o=[{filename:"component.ts",contents:t(786)},{filename:"template.html",contents:t(787)},{filename:"module.ts",contents:t(788)}]},786:function(e,n){e.exports="import {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation\n} from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  // don't do this in your app, its only so the styles get applied globally\n  styles: [\n    `\n    .cal-day-selected,\n    .cal-day-selected:hover {\n      background-color: deeppink !important;\n    }\n  `\n  ],\n  encapsulation: ViewEncapsulation.None\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  selectedDay: CalendarMonthViewDay;\n\n  events: CalendarEvent[] = [];\n\n  dayClicked(day: CalendarMonthViewDay): void {\n    if (this.selectedDay) {\n      delete this.selectedDay.cssClass;\n    }\n    day.cssClass = 'cal-day-selected';\n    this.selectedDay = day;\n  }\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(day => {\n      if (\n        this.selectedDay &&\n        day.date.getTime() === this.selectedDay.date.getTime()\n      ) {\n        day.cssClass = 'cal-day-selected';\n        this.selectedDay = day;\n      }\n    });\n  }\n}\n"},787:function(e,n){e.exports='<div class="row">\n  <div class="col-md-6">\n    <div class="btn-group">\n      <div\n        class="btn btn-primary"\n        mwlCalendarPreviousView\n        view="month"\n        [(viewDate)]="viewDate">\n        Previous\n      </div>\n      <div\n        class="btn btn-secondary"\n        mwlCalendarToday\n        [(viewDate)]="viewDate">\n        Today\n      </div>\n      <div\n        class="btn btn-primary"\n        mwlCalendarNextView\n        view="month"\n        [(viewDate)]="viewDate">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class="col-md-6 text-right">\n    <h3>{{ viewDate | calendarDate:\'monthViewTitle\':\'en\' }}</h3>\n  </div>\n</div>\n<br>\n\n<mwl-calendar-month-view\n  [viewDate]="viewDate"\n  [events]="events"\n  (beforeViewRender)="beforeMonthViewRender($event)"\n  (dayClicked)="dayClicked($event.day)">\n</mwl-calendar-month-view>\n'},788:function(e,n){e.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"}});
//# sourceMappingURL=8-55827a424cdc97fcea04.js.map