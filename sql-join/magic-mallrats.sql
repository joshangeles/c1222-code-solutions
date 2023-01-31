SELECT "c"."firstName",
       "c"."lastName"
    FROM "customers" AS "c"
    JOIN "rentals" USING ("customerId")
    JOIN "inventory" USING ("inventoryId")
    JOIN "films" AS "f" USING ("filmId")
  WHERE "f"."title" = 'Magic Mallrats';
