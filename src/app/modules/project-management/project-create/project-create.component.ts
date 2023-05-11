import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'si-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  public createProjectForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.createProjectForm = this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.fb.group([{
      title: ['', Validators.required],
      industries: [[], Validators.required],
      description: ['', Validators.required, Validators.minLength(500)],
      members: this.fb.array([
        {

        }
      ])
    }])
  }
}
