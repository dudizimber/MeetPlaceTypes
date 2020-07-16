import { Weekday } from "../enums/weekday";
import { RepeatOptions } from "../enums/repeat-options";

/**
 * Interface for scheduling activity
 * 
 * There are two types of Scheduling:
 * 
 *      - One-Day
 *      - Multi-Day
 *  One-Day activities must start and end on the same
 *  day, [startDate] and [endDate] should be the same
 *  day, with different hours. It can be repeated 
 *  every day, or week. If it is repeated every day
 *  [weekDays] should be empty.
 * 
 *  Multi-Day activities should have different 
 * [startDate] and [endDate]. It can only be repeated
 * every week if the duration ([endDate] - [startDate])
 * is less than a week long. [weekdays] must be empty.
 * 
 * If the activity is recuring, [isRecurring] must be
 * set to true, and [cycles] >= 1
 *  
 */
export interface SchedulingOptions {
    startDate: Date;
    endDate: Date;
    
    isRecurring: boolean;
    multiDay: boolean;
    repeat?: RepeatOptions;
    
    weekdays?: Weekday[];
    cycles?: number;
}