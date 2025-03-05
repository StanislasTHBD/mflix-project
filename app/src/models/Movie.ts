import { Schema, model, Document, Types } from "mongoose";

export interface IMovie extends Document {
  _id: Types.ObjectId;
  title: string;
  plot?: string;
  year?: number;
  genres?: string[];
  type: string;
  languages?: string[];
  released?: Date;
  imdb?: {
    rating?: number;
    votes?: number;
    id?: number;
  };
  awards?: {
    wins?: number;
    nominations?: number;
    text?: string;
  };
}

const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  plot: { type: String },
  year: { type: Number },
  genres: [{ type: String }],
  type: { type: String, required: true },
  languages: [{ type: String }],
  released: { type: Date },
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number },
  },
  awards: {
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String },
  },
});

export const Movie = model<IMovie>("Movie", MovieSchema);
