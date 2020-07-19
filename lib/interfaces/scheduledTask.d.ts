import { ScheduledTaskType } from '../enums/scheduled-task-type';
export interface ScheduledTask {
    scheduledTaskId: string;
    date: Date;
    type: ScheduledTaskType;
}
