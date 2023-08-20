import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    //console.log(this.id);
    this.statusChanged.emit({ id: this.id, newStatus: status });

    //console.log('A server status changed, new status: ' + status);

    // DONT DO LIKE THIS
    /* const service = new LoggingService();
    service.logStatusChange(accountStatus);*/
    this.loggingService.logStatusChange(status);
  }
}
