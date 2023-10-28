-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2023 at 06:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flaskreact`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`, `id`) VALUES
('admin', 'pbkdf2:sha256:600000$WMrrr0p6eZLRlosO$393a45c26ac5607efc3ed62d2809a62dd02f705288b9efd42ebf9a07a491f17b', 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'blog'),
(2, 'interview'),
(3, 'news');

-- --------------------------------------------------------

--
-- Table structure for table `letters`
--

CREATE TABLE `letters` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `subject` text NOT NULL,
  `message` longtext NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `letters`
--

INSERT INTO `letters` (`id`, `firstname`, `lastname`, `email`, `phone`, `subject`, `message`, `date`) VALUES
(1, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '07032867659', 'Test', 'Test Message', '2023-10-26'),
(2, 'August', 'Truong', 'gordon.maou.sama@gmail.com', '07032867659', 'Test 2', 'Test Message 2', '2023-10-26');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  `date` date NOT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `categoryId` int(11) NOT NULL,
  `info` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `date`, `cover`, `description`, `categoryId`, `info`) VALUES
(3, 'やる気が出ない気力が湧かないそんなとき', '<p>どうしてもやる気が出ない…そんなことってありますよね。そして対処方法も巷にはいろいろな情報が出回っています。</p><p>やる気のないときはどうしたらいいか。</p><p>・リラックスする<br>・おいしいものを食べる<br>・ゆっくりお風呂に入る<br>・とりあえず少しだけ手をつける<br>・目標を小さくする（分割する）</p><p>などなど…。でもこれ、私には全然効きません。</p><p>そこで、こんな方法をとっています。</p><p>1寝られるだけ寝る（無意識に時間をあげる）<br>2会いたいのになかなか会えなかった友人と会う</p><p>ぜひお試しください。</p>', '2023-09-20', 'trial.png', 'どうしてもやる気が出ない…そんなことってありますよね。', 1, ''),
(4, '心のブレーキを外して本気の人生を手に入れよう！', '<figure class=\"image\"><img src=\"http://127.0.0.1:5000/file-get/logo192.png\"></figure>', '2023-09-21', 'IMG_3742.png', '自分を変えたいと思っている人を全力でサポートします。', 1, ''),
(6, 'Test 4', '<p style=\"text-align:center;\"><strong>Test 4 content</strong></p>', '2023-10-02', 'program-6.png', 'Image description test', 2, '(50代・男性・会社員)'),
(7, '自分迷子とお別れしよう', '<p>仕事にもプライベートにも充実感が持てず，<br>過ぎていく毎日に焦るばかりで</p><p>「これが正しいキャリアなのか」<br>「本当にこれがやりたいことなのか」と<br>切実に答を望んでいるアラサー女性の方が，</p><p>心に埋まっている「やりたいことの種」を見つけ<br>自分の人生のミッションを果たしながら<br>チャレンジングな人生を生きるために</p><p>パーソナルコーチをしています。</p>', '2023-10-04', 'program-4.png', '自分の人生のミッションを果たしながら チャレンジングな人生を生きるために', 1, ''),
(8, 'New Post', '<p>Here is <strong>content</strong> of new post</p>', '2023-10-09', 'program-4.png', 'Here is a new post', 2, '(50代・男性・会社員)'),
(9, 'Test Category', '<p>Test Category</p>', '2023-10-22', NULL, 'Test Category', 1, NULL),
(10, 'ホームページをリニューアルしました', '<p>このたび、ホームページをリニューアルしました。<br>より見やすいホームページを目指して、デザインとページの構成を改善しました。<br>これからも、ホームページを訪れてくださったみなさまに喜んでいただうけるようなコンテンツや情報を提供していきます。<br>どうぞよろしくお願いいたします。<br><br>このステキなサイトを作ってくださったのはこちら（INDIGI）です。</p>', '2023-10-23', NULL, 'ホームページをリニューアルしました', 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `firstname`, `lastname`, `email`, `date`) VALUES
(1, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '2023-10-26'),
(2, 'August', 'Truong', 'gordon.maou.sama@gmail.com', '2023-10-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `letters`
--
ALTER TABLE `letters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `letters`
--
ALTER TABLE `letters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
