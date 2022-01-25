import {Component, OnInit} from '@angular/core';
import {CatService} from "../cat.service";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Breed} from "../models/breed";

@Component({
  selector: 'app-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.css']
})
export class CatBreedsComponent implements OnInit {

  breeds$: Observable<Breed[]> | undefined;
  selectedBreedId: BehaviorSubject<string>;

  constructor(private catService: CatService) {
    this.selectedBreedId = new BehaviorSubject<string>('');
  }

  ngOnInit(): void {

    this.breeds$ = this.catService.getBreeds();
  }

  convertTemperament(temperament?: string): string[] {
    if (temperament) {
      return temperament.split(',');
    }
    return [];

  }

  onShowImagesClicked(breed: Breed) {
    if (breed && breed.id) {
      this.catService.getImages(breed.id).pipe(
        tap(console.log),
        map(images => images[0].url),
        tap(url => window.open(url, "_blank"))
      ).subscribe()
    }

  }

}
