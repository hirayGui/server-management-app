import { Component, ElementRef, ViewChild } from '@angular/core';

import { ButtonComponent } from "../../../shared/button/button";
import { ControlComponent } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicketComponent {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string) {
    console.log('Title: ', title);
    console.log('Ticket Text: ', ticketText);
    this.form?.nativeElement.reset(); // reseta o formulário após o submit
  }
}
