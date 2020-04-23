import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css'],
})
export class VisualizeComponent implements OnInit {
  state$: Observable<object>;
  _csvData: any[] = [];
  displayedColumns: string[] = [
    'First name',
    'Sur name',
    'Issue count',
    'Date of birth',
  ];
  dataSource;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.state$.subscribe((data: any) => {
      this._csvData = data.data;
    });
    if (!this._csvData) {
      this.router.navigateByUrl('/upload');
    }
    this.dataSource = new MatTableDataSource(this._csvData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.dataSource = this._csvData.filter(
        (item) => item['Issue count'] === filterValue
      );
    } else {
      this.dataSource = this._csvData;
    }
  }
}
