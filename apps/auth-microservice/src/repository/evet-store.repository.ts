import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class EventStoreRepository {
    constructor(@InjectModel('Event') private eventModel: Model<any>) {}

    async save(event: { toStore: () => { type: string; payload: any }}) {
        const { type, payload } = event.toStore();

        await new this.eventModel({
            type,
            payload,
            timestamp: new Date()
        }).save()
    }
}