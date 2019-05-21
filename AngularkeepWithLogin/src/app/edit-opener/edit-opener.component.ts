import { Component, OnInit } from '@angular/core';
import { EditViewComponent } from '../edit-view/edit-view.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { RoutingService } from '../services/routing.service';


@Component({
  selector: 'app-edit-opener',
  templateUrl: './edit-opener.component.html',
  styleUrls: ['./edit-opener.component.css']
})
export class EditOpenerComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private activeRoute: ActivatedRoute, private routerService: RoutingService) {
    let id = +this.activeRoute.snapshot.paramMap.get('noteId');
    this.dialogRef.open(EditViewComponent,
      {
        data: {
          noteId: id
        }
      }).afterClosed().subscribe(data => {
        this.routerService.toDasboard();
      })
      ;
  }

  ngOnInit() {
  }

  edit() {
  }
}
