import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit{
  constructor(){}

  empleado={
    nombre:'',
    apellido:'',
    email:''
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  guardar(formulario:NgForm){

    Object.values(formulario).forEach(
      control=>{console.log(control)}
    )
  }

}
