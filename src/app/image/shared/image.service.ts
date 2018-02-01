import { Injectable} from '@angular/core';

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


const IMAGES = [
  {"id": 1, "category": "airplanes", "caption": "777", "url": "assets/img/pexels-photo.jpg"},
  {"id": 2, "category": "airplanes", "caption": "a380", "url": "assets/img/a380.jpg"},
  {"id": 3, "category": "airplanes", "caption": "a330-neo", "url": "assets/img/a330-neo.jpg"},
  {"id": 4, "category": "airplanes", "caption": "a350", "url": "assets/img/a350.jpg"},
  {"id": 5, "category": "airplanes", "caption": "787", "url": "assets/img/787.jpg"},
  {"id": 6, "category": "airplanes", "caption": "747-8", "url": "assets/img/747-8.jpg"},

]
