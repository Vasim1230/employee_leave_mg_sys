import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';


@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.css'
})
export class LeaveRequestComponent {
  leave: Leave = { id: 0, employeeName: '', leaveType: '', startDate: new Date(), endDate: new Date(), status: 'Pending' };

  constructor(private leaveService: LeaveService) {}

  submitLeaveRequest(form: NgForm) {
    if (form.valid) {
      this.leave.id = Math.floor(Math.random() * 1000); // Simple ID generation
      this.leaveService.addLeave(this.leave);
      alert('Leave request submitted!');
      this.leave = { id: 0, employeeName: '', leaveType: '', startDate: new Date(), endDate: new Date(), status: 'Pending' }; // Reset form
      form.resetForm(); // Reset form after submission
    }
  }


}
