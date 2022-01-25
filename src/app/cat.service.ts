import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Breed} from "./models/breed";
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Image} from "./models/image";

@Injectable({
  providedIn: 'root'
})
export class CatService {


  constructor(private http: HttpClient) {
  }

  getBreeds(): Observable<Breed[]> {
    const headers = new HttpHeaders({
      'x-api-key': environment.catApiKey
    });
    return this.http.get<Breed[]>(environment.endpoint + '/breeds', {headers});
  }

  getImages(breedId: string): Observable<Image[]> {
    const headers = new HttpHeaders({
      'x-api-key': environment.catApiKey
    });
    const params = new HttpParams().append('breed_id', breedId)
    return this.http.get<Image[]>(environment.endpoint + '/images/search', {headers, params});
  }

}
