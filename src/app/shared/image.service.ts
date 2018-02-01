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
    {"id":1, "category": "airplanes", "caption": "View from the boat", "url":"assets/img/787.jpg"},
    {"id":2, "category": "airplanes", "caption": "Sailing the coast", "url":"assets/img/747.jpg"},
    {"id":3, "category": "airplanes", "caption": "The water was nice", "url":"assets/img/a330neo.jpg"},
  ]
