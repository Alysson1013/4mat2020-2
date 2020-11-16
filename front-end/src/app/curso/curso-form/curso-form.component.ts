import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  title : String = 'Novo Curso'

  curso : any = {}

  niveis : any = [
      {valor: "Básico", descr: "Básico"},
      {valor: "Intermediário", descr: "Intermediário"},
      {valor: "Avaçado", descr: "Avançado"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form){
      
  }

}
