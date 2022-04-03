import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-username-initials',
  templateUrl: './username-initials.component.html',
  styleUrls: ['./username-initials.component.css']
})
export class UsernameInitialsComponent  {

  @Input() name: string | undefined;

	/*
	 * Obtains the first letter of the first name and second name of the user.
	 */
	getUserInitials(): string {
		if (this.name)
		{
			var fullname = this.name.split('_');
			var firstname = fullname[0];
			var lastname = fullname[1];
			return firstname 
			? (!lastname
					? firstname[0] + firstname[1]
					: firstname[0] + lastname[0]
			  ).toUpperCase() // 
			: '';
		}
		return '';	
	}

}
