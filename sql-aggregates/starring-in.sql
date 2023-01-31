SELECT COUNT(*) AS "movieCount",
       "genres"."name"
    FROM "actors" AS "a"
    JOIN "castMembers" AS "cast" USING ("actorId")
    JOIN "filmGenre" USING ("filmId")
    JOIN "genres" USING ("genreId")
  WHERE a."firstName" = 'Lisa' AND a."lastName" = 'Monroe'
GROUP BY "genres"."name";
