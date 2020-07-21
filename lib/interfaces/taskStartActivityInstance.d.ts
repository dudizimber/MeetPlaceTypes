import { ScheduledTask } from "./scheduledTask";
import { ScheduledTaskType } from '../enums/scheduled-task-type';
export interface TaskStartActivityInstance extends ScheduledTask {
    organizationId: string;
    roomId: string;
    activityId: string;
    activityInstanceId: string;
    type: ScheduledTaskType.START_ACTIVITY_INSTANCE;
    endTaskDate: Date;
}
