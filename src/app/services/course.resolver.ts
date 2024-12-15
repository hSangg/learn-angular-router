import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../courses/model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../courses/services/courses.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CourseResolver implements Resolve<Course> {
    constructor(private readonly courseService: CoursesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const courseUrl = route.paramMap.get("courseUrl")
        return this.courseService.loadCourseByUrl(courseUrl);
    }
}
