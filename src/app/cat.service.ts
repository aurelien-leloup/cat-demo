import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Breed} from "./models/breed";
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Image} from "./models/image";

@Injectable({
  providedIn: 'root'
})
export class CatService {


  constructor(private http: HttpClient) {
  }

  getBreeds(): Observable<Breed[]> {

    return this.http.get<Breed[]>(environment.endpoint + '/breeds');
  }

  getImages(breedId: string): Observable<Image[]> {

    const params = new HttpParams().append('breed_id', breedId)
    return this.http.get<Image[]>(environment.endpoint + '/images/search', {params});
  }

}
