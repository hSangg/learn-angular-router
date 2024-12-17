import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {LessonSummary} from "../courses/model/lesson-summary";
import {Observable} from "rxjs";
import {CoursesService} from "../courses/services/courses.service";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {

    constructor(private readonly courseService: CoursesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
        const courseUrl = route.paramMap.get("courseUrl");
        return this.courseService.loadAllCourseLessonsSummary(courseUrl);
    }
}
