import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work.component';


const routes: Routes = [
	{path: '', component: WorkComponent},
	{path: 'project', component: ProjectComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WorkRoutingModule {
	// ...
}
