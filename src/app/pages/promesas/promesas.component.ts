import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   const promesa= new Promise( (resolve , reject)=>{
  //     if(true){
  //       resolve ('hola mundo');
  //     }else{
  //       reject ('algo salio mal ');
  //     }
  //   })

  //   promesa.then( (mensaje) =>{
  //     console.log(mensaje);
      
  //   })
  //   .catch( (error) =>{
  //     console.log(error);
      
  //   });
  
  this.getUsuarios().then( usuarios =>{
    console.log(usuarios)
  });
  
  }
  getUsuarios(){
    const promesa = new Promise(resolve =>{

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json()) // necesito la respuesta pasada a json ,  encadeno la siguiente promesa
      .then(body => resolve(body.data))

    });
    return promesa
  }
}
