const products = [
    [
        {
            imgUrl: "/image/curtians/img1.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img2.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img3.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، غمیدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img4.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل زریدار، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img5.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت نحی، جالی ډیزاین ترکی مریدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img7.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کرفټ، خال، جالی ډیزاین ترکی ګلدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img8.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کرفټ،  جالی ډیزاین ترکی ګلدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img9.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img10.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی پوپکدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img11.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت نخی، جالی ډیزاین ترکی نخی غمیدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img12.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل ګلدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img13.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت قالینی، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img14.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل ګلدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img15.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت نخی، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img16.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ بخمل، جالی ډیزاین ترکی ګلدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img17.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پرکدار رینګ، رخت ساټن، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img18.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ بخمل، جالی ډیزاین ترکی ګلدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img19.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت ډبل ساټن ډیزاینداره،  جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img20.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ ډبل پرکداره، رخت بخمل، غمی، جالی ډیزاین ترکی ګلدار، مختلف رنګونه" 
        },
       
        {
            imgUrl: "/image/curtians/img22.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img24.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت قالینی، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img25.jpg",
            title: "پرده",
            discription: " پردی ډیزاین پلیټ رینګ، رخت قالینی، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img26.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت قالینی، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img27.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img28.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img29.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img30.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img31.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، غمیدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img32.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ګلدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img33.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img34.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img37.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت کریپټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img38.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، غمیدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img39.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، غمیدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img40.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، غمیدار سیټ، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img41.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت بخمل، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img42.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img43.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img44.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت زریدار سیټ، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img45.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری سیټ، جالی ډیزاین ترکی نخی غمیدار، مختلف رنګونه" 
        },
        {
            imgUrl: "/image/curtians/img46.jpg",
            title: "پرده",
            discription: "  پردی ډیزاین پلیټ رینګ، رخت لیزری، جالی ډیزاین ترکی نخی، مختلف رنګونه" 
        },
    ],
    [
        {
            imgUrl: "/image/mattress/img1.jpg",
            title: "توشک",
            discription: "ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img2.jpg",
            title: "توشک",
            discription: "ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img3.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img4.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img5.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img6.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img7.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img8.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img9.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img10.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img11.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img12.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img13.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img14.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img15.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img16.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img17.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img18.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img19.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img20.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img21.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img22.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ډبل فیفینګ، زیبداره، مختلف رنکونه" 
        },
        {
            imgUrl: "/image/mattress/img23.jpg",
            title: "توشک",
            discription: " ډیزاین بکسه ساده فیفینګ، زیبداره، مختلف رنکونه" 
        },

    ],
    [
        {
            imgUrl: "/image/bed/img1.jpg",
            title: "سرتختی",
            discription: "ډیزاین سلمه، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img2.jpg",
            title: "سرتختی",
            discription: "ډیزاین سلمه، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img3.jpg",
            title: "سرتختی",
            discription: "ډیزاین C1, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img4.jpg",
            title: "سرتختی",
            discription: "ډیزاین C2، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img5.jpg",
            title: "سرتختی",
            discription: "ډیزاین C3, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img8.jpg",
            title: "سرتختی",
            discription: "ډیزاین C6, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img9.jpg",
            title: "سرتختی",
            discription: "ډیزاین A+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img10.jpg",
            title: "سرتختی",
            discription: "ډیزاین B+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img11.jpg",
            title: "سرتختی",
            discription: "ډیزاین C8, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img12.jpg",
            title: "سرتختی",
            discription: "ډیزاین C9, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img13.jpg",
            title: "سرتختی",
            discription: "ډیزاین C10, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img14.jpg",
            title: "سرتختی",
            discription: "ډیزاین A2, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img15.jpg",
            title: "سرتختی",
            discription: "ډیزاین A3, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img17.jpg",
            title: "سرتختی",
            discription: "ډیزاین A4, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img18.jpg",
            title: "سرتختی",
            discription: "ډیزاین A5, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img19.jpg",
            title: "سرتختی",
            discription: "ډیزاین A1, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img20.jpg",
            title: "سرتختی",
            discription: "ډیزاین A6, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img21.jpg",
            title: "سرتختی",
            discription: "ډیزاین B3, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img22.jpg",
            title: "سرتختی",
            discription: "ډیزاین C+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img23.jpg",
            title: "سرتختی",
            discription: "ډیزاین D+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img24.jpg",
            title: "سرتختی",
            discription: "ډیزاین A5, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img25.jpg",
            title: "سرتختی",
            discription: "ډیزاین A6, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img26.jpg",
            title: "سرتختی",
            discription: "ډیزاین E+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img27.jpg",
            title: "سرتختی",
            discription: "ډیزاین A7, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img28.jpg",
            title: "سرتختی",
            discription: "ډیزاین مریداره کمبل سیټ، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img29.jpg",
            title: "سرتختی",
            discription: "ډیزاین A1+, لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img30.jpg",
            title: "سرتختی",
            discription: "ډیزاین کارټندار تیار چینایی، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img31.jpg",
            title: "سرتختی",
            discription: "ډیزاین کارټندار تیار چینایی، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img32.jpg",
            title: "سرتختی",
            discription: "ډیزاین کارټندار تیار چینایی، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img33.jpg",
            title: "سرتختی",
            discription: "ډیزاین کارټندار تیار چینایی، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
        {
            imgUrl: "/image/bed/img34.jpg",
            title: "سرتختی",
            discription: "ډیزاین کارټندار تیار چینایی، لاسی کار مختلف رنګونه او ډیزاینونه ستاسی په خوښه" 
        },
    ],
    [
        {
            imgUrl: "/image/pillows/img1.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img2.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img3.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img4.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img5.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img6.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img7.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img8.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img9.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img10.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img11.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img12.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img13.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img14.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img15.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img16.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img17.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img18.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img19.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img20.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img21.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img22.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img23.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img24.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img25.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
        {
            imgUrl: "/image/pillows/img26.jpg",
            title: "تکیه",
            discription: " ډیزان او جوړښت ستاسی په فرمایش." 
        },
    ],
    [
        {
            imgUrl: "/image/Office/img1.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
        {
            imgUrl: "/image/Office/img2.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
        {
            imgUrl: "/image/Office/img3.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
        {
            imgUrl: "/image/Office/img4.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
        {
            imgUrl: "/image/Office/img5.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
        {
            imgUrl: "/image/Office/img6.jpg",
            title: "دفتری پردی",
            discription: " هر رنګه ډیزاین ستاسی په خوښه"
        },
    ],
    [
        {
            imgUrl: "/image/tools/img1.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img2.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img3.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img4.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img5.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img6.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img7.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img8.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img9.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img10.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img11.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img12.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        },
        {
            imgUrl: "/image/tools/img13.jpg",
            title: " اوزار",
            discription: " هر رنګه ډیزاین موجود دې"
        }

    ],

]

export default products;