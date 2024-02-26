import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$: Subscription;

  constructor(
    private router: Router
  ) {
    this.tituloSubs$ = this.getPathName()
      .subscribe(
        ({ titulo }) => {
          this.titulo = titulo;;
        }
      );
  }
  ngOnDestroy(): void {
   this.tituloSubs$.unsubscribe();
  }
  getPathName() {
    return this.router.events.pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )

  }

}
