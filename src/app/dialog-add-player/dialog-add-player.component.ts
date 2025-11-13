import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }
//private dialog: MatDialog

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
