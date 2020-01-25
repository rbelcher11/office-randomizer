CREATE TABLE `office`.`season` (

	`id` tinyint unsigned auto_increment not null,
    `name` varchar(100),
    `year` char(4),
    `imdb_url` text,
    `created` datetime not null default current_timestamp(),
    
    primary key (`id`)
    
) ENGINE = InnoDB
COMMENT = 'seasons of the office';

INSERT INTO `office`.`season` (`name`, `year`) 
VALUES ('Season 1', '2005');

CREATE TABLE `office`.`episode` (

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
VALUES (1, 1, 'Pilot', '2005-03-24');