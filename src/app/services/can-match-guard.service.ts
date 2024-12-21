import {Injectable} from "@angular/core";
import {AuthStore} from "./auth.store";
import {CanMatch, Route, Router, UrlSegment} from "@angular/router";
import {Observable} from "rxjs";
import {first, tap} from "rxjs/operators";

@Injectable()
export class CanMatchGuard implements CanMatch {
    constructor(private readonly authStore: AuthStore, private readonly router: Router) {
    }

    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.authStore.isLoggedIn$.pipe(
            first(),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl("/login");
                }
            })
        );
    }
}
