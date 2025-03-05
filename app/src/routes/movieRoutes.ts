import {
  getMovieCountController,
  getMoviesController,
  getMovieByIdController,
} from "../controllers/movieController";

export const movieRoutes = {
  "/api/movies/count": getMovieCountController,
  "/api/movies": getMoviesController,
  "/api/movies/:id": getMovieByIdController,
};
