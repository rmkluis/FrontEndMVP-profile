DROP TABLE IF EXISTS CRUD;

CREATE TABLE CRUD (
    id serial,
    slot1 TEXT,
    slot2 TEXT,
    slot3 TEXT
);
INSERT INTO CRUD (slot1, slot2, slot3) VALUES ('This is a table with data', 'from an SQL database', 'so you can talk to the Backend!');
INSERT INTO CRUD (slot1, slot2, slot3) VALUES ('You can use CRUD methods:', 'Create, Read, Update', 'and Delete!');
INSERT INTO CRUD (slot1, slot2, slot3) VALUES ('Input your data here', 'and here', 'and here, too!');
