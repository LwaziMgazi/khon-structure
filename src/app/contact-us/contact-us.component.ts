import { Component , Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FormBuilder , FormGroup , Validator, Validators} from '@angular/forms';
import {IEmailInterface} from '../shared/interfaces';
import { EmailService} from '../shared/services/email.service';
import { LoaderService } from '../shared/component/loader/loader.service';
import { ToastService } from '../shared/services/toast.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit{
  emailPayload!: IEmailInterface ;
  contactUsForm: any;
   constructor(@Inject(DOCUMENT) private readonly document: Document, private fb: FormBuilder,
               private emailService: EmailService, private loaderService: LoaderService, private toastService: ToastService) {
        }
    ngOnInit(): void {
      this.addScript('assets/js/script.js');
      this.initializeForm();
      console.log(this.contactUsForm)

    }

    private addScript(scriptSrc: string) {
          const script = this.document.createElement('script');
          script.type = 'text/javascript';
          script.src = scriptSrc;
          script.async = true;
          this.document.head.appendChild(script);
      }

      private initializeForm() {
        this.contactUsForm =  this.fb.group({
          name : ['', Validators.required],
          email : ['',[Validators.required, Validators.email]],
          phoneNumber: ['',[Validators.required, Validators.maxLength(10), Validators.maxLength(10)]],
          subject : ['',Validators.required ],
          message: ['', Validators.required]
      });
      }

      validateName(){
      return   (this.contactUsForm.get('name')?.invalid &&
                (this.contactUsForm.get('name')?.dirty ||
                this.contactUsForm.get('name')?.touched));
      }

      validateEmail(){
        return  (this.contactUsForm.get('email')?.invalid &&
                (this.contactUsForm.get('email')?.dirty ||
                this.contactUsForm.get('email')?.touched));
      }

      validatePhoneNumber(){
        return  (this.contactUsForm.get('phoneNumber')?.invalid &&
                (this.contactUsForm.get('phoneNumber')?.dirty ||
                this.contactUsForm.get('phoneNumber')?.touched));
      }

      validateSubject(){
          return  (this.contactUsForm.get('subject')?.invalid &&
                (this.contactUsForm.get('subject')?.dirty ||
                this.contactUsForm.get('subject')?.touched));
      }

      validateMessage(){
          return  (this.contactUsForm.get('message')?.invalid &&
                (this.contactUsForm.get('message')?.dirty ||
                this.contactUsForm.get('message')?.touched));
      }

      isFormValid(): boolean{
        return this.contactUsForm.valid;
      }

      submitEmail(){
        this.emailPayload = {
          emailReportType : 'contact',
          name : this.contactUsForm.get('name').value,
          email : this.contactUsForm.get('email').value,
          phone : this.contactUsForm.get('phoneNumber').value,
          subject : this.contactUsForm.get('subject').value,
          message : this.contactUsForm.get('message').value,
          emailTo: 'info@khon.co.za',
          source : 'website',

        }
        this.loaderService.startLoader();

        return this.emailService.sendEmailToClient(this.emailPayload).subscribe({
          next: ()=>{
            this.loaderService.stopLoader();
            this.contactUsForm.reset();
            this.toastService.showSuccess('Inquiry successfully sent');
          },
          error: (err)=>{
            this.loaderService.stopLoader();
            this.toastService.showError('Error occurred while seding, please try again.')
            console.error(err);
          }
        })
      }
}
