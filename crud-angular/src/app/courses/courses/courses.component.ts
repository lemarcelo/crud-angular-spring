import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name','category', 'actions'];

  //coursesService: CoursesService;

  //this.courses = [];
  //this.coursesService = new CoursesService();
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.OnError('Erro ao carregar cursos.')
        return of([])
      })
    );
   }

   OnError(ErrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErrorMsg
    });
  }
   ngOnInit(): void {
  }

  onAdd(){
    // relativeTo permite que a rota atual seja usada como parâmetro de complemento da nova RouterState(new)
    this.router.navigate(['new'],  {relativeTo: this.route})
  }

}
