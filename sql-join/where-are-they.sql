SELECT "a"."line1",
       "c"."name" as "cityName",
       "a"."district",
       "countries"."name" as "countryName"
    FROM "addresses" AS "a"
    JOIN "cities" AS "c" USING ("cityId")
    JOIN "countries" USING ("countryId");
