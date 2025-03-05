import { movieService } from "../services/movieService";

export const movieController = {
  getTotalFilms: async (req: Request) => {
    const count = await movieService.getTotalFilms();
    return Response.json({ totalFilms: count });
  },
  getTotalSeries: async (req: Request) => {
    const count = await movieService.getTotalSeries();
    return Response.json({ totalSeries: count });
  },
  getDistinctTypes: async (req: Request) => {
    const types = await movieService.getDistinctTypes();
    return Response.json({ types });
  },
  getGenres: async (req: Request) => {
    const genres = await movieService.getGenres();
    return Response.json({ genres });
  },
  getFilmsFrom2015: async (req: Request) => {
    const films = await movieService.getFilmsFrom2015();
    return Response.json({ films });
  },
  getFilmsWithAwards: async (req: Request) => {
    const count = await movieService.getFilmsWithAwards();
    return Response.json({ filmsWithAwards: count });
  },
  getFrenchFilms: async (req: Request) => {
    const count = await movieService.getFrenchFilms();
    return Response.json({ frenchFilms: count });
  },
  getThrillerDrama: async (req: Request) => {
    const count = await movieService.getThrillerDrama();
    return Response.json({ thrillerDramaCount: count });
  },
  getCrimeThriller: async (req: Request) => {
    const films = await movieService.getCrimeThriller();
    return Response.json({ films });
  },
  getFrenchItalian: async (req: Request) => {
    const films = await movieService.getFrenchItalian();
    return Response.json({ films });
  },
  getHighImdb: async (req: Request) => {
    const films = await movieService.getHighImdb();
    return Response.json({ films });
  },
  getCastFourCount: async (req: Request) => {
    const count = await movieService.getCastFourCount();
    return Response.json({ castFourCount: count });
  },
};
