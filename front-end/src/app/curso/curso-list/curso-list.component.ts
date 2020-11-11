import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  cursos : any = []

  displayedColumns: string[] = ['nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir'];

  constructor(
      private cursoSrv : CursoService,
      private snackBar : MatSnackBar

  ) { }

  async ngOnInit(){
    this.cursos = await this.cursoSrv.listar() 
  }

  async excluir(id: string) {
      if (confirm('Deseja realmente excluir este item?')){
          try{
             //1) Efetuar a exclusão
             await this.cursoSrv.excluir(id)
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
