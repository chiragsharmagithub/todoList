export class TodoList {
    Id: number;
    TaskName: string;
    TaskDescription: string;

    constructor(id: number, taskName: string, taskDesc: string) {
        this.Id = id;
        this.TaskName = taskName;
        this.TaskDescription = taskDesc;
    }

}