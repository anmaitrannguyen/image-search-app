import { Component, OnInit } from '@angular/core';
import { ImageData, ImageResponse } from '../shared/model/image-response';
import { ImageListApiService } from '../shared/service/image-list-api.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: ImageData[] = [];
  searchQuery: string = "";
  loading = false;
  constructor(private imageListApiService: ImageListApiService) { }

  ngOnInit(): void {
  }

  handleSuccess(data: ImageResponse) {
    this.images = data.hits;
  }

  handleError(error: any) {
    console.log(error);
  }

  trackById(index: number, item: ImageData) {
    return item.id;
  }

  searchImages(query: string) {
    if (query) {
      this.loading = true;
      return this.imageListApiService.getImage(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => {
          this.loading = false;
        }
      );
    } else {
      return;
    }

  }
}
