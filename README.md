<!-- Démarrer les services Docker (MongoDB et app) -->
docker compose up

<!-- Arrêter et supprimer les services Docker -->
docker compose down

<!-- commande docker pour importer les données dans la table  -->
docker exec -it mflix-db mongoimport --db mflix --collection movies --file /data/import/movies.json

<!-- Requete -->
<!-- Obtenez le nombre total de films. -->
/api/movies/total-films
<!-- Obtenez le nombre total de séries. -->
/api/movies/total-series
<!-- Obtenez les 2 différents types de contenu présents dans la collection movies. -->
/api/movies/types
<!-- Obtenez la liste des genres de contenus disponibles dans la collection movies. -->
/api/movies/genres
<!-- Récupérez les films depuis 2015 classés par ordre décroissant. -->
/api/movies/from-2015
<!-- Obtenez le nombre de films sortis depuis 2015 ayant remporté au moins 5 récompenses. -->
/api/movies/awards
<!-- Parmi ces films, indiquez le nombre de films disponibles en français. -->
/api/movies/french
<!-- Sélectionnez les films dont le genre est à la fois Thriller et Drama. -->
/api/movies/thriller-drama
<!-- Sélectionnez le titre et les genres des films dont le genre est Crime ou Thriller. -->
/api/movies/crime-thriller
<!-- Sélectionnez le titre et les langues des films disponibles en français et en italien. -->
/api/movies/french-italian
<!-- Sélectionnez le titre et le genre des films dont la note d'IMDB est supérieure à 9. -->
/api/movies/imdb-high
<!-- Affichez le nombre de contenus dont le nombre d'acteurs au casting est égal à 4. -->
/api/movies/cast-four
