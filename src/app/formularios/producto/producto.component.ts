import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoModule } from 'src/app/modelo/producto/producto.module';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent  implements OnInit{

  productoForm!:FormGroup;
  producto = new ProductoModule

  constructor(
    private fb:FormBuilder
  ){ }

  ngOnInit(): void {
      this.productoForm = new FormGroup(
        {
          codigo: new FormControl('',[Validators.required]),
          precio: new FormControl(),
          descripcion: new FormControl(),
          nombre: new FormControl(),
          imagen: new FormControl(),

        }
      )
  }

  get codigoInvalido(){
    return true;
  }

  get nombreInvalido(){
    return true;
  }
  get precioInvalido(){
    return true;
  }
 guardar(){
  console.log("Guardar formulario")
  console.log(this.productoForm.value)
  
  

 }
}
