#!/bin/bash

echo "Select which database to reset"
options=("geodata_test" "flights_test" "EXIT")
PS3="Your choice: "

select opt in "${options[@]}"
do
  case $opt in
        "geodata_test")
          echo "Resetting geodata_test";
          psql -h $GEO_DBHOST -U $GEO_DBUSERNAME -p $GEO_DBPORT -f ${BASH_SOURCE%/*}/schemas/geodatabase.sql $GEO_DBNAME && \
          echo "Database erased, adding geographic data" && \
          node ${BASH_SOURCE%/*}/fillGeoDatabase.js;
          break
          ;;
        "flights_test")
          echo "Resetting flights_test"
          psql -h $FLIGHTS_DBHOST -U $FLIGHTS_DBUSERNAME -p $FLIGHTS_DBPORT -f ${BASH_SOURCE%/*}/schemas/flights.sql $FLIGHTS_DBNAME && \
          echo "Database erased, adding fake flights" && \
          node ${BASH_SOURCE%/*}/makeFakeFlights.js;
          break
          ;;
        "EXIT")
          echo "Exiting"
          break
          ;;
        *) echo "invalid option";;
  esac
done