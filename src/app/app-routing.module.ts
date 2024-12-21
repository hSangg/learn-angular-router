import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CanMatchGuard} from "./services/can-match-guard.service";
import {CustomReloadingStrategy} from "./services/custom-reloading.strategy";
import {ChatComponent} from "./chat/chat.component";


const routes: Routes = [
    {
        path: "",
        redirectTo: "/courses",
        pathMatch: "full",
    },
    {
        path: "courses",
        loadChildren: () => import("./courses/courses.module").then(m => m.CoursesModule),
        // canMatch: [CanMatchGuard],
        data: {
            preload: true
        }
    },
    {
        path: "helpdesk-chat",
        component: ChatComponent,
        outlet: "chat"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: CustomReloadingStrategy,
            paramsInheritanceStrategy: "always"
        })
    ],

    exports: [RouterModule],
    providers: [CanMatchGuard, CustomReloadingStrategy],
})
export class AppRoutingModule {
}
