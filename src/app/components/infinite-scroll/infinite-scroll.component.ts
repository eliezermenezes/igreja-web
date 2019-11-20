import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
    @Output()
    public loadData = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    public loadMoreData(event: any) {
        this.loadData.emit(event);
    }
}
