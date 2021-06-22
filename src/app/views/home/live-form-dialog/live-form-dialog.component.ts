import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    public rest: LiveService) {
    
   }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['2020-08-01T20:00:00', [Validators.required]],
      liveTime: ['', [Validators.required]]
    });
  }


  createLive() {
    this.rest.postLives(this.liveForm.value).subscribe(result => { });

    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

}
