import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private static emitters: { [eventName: string]: EventEmitter<any> } = {};

    /**
     * Get notification event
     * @param eventName name of event to subscribe
     * @returns the event emitter
     */
    static get(eventName: string): EventEmitter<any> {
        if (!this.emitters[eventName]) {
            this.emitters[eventName] = new EventEmitter<any>();
        }
        return this.emitters[eventName];
    }

    /**
     * Emit notification event
     * @param eventName name of event to be fired
     * @param data event data content
     */
    static emit(eventName: string, data: any): void {
        this.get(eventName).emit(data);
    }
}
