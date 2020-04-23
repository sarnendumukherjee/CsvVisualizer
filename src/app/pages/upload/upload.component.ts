import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private papa: Papa, private router: Router) {}
  _files = [];

  ngOnInit(): void {}

  onChange(files: File[]): void {
    this._files = files;
  }

  process(): void {
    this.papa.parse(this._files[0], {
      header: true,
      complete: (results) => {
        this.router.navigateByUrl('/visualize', { state: results });
      },
    });
  }
}
