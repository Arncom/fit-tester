import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  addressForm = this.fb.group({
    weight: null,
    height: null,
  });


  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    const weight: number = this.addressForm.controls['weight'].value;
    const height: number = this.addressForm.controls['height'].value;

    const bodyMass: number = weight / (height * height);
    if (bodyMass < 18.5) {
      alert('Underweight: less than 18.5');
    } else if (bodyMass >= 18.5 && bodyMass < 25) {
      alert('Normal: between 18.5 и 25');
    } else if (bodyMass >= 25 && bodyMass < 30) {
      alert('Overweight: between 25 и 30');
    } else if (bodyMass >= 30) {
      alert('Obesity: 30 or more');
    }
  }
}
