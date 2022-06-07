-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 07 jun 2022 kl 13:11
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `notessql`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `notes`
--

CREATE TABLE `notes` (
  `id` int(128) NOT NULL,
  `_id` varchar(128) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `author` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `notes`
--

INSERT INTO `notes` (`id`, `_id`, `title`, `text`, `author`) VALUES
(15, 'W6FskiHPZHT0Iy3z319Wb', 'tredje inlägget', '<p>h&auml;r kommer nummer 3</p>\n<p>&nbsp;</p>\n<h1><span style=\"color: rgb(53, 152, 219);\"><strong>den f&aring;r lite bl&aring;tt i<span style=\"color: rgb(224, 62, 45);\">ch r&ouml;tt</span></strong></span></h1>', 'tempTestUserId'),
(16, '-dYbtN8wH9v6UC0EU6_Vl', 'min nya titel', '<p style=\"text-align: center;\"><span style=\"color: rgb(230, 126, 35);\">nu testar vi igen</span></p>', 'tempTestUserId'),
(17, 'JYMTsOg-246ja1vwedUzr', 'hej', '<h1><strong><span style=\"color: rgb(236, 202, 250);\">hejsan</span></strong></h1>', 'tempTestUserId'),
(18, 'r1_EGGwOklnWG7Q2FOcZf', 'ds', '<h2 style=\"text-align: center;\"><span style=\"color: rgb(241, 196, 15);\">dsds</span></h2>\n<p>&nbsp;</p>\n<p><span style=\"color: rgb(248, 202, 198);\">dsdadd ds adsdada d as</span></p>', 'tempTestUserId'),
(20, 'b8nu8mDW3hSICwKVs9UN7', 'fsdfsfs', '<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\">&ndash; F&ouml;rst kallade han mig f&ouml;r hora, det kan jag lugnt s&auml;ga att jag inte &auml;r. Sedan sa han att han skulle kn&auml;cka f&ouml;tterna p&aring; mig och en minut senare gjorde jag m&aring;l. Det var fint, sa tv&aring;m&aring;lsskytten Haaland till norska TV2.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\">N&auml;r AIK &aring;tersamlades under tisdagen efter ledighet gav tidigare landslagsbacken och Milosevics lagkamrat Mikael Lustig sin syn p&aring; debatten och rubrikerna som blivit efter&aring;t.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\">&ndash; Det &auml;r n&aring;got som har blossat upp. Haaland g&aring;r ut och s&auml;ger vad man har sagt p&aring; fotbollsplanen och det &auml;r inte ofta man g&ouml;r det. Men jag tror inte han (Milosevic) f&ouml;rs&ouml;ker s&ouml;ka n&aring;gon konflikt, s&auml;ger Lustig.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\">&ndash; Det var n&aring;got han sa i en mening och det &auml;r klart att media &auml;r sugna p&aring; den. Men det &auml;r en h&ouml;na av en fj&auml;der. Det &auml;r inget som man funderar p&aring;.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\"><span style=\"color: rgb(241, 196, 15);\"><strong>&Auml;r det lite tabubelagt? Man h&aring;ller det som sker p&aring; planen, p&aring; planen?</strong></span></p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\"><span style=\"color: rgb(241, 196, 15);\">&ndash; Ja, det beror p&aring;. Handlar det om rasism och s&aring;dant s&aring; hoppas jag verkligen folk &auml;r villiga att s&auml;ga ifr&aring;n. Men svordomar och dylikt har v&auml;l alltid funnits, s&auml;ger Lustig till Sportbladet.</span></p>', 'tempTestUserId'),
(21, 'NBzAa9PgSlP6UG80dgwz_', 'fdsfsdfdsfdsfsdfsdfs fd sdfsdfsdf sdfsdf sdfsdfsdf', '<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\" style=\"text-align: center;\">De tv&aring; m&aring;len i 4&ndash;0-segern mot Schweiz i Lissabon inneb&auml;r att Cristiano Ronaldo har gjort 817 m&aring;l i klubblag och landslag. Det var bara en &ouml;kning av hans tidigare rekord.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\" style=\"text-align: center;\">Tv-bilderna zoomade in att 67-&aring;riga mamma Maria Dolores i alla fall verkar fortfarande bli djupt ber&ouml;rd av att se sin son g&ouml;ra m&aring;l.</p>\n<div class=\"css-18uqayh\" style=\"text-align: center;\">\n<div class=\" css-veha7k\">\n<div id=\"adPlacement_59\" class=\" css-151cna7\" data-variants=\"[{&quot;invCode&quot;:&quot;se-aftonbladet-{deviceType}-article-panorama_1&quot;,&quot;probableWidth&quot;:320,&quot;probableHeight&quot;:320,&quot;deviceType&quot;:&quot;mobile&quot;,&quot;sizes&quot;:[[320,320],[1,1],[5,285],[320,400],[5,120],[5,140],[5,160]],&quot;minDisplayWidth&quot;:0,&quot;refresh&quot;:false,&quot;preloading&quot;:250,&quot;preloadingScrollingUp&quot;:0,&quot;safeframeConfig&quot;:{&quot;allowExpansionByPush&quot;:true,&quot;allowExpansionByOverlay&quot;:false},&quot;allowedFormats&quot;:[&quot;banner&quot;,&quot;native&quot;],&quot;keywords&quot;:{&quot;se-aftonbladet-count&quot;:0,&quot;se-generic-adformat&quot;:&quot;panorama_1&quot;}},{&quot;invCode&quot;:&quot;se-aftonbladet-{deviceType}-article-modul_1&quot;,&quot;probableWidth&quot;:640,&quot;probableHeight&quot;:320,&quot;deviceType&quot;:&quot;desktop&quot;,&quot;sizes&quot;:[[640,320],[1,1],[5,285],[640,640],[5,120],[5,140],[5,160]],&quot;minDisplayWidth&quot;:768,&quot;refresh&quot;:false,&quot;preloading&quot;:450,&quot;preloadingScrollingUp&quot;:0,&quot;safeframeConfig&quot;:{&quot;allowExpansionByPush&quot;:true,&quot;allowExpansionByOverlay&quot;:false},&quot;allowedFormats&quot;:[&quot;banner&quot;,&quot;native&quot;],&quot;keywords&quot;:{&quot;se-aftonbladet-count&quot;:0,&quot;se-generic-adformat&quot;:&quot;modul_1&quot;}},{&quot;invCode&quot;:&quot;se-aftonbladet-{deviceType}-article-modul_1&quot;,&quot;probableWidth&quot;:640,&quot;probableHeight&quot;:320,&quot;deviceType&quot;:&quot;tablet&quot;,&quot;sizes&quot;:[[640,320],[5,160]],&quot;minDisplayWidth&quot;:590,&quot;refresh&quot;:false,&quot;preloading&quot;:450,&quot;safeframeConfig&quot;:{&quot;allowExpansionByPush&quot;:true,&quot;allowExpansionByOverlay&quot;:false},&quot;allowedFormats&quot;:[&quot;banner&quot;,&quot;native&quot;],&quot;keywords&quot;:{&quot;se-aftonbladet-count&quot;:0,&quot;se-generic-adformat&quot;:&quot;modul_1&quot;}}]\" data-refresh=\"false\" data-show-label=\"true\" data-ad-subtype=\"text-ad\" data-device-type=\"desktop\" data-is-last=\"false\" data-theme=\"sportbladet\">\n<div id=\"adPlacement_59-button\" class=\"css-nndai9\"></div>\n</div>\n</div>\n</div>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\" style=\"text-align: center;\">Ikl&auml;dd Portugals r&ouml;da landslagstr&ouml;ja med nummer 7 s&aring; b&ouml;rjar t&aring;rarna rinna av gl&auml;dje. Som om det var sonens allra f&ouml;rsta m&aring;l i en pojklagsmatch.</p>\n<p class=\"borderColor borderWidth margin padding mqDark css-1dznooa\" style=\"text-align: center;\">Cristiano Ronaldo hedrade ocks&aring; sin mamma p&aring; l&auml;ktaren genom att peka mot henne.</p>', 'tempTestUserId'),
(22, 'Knrs440_Zg4VizVi5moVu', 'fsfsfsd', '<h1><span style=\"color: rgb(248, 202, 198);\">fsdfdsf</span></h1>', 'tempTestUserId');

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(128) NOT NULL,
  `_id` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `_id`, `username`, `password`) VALUES
(1, 'tempAdminUserId', 'notesadmin', 'notespassword'),
(2, 'tempTestUserId', 'testUser', 'testUserPassword');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
