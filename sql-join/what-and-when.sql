SELECT "f"."title",
       "g"."name" AS "genre",
       "f"."releaseYear"
    FROM "films" AS "f"
  JOIN "filmGenre" AS "fg" USING ("filmId")
  JOIN "genres" AS "g" USING ("genreId")
  WHERE "f"."title" = 'Boogie Amelie';
