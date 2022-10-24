import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-volida-films',
  templateUrl: './volida-films.component.html',
  styleUrls: ['./volida-films.component.scss'],
})
export class VolidaFilmsComponent implements OnInit {
  films: Entry<any>[] = [];

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {
    //get all films
    this.filmsService.getAllFilms().then((films) => {
      this.films = films;
    });
  }

  filmPage(id: any) {
    this.router.navigate(['/filmPage/' + id]);
  }
}
