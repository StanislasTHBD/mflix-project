import { countMovies, getMovies, getMovieById } from "../services/movieService";

export const getMovieCountController = async (): Promise<Response> => {
  try {
    const count = await countMovies();
    return new Response(JSON.stringify({ count }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erreur lors du comptage des films" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const getMoviesController = async (): Promise<Response> => {
  try {
    const movies = await getMovies();
    return new Response(JSON.stringify(movies), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erreur lors de la récupération des films" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const getMovieByIdController = async (req: any): Promise<Response> => {
  const id = req.params.id;
  try {
    const movie = await getMovieById(id);
    if (!movie) {
      return new Response(
        JSON.stringify({ error: "Film non trouvé" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(JSON.stringify(movie), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erreur lors de la récupération du film" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
