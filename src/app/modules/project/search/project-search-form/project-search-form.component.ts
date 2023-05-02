import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'si-project-search-form',
  templateUrl: './project-search-form.component.html',
  styleUrls: ['./project-search-form.component.scss']
})
export class ProjectSearchFormComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createSearchForm();
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(() => {
      console.log(this.searchForm.getRawValue());
    })
  }

  private createSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      industry: ['', Validators.required],
      location: ['', Validators.required],
      equityRange: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  public onSubmit(): void {

  }
}
