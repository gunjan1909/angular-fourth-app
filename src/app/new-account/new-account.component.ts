import {
  Component,
  // EventEmitter,
  // Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /* what providers do and means here:
  when angular creates an instance of this component, it will also create an instance of the logging service class 
  and inject it into this component. so we can use it in this component.
  */
  providers: [
    LoggingService,
    //AccountsService
  ],
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  //FOR CLEARING THE INPUT LATER
  @ViewChild('accountName') accountname!: ElementRef;

  //binding to property of the logging service class type instance ig
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });*/
    this.accountsService.addAccount(accountName, accountStatus);

    //NORMAL CONSOLE LOG
    //console.log('A server status changed, new status: ' + accountStatus);

    // DONT DO LIKE THIS WITH SERVICES BY CREATING AN INSTANCE LIKE THIS
    /* const service = new LoggingService();
    service.logStatusChange(accountStatus);*/

    //INSTEAD USE DEPENDENCY INJECTION
    this.loggingService.logStatusChange(accountStatus);

    //to clear the input on form submit
    this.accountname.nativeElement.value = '';
  }

  //called when user submit form without entering name
  enterName() {
    alert('Please provide a name!');
  }
}
