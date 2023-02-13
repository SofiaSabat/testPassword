import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password = '';
  passwordStrength = '';

  checkPassStrength(event: any) {
    this.password = event.target.value;
    let hasDigits = false;
    let hasLetters = false;
    let hasSymbols = false;
    for (let i = 0; i < this.password.length; i++) {
      const char = this.password[i];
      if (char >= "0" && char <= "9") {
        hasDigits = true;
      } else if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
        hasLetters = true;
      } else {
        hasSymbols = true;
      }
    }
    if (this.password.length >= 8){
      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = "strong";
      } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
        this.passwordStrength = "medium";
      } else {
        this.passwordStrength = "easy";
      }
    }
    else if(this.password.length < 8 && this.password.length!=0){
      this.passwordStrength = "short";
    }
    else{
      this.passwordStrength = "empty";
    }
    }

}
