DROP TABLE wallet;

CREATE TABLE wallet (
    id serial,
    name varchar(20),
    coin text,
    amount int,
    value int,
    dateOfPurchase int
)