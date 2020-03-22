import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CalendarRoutingModule
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule {}
