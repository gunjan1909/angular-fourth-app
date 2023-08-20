import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LoggingService } from '../logging.service';
//import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  @ViewChild('accountName') accountname!: ElementRef;

  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });

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
