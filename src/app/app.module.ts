import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjesorgulaComponent } from './projesorgula/projesorgula.component';
import { ProjelerService } from './projeler.service';
import { SorgulaFilterPipe } from './projesorgula/sorgula-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, 
    ProjesorgulaComponent, SorgulaFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SorgulaFilterPipe
  ],
  providers: [ProjelerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
