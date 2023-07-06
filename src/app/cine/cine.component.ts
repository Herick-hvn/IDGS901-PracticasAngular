import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {
  clienteForm!: FormGroup;
  descuento: number = 0;
  totalPagar: number = 0;
  maximoBoletos: number = 0;
  precioBoletos: number = 12;
  error: string = '';
  descuentoMostrar: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      name: new FormControl(''),
      boletos: new FormControl('0'),
      numeroPersonas: new FormControl(1),
      membresia: new FormControl(false)
    });
  }

  onSubmit() {
    this.error = '';
    this.calcularDescuento();
  }

  calcularDescuento() {
    this.maximoBoletos = this.clienteForm.value.numeroPersonas * 7;
    this.descuento = 0;

    if (this.clienteForm.value.boletos > this.maximoBoletos) {
      this.error = `No puedes comprar más de ${this.maximoBoletos} boletos para ${this.clienteForm.value.numeroPersonas} persona(s)`;
      return;
    }

    if (this.clienteForm.value.boletos <= 2) {
      this.descuento = 0;
    } else if (this.clienteForm.value.boletos >= 3 && this.clienteForm.value.boletos < 6) {
      this.descuento = 0.1;
    } else if (this.clienteForm.value.boletos > 5) {
      this.descuento = 0.15;
    }

    if (this.clienteForm.value.membresia) {
      this.descuento += 0.1;
    }

    this.totalPagar = this.clienteForm.value.boletos * this.precioBoletos * (1 - this.descuento);
    this.descuentoMostrar = (this.descuento * 100).toFixed(1);

    
  }
}
