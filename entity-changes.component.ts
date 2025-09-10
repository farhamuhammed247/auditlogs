import { Component } from '@angular/core';

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
  changeType: string;
  tenantId: string;
  entityType: string;
}

@Component({
  selector: 'app-entity-changes',
  templateUrl: './entity-changes.component.html',
  styleUrls: ['./entity-changes.component.css']
})
export class EntityChangesComponent {

  filters = {
    startDate: '',
    endDate: '',
    changeType: '',
    entityType: ''
  };

  changeTypes = ['Created', 'Updated', 'Deleted'];

  // Example logs with all required fields
  logs: LogEntry[] = [
    {
      action: 'Detail',
      status: 200,
      method: 'POST',
      endpoint: '/connect/token',
      user: 'admin',
      ip: '::1',
      date: '9/9/2025 2:17 PM',
      duration: 120,
      application: 'AuthService',
      changeType: 'Created',
      tenantId: 'Tenant01',
      entityType: 'AuthService'
    },
    {
      action: 'Detail',
      status: 400,
      method: 'POST',
      endpoint: '/Error',
      user: 'admin',
      ip: '::1',
      date: '9/9/2025 2:05 PM',
      duration: 350,
      application: 'WebApp',
      changeType: 'Deleted',
      tenantId: 'Tenant02',
      entityType: 'WebApp'
    }
  ];

  search() {
    console.log('Searching with filters:', this.filters);
    // Later: filter logs based on this.filters
  }
}
