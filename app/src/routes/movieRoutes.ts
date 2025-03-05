import { movieController } from "../controllers/movieController";

export const movieRoutes = {
  "/api/movies/total-films": {
    GET: movieController.getTotalFilms,
  },
  "/api/movies/total-series": {
    GET: movieController.getTotalSeries,
  },
  "/api/movies/types": {
    GET: movieController.getDistinctTypes,
  },
  "/api/movies/genres": {
    GET: movieController.getGenres,
  },
  "/api/movies/from-2015": {
    GET: movieController.getFilmsFrom2015,
  },
  "/api/movies/awards": {
    GET: movieController.getFilmsWithAwards,
  },
  "/api/movies/french": {
    GET: movieController.getFrenchFilms,
  },
  "/api/movies/thriller-drama": {
    GET: movieController.getThrillerDrama,
  },
  "/api/movies/crime-thriller": {
    GET: movieController.getCrimeThriller,
  },
  "/api/movies/french-italian": {
    GET: movieController.getFrenchItalian,
  },
  "/api/movies/imdb-high": {
    GET: movieController.getHighImdb,
  },
  "/api/movies/cast-four": {
    GET: movieController.getCastFourCount,
  },
};
