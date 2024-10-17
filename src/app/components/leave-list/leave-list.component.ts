import { Component } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';
import { LeaveRequestComponent } from '../leave-request/leave-request.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './leave-list.component.html',
  styleUrl: './leave-list.component.css'
})
export class LeaveListComponent {
  leaves: Leave[] = [];

  constructor(private leaveService: LeaveService) {
    this.leaves = this.leaveService.getLeaves();
  }
  
  getLeaveStatus(leave: Leave): string {
    const today = new Date();
    const endDate = new Date(leave.endDate);
    return endDate < today ? 'Approved' : 'Pending';
  }

}
