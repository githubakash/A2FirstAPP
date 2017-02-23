import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ApiService } from './api.service';
import { INotification } from '../models/INotification';
import { NotificationTypesEnum } from '../enums/NotificationTypesEnum';

@Injectable()
export class NotificationsService {
    notifications: Subject<INotification> = new Subject();

    constructor(private apiService?: ApiService) {
        if (apiService) {
            this.apiService.httpError.subscribe((error: Error) => {
                const errorNotification = this.createErrorNotification(error);
                this.add(errorNotification);
            });
        }
    }

    add(notification: INotification) {
        this.notifications.next(notification);
    }

    private createErrorNotification(error: any): INotification {
        const errorNotification: INotification = {
            type: NotificationTypesEnum.Error,
            message: error.statusText || 'A server error occured.'
        };

        return errorNotification;
    }
}
