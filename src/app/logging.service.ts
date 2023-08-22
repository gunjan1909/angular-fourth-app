// A SIMPLE LOGGING SERVICE FOR CONSOLE LOGGING THE SERVER ACCOUNT STATUS

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
