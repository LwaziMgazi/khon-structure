import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent} from './projects/projects.component';
import { ServicesComponent} from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ChamberComponent } from './chamber/chamber.component';
const routes: Routes = [
   {
    path:'',
    redirectTo:'home',
     pathMatch: 'full'
  },
   {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
   {
    path: 'news',
    component: NewsComponent
  },
   {
    path: 'contact',
    component: ContactUsComponent
  },
   {
    path: 'chamber',
    component: ChamberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
