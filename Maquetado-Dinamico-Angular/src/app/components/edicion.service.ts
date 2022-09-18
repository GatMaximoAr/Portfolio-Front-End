import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdicionService {
  private renderer2:Renderer2

  constructor(rendererFactory2:RendererFactory2) { 
    this.renderer2 = rendererFactory2.createRenderer(null, null)
  }

  addClassBoton(param1:any, param2:string, param3:string){
    this.renderer2.addClass(param1, param2)
    this.renderer2.addClass(param1, param3)
    this.renderer2.addClass(param1, 'm-1')
  }

  crearInputTexto(parametro2:any){
    let formulario = this.renderer2.createElement('form');
    
    let nueva = this.renderer2.createElement(parametro2);
    this.renderer2.setAttribute(nueva, 'type', 'text');

    let requerido = document.createAttribute('required')
    requerido.value = "";
    nueva.setAttributeNode(requerido);
    let boton = this.renderer2.createElement('button');
    this.addClassBoton(boton, 'btn', 'btn-success')
    boton.textContent = 'Hecho';

    let boton2 = this.renderer2.createElement('button');
    this.addClassBoton(boton2, 'btn', 'btn-danger')
    boton2.textContent = "Cancelar"

    this.renderer2.appendChild(formulario, nueva);
    this.renderer2.appendChild(formulario, boton);
    this.renderer2.appendChild(formulario, boton2);

    return formulario
  }

  crearInputImagen(){
    let formulario = this.renderer2.createElement('form');

    let nueva = this.renderer2.createElement('input');
    this.renderer2.setAttribute(nueva, 'type', 'file');

    let requerido = document.createAttribute("required");
        requerido.value = "";
        nueva.setAttributeNode(requerido);

    let boton = this.renderer2.createElement('button');
    this.addClassBoton(boton, 'btn', 'btn-success')
    boton.textContent = 'Hecho';

    let boton2 = this.renderer2.createElement('button');
    this.addClassBoton(boton2, 'btn', 'btn-danger')
    boton2.textContent = "Cancelar"

    this.renderer2.appendChild(formulario, nueva);
    this.renderer2.appendChild(formulario, boton);
    this.renderer2.appendChild(formulario, boton2);

    return formulario
}


  crearElementosLista(hijo:any){
    let formulario = this.renderer2.createElement('form');
    let count = hijo.childElementCount

    for (let index = 0; index < hijo.childElementCount; index++) {
      let nueva = this.renderer2.createElement('input');

      this.renderer2.setAttribute(nueva, 'type', 'text');
      this.renderer2.setAttribute(nueva, 'id', count)

      let requerido = document.createAttribute("required");
        requerido.value = "";
        nueva.setAttributeNode(requerido);
      
      this.renderer2.insertBefore(formulario, nueva, formulario.children[0]);
      count --;
    }

    let boton = this.renderer2.createElement('button');
    this.addClassBoton(boton, 'btn', 'btn-success')
    boton.textContent = 'hecho';

    let boton2 = this.renderer2.createElement('button');
    this.addClassBoton(boton2, 'btn', 'btn-danger')
    boton2.textContent = "Cancelar"

    this.renderer2.appendChild(formulario, boton);
    this.renderer2.appendChild(formulario, boton2);

    return formulario
  }

  encabezadoEnArray(param:string){
    let retorno:string = ""
    let encabezados:string[] = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    for (let encabezado of encabezados) {
      if(encabezado === param) {
        retorno = encabezado
      }
    }
    return retorno
  }

  remplazarElementoHijo(padre:any, newChild:any){
    this.renderer2.removeChild(padre, padre.children[0])
    this.renderer2.appendChild(padre, newChild);
  }

  modificarTexto(parametro:any, parametro2:string){
    let hermanoAnterior = parametro.nativeElement.previousSibling;
    let hijo = hermanoAnterior.children[0];
    let formulario = this.crearInputTexto(parametro2);
    let boton = parametro.nativeElement.children[0];
    let cancelar = formulario.children[2];

    this.renderer2.setAttribute(boton, 'disabled', "true");
    formulario.children[0].value = hijo.textContent
    

    this.remplazarElementoHijo(hermanoAnterior, formulario )

      this.renderer2.listen(formulario, 'submit', (e => {
        e.preventDefault();
        hijo.textContent = formulario.children[0].value;
        this.remplazarElementoHijo(hermanoAnterior, hijo)
        this.renderer2.removeAttribute(boton, 'disabled')
      }))

      this.renderer2.listen(cancelar, 'mousedown', (e => {
        e.preventDefault()
        if(hermanoAnterior.children[0] === formulario) {
          this.remplazarElementoHijo(hermanoAnterior, hijo)
          this.renderer2.removeAttribute(boton, 'disabled')
        }
      }))
  }

  modificarLista(parametro:any){
    let padre = parametro.nativeElement.previousSibling;
    let hijo = padre.children[0]
    let boton = parametro.nativeElement.children[0];
    let formulario = this.crearElementosLista(hijo)
    let cancelar = formulario.lastChild;

    for (let i = 0; i < hijo.childElementCount; i++) {
      formulario.children[i].value = hijo.children[i].textContent
    }
    this.renderer2.setAttribute(boton, 'disabled', "true");

    this.remplazarElementoHijo(padre, formulario)

    this.renderer2.listen(formulario, 'submit', (e => {
      e.preventDefault()
      for (let i = 0; i < hijo.childElementCount; i++) {
        hijo.children[i].innerHTML = `<strong>${formulario.children[i].value}</strong>`;
      }
      this.remplazarElementoHijo(padre, hijo)
      this.renderer2.removeAttribute(boton, 'disabled')
    }))

    this.renderer2.listen(cancelar, 'mousedown', (e => {
      e.preventDefault()
      if(padre.children[0] === formulario) {
        this.remplazarElementoHijo(padre, hijo)
        this.renderer2.removeAttribute(boton, 'disabled')
      }
    }))
  }

  modificarImagen(parametro:any){
    let padre = parametro.nativeElement.previousSibling.children[0];
    let img = padre.children[0];
    let vinculo = padre.getAttribute('href')
    let boton = parametro.nativeElement.children[0];
    
    let formulario = this.crearInputImagen();
    let input = formulario.children[0];
    let cancelar = formulario.lastChild


    this.renderer2.removeAttribute(padre, 'href')
    this.remplazarElementoHijo(padre, formulario)
    this.renderer2.setAttribute(boton, 'disabled', "true");

    
    this.renderer2.listen(input, 'change', (e => {
      let file = e.target.files[0];
      let filereader = new FileReader();
      filereader.readAsDataURL(file);
      this.renderer2.listen(filereader, 'load', (e =>{
        this.renderer2.setAttribute(img, 'src', e.target.result)
      }))
    }))

    this.renderer2.listen(formulario, 'submit', (e => {
      e.preventDefault()
      this.remplazarElementoHijo(padre, img);
      this.renderer2.setAttribute(padre, 'href', vinculo);
      this.renderer2.removeAttribute(boton, 'disabled')
    }))

    this.renderer2.listen(cancelar, 'mousedown', (e => {
      e.preventDefault()
      if(padre.children[0] === formulario) {
        this.remplazarElementoHijo(padre, img);
        this.renderer2.setAttribute(padre, 'href', vinculo);
        this.renderer2.removeAttribute(boton, 'disabled')
      }
    }))

  }

  modificarCampo(parametro:any) {
    let tag = parametro.nativeElement.previousSibling.children[0].tagName;
    let encabezado = this.encabezadoEnArray(tag);
    switch(tag) {

      case encabezado:
      this.modificarTexto(parametro, 'input')
    break;

    case 'P':
      this.modificarTexto(parametro, 'textArea')
      break;

      case 'UL':
        this.modificarLista(parametro)
        break;

        case 'A':
          this.modificarImagen(parametro);
          break;

    default:
      console.log("error") 
      break;   
    }
  }
}

