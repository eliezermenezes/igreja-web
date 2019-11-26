import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'translate',
    templateUrl: './translate.component.html',
    styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent implements OnInit {
    @Input()
    public text: String;

    constructor() { }

    ngOnInit() { }

}
