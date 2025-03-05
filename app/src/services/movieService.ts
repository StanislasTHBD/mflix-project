import { Movie, IMovie } from "../models/Movie";

export const countMovies = async (): Promise<number> => {
  return await Movie.countDocuments({ type: "movie" });
};

export const getMovies = async (limit: number = 20): Promise<IMovie[]> => {
  return await Movie.find().limit(limit).exec();
};

export const getMovieById = async (id: string): Promise<IMovie | null> => {
  return await Movie.findById(id).exec();
};
