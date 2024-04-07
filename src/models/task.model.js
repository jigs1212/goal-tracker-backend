import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    _id: UUID,
    taskDefinition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TaskDefinition",
      required: true,
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    taskDate: { type: Date, required: true },
    reminder: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
