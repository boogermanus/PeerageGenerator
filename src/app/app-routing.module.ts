import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeerageGeneratorComponent} from "./components/peerage-generator/peerage-generator.component";


const routes: Routes = [{path: "**", component: PeerageGeneratorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
