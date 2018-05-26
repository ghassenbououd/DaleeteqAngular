import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {ContainerComponent} from './home/container/container.component';
import {FormsModule} from '@angular/forms';
import {MydrectiveDirective} from './directives/mydrective.directive';
import {MaterialModule} from './material/material.module';
import {MypipesPipe} from './pipes/mypipes.pipe';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {DashbordComponent} from './home/container/dashbord/dashbord.component';
import {AjoutComponent} from './home/container/ajout/ajout.component';
import {DetailComponent} from './home/container/detail/detail.component';
import {PocComponent} from './home/container/poc/poc.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './home/container/login/login.component';
import {InscriptionComponent} from './home/container/inscription/inscription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

const appMyRoute: Routes = [
  {path: '', component: DashbordComponent},
  {path: 'ajout', component: AjoutComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'poc', component: PocComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    MydrectiveDirective,
    MypipesPipe,
    DashbordComponent,
    AjoutComponent,
    DetailComponent,
    PocComponent,
    LoginComponent,
    InscriptionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appMyRoute),
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
