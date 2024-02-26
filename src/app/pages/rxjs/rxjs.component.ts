import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription;
  constructor() {

    // this.retObservable().pipe(
    //   retry(2)
    // )
    //   .subscribe(
    //     valor => console.log(`Sub: ${valor}`),
    //     error => console.warn('Error', error),
    //     () => console.info('Obs, terminado')
    //   );
   this.intervalSub = this.retInterval().subscribe(
      valor => console.log(valor)
    );
    // lo anterior se oude expresar asi:
    // this.retInterval().subscribe( console.log);
  }
  ngOnDestroy(): void {
   this.intervalSub.unsubscribe();
  }
  retInterval():Observable<number> {
    // const interval$ = interval(1000,)
    return interval(100,)
      .pipe(
        take(20),
        map(valor => { return valor + 1; }),
        filter( valor =>( valor % 2=== 0 ? true : false) )
      );

    // return interval$;
  }
  retObservable(): Observable<number> {

    let i = 0;
    const obs$ = new Observable<number>(

      observer => {

        const intervalo = setInterval(() => {
          i++;
          observer.next(i);
          if (i >= 5) {
            clearInterval(intervalo);
            observer.complete();
          }
          if (i === 2) {
            observer.error(`i, llegó a 2 `);
            i = 2;
          }
        }, 1000)
      }
    );
    return obs$;
  }
}
