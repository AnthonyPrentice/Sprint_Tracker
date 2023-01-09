import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SprintsComponent } from './sprints/sprints.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';

const routes: Routes = [
    { path: '', redirectTo: '/sprints', pathMatch: 'full'}, 
    { path: 'sprints', component: SprintsComponent },
    { path: 'user_stories', component: UserStoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
