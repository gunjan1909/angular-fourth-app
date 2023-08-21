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

    //console.log('A server status changed, new status: ' + accountStatus);

    // DONT DO LIKE THIS
    /* const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
    this.loggingService.logStatusChange(accountName);
    //clear the input
    this.accountname.nativeElement.value = '';
  }
  enterName() {
    alert('Please provide a name!');
  }
}
