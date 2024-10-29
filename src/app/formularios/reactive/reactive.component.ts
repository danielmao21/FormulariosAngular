import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  
  formulario!: FormGroup;

  constructor
  (
    private fb: FormBuilder
  )
 { 
   this.crearFormulario();
 }

 ngOnInit(): void {
     
 }

 crearFormulario()
 {
  this.formulario = this.fb.group(
    {
      nombre: [[Validators.required, Validators.minLength(5), Validators.maxLength(60)]]
    }
  )
 }

 guardar(){
  console.log(this.formulario)
 }
}
