import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{

    constructor(private authService: AuthService){ }

    isLogInMode = true ;

    onSwitchMode(){
        this.isLogInMode = !this.isLogInMode ;
    }

    onSubmit(form: NgForm){
        if(!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        if(this.isLogInMode){

        } else {
            this.authService.signup(email,password).subscribe(resData => {
                console.log(resData)
            },
            error => {
                console.log(error);
            });
           
        }
        form.reset(); 
        
    }
}