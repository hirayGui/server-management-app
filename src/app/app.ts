import { Component } from '@angular/core';

import { HeaderComponent } from './header/header';
import { ServerStatusComponent } from './dashboard/server-status/server-status';
import { TrafficComponent } from './dashboard/traffic/traffic';
import { TicketsComponent } from './dashboard/tickets/tickets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent ],
  templateUrl: './app.html',
})
export class AppComponent {
  
}
