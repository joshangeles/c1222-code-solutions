SELECT COUNT(c.*) AS "numberOfCities",
       countries.NAME
  FROM cities AS c
  JOIN countries using ("countryId")
 GROUP BY countries."countryId";
