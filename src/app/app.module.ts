import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { ViewReposComponent } from './view-repos/view-repos.component';
import { RepositoryContentComponent } from './repository-content/repository-content.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    ViewReposComponent,
    RepositoryContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
