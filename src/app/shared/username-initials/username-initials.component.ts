import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-username-initials',
  templateUrl: './username-initials.component.html',
  styleUrls: ['./username-initials.component.css']
})
export class UsernameInitialsComponent  {

  @Input() name: { firstName: string; lastName: string; } | undefined;

	/*
	 * Obtains the first letter of the first name and second name of the user.
	 */
	getUserInitials(): string {
		return this.name && this.name.firstName
			? (this.name.firstName[0] + this.name.lastName[0]).toUpperCase() 
			: '';
	}

}
