import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {

  closeForm=true;
  projectForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      date:['',Validators.required],
      address:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required], 
      days:['',Validators.required],   
    }) 
  }

submitHandler(){
  let body={
    status:"no Status",
    name:this.projectForm.get('name')?.value,
    email:this.projectForm.get('email')?.value,
    phone:this.projectForm.get('phone')?.value,
    date:this.projectForm.get('date')?.value,
    address:this.projectForm.get('address')?.value,
    from:this.projectForm.get('from')?.value,
    to:this.projectForm.get('to')?.value,
    days:this.projectForm.get('days')?.value
  }


  if(this.projectForm.valid){
    this.http.post('http://localhost:3000/getTour',body).subscribe(res=>{
    if(res){
      this.router.navigate(['/getproject']);
      this.closeForm=false
    }
    })
  }
  

  
}
get name() {
  return this.projectForm.get('name')!;
}

get phone() {
  return this.projectForm.get('phone')!;
}

get email() {
  return this.projectForm.get('email')!;
}
get gender() {
  return this.projectForm.get('gender')!;
}

get password() {
  return this.projectForm.get('password')!;
}
get from() {
  return this.projectForm.get('from')!;
}
get address() {
  return this.projectForm.get('address')!;
}
get date() {
  return this.projectForm.get('date')!;
}
get to() {
  return this.projectForm.get('to')!;
}
get days() {
  return this.projectForm.get('days')!;
}
validate(): void {
  if (this.projectForm?.invalid) {
    for (const control of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[control].markAsTouched();
    }
    return;
  }
}
}