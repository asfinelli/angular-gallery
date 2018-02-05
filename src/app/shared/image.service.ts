import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id": 1, "category": "airplanes", "caption": "747", "url":"assets/img/747.jpg"},
    {"id": 2, "category": "airplanes", "caption": "787", "url":"assets/img/787.jpg"},
    {"id": 3, "category": "airplanes", "caption": "a330neo", "url":"assets/img/A330neo.jpg"}
  ]
