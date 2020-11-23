import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})
export class TurmaListComponent implements OnInit {

  turmas : any = []

  displayedColumns: string[] = ['nome', 'curso', 'professor', 'periodo', 'dias_semana', 'horario', 'sala_aula', 'editar', 'excluir'];

  constructor(
      private turmaSrv : TurmaService,
      private snackBar : MatSnackBar

  ) { }

  async ngOnInit(){
    this.turmas = await this.turmaSrv.listar() 
  }

  async excluir(id: string) {
      if (confirm('Deseja realmente excluir este item?')){
          try{
             //1) Efetuar a exclusão
             await this.turmaSrv.excluir(id)
             //2) Atualizar dados da tabela
             this.ngOnInit()
             //3) Dar um feedback para o usuário
             this.snackBar.open('Item excluido com sucesso', 'Entendi', {
                 duration: 5000 //5 segundo
             })
          } catch(err){
             console.log(err)
             this.snackBar.open('Não foi possivel Excluir esse item', 'Que pena!', {
                 duration: 5000 //5 segundo
             })
          }
      }
  }
}
