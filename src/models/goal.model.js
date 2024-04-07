import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const goalSchema = new Schema(
  {
    _id: UUID,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    min: { type: Date, required: true },
    max: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

goalSchema.plugin(mongooseAggregatePaginate);

export const Goal = mongoose.model("Goal", goalSchema);
