import {Component, Input, OnInit} from '@angular/core';
import {LoadingService} from './loading.service';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationStart,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router
} from "@angular/router";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    standalone: false
})
export class LoadingComponent implements OnInit {

    @Input()
    routing: boolean = false;

    @Input()
    detectRoutingOnGoing = false;

    constructor(public loadingService: LoadingService,
                public router: Router) {

    }

    ngOnInit() {
        if (this.detectRoutingOnGoing) {

            // listen event of router
            this.router.events.subscribe(
                event => {
                    /*
                    * NavigationStart: start routing
                    * NavigationConfigLoadStart: start download route config, using for lazy loading module
                    * */
                    if (event instanceof NavigationStart ||
                        event instanceof RouteConfigLoadStart) {
                        this.loadingService.loadingOn()
                    }
                    /*
                    * NavigationEnd: end routing
                    * NavigationCancel: cancel routing
                    * RouteConfigLoadEnd: end download route config, using for lazy loading module
                    * */
                    else if (event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof RouteConfigLoadEnd
                    ) {
                        this.loadingService.loadingOff()
                    }
                }
            )
        }
    }
}

