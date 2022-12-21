import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, SkillInter } from 'src/app/models/Skill';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  private post_url:string ="http://localhost:8080/usuario/1/skill/crear"
  private get_url:string ="http://localhost:8080/skills/traer"
  private put_url:string ="http://localhost:8080/skill/"
  private delete_url:string="http://localhost:8080/skill/"

  constructor(private http:HttpClient) { }

  public getSkills():Observable<SkillInter[]> {
    return this.http.get<SkillInter[]>(this.get_url)
  }

  public postSkill(skill:Skill):Observable<string> {
    return this.http.post<string>(this.post_url, skill, httpOptions)
  }

  public putSkill(skill:SkillInter):Observable<string> {
    const edit_url = `${this.put_url}${skill.id}/editar`
    return this.http.put<string>(edit_url, skill, httpOptions)
  }

  public deleteSkill(id:number):Observable<string> {
    const delete_url =`${this.delete_url}${id}/delete`
    return this.http.delete<string>(delete_url)
  }
}
