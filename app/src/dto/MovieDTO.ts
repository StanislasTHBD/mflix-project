export interface MovieDTO {
    id: string;
    title: string;
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
  
  import { IMovie } from "../models/Movie";
  export const toMovieDTO = (movie: IMovie): MovieDTO => ({
    id: movie._id.toString(),
    title: movie.title,
    year: movie.year,
    genres: movie.genres,
    type: movie.type,
    languages: movie.languages,
    released: movie.released,
    imdb: movie.imdb,
    awards: movie.awards,
  });
  