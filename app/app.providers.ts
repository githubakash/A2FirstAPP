import { Http } from '@angular/http';

import { ApiService } from './shared';
import { NotificationsService } from './shared/services/notifications.service';

export function createApiServiceLoader(http: Http) {
    return new ApiService(http);
}

export function createNotificationsServiceLoader(apiService: ApiService) {
    return new NotificationsService(apiService);
}

export const APP_PROVIDERS = [
    {
        provide: NotificationsService,
        useFactory: (createNotificationsServiceLoader),
        deps: [ ApiService ]
    },
    {
        provide: ApiService,
        useFactory: (createApiServiceLoader),
        deps: [ Http ]
    }
];