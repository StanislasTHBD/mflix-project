import { Movie } from "../models/Movie";

export const movieService = {
  // 1. Nombre total de films
  getTotalFilms: async () => {
    return Movie.countDocuments({ type: "movie" });
  },

  // 2. Nombre total de séries
  getTotalSeries: async () => {
    return Movie.countDocuments({ type: "series" });
  },

  // 3. Les 2 différents types de contenu
  getDistinctTypes: async () => {
    return Movie.distinct("type");
  },

  // 4. Liste des genres disponibles
  getGenres: async () => {
    const result = await Movie.aggregate([
      { $unwind: "$genres" },
      { $group: { _id: null, genres: { $addToSet: "$genres" } } },
      { $project: { _id: 0, genres: 1 } },
    ]);
    return result[0]?.genres || [];
  },

  // 5. Films depuis 2015 classés par ordre décroissant
  getFilmsFrom2015: async () => {
    return Movie.find({ type: "movie", year: { $gte: 2015 } }).sort({ year: -1 });
  },

  // 6. Nombre de films depuis 2015 ayant remporté au moins 5 récompenses
  getFilmsWithAwards: async () => {
    return Movie.countDocuments({
      type: "movie",
      year: { $gte: 2015 },
      "awards.wins": { $gte: 5 },
    });
  },

  // 7. Parmi ces films, nombre de films disponibles en français
  getFrenchFilms: async () => {
    return Movie.countDocuments({
      type: "movie",
      year: { $gte: 2015 },
      "awards.wins": { $gte: 5 },
      languages: "French",
    });
  },

  // 8. Nombre de films dont le genre est à la fois Thriller et Drama
  getThrillerDrama: async () => {
    return Movie.countDocuments({
      genres: { $all: ["Thriller", "Drama"] },
    });
  },

  // 9. Titre et genres des films dont le genre est Crime ou Thriller
  getCrimeThriller: async () => {
    return Movie.find(
      { genres: { $in: ["Crime", "Thriller"] } },
      { title: 1, genres: 1, _id: 0 }
    );
  },

  // 10. Titre et langues des films disponibles en français et en italien
  getFrenchItalian: async () => {
    return Movie.find(
      { languages: { $all: ["French", "Italian"] } },
      { title: 1, languages: 1, _id: 0 }
    );
  },

  // 11. Titre et genre des films dont la note IMDB est supérieure à 9
  getHighImdb: async () => {
    return Movie.find(
      { "imdb.rating": { $gt: 9 } },
      { title: 1, genres: 1, _id: 0 }
    );
  },

  // 12. Nombre de contenus dont le casting comporte exactement 4 acteurs
  getCastFourCount: async () => {
    return Movie.countDocuments({
      cast: { $size: 4 },
    });
  },
};
