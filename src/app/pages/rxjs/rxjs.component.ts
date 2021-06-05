import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obs$ = new Observable( observer =>{

      let i =0;

      const intervalo = setInterval ( ()=>{
        i++;
        observer.next(i) /// el siguiente valor que quiero emitir 
         /// esto se ejecuta de manera infinita cada segundo

         if (i==4) {
           clearInterval(intervalo) /// esta es la unica forma de frenarla funcion setinterval 
            observer.complete()
          }

          // if (i==2) {
          //    observer.error('i llego al valor 2 ') // una vez se llega al error no se dispara el complete y se frena 
          //  }


      },1000)
    } );

    obs$.subscribe( /// si veo tiene tres argunmentos , valor, error y lo q emite cuando finaliza
      valor => console.log('subs:', valor ),
      error => console.warn('Error:' , error),
      ()=> console.info('obs terminado ')
    );
   }

  ngOnInit(): void {
  }

}
