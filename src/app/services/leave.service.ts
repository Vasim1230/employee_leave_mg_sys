import { Injectable } from '@angular/core';
import { Leave } from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private leaves: Leave[] = [];

  constructor() {}

  getLeaves(): Leave[] {
    return this.leaves;
  }

  addLeave(leave: Leave): void {
    this.leaves.push(leave);
  }

  
}
