\echo 'Delete and recreate vaccine hub db?'
\prompt 'Return for yes or control-C to cancel >' answer 

DROP DATABASE IF EXISTS vaccine_hub; --will see an error first time running this bc we don't have a db to drop
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-schema.sql --executes that schema 