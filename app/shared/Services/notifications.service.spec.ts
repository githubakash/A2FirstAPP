/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';
import { NotificationsService } from './notifications.service';

describe('NotificationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ NotificationsService, ApiService ],
            imports: [ HttpModule ]
        });
    });

    it('should ...', inject([ NotificationsService ], (service: NotificationsService) => {
        expect(service).toBeTruthy();
    }));
});
