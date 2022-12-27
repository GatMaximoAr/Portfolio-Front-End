import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill, SkillInter } from 'src/app/models/Skill';
import { TokenService } from 'src/app/services/Auth/token.service';
import { SkillService } from 'src/app/services/Skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  items:SkillInter[] = []
  formularioSkill:FormGroup
  isAdmin:boolean = false
  agrega:boolean = false
  roles:string[] = []

  constructor(private skillService:SkillService, private _builder:FormBuilder,
    private tokenService:TokenService) { 

      this.formularioSkill = this._builder.group({
        "titulo":['', [Validators.required]],
        "color":['', [Validators.required]],
        "porcentaje":['', [Validators.required]]
      })
  }

  ngOnInit(): void {
    this.getSkills()
    this.roles = this.tokenService.getAuthorities()
    this.getRol();
  }

  getSkills():void {
    this.skillService.getSkills()
    .subscribe(resp => {
      //console.log(resp)
      this.items = resp
    })
  }

  getRol():void {
    this.roles.forEach(rol => {
      if(rol === "ROLE_ADMIN") {
        this.isAdmin = true
      }
    })
  }

  post(skill:Skill) {
    this.skillService.postSkill(skill)
    .subscribe(resp => {
      //console.log(resp)
      window.location.reload()
    },err => {
      console.log(err)
    })
  }

  onSubmit(valor:Skill):void {
    //console.log(valor)
    this.post(valor)
  }

  switchValue():void {
    this.agrega = !this.agrega
  }

}
