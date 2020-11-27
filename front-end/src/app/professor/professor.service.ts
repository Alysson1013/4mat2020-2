import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private server = environment.apiServer
  private apiUri = this.server + 'professor'

  constructor(private http : HttpClient) { }

  listar(){
      return this.http.get(this.apiUri).toPromise()
  }

  excluir(id : String){
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
  }

  novo(body : any){
    return this.http.post(this.apiUri, body).toPromise()
  }

  obterUm(id: String){
      return this.http.get(this.apiUri + '/' + id).toPromise()
  }

  atualizar(body : any){
      return this.http.put(this.apiUri, body).toPromise()
  }
}
