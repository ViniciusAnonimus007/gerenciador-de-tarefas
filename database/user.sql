CREATE TABLE _User (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
)