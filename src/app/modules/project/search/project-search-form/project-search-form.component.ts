import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'si-project-search-form',
  templateUrl: './project-search-form.component.html',
  styleUrls: ['./project-search-form.component.scss']
})
export class ProjectSearchFormComponent implements OnInit {
  searchForm!: FormGroup;
  @Output() search: EventEmitter<any> = new EventEmitter<any>()


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
      industry: [null],
      location: [null],
      equityRange: [null],
      role: [null]
    });
  }

  public onSubmit(): void {
    const searchFormData = this.searchForm.getRawValue();
    this.search.emit(searchFormData)
  }
}
