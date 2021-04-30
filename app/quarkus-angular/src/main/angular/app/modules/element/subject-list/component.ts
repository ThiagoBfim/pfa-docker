import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { ElementService } from '../service';

@Component({
  selector: 'app-element-list',
  templateUrl: './component.html'
})
export class ElementListComponent implements OnInit {
  columns = ["name", "hours", "remove"];
  elements;

  elementForm = new FormGroup({
    name: new FormControl(""),
    hours: new FormControl(""),
    remove: new FormControl(""),
  });

  constructor(private service: ElementService) { }

  ngOnInit() {
    this.service.list().then(data => {
      this.elements = data;
    });
  }

  /**
   * Adds an element to the periodic table.
   */
  addElement() {
    if (this.elementForm.valid) {
      // Attempt to add an element based on the data available in the form.
      this.service.save(this.elementForm.value).then(response => {
        // Check whether the element exists already.
        if (response
          && response["name"]
          && this.elements
            .filter(element => element && element["name"] && element["name"] == response["name"])
            .length == 0) {
          // Add the element locally if it does not exist already.
          this.elements = this.elements.concat([response]);
        }
      });
    }

    this.elementForm.reset();
  }

  _deleteElement(name:string) {
    this.elements = this.elements.filter(item => item.name !== name);

  }

  remove(element){
    console.log(element.name);
    this.service.remove(element.name).catch(error => {
      console.log(error);
    });
    this._deleteElement(element.name);
    console.log(this.elements);
  }


}
