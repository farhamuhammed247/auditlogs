import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface LogEntry {
  action: string;
  status: number;
  method: string;
  endpoint: string;
  user: string;
  ip: string;
  date: string;
  duration: number;
  application: string;
}

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuditLogsComponent implements OnInit {

  filters = {
    startDate: '',
    endDate: '',
    userName: '',
    url: '',
    minDuration: '',
    maxDuration: '',
    httpMethod: '',
    httpStatus: '',
    hasException: ''
  };

  httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  httpStatuses = [200, 201, 400, 401, 403, 404, 409, 500];

  // ✅ only ONE logs array
  logs: LogEntry[] = [];

  ngOnInit(): void {
    this.refresh(); // load initial logs
  }

  refresh() {
    // ✅ replace with API call later
    this.logs = [
      { action: 'Detail', status: 200, method: 'POST', endpoint: '/connect/token', user: 'admin', ip: '::1', date: '9/9/2025 2:17 PM', duration: 120, application: 'AuthService' },
      { action: 'Detail', status: 400, method: 'POST', endpoint: '/Error', user: 'admin', ip: '::1', date: '9/9/2025 2:05 PM', duration: 350, application: 'WebApp' },
      { action: 'Detail', status: 400, method: 'POST', endpoint: '/Error', user: 'admin', ip: '::1', date: '9/9/2025 2:05 PM', duration: 410, application: 'WebApp' },
      { action: 'Detail', status: 400, method: 'POST', endpoint: '/connect/token', user: 'admin', ip: '::1', date: '9/9/2025 2:05 PM', duration: 95, application: 'AuthService' },
      { action: 'Detail', status: 200, method: 'POST', endpoint: '/connect/token', user: 'admin', ip: '::1', date: '9/9/2025 2:05 PM', duration: 110, application: 'AuthService' }
    ];
  }

  search() {
    console.log('Searching with filters:', this.filters);
    // TODO: Call API with this.filters
  }

  get totalDuration(): number {
    return this.logs.reduce((sum, log) => sum + log.duration, 0);
  }

  get totalRows(): number {
    return this.logs.length;
  }
}
