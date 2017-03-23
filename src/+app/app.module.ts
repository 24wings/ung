import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialRootModule, MdButtonModule } from '@angular/material';
import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [AppComponent, XLargeDirective],
  imports: [
    MaterialRootModule,
    MdButtonModule.forRoot(),
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
