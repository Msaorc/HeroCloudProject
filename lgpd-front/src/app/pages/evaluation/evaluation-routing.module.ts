import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';

const routes: Routes = [
  {
    path: 'evaluation',
    component: EvaluationFormComponent
  },
  {
    path: 'addEvaluation',
    component: EvaluationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
