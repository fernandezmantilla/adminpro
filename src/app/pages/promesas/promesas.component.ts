import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {

    // const promesa = new Promise( (resolve )=>{
    //   resolve ('hola mundo');
    // });

    // promesa.then( (mensaje)=>{
    //   console.log(`proceso ${mensaje}, terminado`);
    // });
    // console.log('fin del init');

    // this.getUsurios();
    this.getUsurios( )
    .then(
      usuarios =>{
        console.log(usuarios)
      }
    );

  }
  getUsurios() {
    // opciión uno .....
    // fetch('https://reqres.in/api/users')
    //   .then(resp => {
    //     resp.json().then(
    //       body => console.log(body)
    //     )
    //   });

      // Opción 2 más simplificada
      // fetch('https://reqres.in/api/users')
      // .then(resp => resp.json() )
      // .then( body => console.log(body.data));     

      // opcion 3

      return  new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json() )
      .then( body => resolve(body.data));     
     
    });
     
  }

}

// 