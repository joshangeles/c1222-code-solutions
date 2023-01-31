SELECT "p"."amount",
       "c"."firstName",
       "c"."lastName"
  FROM "customers" AS "c"
  JOIN "payments" AS "p" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
