import { Schema } from "mongoose";

export const EventSchema = new Schema({
    type: { type: String, required: true },
    payload: { type: Schema.Types.Mixed, required: true },
    timestamp: { type: Date, default: Date.now },
}, { collection: 'events' }
)