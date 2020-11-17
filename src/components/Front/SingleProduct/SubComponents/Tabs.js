import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div className="tabs">
                    <div className="tab-box">
                        <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="Review-tab" data-toggle="tab" href="#Review"
                                   role="tab" aria-controls="Review" aria-selected="true">
                                    <i className="mdi mdi-glasses"></i>
                                    نقد و بررسی
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Specifications-tab" data-toggle="tab"
                                   href="#Specifications" role="tab" aria-controls="Specifications"
                                   aria-selected="false">
                                    <i className="mdi mdi-format-list-checks"></i>
                                    مشخصات
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="User-comments-tab" data-toggle="tab"
                                   href="#User-comments" role="tab" aria-controls="User-comments"
                                   aria-selected="false">
                                    <i className="mdi mdi-comment-text-multiple-outline"></i>
                                    نظرات کاربران
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="question-and-answer-tab" data-toggle="tab"
                                   href="#question-and-answer" role="tab"
                                   aria-controls="question-and-answer" aria-selected="false">
                                    <i className="mdi mdi-comment-question-outline"></i>
                                    پرسش و پاسخ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg">
                        <div className="tabs-content">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Review" role="tabpanel"
                                     aria-labelledby="Review-tab">
                                    <h2 className="params-headline">نقد و بررسی اجمالی</h2>
                                    <section className="content-expert-summary">
                                        <div className="mask pm-3">
                                            <div className="mask-text">
                                                <p>اولین گوشی همراه سری گلکسی نوت در سال 2011 روانه بازار شد
                                                    تا خانواده افسانه‌ای نوت را برای اولین بار به دنیا معرفی
                                                    و تعریفی نو برای محصولات «فبلت‌» ارائه کند. حدود 8 سال
                                                    پس از آن، سامسونگ برای عرضه عضو جدید خانواده نوت (Galaxy
                                                    Note 10) با چالش‌های جدیدی مواجه است؛ این چالش‌ها
                                                    ویژگی‌های مدرنی هستند که در محصولات رقیب دیده می‌شوند.
                                                    گلکسی نوت‌ها به‌طور عمومی شبیه سری Galaxy S هستند؛ با
                                                    این تفاوت که صفحه‌نمایش بزرگ‌تر و یک قلم دیجیتال S Pen
                                                    دارند. گوشی موبایل Samsung Galaxy Note10 با دوربین سه
                                                    گانه در قاب پشتی روانه بازار شده است؛ این سه سنسور با
                                                    داشتن ویژگی‌هایی مانند لرزشگیر تصویر و قابلیت
                                                    فیلم‌برداری 4K خروجی تصویر مطلوبی را برای جدیدترین عضو
                                                    خانواده Note به همراه دارند. پردازش محاسبات در این
                                                    تازه‌وارد از طریق تراشه‌ی Exynos 9825 انجام می‌شود که در
                                                    رده تراشه‌های 7 نانومتری قرار می‌گیرد و با سرعت بالای
                                                    خود، گلکسی نوت 10 را برای انجام کارهای بسیار سنگین
                                                    کاربردی کرده است. تراشه‌ی گرافیکی Mali-G76 هم در اجرای
                                                    بازی‌های سنگین و پردازش‌های گرافیکی، گلکسی نوت 10 را
                                                    سربلند خواهد بود. صفحه‌نمایش سوپر آمولد با رزولوشن 1080
                                                    در 2280 و قابلیت نمایش 401 پیکسل در هر اینچ، تجربه‌ی
                                                    تصویری شفاف و بسیار مطلوب را برای کاربران فراهم می‌کند.
                                                    نسخه 256 گیگابایتی گوشی گلکسی نوت 10 با 8 گیگابایت رم
                                                    عرضه شده است&nbsp; تا میزان مطلوبی از فضا و حافظه تصادفی
                                                    را در اختیار کاربر قرار دهد. حسگر اثرانگشت
                                                    زیرصفحه‌نمایش، حسگر فشارسنج و ژیروسکوپ تنها تعدادی از
                                                    امکانات این دستگاه قدرتمند است و کار را برای رقبای این
                                                    محصول بزرگ سخت کرده است. البته در این محصول خبری از
                                                    سنسور عنبیه چشم و خروجی 3.5 میلی‌متری صدا نیست که دلیل
                                                    آن را می‌توان در بزرگ شدن قاب و ظرافت در طراحی و ساخت
                                                    جست‌وجو کرد. گفتنی است، باتری این محصول از نوع غیرقابل
                                                    تعویض و لیتیوم‌یون با ظرفیت 3500 میلی‌آمپر ساعت است که
                                                    از فناوری‌های شارژ سریع و شارژ بی‌سیم پشتیبانی می‌کند.
                                                    این محصول قادر است دستگاه‌های دیگر را هم به‌صورت بی‌سیم
                                                    شارژ کند و از این طریق نقش یک پاوربانک را هم ایفا
                                                    کند.</p>
                                            </div>
                                            <a href="#" className="mask-handler">
                                                <span className="show-more">+ ادامه مطلب</span>
                                                <span className="show-less">- بستن</span>
                                            </a>
                                            <div className="shadow-box"></div>
                                        </div>
                                    </section>
                                    <section className="content-expert-stats">
                                        <div className="content-expert-evaluation">
                                            <div className="col-lg-4 col-md-4 col-xs-12 d-inline-block pr">
                                                <div className="positive">
                                                    <span className="plus">نقاط قوت</span>
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-plus-circle"></i>
                                                            صفحه نمایش OLED از نوع Infinity-O
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-plus-circle"></i>
                                                            طراحی فشرده
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-plus-circle"></i>
                                                            عمر بالای باتری
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-plus-circle"></i>
                                                            S-Pen با قابلیت های ویژه
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-plus-circle"></i>
                                                            اسپیکر با صدای بلند و استریو
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-xs-12 d-inline-block pr">
                                                <div className="negative">
                                                    <span className="neg">نقاط قوت</span>
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-minus-circle"></i>
                                                            نداشتن جک 3.5 میلی متری
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-minus-circle"></i>
                                                            نداشتن فوکس خودکار در دوربین فوق عریض
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="content-expert-articles">
                                        <section className="content-expert-article">
                                            <button className="content-expert-button">
                                                <span className="show-more"><i className="mdi mdi-plus"></i></span>
                                                <span className="show-less"><i className="mdi mdi-minus"></i></span>
                                            </button>
                                            <h3 className="content-expert-title">طراحی و ساخت؛ زیبای خاص</h3>
                                            <div className="content-expert-text">
                                                <p className="text-right">باید در همین ابتدا اعتراف کنیم
                                                    Galaxy Note 10 یک گوشی بسیار زیباست. البته شاید این
                                                    تعریف کمی شخصی به نظر برسد اما ظاهر این گوشی آن‌قدر
                                                    زیباست که جایی را برای گله و شکایت باقی نمی‌گذارد. در
                                                    این گوشی دوست‌داشتنی صفحه‌نمایش تقریباً تمام قاب جلویی
                                                    را پوشانده است. این گوشی ابعاد بزرگی دارد و با
                                                    صفحه‌نمایش 6.3 که تقریبا 0.2 اینچ بزرگتر از S10 است، در
                                                    گروه فبلت‌ها جای می‌گیرد. اگر به دنبال خرید این گوشی
                                                    هوشمند هستید، احتمالاً قبلاً هم گوشی بزرگی داشته‌اید و
                                                    اندازه آن برایتان آزاردهنده نخواهد بود. اولین راه‌حل
                                                    موفق برای ساده کردن فرمول زیبایی و کارایی بیشتر، تغییر
                                                    مکان حسگر اثرانگشت در گلکسی نوت 10 است. با توجه به امنیت
                                                    بالای این راه برای باز کردن گوشی، حذف آن چندان منطقی به
                                                    نظر نمی‌رسد. در این گوشی خبری از حسگر اثرانگشت روی قاب
                                                    جلویی نیست و در عوض این حسگر زیر صفحه‌نمایش قرار گرفته
                                                    است تا Galaxy Note 10 از همه نظر به گوشی مدرن تبدیل شود.
                                                    تفاوت دیگری که امسال گلکسی سری نوت با گلسی سری
                                                    S &nbsp;داشته اند محل قرار گرفتن دوربین سلفی آن ها است.
                                                    به طوری که دوربین سلفی در S10 در قسمت بالای سمت راست
                                                    قرار گرفته و در نوت 10 در مرکز بالای صفحه نمایش تعبیه
                                                    شده است.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-1.jpg"/>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="content-expert-article">
                                            <button className="content-expert-button">
                                                <span className="show-more"><i className="mdi mdi-plus"></i></span>
                                                <span className="show-less"><i className="mdi mdi-minus"></i></span>
                                            </button>
                                            <h3 className="content-expert-title">صفحه‌نمایش؛ همان خیره‌کننده‌ی
                                                همیشگی</h3>
                                            <div className="content-expert-text">
                                                <p className="text-right">مثل همیشه یکی از نقاط قوت گوشی
                                                    سری محصولات Galaxy Note صفحه‌نمایش آن‌هاست. فناوری Super
                                                    AMOLED به معنی تصاویر زنده و شفافیت خیره‌کننده در کنار
                                                    پشتیبانی از نمایش ویدئوهای HDR است. گلکسی نوت 10 از یک
                                                    صفحه نمایش 6.3 اینچی بهره می برد، که تقریبا تمام قاب
                                                    جلویی را پوشانده است. سامسونگ مدت ها است که برای
                                                    پرچمداران خود از صفحه نمایش هایی با لبه های منحنی شکل
                                                    استفاده می کند؛ کاری که با تولید S8 آغاز کرد و گوشی Note
                                                    10 هم از این قاعده مستثنی نیست. انحنای لبه‌ها باعث
                                                    می‌شود حس کنید فضای بسیار بیشتری در اختیار دارید. این
                                                    نمایشگر، تراکم پیکسلی فوق‌العاده 401 در هر اینچ دارد روی
                                                    نوت 10 قرار داده شده است؛ می‌توان این‌گونه در نظر گرفت
                                                    که سامسونگ احتمالاً استفاده از تعداد پیکسل بالاتر را به
                                                    علت مصرف باتری بیشتر و اندازه‌ی بزرگ‌تر را به علت
                                                    بزرگ‌ترشدن سایز گوشی کنار گذاشته است.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-2.jpg"/>
                                                </div>
                                                <p className="text-right">به دلیل O شکل بودن بریدگی قسمت
                                                    بالای آن، نام Infinity-O برای آن انتخاب شده است.
                                                    نمایشگرهای Infinity در واقع از ویژگی های صفحه نمایش های
                                                    سامسونگ است که بدون هیچ بریدگی یا Bezel تولید می شوند و
                                                    برای اولین بار با به کار گیری در گوشی های&nbsp; Galaxy
                                                    S8 و&nbsp; Galaxy S8+ معرفی شد.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-3.jpg"/>
                                                </div>
                                                <p className="text-right">نمایشگر نوت 10 هم از فناوری
                                                    همیشه روشن سود می‌برد که با استفاده از بخش تنظیمات حالا
                                                    می‌توانید شخصی‌سازی‌های بیشتری را برای آن در نظر بگیرید.
                                                    سامسونگ موفق شده است برای این گوشی نسبت صفحه‌نمایش به
                                                    بدنه 90.9 درصد را به دست آورد که برای یک گوشی امروزی هم
                                                    میزان بسیار مطلوبی به‌حساب می‌آید. تراز سفیدی مناسب، نور
                                                    کافی برای دیدن محتویات زیر نور‌های شدید، تراکم پیکسلی
                                                    بالا که هنگام دیدن تصویر یا خواندن متن کمک می‌کند تا
                                                    جزییات بیشتری را ببینید، از مشخصات نمایشگر نوت 10
                                                    هستند.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-4.jpg"/>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="content-expert-article">
                                            <button className="content-expert-button">
                                                <span className="show-more"><i className="mdi mdi-plus"></i></span>
                                                <span className="show-less"><i className="mdi mdi-minus"></i></span>
                                            </button>
                                            <h3 className="content-expert-title">سخت‌افزار، سیستم‌عامل و
                                                کارایی</h3>
                                            <div className="content-expert-text">
                                                <p className="text-right">چیپست اگزونوس 9825 از چیپست‌های
                                                    7 نانومتری سامسونگ در قلب اس نوت 10 قرار گرفته است.
                                                    چیپست 7 نانومتری به معنی قدرت بالا و مصرف بهینه باتری
                                                    گوشی است. هرساله سخت‌افزارهای نسل جدیدتر برای گوشی‌های
                                                    موبایل در نظر گرفته می‌شوند که این سخت‌افزار شامل چیپست
                                                    هم می‌شود. واضح است که چیپست نسل جدید سامسونگ بسیار سریع
                                                    است اما در عمل سرعت‌بالای آن را نمی‌توان انقلابی دانست.
                                                    سری‌های قبلی محصولات گلکسی سامسونگ که از تراشه اگزونوس
                                                    استفاده می‌کردند گاهی اوقات در زمان استفاده بسیار سنگین
                                                    خاموش می‌شدند. به نظر می‌رسد در گلکسی جدید به خاطر وجود
                                                    رم 8 گیگابیتی، خبری از این مشکل نباشد.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-5.jpg"/>
                                                </div>
                                                <p className="text-right">نتیجه‌ی این لیست، سخت‌افزاری است
                                                    که جای هیچ انتقادی را باقی نمی‌گذارد و در هر حالی بهترین
                                                    بازده ممکن را دارد. سامسونگ در هر حالتی بهترین استفاده‌ی
                                                    ممکن را از این سخت‌افزار کرده است. باید اطمینان داشته
                                                    باشیم وقتی این سخت‌افزار برای پردازش واقعیت افزوده،
                                                    فیلم‌برداری 2160 فریم بر ثانیه، تطبیق چهره و عنبیه برای
                                                    بازکردن قفل گوشی طراحی و ساخته شده؛ دیگر در مورد
                                                    بازی‌هایی که نهایتاً چند فریم خروجی دارند یا برنامه‌هایی
                                                    که مقدار کمی از رم را اشغال می‌کنند، همچنین اجرای
                                                    اندروید و رابط کاربری سامسونگ، هیچ مشکلی نخواهد داشت. پس
                                                    خیالتان راحت باشد که هیچ عملیاتی وجود ندارد که گلکسی نوت
                                                    10 از پس انجام دادن آن برنیاید یا در انجام دادن آن
                                                    کم‌کاری کند.</p>
                                                <div className="content-expert-img">
                                                    <img
                                                        src="assets/images/page-single-product/tab-content/note10-6.jpg"/>
                                                </div>
                                                <p className="text-right">اندازه بزرگ‌تر در بیشتر گوشی‌های
                                                    موبایل نوید باتری با ظرفیت بیشتر را می‌دهد؛ البته باتری
                                                    در گوشی نوت 10 تفاوت چشمگیری را به خود ندیده است و ظرفیت
                                                    آن برابر با 3500 میلی‌آمپر است که با توجه به چیپست مدرن
                                                    این گوشی باید تا مدت‌زمان مطلوبی انرژی را در خود نگه
                                                    دارد. البته رزولوشن بالای صفحه‌نمایش باعث شده است که
                                                    باتری به میزان بیشتری مصرف شود و از باتری گوشی انتظار
                                                    روشن نگه‌داشتن آن تا بیش از یک روز را نداشته باشیم. این
                                                    گوشی مانند پاوربانکی پرقدرت امکان شارژ بی‌سیم دیگر
                                                    دستگاه‌ها را دارد. اما این نکته را نباید فراموش کنیم که
                                                    گلکسی نوت 10 شارژ بی‌سیم گوشی‌های دیگر را با سرعت بسیار
                                                    بالا (با توان 9 واتی) انجام می‌دهد. همان‌طور که گفتیم
                                                    این گوشی می‌تواند دیگر گوشی‌ها و گجت‌های دارای فناوری
                                                    شارژ بی‌سیم را شارژ کند. یکی از ویژگی‌های خاص و البته
                                                    دوست‌داشتنی در مورد گوشی‌های سامسونگ امکان صفحه‌نمایش
                                                    همیشه روشن است. این امکان نوتیفیکیشن‌ها را بدون نیاز به
                                                    باز کردن گوشی برای کاربر به نمایش در می‌آورد.</p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Specifications" role="tabpanel"
                                     aria-labelledby="Specifications-tab">
                                    <article>
                                        <h2 className="params-headline">مشخصات فنی
                                            <span>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                        </h2>
                                        <section>
                                            <ul className="params-list">
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">ابعاد</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        7.9 × 71.8 × 151 میلی‌متر
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">توضیحات سیم کارت</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        سایز نانو (8.8 × 12.3 میلی‌متر)
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">وزن</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        168 گرم
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">ساختار بدنه</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        فلز و شیشه (محافظ گوریلا گلس روی قاب پشتی و جلویی + قاب فولادی)
                                                    </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul className="params-list">
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">تراشه</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        Exynos 9825 (7 nm) Chipset
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">نوع پردازنده</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        64 بیت
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">فرکانس پردازنده‌ی مرکزی</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        2.73, 2.4 و 1.9 گیگاهرتز
                                                    </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul className="params-list">
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">حافظه داخلی</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        256 گیگابایت
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">مقدار RAM</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        8 گیگابایت
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                                    <span
                                                                        className="block">پشتیبانی از کارت حافظه جانبی</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        ندارد
                                                    </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">حداکثر ظرفیت کارت حافظه</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                    <span className="block">
                                                        1 ترابایت
                                                    </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <ul className="params-list">
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">صفحه نمایش رنگی</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                        <span className="block"> بله </span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">صفحه نمایش لمسی</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                        <span className="block">بله</span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">فناوری</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                        <span className="block">Dynamic AMOLED</span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">بازه‌ی اندازه صفحه نمایش</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                        <span className="block">6.0 اینچ و بزرگتر</span>
                                                    </div>
                                                </li>
                                                <li className="params-list-item">
                                                    <div className="params-list-key">
                                                        <span className="block">اندازه</span>
                                                    </div>
                                                    <div className="params-list-value">
                                                        <span className="block">6.3 اینچ</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>
                                    </article>
                                </div>
                                <div className="tab-pane fade" id="User-comments" role="tabpanel"
                                     aria-labelledby="User-comments-tab">
                                    <div className="comments">
                                        <h2 className="params-headline">امتیاز کاربران به
                                            <span>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                        </h2>
                                        <div className="comments-summary">
                                            <div className="col-lg-6 col-md-6 col-xs-12 pr">
                                                <div className="comments-summary-box">
                                                    <ul className="comments-item-rating">
                                                        <li>
                                                            <span className="cell-title">کیفیت ساخت:</span>
                                                            <span className="cell-value">خوب</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                                        <span
                                                                            className="cell-title">ارزش خرید به نسبت قیمت:</span>
                                                            <span className="cell-value">خوب</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span className="cell-title">نوآوری:</span>
                                                            <span className="cell-value">خوب</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"
                                                                     style={{width: '70%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                                        <span
                                                                            className="cell-title">امکانات و قابلیت ها:</span>
                                                            <span className="cell-value">متوسط</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"
                                                                     style={{width: '65%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span className="cell-title">سهولت استفاده:</span>
                                                            <span className="cell-value">خوب</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"
                                                                     style={{width: '75%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span className="cell-title">طراحی و ظاهر:</span>
                                                            <span className="cell-value">خوب</span>
                                                            <div className="rating-general">
                                                                <div className="rating-value"></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xs-12 pr">
                                                <div className="comments-summary-note">
                                                    <h6>شما هم می‌توانید در مورد این کالا نظر بدهید.</h6>
                                                    <p>
                                                        برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود
                                                        شوید. اگر این محصول را قبلا از دیجی‌کالا خریده
                                                        باشید،
                                                        نظر
                                                        شما به عنوان مالک محصول ثبت خواهد شد.
                                                    </p>
                                                    <a href="#" className="btn-add-comment btn btn-secondary">افزودن
                                                        نظر جدید</a>
                                                </div>
                                            </div>
                                            <div className="product-comment-list">
                                                <ul className="comment-list">
                                                    <li>
                                                        <div className="col-lg-3 pr">
                                                            <section>
                                                                <div className="comments-user-shopping">حسن
                                                                    شجاعی
                                                                    <div className="cell-date">
                                                                        در تاریخ ۱۸ فروردین ۱۳۹۹
                                                                    </div>
                                                                    <div className="message-light"><i
                                                                        className="fa fa-thumbs-o-up"></i>خرید
                                                                        این محصول را توصیه می‌کنم
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                        <div className="col-lg-9 pl">
                                                            <div className="article">
                                                                <ul className="comment-text">
                                                                    <div className="header">
                                                                        <div>بهتر از آیفون</div>
                                                                        <div className="product-rate pl">
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                        </div>
                                                                        <p>در کل سامسونگ کاربردی تر از آیفون
                                                                            هست ولی از نظر کیفیت تصویر و
                                                                            سرعت آیفون بهتره و کلاس!</p>
                                                                    </div>
                                                                    <div className="comments-evaluation">
                                                                        <div
                                                                            className="comments-evaluation-positive">
                                                                            <span>نقاط قوت</span>
                                                                            <ul>
                                                                                <li>
                                                                                    سبک
                                                                                </li>
                                                                                <li>
                                                                                    سرعت پردازش بالا
                                                                                </li>
                                                                                <li>
                                                                                    خوش دست
                                                                                </li>
                                                                                <li>
                                                                                    صفحه نمایش عالی
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div
                                                                            className="comments-evaluation-negative">
                                                                            <span>نقاط قوت</span>
                                                                            <ul>
                                                                                <li>
                                                                                    قیمت زیاد
                                                                                </li>
                                                                                <li>
                                                                                    باطری ضعیف
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="footer">
                                                                            <div className="comments-likes">آیا
                                                                                این نظر برایتان مفید بود؟
                                                                                <button
                                                                                    className="btn-like js-comment-like"
                                                                                    type="submit">بله
                                                                                    <span
                                                                                        className="count">8</span>
                                                                                </button>
                                                                                <button
                                                                                    className="btn-like js-comment-dislike"
                                                                                    type="submit">خیر
                                                                                    <span
                                                                                        className="count">4</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="col-lg-3 pr">
                                                            <section>
                                                                <div className="comments-user-shopping">جلال
                                                                    بهرامی راد
                                                                    <div className="cell-date">
                                                                        در تاریخ ۱۹ فروردین ۱۳۹۹
                                                                    </div>
                                                                    <div className="message-light"><i
                                                                        className="fa fa-thumbs-o-up"></i>خرید
                                                                        این محصول را توصیه می‌کنم
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                        <div className="col-lg-9 pl">
                                                            <div className="article">
                                                                <ul className="comment-text">
                                                                    <div className="header">
                                                                        <div>عالی و صدرصد بهتر از اپل</div>
                                                                        <div className="product-rate pl">
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                            <i className="fa fa-star active"></i>
                                                                        </div>
                                                                        <p>عالییه بنظرمن اونایی که میرن پول
                                                                            گوشی های ایفون با اون قیمت رو
                                                                            میدن با استفاده از این گوشی باید
                                                                            نظرشونو عوض کنن</p>
                                                                    </div>
                                                                    <div className="comments-evaluation">
                                                                        <div
                                                                            className="comments-evaluation-positive">
                                                                            <span>نقاط قوت</span>
                                                                            <ul>
                                                                                <li>
                                                                                    سبک
                                                                                </li>
                                                                                <li>
                                                                                    سرعت پردازش بالا
                                                                                </li>
                                                                                <li>
                                                                                    خوش دست
                                                                                </li>
                                                                                <li>
                                                                                    صفحه نمایش عالی
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div
                                                                            className="comments-evaluation-negative">
                                                                            <span>نقاط قوت</span>
                                                                            <ul>
                                                                                <li>
                                                                                    قیمت زیاد
                                                                                </li>
                                                                                <li>
                                                                                    باطری ضعیف
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="footer">
                                                                            <div className="comments-likes">آیا
                                                                                این نظر برایتان مفید بود؟
                                                                                <button
                                                                                    className="btn-like js-comment-like"
                                                                                    type="submit">بله
                                                                                    <span
                                                                                        className="count">8</span>
                                                                                </button>
                                                                                <button
                                                                                    className="btn-like js-comment-dislike"
                                                                                    type="submit">خیر
                                                                                    <span
                                                                                        className="count">4</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="question-and-answer" role="tabpanel"
                                     aria-labelledby="question-and-answer-tab">
                                    <div className="faq">
                                        <h2 className="params-headline">پرسش و پاسخ
                                            <span>پرسش خود را در مورد محصول مطرح نمایید</span>
                                        </h2>
                                        <form action="#" className="form-faq">
                                            <div className="form-faq-row mt-4">
                                                <div className="form-faq-col">
                                                    <div className="ui-textarea">
                                                                    <textarea name="qa" title="متن سوال"
                                                                              className="ui-textarea-field"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-faq-row mt-4">
                                                <div className="form-faq-col form-faq-col-submit">
                                                    <button className="btn-tertiary btn btn-secondary"
                                                            type="submit">ثبت پرسش
                                                    </button>
                                                    <div className="form-faq-col-agreement d-inline-block mr-5">
                                                        <div className="form-auth-row">
                                                            <label htmlFor="#" className="ui-checkbox mt-1">
                                                                <input type="checkbox" value="1"
                                                                       name="login" id="remember"/>
                                                                <span className="ui-checkbox-check"></span>
                                                            </label>
                                                            <label htmlFor="remember" className="remember-me mr-0">اولین
                                                                پاسخی که به پرسش من داده شد، از طریق ایمیل
                                                                به من اطلاع دهید. </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div id="product-questions-list">
                                            <div className="questions-list">
                                                <ul className="faq-list">
                                                    <li className="is-question">
                                                        <div className="section">
                                                            <div className="faq-header">
                                                                <span className="icon-faq">?</span>
                                                                <p className="h5">
                                                                    پرسش :
                                                                    <span>جلال</span>
                                                                </p>
                                                            </div>
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                                                ستون و سطرآنچنان که لازم است</p>
                                                            <div className="faq-date">
                                                                <em>۱۴ فروردین ۱۳۹۹</em>
                                                            </div>
                                                            <a href="#" className="js-add-answer-btn">به این
                                                                پرسش پاسخ
                                                                دهید </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="questions-list answer-questions">
                                                <ul className="faq-list">
                                                    <li className="is-question">
                                                        <div className="section">
                                                            <div className="faq-header">
                                                                            <span className="icon-faq"><i
                                                                                className="mdi mdi-storefront"></i></span>
                                                                <p className="h5">
                                                                    پاسخ فروشنده :
                                                                    <span>حسن</span>
                                                                </p>
                                                            </div>
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                                                ستون و سطرآنچنان که لازم است و برای شرایط
                                                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                                هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                            <div className="faq-date">
                                                                <em>۱۴ فروردین ۱۳۹۹</em>
                                                            </div>
                                                            <a href="#" className="js-add-answer-btn">به این
                                                                پرسش پاسخ
                                                                دهید </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="questions-list">
                                                <ul className="faq-list">
                                                    <li className="is-question">
                                                        <div className="section">
                                                            <div className="faq-header">
                                                                <span className="icon-faq">?</span>
                                                                <p className="h5">
                                                                    پرسش :
                                                                    <span>اشکان</span>
                                                                </p>
                                                            </div>
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                                                ستون و سطرآنچنان که لازم است</p>
                                                            <div className="faq-date">
                                                                <em>۱۴ فروردین ۱۳۹۹</em>
                                                            </div>
                                                            <a href="#" className="js-add-answer-btn">به این
                                                                پرسش پاسخ
                                                                دهید </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="questions-list answer-questions">
                                                <ul className="faq-list">
                                                    <li className="is-question">
                                                        <div className="section">
                                                            <div className="faq-header">
                                                                            <span className="icon-faq"><i
                                                                                className="mdi mdi-storefront"></i></span>
                                                                <p className="h5">
                                                                    پاسخ فروشنده :
                                                                    <span>جواد</span>
                                                                </p>
                                                            </div>
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                                                ستون و سطرآنچنان که لازم است و برای شرایط
                                                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                                هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                            <div className="faq-date">
                                                                <em>۱۴ فروردین ۱۳۹۹</em>
                                                            </div>
                                                            <a href="#" className="js-add-answer-btn">به این
                                                                پرسش پاسخ
                                                                دهید </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="questions-list">
                                                <ul className="faq-list">
                                                    <li className="is-question">
                                                        <div className="section">
                                                            <div className="faq-header">
                                                                <span className="icon-faq">?</span>
                                                                <p className="h5">
                                                                    پرسش :
                                                                    <span>رضا</span>
                                                                </p>
                                                            </div>
                                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                                از صنعت چاپ و با استفاده از طراحان گرافیک
                                                                است. چاپگرها و متون بلکه روزنامه و مجله در
                                                                ستون و سطرآنچنان که لازم است</p>
                                                            <div className="faq-date">
                                                                <em>۱۴ فروردین ۱۳۹۹</em>
                                                            </div>
                                                            <a href="#" className="js-add-answer-btn">به این
                                                                پرسش پاسخ
                                                                دهید </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {};

export default Tabs;
