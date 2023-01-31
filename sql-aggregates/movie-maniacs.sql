SELECT "firstName",
       "lastName",
       SUM("p".amount) AS "totalPaid"
     FROM customers AS c
     JOIN payments AS p USING ("customerId")
  GROUP BY c."customerId"
ORDER BY "totalPaid" DESC;
