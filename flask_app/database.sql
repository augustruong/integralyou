-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 03:13 PM
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
  `phone` varchar(15) DEFAULT NULL,
  `title` text NOT NULL,
  `message` longtext NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `letters`
--

INSERT INTO `letters` (`id`, `firstname`, `lastname`, `email`, `phone`, `title`, `message`, `date`) VALUES
(1, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '07032867659', 'Test', 'Test Message', '2023-10-26'),
(2, 'August', 'Truong', 'gordon.maou.sama@gmail.com', '07032867659', 'Test 2', 'Test Message 2', '2023-10-26'),
(3, 'Trương', 'Thu', 'gordon.maou.sama@gmail.com', '07032867659', 'hh', 'hh', '2023-11-21'),
(4, 'Trương', 'Thu', 'gordon.maou.sama@gmail.com', '07032867659', 'aa', 'aa', '2023-11-21'),
(5, 'Trương', 'Thu', 'gordon.maou.sama@gmail.com', '', 'heello', 'aa', '2023-11-21'),
(6, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '07032867659', 'Test', 'Test', '2023-11-23'),
(7, 'Trương', 'Thu', 'gordon.maou.sama@gmail.com', '', 'Test 2', 'Test 2', '2023-11-23'),
(8, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '', 'Test 3', 'Test 3', '2023-11-23'),
(9, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '07032867659', 'Tst', 'Tst', '2023-11-23'),
(10, 'Ko', 'Lonely', 'a19dc553@dhw.ac.jp', '', 'Hello', 'Hello sensei', '2023-11-23'),
(11, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '', 'Test', 'Test Message', '2023-11-23');

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
(5, '自分迷子とお別れしよう', '<p>仕事にもプライベートにも充実感が持てず，<br>過ぎていく毎日に焦るばかりで</p><p>「これが正しいキャリアなのか」<br>「本当にこれがやりたいことなのか」と<br>切実に答を望んでいるアラサー女性の方が，</p><p>心に埋まっている「やりたいことの種」を見つけ<br>自分の人生のミッションを果たしながら<br>チャレンジングな人生を生きるために</p><p>パーソナルコーチをしています。</p>', '2023-10-04', 'program-4.png', '自分の人生のミッションを果たしながら チャレンジングな人生を生きるために', 1, ''),
(6, 'Aさん', '<p><span style=\"background-color:hsl(9,100%,96%);color:#000000;\"><i>「大人の発達障害」ということばに目が留まり、関心を持ったのがきっかけ。</i></span></p><p><span style=\"background-color:hsl(9,100%,96%);color:#000000;\"><i>半年間のプログラムを修了後、念願のひとり暮らし、仕事のやりがいを手に入れた。</i></span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングを受けようと思われたきっかけは何でしょうか</strong></span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Aさん：ゆう先生の紹介の文を読んで「発達障害グレーゾーンの方」みたいなことが書いてあったんですね。実は私、自分は発達障害なんじゃないか、と思っているところがありました。病院にも相談しに行ったことがありました。でも診断書が出るようなレベルではなかったんです。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">病院に行くと、本当に困っている人、例えば仕事もできない、生活にも困っているような人を対象にしている感じがありました。だけど私は、一日に何回かちょっと困ることがあるぐらいのレベルだったんですね。だから病院ではなくて、他の人の意見を聞いたりできたらいいかもしれない、と思いました。その時にゆう先生の「発達障害グレーゾーン」ということばにひっかかって、興味をもったんです。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">その頃は、転職して3社目で、職場でちょうど1年ぐらいたったんです。そこそこ仕事も慣れてきて、ある程度の業務もできるようにはなっていたんです。だけど「ずっとこの会社にいるのかな？」と思っていたんですね。自分のやっていることも1年間変わらないし、「ずーっとこのままなのかなあ」と思っていたんですね。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">ちょうど家庭でもいろいろあり、家にいても気持ちが休まるということはなく、気持ちに余裕がなかったんです、すごく。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">こういう時って、それまでは学生時代の友だちに会っていたりしたんですけれど、ちょうどその時、周りの友だちがいっせいに結婚して、気軽に会えなくなっちゃったんです。私は彼氏もいないのに友だちは結婚していく。自分はもう2回も会社をドロップアウトしていて、うまくいってなくて、という状況にいました。</span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">　もともとは、仕事でつまづけばプライベートでリラックスすればいいし、プライベートでダメだったら、仕事とか学校で発散すればいい、というふうに、自分にはいろいろな社会があったのに、全部が潰れた、というか。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">そういう時期だったので、誰かに話を聞いて欲しかったんですね。そしてこのままじゃ、何も意味がないし、これからどうなるんだろうということで、コーチングに申し込んだ、という経緯です。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―その時は、どのようなお気持ちでしたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：自分を変えたいと思っていましたね。コーチングってどういうものか、あんまりよくわかりませんでしたが、最初にゆう先生にお会いした時には、自分を変えたいというか、このままじゃダメだよねと思いました。それはずっと思っていて、仕事もそうだし、プライベートもだし、このままでは嫌だな、と思っていました。逃げたい、みたいな感じでした。職場にいても、家にいても「この場から出ていきたい」という気持ちだったので、行動できたんじゃないのかな、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―セッションについては、どんなふうに感じていらっしゃいましたか</strong></span></p><p style=\"text-align:justify;\">&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Aさん：課題を出されて、その課題をやっていく上で、すごく楽しくなる時もあれば、化けの皮をはがされていく、じゃないですけれど、「うわああ」って思うこともありました。基本的にけっこう仕事が忙しくて、課題は通勤時のバスの中でやっていました。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">セッション中は「ああそうか、そうすればいいのか」と思うんですけれど、実際に課題をしたり、決めたことをやろうとすると、なんか辛いというか、恒常性バイアスみたいなものが働いて「でも現実はこうだから、これは無理じゃない？」みたいな葛藤がありました。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">最初のうちは、楽しかったし、自分のことをいっぱい話してスッキリしたし、先生から「こういうふうにしてみたらどうですか」と提案されて、その通りにできることもあったんですけれど、受けていけばいくほど、だんだん辛くなってくるというか、大変になってきました。後半はけっこう苦しかったです（笑）。</span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">　でも結局「自分を変えたい」っていうことはそういうことなんだな、と。そのままじゃダメで、何かをやめたり、何かを始めたりする、考え方を変えるっていうのが、すごく大変なんだなって思っていました。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　出された課題の答えを書いていた手帳が残っているんですが、今見ると「なんでいっぱいこんなに悩んでいることが書いてあるの？」って思います（笑）。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">そのくらい追い詰められていたんだと思います。すごい量が書いてあります。まあけっこう書く方ではあるのですが、こんなに書き出せるっていうことは、常にいろいろなことをぐるぐる考えていたんだと、今振り返ると思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―当時と比べて今はすごく変わった、ということですね</strong></span><br>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Aさん：変わってますね。考え方もそうだし、実際に行動に移せたこともあるので。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">もしあのまま、コーチングとか受けないでいたら、今もなんにも変わらない、変わっていないと思うんですけれど、今は、けっこう良い感じです。以前のノートを見て、その当時の自分のことを「これはヤバいな、追い詰められていたな」と思うぐらいだから、こういう未来になるんだったら、必要な辛さだったんだ、と思います。コーチングを受けなかったら、同じだったと思いますね。</span></p><p style=\"text-align:justify;\">&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングに興味がある、という人がいたら何を伝えたいですか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：うーん、こういうものは、辛いと思っている人が受けるものだと思うんですけれど。私はまあ、ちょっと軽い気持ちで「楽になるだろうな」と思って受けたんです。だけど、意外とそうとも限らなくて。やっぱり全部自分の心の中とか、頭の中とか、丸裸になってしまうので、辛くなることもあったし。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">そこは自分に気を配ることも忘れないで欲しいなと思います。精神的にギリギリの人が受けるのだったら、すっきりはするんですけど、結局その行動に移すところで、もしかするともっと辛くなるかもしれないな、と思います。でもその辛さがきっと必要な辛さだったんだな、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングを受ける前と大きく変わったことを教えてください</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：そうですね。ゆう先生に初めてお会いして「自分を責めることを今日から一切やめてください」って言われたんです。この手帳にも書いてあるんですが。それが私にとっては衝撃で、びっくりしました。それまでは「当然だ」と思っていたんです、自分を責めることが。自分が悪いから、責めるのは当然だと思っていたんだけれど、でも「止めてください」って言われて。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　今は自分を責めることがすごく減ったなと思います。当時、1日に30回ぐらい自分のことを責めていたとしたら、今は3日に1回とか4日に1回とか、そんな感じになりました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―ずいぶん、ご自分に厳しかったんですね。</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：そうですね、尋常じゃなかったです。自分をもう本当に責めまくっていたというか、だって自分が悪い、と思っていました。とにかく自分に厳しくて。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">今でももちろん「ああ、何であんなことをしちゃったんだろう」と思うことはありますけれど、そのことを考えている時間がすごく短くなりました。自分のことをああだこうだ、と責めている時間が。ゼロではないんですが、あの時が100だとしたら今は5とか1、そのくらいだと思いますね。これがいくつかある大きな変化のうちの一つですね。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　それからコーチングが始まった当初から「自立をしたい」と話していました。当時は実家暮らしだったんですね。で、まあいろいろあって、去年から一人暮らしをすることができました。実家を飛び出しました（笑）。</span><br><span style=\"background-color:transparent;color:#000000;\">　</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―お仕事の方はどうでしたか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：コーチングを受けていた頃には「辞めたいな」って思っていたんです。でもちょうどコーチングが終わった時期から、会社の中で1つ役割を与えてもらえました。それがけっこう私にハマって、周囲からの見られ方も変わりました。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　すごく仕事もやりやすくなりました。仕事が増えたけれど、その仕事に対する勉強もけっこう楽しいし、実績を出して表彰をされたりだとか、ボーナスの点数が良かったりとか。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">上司が「実績が今ひとつの店舗を何とかしたい」とマークした店舗に私が異動するんです。悪い意味の「あなた要らないから、あっちに行って」じゃなくて、いい意味のほうで異動しています。「今、この店舗が悪いんだ。だから次から、Aさんさんがここに来て実績を上げて」って言われるんです。そんな感じをここ最近は繰り返しているので「仕事辞めたい」って気持ちはどっかに行っちゃいました。楽しいばかりじゃないですけれど「私は実績出せているんだもんなあ」みたいな感じです（笑）。仕事に対する気持ちの変化が起きたのも、今考えたらコーチングの後だったなあ、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―今は一人暮らしも楽しみつつ、仕事もがんばっているという状況ですね。</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Aさん：そうですね。仕事では大変なことも多いし、悩みも多いですけれど、コーチングを受ける前とは違います。悩みにかけている時間が変わりました。悩んでいる内容が以前とは違いますね。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">悩みに対する対応も変わりました。以前は自分の中でずっと抱えて悩んでいたけれど、今は早い段階で誰かに相談するようになりました。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングを受けてよかったですか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：そうですね。一人暮らしをしたいっていうことも、もしコーチングで話さなかったら、実現しなかっただろうと思いますね。それと自分が何を考えているのか、自分の考え方について振り返れる、というのは大事だと思います。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　あと、生活習慣も変わりましたね。前はけっこうスマホ依存というか、悩む時はその悩みに関して検索することが多くて、一日ずっと検索して終わる、という何も意味のない休日を過ごしていたんですね。でも今は家ではほとんどスマホをいじらなくなりました。これはまあ、生活習慣を変えよう、と思ったからではなくて、スマホで検索する必要がなくなったからなんですね（笑）。悩んでいる時には、どこかに答えが無いかな、と思って、一生懸命検索していたんですけれど、悩み自体が少なくなったので、検索する必要がなくなったんですね（笑）。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングを受ける前に、今の姿は想像できましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：いや、全然（笑）本当にこんなに変わるとは。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">コーチングを受けている頃に、私が会社を辞めようと思っていた理由の一つは、お給料が低いことでした。残業も多くて、お給料が低いので辞めたいって思っていたんです。でも今は、私は給料のために仕事をしているんじゃなくて、誰かに必要とされることにやりがいを強く感じています。今まで仕事で上司とか他の人に必要とされるってことなんかなかったんですよ。前の会社は必要とされていないから、辞めさせられたんです。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">でもそこから逆転して、自分が必要とされていろんな店舗に行って、そこで実績出して、また次の店舗に行って実績出して、また次の店舗に行って実績出してっていう、そういうやりがいがあるのがうれしいですね。誰かに必要とされるとか、店舗に「君が必要」と言われるような存在になりたかったんだし、そういう存在であり続けたいんだと思います。お給料がどうでもよくなったというか。これもコーチングを受ける前とは違ったところですね。だって前は給料が低いから辞めたいと思っていたんですから。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">今は必要とされているのがありがたくて、幸せで十分すぎるなあと思いますね。前から比べたらすごい変化ですね。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―今の笑顔がすごく素敵なので、とても充実していらっしゃるんだな、とわかりました。お忙しい中、せっかくのお休みの日にお時間をいただき、ありがとうございました。</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Aさん：こちらこそ、ありがとうございました。</span></p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">　</span></p>', '2023-10-02', 'program-6.png', '「大人の発達障害」ということばに目が留まり、関心を持ったのがきっかけ ...', 2, '(50代・男性・会社員)'),
(8, 'Mさん', '<p><span style=\"background-color:hsl(9,100%,96%);color:hsl(0,0%,0%);\"><i>人との関わりを避け気味の日々を変えたい！</i></span></p><p><span style=\"background-color:hsl(9,100%,96%);color:hsl(0,0%,0%);\"><i>自分が変わらなければ、と思い切って行動した結果が今に</i></span></p><h3>&nbsp;</h3><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">大学時代までは人との関わりを避け気味の日々だった。しかし社会人になってから、人との関わりを避けることは難しい、自分が変わらなければ！と気づく。社会人2年目に、どうしても変わりたい、という思いからプログラムを受講。受講後は課題だった上司とのコミュニケーションに事前準備をして臨むなど、少しずつ改善し、手ごたえを得ている。2ヵ月前に念願だった地元にもどり、新しい会社での仕事がスタートした。現在、新しい環境で上司との関係を築いている真っ最中。コーチングで学んだ内容を思い出しながら頑張りつつ、地元に戻って良かったと思う毎日。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―どうしてコーチングを受けてみようかな、と思われたんですか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：そうですね、私は大学の時までは、あまり人と接さないようにというか、まあ、仲良くすることが苦手だったんです。だから、できるだけ人を避けてきていたんですけれど、社会人になってからは、そういう訳にもいかなくなって。仕事では他の人とも、いろいろとコミュニケーションをとらなければいけない、という状況がわかってきました。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">それで社会人になったのだし、自分自身が変わらないといけないな、ということがわかったんですけれど、なかなか変われない、という状況になってしまって。それで、1年間ぐらいは「どうしたらいいんだろう」と思っていました。それで社会人2年目に入るぐらいに「どうしても変わりたい！」と思って、いろいろ調べていたら「コーチング」というものがある、ということを知りました。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">じゃあ、どの先生がいいだろうか、と選んでいたんです。そこでゆう先生のページをたまたま見つけて、説明文章から「同じような悩みを抱えて生きていたのかな」と思い、ゆう先生のコーチングを受けることにしました。ゆう先生の講座ページの説明文から「自分に似ている」と思ったんです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―「ああ、これは自分にぴったりだ」と思ったのでしょうか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：ピッタリ、とは思わなかったんですけれど、そういう、他の人に自分の悩みを話すということは、今までやったことがなかったので。お金を払ってでもやってみようかな、と思いました。それでコーチングを受けることにしました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―実際にセッションを受けてみて、どんなふうに感じましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：受講している間、親身になって聞いてもらっているな、という印象がありました。私がゆう先生のコーチングを受けている間、毎日、悩みに対してどう解決していくかということが課題でした。その課題に対して、毎日自分がやれているのかどうか、ということをLINEで送っていました。その毎日LINEで送ったことに対する返信を、毎回してもらっていたので、すごく親身になってやってくれているな、という印象を受けました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―毎日悩みを書いて送ることは、負担ではありませんでしたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：いいえ、ゆう先生から「毎日LINEで送ってね」と言われたわけではなくて、私から「毎日送るので、お時間があったらお返事をしてください」ってお願いしたんです。その依頼に対して、対応してくれた、という形でした。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―その当時のご自身の悩みとは、どんなものでしたか？</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Mさん：職場の人間関係とか「こういう時はどうしたらいいんだろう」というものが多かったです。例えば、その当時は仕事で何か問題が起こった時に、上司などに説明をしなければならない状況があったのですが、その時に私が緊張しすぎてしまって、上司などとうまく話せない、という課題があったんです。それを課題として、上司などに話しに行く前にメモを取って行くだとか、あとはできるだけ落ち着けるように、自分をリラックスさせてから話に行く、という課題がありました。あとは、雑談とかが苦手だったので、どう人に返したらいいのかわからない、という悩みがあったんです。その悩みには、まずは相手から言われたことに対して、復唱して答える、という課題がありました。相手の言ったことを、とりあえず一回受け止めて復唱する、という感じですね。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―課題にチャレンジしていったら、だんだんできるようになっていった、ということでしょうか</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Mさん：そうですね、でも雑談は正直、今でもあまり得意ではありません。今もコーチングを受けていたときの課題を思い出しながら、やっている最中です。ただ上司に説明する時に落ち着いて話しに行く、ということは解決したんじゃないかな、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―ご自身が変わって、周りの反応も変わりましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：その当時は、周りの反応も変わったと思います。上司に話しに行くのも、緊張はするんですけれど、前ほどは緊張しなくなったと思います。自分が少しずつ変わっていくという手ごたえを得ることができました。それはうれしいことでした。特に周囲からは何か言われたりはしませんでしたが（笑）。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―「自分を変えよう」と思うのはすごく勇気が必要なことだと思うのですが、それをしたいと思うほど、大変だった、ということでしょうか</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Mさん：そうですね。人とうまくコミュニケーションを取れないっていうのが、一番自分に自信が持てなくさせている部分でした。ずっと「苦しいな」と思っている部分でもあったんです。だからこの部分を変えないと、この先ずっと同じような状況が続くだろうなと思いました。それでこれ以上、自分自身を傷つけないためにも、コーチングを受けて変わりたいな、と思いました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―「自分を傷つけないためにも」と、先ほどおっしゃいましたが、どういう意味でしょうか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：えーと、そうですね、「なんでできないんだろう」という、できない自分を責めてしまうところがあると思います。自分をいつも責めていたら辛くなるので、自分を変えたいな、という気持ちになりました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―ちょっとお話が戻りますが、ゆう先生のページを見て「自分に似ている」「自分をわかってくれるんじゃないか」と思った、とおっしゃっていましたよね。それはどんな点から感じましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：紹介のページに確か「20代はずっと苦しんできて、発達障害なんじゃないか」といったことで苦しんできた、とありました。そして「グレーゾーンで悩んでいる方に」ということばもあったと思います。私自身は検査などは受けたことはないのですが、自分がちょっとおかしいんじゃないかな、とその当時は思っていたので、似ている、というか話しやすいんじゃないかな、と思ったのがきっかけです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―セッションをやっている間は少しずつ自分を変えて行くことになると思うのですが、それは辛くはなかったですか</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Mさん：そうですね、もう「コーチングを受けている間にどうにかしたいな」と思っていたので。辛いというよりも、どうにかしなきゃいけない、と焦りながらやっていた感じです。コーチング期間中にゆう先生から出された課題は、ちょっと難しそうでもやってみる、という感じでした。実際にはやれないこととかも、結構あったんですけれど、できるだけやろう、という気持ちでいました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―今、コーチングを受け終わったMさんから見て、もし過去の自分にそっくりの人がいたら、コーチングをおすすめしますか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：苦しんでいる様子だったらお勧めしたいです。その理由は、自分だけで一人で悩んでいても、ほぼ変わっていかないと思うので、人からのアドバイスなどを受けながら変われるっていうのは、すごくいいことだと思うので。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―コーチングにたどり着く前に、本を読んだり、いろいろとなさったと思うのですが、それらはどうでしたか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：本も読んではいたんですけれど、読んで、その時には内容を理解して「やろう」と思っても、なかなか一人では実践できなかったんですね。自分が実践したことを伝えられる人がいるのも、良いんじゃないかと思います。実践したことを報告して「良かったね」と言ってもらえるだけで、嬉しいですね。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―今は社会人4年目ですね</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：はい、実は2か月ほど前に転職をしました。だから今は新しい上司にまだ慣れていない状況で、また前と同じような状況というか、新しい上司との関係を築かなければいけない、というところです。それで前に受けたコーチングのことを思い出しながら、やっていかないといけないな、と思っています。この時代に転職って難しいとは知っていたんですが、できるだけ早く地元に戻りたい、と思っていたので、思い切って転職しました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―今、振り返ってみて、コーチングを受けたことで何が一番変わりましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：前はこう、自分でネガティブなことばっかり考えて、解決方法というのを、あんまり考えられていなかったんです。だけど今はその自分の悩みに対して、どうやったら解決できるのかっていうことを考えられるようになりました。そうやってポジティブに考えられるようになったのは、良かったと思っています。ただ、今でも自分を責めてしまうこともあります。だけど時間がある時に、また考え直したりするのには、コーチングが役立っていると思います。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">それと自分が変わったな、と思う点はコミュニケーションに対してなんですけど、前は自分の性格だから、と思って諦めている部分があったんです。だけどコーチングを受けて、さっき言ったように、復唱して答えるとか、そういった対策はいくらでも考えられることなので、性格のせいだけにはしなくなりました。そういう点も変わったのかな、と自分では思っています。諦めたり、自分の性格のせいにしなくなったことで、少しずつ生きていきやすく、自分が自分でありやすく変わってきたかな、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―社会人になって、変わりたいと思われた、とのことですが、大学まではご自身のことをどう捉えていらっしゃいましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：大学までは、自分のことを考えるというよりは…。そこまで自分がコミュニケーションできない、ということは大学までは気づいていなくて。それで周りの人が悪いんだというか、周りの人が自分に合わないから、仲良くしなくてもいいや、と思っていたんです。でも社会人になってから、地元を離れたことで、周りが悪いんじゃなくて、自分自身の問題だと気づきました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―もし「自分はこんなだからダメなんだ」と諦めている人がいたら、今だったら、どんな声をかけてあげたいですか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Mさん：悩みを人に話すことで、いろいろ解決策が見つかるし、自分が変わろうと思えば、いくらでも変われるので、自分でいろいろコーチングだったり、人に話すということをやってみた方がいいんじゃない？ということは言いたいな、と思います。自分の悩みを人に話して解決策を探すことができますから。</span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">私は自分の悩みを人に話しても無駄だと思っていたというのもありますし、人に悩みを話すことが恥ずかしい、と思っているところもあったんです。自分の弱みを見せたくない、弱点は言いたくない、と思っていました。それがゆう先生のコーチングを6ヵ月くらい受けて、変わりました。すごくチャレンジした半年でした。やって良かった、と思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0,75%,60%);\"><strong>―ありがとうございました。自分を変える勇気を持っている方だなと感じました。貴重なお話をどうもありがとうございました。</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Mさん：こちらこそ、ありがとうございました。</span></p>', '2023-10-09', 'program-4.png', '人との関わりを避け気味の日々を変えたい！...', 2, '(50代・男性・会社員)'),
(9, 'Test Category', '<p>Test Category</p>', '2023-10-22', NULL, 'Test Category', 1, NULL),
(10, 'ホームページをリニューアルしました', '<p>このたび、ホームページをリニューアルしました。<br>より見やすいホームページを目指して、デザインとページの構成を改善しました。<br>これからも、ホームページを訪れてくださったみなさまに喜んでいただうけるようなコンテンツや情報を提供していきます。<br>どうぞよろしくお願いいたします。<br><br>このステキなサイトを作ってくださったのはこちら（INDIGI）です。</p>', '2023-10-23', NULL, 'ホームページをリニューアルしました', 3, NULL),
(11, 'Rさん', '<p style=\"text-align:justify;\"><span style=\"background-color:hsl( 9, 100%, 96% );color:hsl(0, 0%, 0%);\"><i>応援してくれる人がいる、という強さ。</i></span></p><p style=\"text-align:justify;\"><span style=\"background-color:hsl( 9, 100%, 96% );color:hsl(0, 0%, 0%);\"><i>家族でも友人でもない、第三の場だからこそ、自分を受け入れることができた</i></span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―ゆう先生のコーチングを受けてみようと思ったきっかけは何ですか</strong></span><br>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Rさん：きっかけは、そうですね、当時仕事を変わりたいと思っていました。他にも人生で大きなできごとがあり、自分の人生を考えた時にうまく考えがまとまらなくて。それで、なんでだったんでしょう、あるサイトを見ていたんです。それでゆうさんのプログラムの内容がでてきて、読んだらまさに「私が求めているのはこれだ！」と思いました。「人生どうしたらいいのか困っている方へ」とか、「サポートします」ということばに、直感で「この人、良い人そうだな」と思って（笑）。ぜひ、お会いしてみたいな、と思ってまずは体験セッションに申し込みました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―ゆう先生のページで響いたことばやイメージは何でしたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：そうですね、はっきりとした文言は覚えていないのですが、なんというか、ゆうさんのあたたかさが伝わるような、でも無理強いするような感じではない、考えを押し付けて来るのではないな、というのが感じ取れました。いろいろ相談できる人なんじゃないかな、と思いました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―コーチングを受け始めた頃、ワークについてはどう感じましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：ワークについては、難しかったですね。あの…、今までぼーっと生きていた感じだったので、自分の本質と嫌でも向き合う形でしたから。でも、それでいて楽しかったですね。難しかったけど、楽しかったです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―「楽しかった」の中には何がありましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：そうですね。ワクワクした気持ちが入っていますね。やはり自分がぼんやりと考えることよりも、なんというか、詰めて考えるワークだったので、知らなかった自分の一面を見られたという感じです。</span><br>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―知らなかった自分の一面を見て「嫌だな」と思ったりすることはありませんでしたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：ありました（笑）。自分はこんな考えを持っている人間だったんだ、とか改めて気づかされるところも多くて。苦しい時もありました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―「苦しいな」「ちょっと辛いな」と思いながらも続けた理由は何でしょう</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：続けた理由は…。やはり自分を諦めたくないのと、あとはゆうさんがもう「何があっても応援し続けるからね」と背中を押してくれる形だったので続けられました。誰かが応援してくれる、というのはすごく大きかったですね。なかなか友達や家族とは話すような内容ではないことを、真剣にゆうさんと話し合って。でも自分ひとりだったら続けられなかったと思います。ひとりだったら「もう考えるのは辞めよう」と、逃げていたと思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―6ヵ月の間に、自分が変わったな、と思うことはありましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：はい、思いました。途中から変化を感じました。その効果はすごかったです。例えば「やってみたいな」と思っても、思っただけで今までは終わってしまっていたんですが、コーチングを受けたら、次の日には例えば申し込みをするとか、行動する力をもらいました。気になる講座があったら受けてみるとか、気になっているなら、行って調べてみるとか。思っていただけから、思ったら行動するようになりました。</span><br>&nbsp;</p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―それ以前は、行動することをどう感じていたのでしょうか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：そうですね、以前は思っていてもかなわないんじゃないか、とか、やっても無駄なんじゃないか、というふうで。やってみたいと思っても、それを否定する気持ちが強くて。だから思っても行動する一歩が、まったく出なかったです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―どうして否定しちゃったんでしょうね</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：ゆうさんと話してわかったのは、おそらく心から願っていなかったんじゃないか、ということでした。思っているだけで、失敗したら怖い、と。行動したことで、変わってしまったら怖い、とか、このままがいい、という思いがどこかにあったんじゃないかな、ということがわかりました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―それがだんだん変わっていったんですね。変わっていく自分についてはどう感じましたか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：こんなに自分は行動できるんだ、ということに驚きましたね。もっと以前からいろいろ行動してみればよかった、と思いました。人と話すってすごく大きなことでした。本当にすごかったです。ゆうさんに「行ってこい」と言われたわけでもなく、ただお話を聞いてもらって、そしてゆうさんのお話を聞くだけで、もう本当に、行動も変わりましたからね。こんなにも心も行動もまるまる変わるんだ、と驚きました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―周りの反応はどうでしたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：はい、今、実家で暮らしているんですが「なんだか行動的になったね」と驚かれました。あとは「顔色が良くなった」とも言われました。「なんか最近、顔色がいいんじゃない？」と言われて（笑）。きっとコーチングでいろいろお話しているからだなあ、と思いました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―コーチングを受ける前と後で、ご自身にどんな変化がありましたか</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Rさん：はい、月並みなんですけれど「もっと自分を大切にしよう」と思いました。これは私の中では、とても大きい変化でした。以前は、そういうふうに考えていなかったですね。どちらかというと、周りを気にするタイプだったので。自分がどう考えてどう行動するか、だったり、もっとこう、自分を信じて、大切にしないといけないなあ、という気づきがありましたね。でもこれは普通に暮らしていたら気が付かなかったと思います。周りと同じくらい、自分を大切にしなきゃいけない、ということがわかりました。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―今、どんな気持ちですか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：今、こういうことに気づいて、心地良いですね。今まで、自分って一つじゃなくて、わかれて遠くから見ているような感じもあったんですけれど、自分を大切にしよう、と思ってから…。ちょっと表現が難しいんですが…。そう、なんとなく、自分なんだけどよくわからないな、自分のことっていうのがあったんですが、今は少しずつ、自分と会話ではないのですが、同一人物だな、とわかるようになっています。自分が自分になってきた感じです。コーチングを受けて、本当に良かったと思っています。ゆうさんのお人柄にも癒されました。寄り添って、受けてくれる姿勢ですね。途中でどんどん考えが私も変わってしまって、いろいろ方向が変わっていくんですけれど、そのすべてを受け入れて応援してくれるというのは、すごくありがたかったです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―もし悩んでいる人がいたら、コーチングをおすすめしようと思いますか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：はい。実はお友達にも話しています。やっぱりまだみなさん、聞き慣れないんでしょうか、コーチングって何？って感じですけれど。カウンセリングじゃないの？とか。でも私も厳密にはっきりとした違いはわかっていないんですけれど。ただ、本当に、なかなか話せない内容だったなあ、と思います。普通だったら話せないことを、コーチングだから話せたし、それが自分にとって大きかったです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―コーチングについてよく知らない人に、何を一番伝えたいですか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：そうですね、「自分で気づける」っていうところですね。多分そこは、私の場合ですけど家族に話していても、得られなかったことではないかと思います。人の意見ももちろん大事なんですけれど、自分はどう感じているのか、考えているかを嫌でも突き付けられるような感じですね（笑）。それが苦しい時もあったんですけど（笑）。「人生で最強の学び」じゃないですけど、それぐらいはあったと思います。私はそう思います。これからの人生でも役に立ちます。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―お仕事はどうなりましたか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：はい、その仕事は辞めて、今、別のところで働いています。新しい職場は、まったく前の職場と業種が違うんですけれど。だからまだ毎日勉強、という感じです。でも毎日勉強していることは、辛くないです。自分で選んだので、楽しくやっています。前の職場だったら、もう勉強する必要は無いけれど、戻りたくはないですね（笑）。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―6ヵ月のコーチングの間にきついとき、どうやってそれを発散したり、乗り越えたりしましたか</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：私はもう、ゆうさんの前で泣いたりしました。そうですね、泣きましたし…。でももう、受け入れるしかなかったです。自分の考えとか感情に気づいてしまうと、もう何も否定できなくて、受け入れるしかないな、と。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―人生でなかなかない学びでしたか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：はい。そうですね、学校とかでももちろん教えてくれませんし。でもこれ義務教育に入れた方が良いんじゃないか、と思うんですけれど（笑）。生きていくための力ですから。子どもの頃からわかっているほうが、人生を生きやすいんじゃないかと思います。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―コーチングを受けてみようかな、と迷っている人に何かメッセージはありますか？</strong></span></p><p style=\"text-align:justify;\"><br><span style=\"background-color:transparent;color:#000000;\">Rさん：やっぱり、一歩踏み出して。ゆうさんは体験セッションもされているので、勇気をもって一歩、トライしてみて！って言いたいですね。きっと何か自分が変わるよって伝えたいですね。変わりたいなら、ぜひ！と伝えたいです。</span></p><p>&nbsp;</p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:hsl(0, 75%, 60%);\"><strong>―お忙しいところ、今日はありがとうございました。</strong></span></p><p>&nbsp;</p><p style=\"text-align:justify;\"><span style=\"background-color:transparent;color:#000000;\">Rさん：こちらこそ、ありがとうございました。</span></p>', '2023-11-25', '33a740e2cece4932a1016820ba522eab.jpg', '応援してくれる人がいる、という強さ。家族でも友人でもない...', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `firstname`, `lastname`, `email`, `date`) VALUES
(1, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '2023-10-26'),
(2, 'August', 'Truong', 'gordon.maou.sama@gmail.com', '2023-10-26'),
(3, 'Trương', 'Thu', 'gordon.maou.sama@gmail.com', '2023-11-23'),
(4, 'Trương', 'Thu', 'Thu.TH7@fsoft.com.vn', '2023-11-23'),
(5, 'Trương', 'Thu', 'monde.workshop@gmail.com', '2023-11-23'),
(6, 'Trương', 'Thu', 'monde.workshop@gmail.com', '2023-11-23'),
(7, 'Trương', 'Thu', 'a19dc553@dhw.ac.jp', '2023-11-23'),
(8, 'Trương', 'Thu', 'monde.workshop@gmail.com', '2023-11-23'),
(9, 'Trương', 'Thu', 'thu.phd.truong@gmail.com', '2023-11-23'),
(10, 'Trương', 'Thu', 'Thu.TH7@fsoft.com.vn', '2023-11-23');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
