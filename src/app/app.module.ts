import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { ImageFilterPipe } from './shared/filter.pipe';
import { AppComponent } from './app.component';
import { ImageService } from './shared/image.service';
import { GalleryComponent} from './gallery/gallery.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { appRoutes } from '../routes';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
