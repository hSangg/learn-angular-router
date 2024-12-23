import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonSummary} from "../model/lesson-summary";

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css'],
    standalone: false
})
export class LessonsListComponent implements OnInit {

    lessons: LessonSummary[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log("ActivatedRoute snapshot at lessonsListComponent: ", this.route.snapshot.data);
        this.lessons = this.route.snapshot.data["lessons"];
    }
}
