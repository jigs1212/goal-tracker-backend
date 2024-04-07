import mongoose, { Schema } from "mongoose";

const reminderSchema = new Schema(
  {
    _id: UUID,
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    reminderDateTime: { type: Date, required: true },
    reminderStatus: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Reminder = mongoose.model("Reminder", reminderSchema);
