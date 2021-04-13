import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ImageResponse } from '../model/image-response';

@Injectable({
  providedIn: 'root'
})
export class ImageListApiService {
  private API_URL: string = environment.API_URL;
  private API_KEY: string = environment.API_KEY;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  constructor(private http: HttpClient) { }

  getImage(query: string) {
    return this.http.get<ImageResponse>(this.URL + query);
  }
}
