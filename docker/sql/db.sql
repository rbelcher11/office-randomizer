-- creates the seasons table and inserts the seasons

CREATE TABLE IF NOT EXISTS `office`.`season` (

	`id` tinyint unsigned auto_increment not null,
    `name` varchar(100),
    `year` char(4),
    `imdb_url` text,
    `created` datetime not null default current_timestamp(),
    
    primary key (`id`)
    
) ENGINE = InnoDB
COMMENT = 'seasons of the office';

INSERT INTO `office`.`season` (`name`, `year`) 
VALUES ('Season 1', '2005'),
('Season 2', '2005');

CREATE TABLE IF NOT EXISTS `office`.`episode` (

    `id` int unsigned auto_increment not null,

    `season` tinyint unsigned not null,

    `order` tinyint unsigned not null,
    `name` varchar(150) not null,
 
    `aired` date,
    `runtime_in_seconds` int unsigned,

    `created` datetime not null default current_timestamp(),

    primary key (`id`),

    constraint foreign key `episode_season_fk` (`season`)
        references `office`.`season` (`id`)
        on delete restrict
        on update cascade

) ENGINE = InnoDB
COMMENT = 'episodes';

INSERT INTO `office`.`episode` (`season`, `order`, `name`, `aired`) 
VALUES 
-- season one
(1, 1, 'Pilot', '2005-03-24'),
(1, 2, 'Diversity Day', '2005-03-29'),
(1, 3, 'Health Care', '2005-04-05'),
(1, 4, 'The Alliance', '2005-04-12'),
(1, 5, 'Basketball', '2005-04-19'),
(1, 6, 'Hot Girl', '2005-04-26'),
-- season two
(2, 1, 'The Dundies', '2005-09-20'),
(2, 2, 'Sexual Harassment', '2005-09-27'),
(2, 3, 'Office Olympics', '2005-10-04'),
(2, 4, 'The Fire', '2005-10-11'),
(2, 5, 'Halloween', '2005-10-18'),
(2, 6, 'The Fight', '2005-11-01'),
(2, 7, 'The Client', '2005-11-08'),
(2, 8, 'Performance Review', '2005-11-15'),
(2, 9, 'E-Mail Surveillance', '2005-11-22'),
(2, 10, 'Christmas Party', '2005-12-06'),
(2, 11, 'Booze Cruise', '2006-01-05'),
(2, 12, 'The Injury', '2006-01-12'),
(2, 13, 'The Secret', '2006-01-19'),
(2, 14, 'The Carpet', '2006-01-26'),
(2, 15, 'Boys and Girls', '2006-02-02'),
(2, 16, 'Valentine''s Day', '2006-02-09'),
(2, 17, 'Dwight''s Speech', '2006-03-02'),
(2, 18, 'Take Your Daughter to Work Day', '2006-03-16'),
(2, 19, 'Michael''s Birthday', '2006-03-30'),
(2, 20, 'Drug Testing', '2006-04-27'),
(2, 21, 'Conflict Resolution', '2006-05-04'),
(2, 22, 'Casino Night', '2006-05-11');