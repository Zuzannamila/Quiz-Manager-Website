import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() input: string | undefined;
  @Input() disabled: any | undefined;

  // isDisabled(): any {
	// 	return this.disabled
	// 		? 'true'
	// 		: undefined;
	// }
}
