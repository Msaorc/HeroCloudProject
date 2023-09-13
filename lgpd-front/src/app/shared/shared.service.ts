import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { CourseService } from "../pages/course/course.service";
import { UserService } from "../pages/user/user.service";

export interface Params {
    [key: string]: any;
}

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    users: Array<{ id: string, first_name: string }> = [];
    courses: Array<{ id: string, name: string }> = [];

    userLabel: Array<{ value: string, label: string }> = [];
    courseLabel: Array<{ value: string, label: string }> = [];

    async converterUserToOption(): Promise<any[]> {
        this.users.forEach((user: {id: string, first_name: string}) => {
            let u = {
                value: user.id.toString(),
                label: user.first_name
            }
            this.userLabel.push(u)
        })
        return this.userLabel
    }

    async converterCourseToOption(): Promise<any[]> {
        this.courses.forEach((course: {id: string, name: string}) => {
            let u = {
                value: course.id.toString(),
                label: course.name
            }
            this.courseLabel.push(u)
        })
        return this.courseLabel
    }

    getUsers(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllUsers")
            .pipe(
                map(x => {Object.values(x).map((user) => {
                        let u = {
                            id: user.id,
                            first_name: user.first_name
                        }
                        this.users.push(u);
                    })
                    console.log(x);
                    console.log(this.users);
                    return this.users;
                })
            );
    }

    getCourses(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllCourses")
            .pipe(
                map(x => {Object.values(x).map((course) => {
                        let c = {
                            id: course.id,
                            name: course.name
                        }
                        this.courses.push(c);
                    })
                    console.log(x);
                    console.log(this.courses);
                    return this.courses;
                })
            );
    }

    constructor(private http: HttpClient, private userService: UserService, private courseService: CourseService) {
    }
}
