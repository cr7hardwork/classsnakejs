import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectDataService} from "@core/services/project.data.service";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'si-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  public createProjectForm: FormGroup

  constructor(private formBuilder: FormBuilder, private projectDataService: ProjectDataService, private router: Router) {
    this.createProjectForm = this.createForm();
    this.createProjectForm.valueChanges.subscribe((data) => {
      console.log(this.createProjectForm.getRawValue());
    })
  }

  get members(): FormArray {
    return this.createProjectForm.get('members') as FormArray;
  }

  public ngOnInit(): void {
  }

  public getFormGroup(index: number): FormGroup {
    return this.members.at(index) as FormGroup;
  }

  public onAddMember(): void {
    const member = this.formBuilder.group({
        role: [null, Validators.required],
        location: [null],
        equity: [{min: 0, max: 0}],
        description: ['']
      }
    )
    this.members.push(member)
  }

  public onCreateFormSubmit(): void {
    const formData = this.createProjectForm.getRawValue();

    firstValueFrom(this.projectDataService.create(formData)).then(() => {
      this.router.navigate(['/project/search'])
    })

  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      industries: [[], Validators.required],
      description: ['', Validators.required, Validators.minLength(500)],
      members: this.formBuilder.array([])
    })
  }


}
