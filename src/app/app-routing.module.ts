import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AngularComponent } from './angular/angular.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';

const routes: Routes = [
  // { path: 'html', component: HtmlComponent },
  // { path: 'css', component: CssComponent },
  // { path: 'js', component: JavascriptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
