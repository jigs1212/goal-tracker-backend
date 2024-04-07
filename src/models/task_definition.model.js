import mongoose, { Schema } from "mongoose";

const taskDefinitionSchema = new Schema(
  {
    _id: UUID,
    goal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
      required: true,
    },
    title: { type: String, required: true },
    notes: { type: String, required: true },
    completed: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TaskDefinition = mongoose.model(
  "TaskDefinition",
  taskDefinitionSchema
);
