import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-subject-form",
  templateUrl: "./component.html"
})
export class ElementFormComponent {
  @Input() elementForm: FormGroup;

  @Output() addElement: EventEmitter<any> = new EventEmitter();

  /**
   * Adds a new element.
   */
  add() {
    this.addElement.emit();
  }

  get name()   { return this.elementForm.get("name") }
  get hours() { return this.elementForm.get("hours") }
}
