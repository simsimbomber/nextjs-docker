-- Up
CREATE TABLE Vgroup (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT
);


CREATE TABLE Person (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   details TEXT,
   vgroupId INTEGER REFERENCES Vgroup(id)
);

INSERT INTO Vgroup (name) values ('freelance');
INSERT INTO Vgroup (name) values ('VOMS');
INSERT INTO Vgroup (name) values ('holostars');

INSERT INTO Person (name, details, vgroupId) values('bafuko', 'Her eyes are red, her hair and clothes are green, and her ribbons and star symbol are yellow.', 1);
INSERT INTO Person (name, details, vgroupId) values('hourei tenten', 'Cook Maid. Fluent in Japanese, Chinese and English.', 1);
INSERT INTO Person (name, details, vgroupId) values('otome oto', 'She is on a journey to collect money.Her dream is to build a big castle and live happily with beautiful girls.', 1);
INSERT INTO Person (name, details, vgroupId) values('kurousagi uru', 'he singer who posted the video.', 1);
INSERT INTO Person (name, details, vgroupId) values('amano pikamee', 'Her soul food is donuts. She definitely eats them before any kind of competition and has quite a bit of them stocked up at home.', 2);
INSERT INTO Person (name, details, vgroupId) values('hisaka tomoshika', 'When the flame in her head goes out, her identity is gone and she dies. Quite often, the flame in her head goes out.', 2);
INSERT INTO Person (name, details, vgroupId) values('yukoku roberu', 'A bar master who loves to talk.Chanchadondon', 3);


-- Down
DROP TABLE Vgroup;
DROP TABLE Person;