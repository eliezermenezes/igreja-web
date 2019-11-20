import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Subscription } from 'rxjs';

import { CONSTANTS } from 'src/app/constants';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
    public event: any;
    public subscriptions: { [name: string]: Subscription } = {};

    @Output()
    public loadData = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        this.subscriptions[CONSTANTS.COMPLETE] = NotificationService.get(CONSTANTS.SYSTEM_EVENTS.COMPLETE_POPULATE).subscribe((complete: Boolean) => {
            this.event.target.complete();
        });
        this.subscriptions[CONSTANTS.DISABLED] = NotificationService.get(CONSTANTS.SYSTEM_EVENTS.DISABLED_POPULATE).subscribe((disabled: Boolean) => {
            this.event.target.disabled = disabled;
        });
    }

    public loadMoreData(event: any) {
        this.event = event;
        setTimeout(() => {
            this.loadData.emit();
        }, 1000);
    }

    ngOnDestroy() {
        this.subscriptions[CONSTANTS.COMPLETE].unsubscribe();
        this.subscriptions[CONSTANTS.DISABLED].unsubscribe();
    }
}
