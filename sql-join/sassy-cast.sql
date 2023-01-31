SELECT "a"."firstName",
       "a"."lastName"
    FROM "actors" AS "a"
  JOIN "castMembers" AS "c" USING ("actorId")
  JOIN "films" AS "f" USING ("filmId")
  WHERE "f"."title" = 'Jersey Sassy';
