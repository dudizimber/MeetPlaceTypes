import { ScheduledTask } from "./scheduledTask";
import { ScheduledTaskType } from '../enums/scheduled-task-type';

export interface TaskEndActivityInstance extends ScheduledTask {
    organizationId: string;
    roomId: string;
    activityId: string;
    type: ScheduledTaskType.END_ACTIVITY_INSTANCE;
}