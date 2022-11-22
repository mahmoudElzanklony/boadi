-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2022 at 09:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dictionary`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_visible` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `name`, `image`, `link`, `is_visible`, `created_at`, `updated_at`) VALUES
(2, 'abc', '16683823588202857123960_image.jpg', '', 0, '2022-11-13 21:32:38', '2022-11-13 21:55:00'),
(3, 'xyzkk', '16683826463055828846182_image.jpg', 'https:www.facebook.com', 1, '2022-11-13 21:37:26', '2022-11-14 14:18:38'),
(4, 'hhh', '16683837414177830950472_image.jpg', 'https://www.google.com', 1, '2022-11-13 21:37:46', '2022-11-18 13:56:39'),
(5, 'dsa', '16687853375776969895464_image.jpeg', 'https://www.google.com', 0, '2022-11-18 13:28:57', '2022-11-18 13:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reason` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `reason`, `message`, `created_at`, `updated_at`) VALUES
(1, 'test test', 'mahmoud_elzanklony1234@yahoo.com', '1090576399', 'شكر و تقدير', 'dsa', '2022-11-14 15:39:06', '2022-11-14 15:39:06'),
(3, 'test test', 'mahmoud@yahoo.com', '10905763000', 'مشكلة', 'wwwaa', '2022-11-14 15:39:06', '2022-11-14 15:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `definisions`
--

CREATE TABLE `definisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `term_in_arabic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_in_english` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expression` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `definisions`
--

INSERT INTO `definisions` (`id`, `term_in_arabic`, `term_in_english`, `expression`, `created_at`, `updated_at`) VALUES
(888, 'اسهم ثانوية ', 'Secondary Stocks ', 'تستخدم بطريقة عامة لتعني أسهما لها دور أقل أهمية في رسملة السوق، وذات نوعية أقل ومخاطر أعلى من الأسهم الجيدة المرغوبة التي تدعى أسهم الدرجة الأولى blue chip Issues  التي يمثلها مؤشر \" داوجونز', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(889, 'اسهم جذابة / نمو', 'Glamour Stock', 'أسهم غالبًا في شركات صناعية تشهد تطورًا جديدًا ومتسارعًا في نشاطاتها وتستحوذ على رغبة المستثمرين ويميل سعرها إلى التزايد بسرعة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(890, 'اسهم دورية', 'Cyclical Stock', 'الأسهم التي تتأثر بأوضاع النشاط الاقتصادي، حيث ترتفع قيمتها عندما يتحسن الأداء الاقتصادي  وتنخفض عند تراجع الأداء الاقتصادي. وكمثال لتلك النوعية من الأسهم شركات الورق والسيارات. وبالمقابل هنا', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(891, 'اسهم ذات قيمة اسمية', 'Par Value Stocks', 'هي عبارة عن قيمة الاسهم الاسمية  و المقدرة للسهم الواحد و الواردة في مرسوم تأسيس الشركة المساهمة و تطبع هذه القيمة عادة على السهم نفسه و هي قيمة لها اهمية من الناحية القانونية .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(892, 'اسهم ذات قيمة إسمية', 'Par Value Shares', 'هي عبارة عن قيمة الاسهم الاسمية  و المقدرة للسهم الواحد و الواردة في مرسوم تأسيس الشركة المساهمة و تطبع هذه القيمة عادة على السهم نفسه و هي قيمة لها اهمية من الناحية القانونية .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(893, 'اسهم رأس المال', 'Capital shares', 'تقسم الملكية في شركة المساهمة الي اسهم تسمي اسهم رأس المال . و القيمة الاسمية لهذه الاسهم تبين عادة في ترخيص الشركة و تسمي رأس المال القانوني و تبين في البيانات على انها قيمة اسهم رأس المال .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(894, 'اسهم رأس المال', 'Capital Stocks', 'تقسم الملكية في شركة المساهمة إلى أسهم تسمى أسهم رأس المال. والقيمة الإسمية لهذه الأسهم تبين عادة في ترخيص الشركة وتسمى رأس المال القانوني وتبين في البيانات على أنها قيمة أسهم رأس المال.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(895, 'اسهم رأس المال المميعة', 'Watered Capital Stock', 'عندما تستبدل شركة موجودات مبالغا في تقدير قيمتها بأسهمها ( بالسعر الاسمي ) من اجل اخفاء وجود حسم من قيمة الاسهم الاسمية فأن هذه الاسهم تدعي اسهم رأس المال السائلة ( المميعة ) .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(896, 'اسهم رأسمال غير مصدرة ', 'Unissued Capital Stock', 'أسهم رأس المال المصرح بها إلا أنها لم تصدر بعد، .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(897, 'اسهم سريعـة / ورقة مالية / أسهم مرتفعة السعر', 'High Flyer', 'هي الأسهم ذات السعر المرتفع وتتصف بكثيرة المُضاربة عليها ويتحرك سعرها صعودًا ونزولاً بحدة خلال فترة قصيرة، وأفضل مثال للشركات المصدرة لمثل هذه الأسهم هي الشركات المصنعة للتقنيات العاليـة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(898, 'اسهم عادية  ', 'Common shares', 'هي صكوك ملكية تعطي لحاملها الحق في حضور الجمعية العامة السنوية،. وفي حالة تصفية الشركة يتم صرف مستحقات حملة الأسهم العادية بعد صرف مستحقات حملة السندات وحملة الأسهم الممتازة ، وبالتالي فحملة ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(899, 'اسهم عادية  ', 'Common Stocks', 'هي صكوك ملكية تعطي لحاملها الحق في حضور الجمعية العامة السنوية،. وفي حالة تصفية الشركة يتم صرف مستحقات حملة الأسهم العادية بعد صرف مستحقات حملة السندات وحملة الأسهم الممتازة ، وبالتالي فحملة ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(900, 'اسهم عادية  ', 'ordinary shares ', 'هي صكوك ملكية تعطي لحاملها الحق في حضور الجمعية العامة السنوية،. وفي حالة تصفية الشركة يتم صرف مستحقات حملة الأسهم العادية بعد صرف مستحقات حملة السندات وحملة الأسهم الممتازة ، وبالتالي فحملة ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(901, 'اسهم عادية  ', 'ordinary stocks ', 'هي صكوك ملكية تعطي لحاملها الحق في حضور الجمعية العامة السنوية،. وفي حالة تصفية الشركة يتم صرف مستحقات حملة الأسهم العادية بعد صرف مستحقات حملة السندات وحملة الأسهم الممتازة ، وبالتالي فحملة ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(902, 'اسهم عادية محتملة ', 'Potential Common Stock', 'هي اسهم عادية محتمل اصدارها نتيجة قيام حملة الاوراق المالية القابلة للتحويل لاسهم عادية ( السندات والاسهم الممتازة القابلة للتحويل لاسهم عادية ) بتحويل اوراقهم لاسهم عادية، وقيام حملة شهادات ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(903, 'اسهم عديمة القوة التصويتية ', 'Un Voting Shares', 'أسهم لا تخول بصاحبها (حاملها) حق التصويت فى الجمعية العمومية للشركة التي تعقد سنويًا ويعرض فيها على مساهمى الشركة حساب الأرباح والخسائر والمركز المالى للشركة من واقع ميزانيتها العمومية وتقرير', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(904, 'اسهم عينية ', 'Shares in kind', 'فهي الأسهم التي تمثل حصصا عينية في رأس مال الشركة .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(905, 'اسهم غير متداولة (غير مسعرة)', 'Unquoted Shares', 'أسهم لا يتم الاتجار بها في سوق الأوراق المالية أو أي من أسواق المال المنظمة الأخرى.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(906, 'اسهم غير مدرجة', 'Unlisted', 'هي الاسهم التي لم تتقدم الشركة المصدرة بطلب إدراجها في السوق المالية أو أنها لم تستوفي شروط الادراج في السوق المالية.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(907, 'اسهم قابلة للتحويل', 'Convertible Stock', 'عندما تكون الأسهم في إحدى شركة قابلة للتحويل، إلى نوع آخر من أوراق الشركة المالية، عند ذلك تُدعى هذه الأسهم، \"أسهم قابلة للتحويل\".', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(908, 'اسهم لحامله   ', 'Bearer Stocks', 'أسهم غير مدون اسم المالك على وثيقة ملكيتها، وذلك كما هو الحال بالنسبة للأوراق النقدية الصادرة عن مؤسسة النقد العربي السعودي، ولذلك يتوجب على المساهم الاحتفاظ بوثيقة الملكية في مكان أمين لأنها', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(909, 'اسهم متداولة', 'Outstanding Stock', 'الأسهم المتداولة لأي شركة هي الأسهم التي تكون قد صدرت فعلا وأصبحت في أيدي المساهمين. والأسهم المتداولة هي أسهم فعلية يكسب حاملها أرباح  ولحاملها حق التصويت في إجتماع المساهمين.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(910, 'اسهم متقلبة ', 'Volatile Stock ', 'أسهم تتسم بطابع المضاربة، ونتيجة لذلك تكون محفوفة بالمخاطر نظرا لكون أسعارها تميل إلى التذبذب الواسع، وتدعى كذلك yo – yo Stock.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(911, 'اسهم محتملة مشروطة  ', 'Contingently Issuable Common Stock', 'هي اسهم عادية تصدر بدون مقابل نقدي او بمقابل نقدي صغير او اي مقابل اخر عند تحقق شروط منصوص عليها في اتفاقية الاسهم المشروطة.  ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(912, 'اسهم محررة ', 'outstanding shares', 'هي الأسهم المصدرة الموجوده حالياً لدى عامة الجمهور. مع ملاحظة إن ذلك لاينبغى أن يتطابق بالضرورة مع الأسهم المصدرة وذلك لأن بعض الأسهم المصدرة تعتبر أسهم خزانة .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(913, 'اسهم محررة ', 'outstanding stocks', 'هي الأسهم المصدرة الموجوده حالياً لدى عامة الجمهور. مع ملاحظة إن ذلك لاينبغى أن يتطابق بالضرورة مع الأسهم المصدرة وذلك لأن بعض الأسهم المصدرة تعتبر أسهم خزانة .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(914, 'اسهم مدرجة في البورصة', 'Listed Shares', 'تتمثل في أسهم الشركة التي استوفت شروط الادراج في السوق المالية التي يجب على جميع الشركات الالتزام بها كشرط أساسي ليتم إدراجها في السوق المالية كأسهم مدرجة في البورصة .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(915, 'اسهم مدرجة في البورصة', 'Listed Stock', 'تتمثل في أسهم الشركة التي استوفت شروط الادراج في السوق المالية التي يجب على جميع الشركات الالتزام بها كشرط أساسي ليتم إدراجها في السوق المالية كأسهم مدرجة في البورصة .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(916, 'اسهم مسجلة ', 'Stock Registered ', 'أسهم مسجلة باسم مالكها في سجل أسهم الشركة ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(917, 'اسهم مضاربة   ', 'Speculative Stocks', 'أسهم شركات في العادة لها احتمالية تحقيق أرباح رأسمالية عالية وغير عادية. وينطوي الاستثمار في هذا النوع من الاسهم على مخاطر عالية.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(918, 'اسهم مقتطعة الحصص ( الزرقاء)', 'Truncated Shares', 'أحد أنواع الأسهم التي تصدر من منشآت جيدة وقوية ويتم دفع حصة على السهم بشكل منتظم حتى لو كانت تلك الشركات في أسوأ حالاتها. أي إن هذه الحصص توزع بشكل مضمون , من جهة أخرى فهذا النوع من الأسهم لا', '2022-11-11 20:09:50', '2022-11-11 20:20:20'),
(919, 'اسهم مقررة القيمة / محددة القيمة', 'Stated Value Shares', 'أسهم بدون قيمة اسمية يتم تحديد قيمة لها تمثل غالبا الحد الأدنى الذي يجب أن لا تقل قيمة السهم الواحد عنه.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(920, 'اسهم مكتتبة', 'Subscribed Stock', 'الاكتتاب في الاسهم يعني الاتفاق علي دفع قيمة الاسهم دفعة واحدة او بالتقسيط . و تزيد شركة المساهمة حقوق المساهمين بالمبلغ الذي يوافق المكتتبون علي دفعه . و عندما يدفع المبلغ المتفق عليه بالكام', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(921, 'اسهم مكتتبة ', 'Subscribed Shares', 'الاكتتاب في الأسهم يعني الاتفاق علي دفع قيمة الأسهم   دفعة واحدة أو بالتقسيط. و تزيد شركة المساهمة حقوق المساهمين بالمبلغ الذي يوافق المكتتبون على دفعه. و عندما يدفع المبلغ المتفق عليه بالكام', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(922, 'اسهم ممتازة ', 'Preferred Shares', 'السهم الممتاز يسمى ممتازا لأن بموجبه يمنح مالك هذا السهم أفضلية معينة. وهذه الأفضلية تشمل أفضلية دفع أرباح الأسهم وأفضلية استعادة القيمة للسهم في حالة تصفية الشركة. حملة الأسهم الممتازة يسبقو', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(923, 'اسهم ممتازة ذات أرباح تراكمية', 'Convertible preferred Stock', 'فئة من الأسهم الممتازة تتميز بأنه إذا لم توزع لها أرباح في فترة من الفترات فإنه يتم تجميع هذه الأرباح ودفعها في المستقبل عند إمكانية ذلك، ويكون لتوزيعات الأرباح على هذه الأسهم أولوية قبل التو', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(924, 'اسهم ممتازة غير مجمعة للارباح', 'Non-cumulative preferred Shares', 'الأسهم التي لا تراكم الأرباح بمعنى أنه يسقط فيها حق المُطالبة بالأرباح لسنة ما إذا لم يعلن مجلس الإدارة عن توزيع مقسوم أرباح لتلك السنة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(925, 'اسهم ممتازة غير مجمعة للارباح', 'non-cumulative preferred Stock', 'الأسهم التي لا تراكم الأرباح بمعنى أنه يسقط فيها حق المُطالبة بالأرباح لسنة ما إذا لم يعلن مجلس الإدارة عن توزيع مقسوم أرباح لتلك السنة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(926, 'اسهم ممتازة قابلة', 'Callable preferred Stock', 'الاسهم الممتازة يمكن استردادها طبقا لرغبة الشركة و سدادها بسعر متفق عليه و يكون هذا السعر عادة اعلي من سعر سند الاصدار . وهذا السعر المتفق اليه بانه سعر الاسترداد او سعر السداد .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(927, 'للاسترداد', NULL, NULL, '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(928, 'اسهم ممتازة قابلة للاسترداد', 'Callable Preferred shares', 'الأسهم الممتازة يمكن إستردادها طبقا لرغبة الشركة وسدادها بسعر متفق عليه و يكون هذا السعر عادة أعلى من سعر سند الإصدار. وهذا السعر المتفق عليه يشار إليه بأنه سعر الإسترداد أو سعر السداد.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(929, 'اسهم ممتازة قابلة للتحويل لاسهم عادية', 'Convertible Preferred Stock', 'هي اسهم ممتازة التي قد تصدرها بعض الشركات المساهمة وتعطي لحملتها الحق في تحويل اسهمهم الى اسهم عادية بعد مرور فترة معينة ، لذا فان حملة هذه الاسهم ليس لديهم ميزة الاولوية في الحصول على الاربا', '2022-11-11 20:09:50', '2022-11-18 16:17:43'),
(930, 'اسهم ممتازة مجمعة للارباح ', 'Convertible Preferred Shares ', 'هي ميزة تجميع الارباح اذا اعطيت للاسهم الممتازة انه اذا لم تقرر الجمعية العمومية توزيع ارباح في اي سنة او لم تحقق الشركة ارباح في سنة معينة فان من حملة هذا النوع من الاسهم الحصول على الارباح ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(931, 'اسهم ممتازة مجمعة للارباح ', 'Cumulative preferred stocks', 'هي ميزة تجميع الارباح اذا اعطيت للاسهم الممتازة انه اذا لم تقرر الجمعية العمومية توزيع ارباح في اي سنة او لم تحقق الشركة ارباح في سنة معينة فان من حملة هذا النوع من الاسهم الحصول على الارباح ', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(932, 'اسهم ممتازة محدودة الارباح', 'Non-Participating preferred Stocks', 'عندما يكون الحق المفضل ( المميز ) لحملة الاسهم الممتازة في الحصول على ارباح محددة بمقدار معين من المال فان هذه الاسهم تسمي الاسهم الممتازة المحدودة الارباح .', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(933, 'اسهم ممتازة محدودة الأرباح', 'Non-Participating Preferred Shares', 'عندما يكون الحق المفضل \"المميز\"، لحملة الأسهم الممتازة، في الحصول على أرباح محددة بقدر معين من المال، فإن هذه الأسهم تسمى \"الأسهم الممتازة المحدودة الأرباح\".', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(934, 'اسهم ممتازة مشاركة ', 'Participating preferred Stock ', 'الأسهم الممتازة التي لها حق المشاركة في توزيعات الأرباح الزائدة بعد تحديد الحصة الثابتة للأسهم العادية والأسهم الممتازة.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(935, 'اسهم مميهة / مموهة', 'Watered Stock ', 'تنجم الأسهم المميهة عن إصدار أسهم مقابل أصول مقدرة بقيمة أعلى من قيمتها الحقيقية.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(936, 'اسهم منحة / أسهم مجانية', 'Stock Dividend ', 'توزيع ربح في صور أسهم مجانية، ويعلن عن توزيع الأرباح على هذا النحو غالبا عندما يكون المركز النقدي (السيولة) غير كاف و/ أو عندما ترغب الشركة بزيادة معدلات التداول في أسهمها عن طريق تقليل أو تن', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(937, 'اسهم مؤجلة الأرباح ', 'Deferred Shares ', 'هى الأسهم التى لا تحصل وفقاً لشروط إصدارها- على ربح موزع ما لم تحصل أنواع أخرى معينة من الأرباح، وبذلك تحصل الأسهم المؤجلة على الرصيد المتبقى من الأرباح التى تقرر توزيعها. ومثل ذلك السندات ال', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(938, 'اسهم نقدية', 'Cash Shares', 'أسهم يدفع المساهم ثمنها نقداً، مثال لهذه الاسهم أسهم الشركات وأسهم البنوك التجارية والتي تحدد القوانين في بعض البلدان بضرورة دفعها نقداً وليس عينا.  وتمثل حصصا نقدية في رأس ما شركة المساهمة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(939, 'اسهم نقدية', 'Cash Stocks', 'أسهم يدفع المساهم ثمنها نقداً، مثال لهذه الاسهم أسهم الشركات وأسهم البنوك التجارية والتي تحدد القوانين في بعض البلدان بضرورة دفعها نقداً وليس عينا.  وتمثل حصصا نقدية في رأس ما شركة المساهمة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(940, 'اسهم نقدية', 'Monetary Shares', 'أسهم يدفع المساهم ثمنها نقداً، مثال لهذه الاسهم أسهم الشركات وأسهم البنوك التجارية والتي تحدد القوانين في بعض البلدان بضرورة دفعها نقداً وليس عينا.  وتمثل حصصا نقدية في رأس ما شركة المساهمة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(941, 'اسهم نقدية', 'Monetary stocks ', 'أسهم يدفع المساهم ثمنها نقداً، مثال لهذه الاسهم أسهم الشركات وأسهم البنوك التجارية والتي تحدد القوانين في بعض البلدان بضرورة دفعها نقداً وليس عينا.  وتمثل حصصا نقدية في رأس ما شركة المساهمة', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(942, 'اسهم وحصص أخرى', 'Shares and Other Equities', 'أصول في شكل أدوات مالية وقيود تعترف بمطالبات علي باقي قيمة المشاريع ذات الشخصية الاعتبارية بعد سداد مطالبات جميع الدائنين وسندات وحصص رأس المال لا تنص علي الحق في دخل محدد سلفا أو في مبلغ ثاب', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(943, 'اسهم، مخزون', 'Stock', 'اسهم راس المال هي مجموع الملكية في شركة مساهمة يكون فيها السهم هو وحدة التملك. و يستخدم هذا التعبير كذلك بمعنى \"مخزون\" أي البضاعة الموجودة في المستودع.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(944, 'اسواق الأسهم', 'Stocks Market', 'هي أسواق يتم تبادل الأوراق المالية التي تعبّر عن الصلة بحق ملكية لنسبة مئوية في منشاة مالية أو ورقة مالية بقرض أو ورقة مالية تعبّر عن مؤشر مجموعة أسهم طبعا ً يشترط بها ان تكون في السعر الحالي', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(945, 'اسواق العوامل', 'Factor Markets', 'أسواق عناصر الإنتاج. وفي أية فترة زمنية معينة، يوجد طلب محدد على عناصر الإنتاج وعرض محدد متاح منها. وهكذا يكون في السوق قوتان: وهما العرض والطلب. وفي ظروف المنافسة الكاملة، يحدد هذان العاملان', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(946, 'اسواق حدودية', 'Border Markets', 'أسواق مالية سيولتها أقل و التداول فيها يخضع لشروط أصعب من أسواق الأسهم الاعتيادية لكنها تعتبر من أحد الأسواق الأكثر جاذبية للاستثمار وتتواجد فيها فرص عائديه كبيرة . تتواجد هذه الأسواق في الدو', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(947, 'اسواق ضعيفة الكفاءة', 'Weak Form Efficiency', 'في الاسواق ضعيفة الكفاءة تعكس أسعار الأوراق المالية السائدة في لحظة معينة معرفة المتداولين بالاسعار الماضية للورقة المالية وحجم تداولها.', '2022-11-11 20:09:50', '2022-11-11 20:09:50'),
(948, 'اسواق عالية الكفاءة1', 'Strong Form Efficiency', 'في الاسواق عالية الكفاءة لا تعكس أسعار الأوراق المالية السائدة في لحظة معينة فقط المعلومات المنشورة وإنما كل ما يمكن أن يكون معلوما عن الشركة بما فيها المعلومات الداخلية للشركة. وتوصف السوق ب', '2022-11-11 20:09:50', '2022-11-18 13:26:54');

-- --------------------------------------------------------

--
-- Table structure for table `definitions_tags`
--

CREATE TABLE `definitions_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `definition_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `definitions_tags`
--

INSERT INTO `definitions_tags` (`id`, `definition_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(15, 948, 2, '2022-11-18 16:13:15', '2022-11-18 16:13:15'),
(16, 948, 1, '2022-11-18 16:13:15', '2022-11-18 16:13:15'),
(17, 948, 3, '2022-11-18 16:13:15', '2022-11-18 16:13:15'),
(18, 948, 5, '2022-11-18 16:13:15', '2022-11-18 16:13:15'),
(27, 947, 4, '2022-11-18 16:17:11', '2022-11-18 16:17:11'),
(28, 947, 1, '2022-11-18 16:17:11', '2022-11-18 16:17:11'),
(29, 947, 3, '2022-11-18 16:17:11', '2022-11-18 16:17:11');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2013_07_14_203748_create_roles_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2022_07_16_155307_create_notifications_table', 1),
(6, '2022_11_08_175408_create_definisions_table', 1),
(7, '2022_11_13_153553_create_ads_table', 2),
(8, '2022_11_14_162149_create_contacts_table', 3),
(9, '2022_11_18_165243_create_tags_table', 4),
(10, '2022_11_18_165747_create_definitions_tags_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `receiver_id` bigint(20) UNSIGNED NOT NULL,
  `ar_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tu_info` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seen` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2022-11-11 14:56:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'حسابات', '2022-11-18 17:03:39', NULL),
(2, 'اسهم', NULL, NULL),
(3, 'اموال', '2022-11-18 15:30:52', '2022-11-18 15:30:52'),
(4, 'test', '2022-11-18 16:07:49', '2022-11-18 16:07:49'),
(5, 'abc', '2022-11-18 16:13:15', '2022-11-18 16:13:15'),
(6, 'xyz', '2022-11-18 16:13:34', '2022-11-18 16:13:34'),
(7, 'das', '2022-11-18 16:14:01', '2022-11-18 16:14:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `serial_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `approved` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `username`, `email`, `email_verified_at`, `serial_number`, `password`, `phone`, `image`, `approved`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'مدير احمد', 'admin@admin.com', NULL, '', '', '01005663932', 'default.png', 0, NULL, '2022-11-11 13:06:06', '2022-11-11 21:45:42'),
(2, 1, 'admin', 'mahmoud_elzanklony@yahoo.com', NULL, '', '$2y$10$933PJH6Olmq8KKd9NXF7W.tLNNUWi/qqz2J8uJDmk0qgOtbuXBGne', '01152296646', 'default.png', 0, NULL, '2022-11-12 16:57:47', '2022-11-12 16:57:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `definisions`
--
ALTER TABLE `definisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `definitions_tags`
--
ALTER TABLE `definitions_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `definitions_tags_definition_id_foreign` (`definition_id`),
  ADD KEY `definitions_tags_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_sender_id_foreign` (`sender_id`),
  ADD KEY `notifications_receiver_id_foreign` (`receiver_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `definisions`
--
ALTER TABLE `definisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=952;

--
-- AUTO_INCREMENT for table `definitions_tags`
--
ALTER TABLE `definitions_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `definitions_tags`
--
ALTER TABLE `definitions_tags`
  ADD CONSTRAINT `definitions_tags_definition_id_foreign` FOREIGN KEY (`definition_id`) REFERENCES `definisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `definitions_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notifications_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
