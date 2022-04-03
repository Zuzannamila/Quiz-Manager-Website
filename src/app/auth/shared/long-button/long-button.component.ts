import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-button',
  templateUrl: './long-button.component.html',
  styleUrls: ['./long-button.component.css']
})
export class LongButtonComponent {

  @Input() input: string | undefined;
  @Input() disabled: any | undefined;

  isDisabled(): any {
		return this.disabled
			? 'true'
			: undefined;
	}

}
