-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2023 at 04:13 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `situations`
--

CREATE TABLE `situations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `langages` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `documents` varchar(255) DEFAULT NULL,
  `productions` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `situations`
--

INSERT INTO `situations` (`id`, `name`, `img`, `description`, `langages`, `date`, `documents`, `productions`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 'Parser XML', 'info_site1.PNG;info_site2.PNG;mainpage_site.PNG', 'Les fluxs d\'échanges de documents (ici des factures) se font principalement par des formats de fichier universel le besoin est donc de transformer des fichiers XML contenant les informations des factures en documents PDF. Ce projet consiste donc en un parser XML qui permet de récupérer toutes les informations nécéssaires et de les stockées dans une base de données. Par la suite ces données sont rendu accessible dans une interface web qui permet à l\'utilisateur de les consulter et lui permet également de les formater en un fichier PDF.', 'devicon-php-plain; devicon-javascript-plain; devicon-mysql-plain-wordmark; devicon-bash-plain', '2021-11-15 14:38:25', 'extrait_doc_xml.pdf; liste_taches_parser.pdf', 'Facture N°221013075.pdf; Site+structureBD.pdf', 'Professionnelle', '2022-05-16 14:38:25', '2022-05-16 14:38:25'),
(2, 'Outil de visualisation de facture Chorus', 'dilicom1.PNG;dilicom2.PNG;info_facture.PNG;intradata_homepage.PNG', 'Une partie des factures de l\'entreprise sont transmisent via la plateforme gouvernementale Chorus. Tous les jours en retour cette plateforme nous transmet un fichier constitué des informations des factures qui ont vu leur état changer.Pour suivre les changements d\'états et potentiellement les rejets des factures en erreur, cet outil lit le fichier CSV transmis par la plateforme Chorus et sauvegarde les changements afin de les rendres consultable via une interface web', 'devicon-php-plain; devicon-javascript-plain; devicon-mysql-plain-wordmark; devicon-bash-plain', '2021-09-29 14:49:19', 'intradata_statusdocument.pdf', 'final_visualisation_chorus.pdf', 'Professionnelle', '2022-05-16 14:49:19', '2022-05-16 14:49:19'),
(3, 'Application envoie NPS (NET PROMOTER SCORE)', 'Capture.PNG;Capture1.PNG', 'Création d\'une application pouvant recenser tous les clients actifs d\'une entreprise, de pouvoir créer des listes de diffusions de renseigner des adresses mails customisables ainsi que des Prénom et Nom de destinataire afin d\'envoyer des mails NPS (NET PROMOTER SCORE) à la manière d\'un questionnaire de satisfaction doté d\'un lien Microsoft Form', 'devicon-php-plain;devicon-mysql-plain;devicon-html5-plain;devicon-css3-plain;devicon-javascript-plain;devicon-bash-plain', '2022-02-24 22:52:51', 'retranscription_demande_creation_NPS.pdf', 'rendu_application_NPS.pdf', 'Professionnelle', '2022-05-17 22:52:51', '2022-05-17 22:52:51'),
(4, 'Tutoriel utilisation outil web ORB', 'captur.png;captur1.png;captur2.png', 'Amélioration d\'un tutoriel PowerPoint existant afin d\'y rajouter une partie permettant d\'expliquer la gestion des comptes utilisateurs ainsi que les permissions des différents comptes que nous délivrons pour accéder à notre plateforme en ligne \"ORB\"', '', '2022-04-07 23:29:20', 'ticket_tuto_superviseur.pdf', 'tutoriel_utilisation_orb.pdf', 'Professionnelle', '2022-05-17 23:29:20', '2022-05-17 23:29:20'),
(5, 'Portfolio', 'captur.png;captur1.png;captur2.png', 'Création d\'un portfolio/CV-Book pour la préparation de l\'épreuve E4 du BTS SIO visant à rassembler l\'ensemble des situations professionnelle vécues à l\'entreprise ou bien en formation à l\'ISCIO. Ce portfolio sert aussi à documenter un veille informationnelle.', 'devicon-react-original;devicon-nodejs-plain;devicon-css3-plain;devicon-html5-plain', '2022-05-18 23:51:16', '11-Extrait_Epreuve E4-Bloc 1.pdf;12-Extrait_Epreuve E4-Session2022_Fiche Eval.pdf;20-E4_Tableau de compétences-Version ISCIO.xlsx', 'accueil.png;veille_technologique.png;feedly.png;notion1.png;notion2.png;notion3.png', 'Formation', '2022-05-17 23:51:16', '2022-05-17 23:51:16'),
(6, 'Portes-ouvertes', 'captur.png;captur1.png;captur2.png', 'Ce projet avait pour but de réaliser un écran d\'accueil pour mon école lors de portes-ouvertes qu\'elle réalisait. Ce site-web permet de visionner un plan intéractif de l\'école ainsi que de s\'enregistrer dans une base de donnée afin d\'être recontacter par l\'école. Ce projet tourne sur une un pc Ubuntu relier à un écran tactile.', 'devicon-react-original;devicon-php-plain;devicon-mysql-plain', '2022-03-18 00:06:15', 'IMG_0145.jpg;plan-iscio-printV1.pdf\n', 'document_liste_inscription.csv;form.png;plan.png', 'Formation', '2022-05-18 00:06:14', '2022-05-18 00:06:14'),
(7, 'StreamIO', 'captur.png;captur1.png;captur2.png', 'Ce projet est le celui qui m\'a suivi durant toute la première année de mon BTS SIO, le but était de créer un site web vitrine pour une startup fictive du nom de StreamIO. Ce site comporte notamment une partie évenement, blog, contact et il est également doté d\'un backoffice pour administrer sont contenu.', 'devicon-nodejs-plain;devicon-react-original;devicon-mysql-plain', '2021-12-08 00:13:41', 'first_maquette.png;StreamIO_cahier_des_charges.pdf', 'accueil.png;blogs.png               ;form.png;plan.png;backoffice.png;document_liste;inscription.csv  mcd.png;services.png', 'Formation', '2022-05-18 00:13:41', '2022-05-18 00:13:41'),
(8, 'WebNation', 'accueil.PNG;page_login.PNG;page_recherche.PNG', 'D\'après un système de base de donnée existant relié à un ERP, adaptation de l\'interface en web', 'devicon-java-plain;devicon-spring-plain', '2022-10-20 11:19:57', 'retranscription_lancement_webnation.pdf;tickets.pdf', 'accueil.PNG;page_login.PNG;page_recherche.PNG', NULL, '2022-10-20 11:19:57', '2022-10-20 11:19:57'),
(9, 'Outil de gestion de parc', 'log_result.PNG;poste_result.PNG;ressource_result.PNG', 'Création d\'un outil web de visualisation du parc informatique. Celà inclut les logs de connexion des utilisateurs, une liste de tous les postes de l\'entreprise ainsi que leurs composants.', 'devicon-php-plain; devicon-javascript-plain; devicon-mysql-plain-wordmark', '2022-10-20 11:22:43', 'ticket_initial.PNG', 'result.pdf', NULL, '2022-10-20 11:22:43', '2022-10-20 11:22:43'),
(10, 'FileINTERFACE', 'page_serveur.PNG;page_login.PNG;page_flux.PNG', 'Création d\'un outil destiné au SI de l\'entreprise afin de gérer via une interface graphique des flux FTP, sFTP, etc ...', 'devicon-spring-plain;devicon-java-plain', '2022-10-20 11:25:35', 'Retranscription_premiere_reunion_projet_FileINTERFACE.docx', 'Doc_utilisateur_FileINTERFACE_v1_censure.docx;page_serveur.PNG;page_login.PNG;page_flux.PNG', NULL, '2022-10-20 11:25:35', '2022-10-20 11:25:35'),
(11, 'Envoi mensuel NPS', NULL, 'Réalisation tous les mois d\'un envoi massif de questionnaire de satisfaction NPS via un outil interne et collecte des résultats pour analyse', NULL, '2022-10-20 11:26:36', 'Mission_envoie_mensuel_nps.docx', 'Ciblage_NPS_11-2022_censure.xlsx;procedure_envoi_mensuel_nps.txt', '', '2022-10-20 11:26:36', '2022-10-20 11:26:36'),
(12, 'Renouvellement du parc informatique', NULL, 'Le parc informatique de l\'entreprise étant vieillisant, il nécésitait un renouvellement passant soit par une amélioration du disque dur en SSD et remasterisation soit par changement du poste.', NULL, '2022-10-20 11:27:43', NULL, NULL, NULL, '2022-10-20 11:27:43', '2022-10-20 11:27:43'),
(13, 'StreamAndYou Gestion', NULL, 'Création de la partie gestion d\'une application de partage d\'opération marketing. Cette application lourde s\'occupe de la gestion des opérations marketing et de l\'ajout de comptes utilisateur.', NULL, '2022-10-20 11:29:46', 'analyse_du_besoin.pdf;cahier_des_charges.pdf', 'Doc_utilisateur_API_StreamAndYou (1).xlsx', NULL, '2022-10-20 11:29:46', '2022-10-20 11:29:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `situations`
--
ALTER TABLE `situations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `situations`
--
ALTER TABLE `situations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;