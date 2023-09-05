const cities =
    [
        {
            "name": "Москва",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.755826,37.617300"
        },
        {
            "name": "Абрамцево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.214713,37.966186"
        },
        {
            "name": "Алабино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.524052,36.982281"
        },
        {
            "name": "Апрелевка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.548277,37.059156"
        },
        {
            "name": "Архангельское",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.787816,37.284601"
        },
        {
            "name": "Ашитково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.435134,38.586315"
        },
        {
            "name": "Бакшеево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.711803,39.873214"
        },
        {
            "name": "Балашиха",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.798190,37.967987"
        },
        {
            "name": "Барыбино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.264618,37.886992"
        },
        {
            "name": "Белозёрский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "59.917894,37.387585"
        },
        {
            "name": "Белоомут",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.983333,39.033333"
        },
        {
            "name": "Белые Столбы",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.329054,37.852525"
        },
        {
            "name": "Бородино (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.529267,35.823394"
        },
        {
            "name": "Бронницы",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.419519,38.262814"
        },
        {
            "name": "Быково (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.622277,38.064129"
        },
        {
            "name": "Валуево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.571135,37.355338"
        },
        {
            "name": "Вербилки",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.530332,37.597549"
        },
        {
            "name": "Верея",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.348815,36.180891"
        },
        {
            "name": "Видное",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.547089,37.698601"
        },
        {
            "name": "Внуково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.599648,37.271234"
        },
        {
            "name": "Вождь Пролетариата",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.433592,39.301076"
        },
        {
            "name": "Волоколамск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.036325,35.957313"
        },
        {
            "name": "Вороново",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.323000,37.160275"
        },
        {
            "name": "Воскресенск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.323842,38.681513"
        },
        {
            "name": "Восточный",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.123035,101.172850"
        },
        {
            "name": "Востряково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.382257,37.814780"
        },
        {
            "name": "Высоковск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.318124,36.557313"
        },
        {
            "name": "Голицыно (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.612359,36.977930"
        },
        {
            "name": "Деденево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.241399,37.520625"
        },
        {
            "name": "Дедовск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.862841,37.121705"
        },
        {
            "name": "Дзержинский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.626012,37.849191"
        },
        {
            "name": "Дмитров",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.342770,37.528842"
        },
        {
            "name": "Долгопрудный",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.947064,37.499276"
        },
        {
            "name": "Домодедово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.410307,37.902451"
        },
        {
            "name": "Дорохово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.553058,36.375542"
        },
        {
            "name": "Дрезна",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.742368,38.844185"
        },
        {
            "name": "Дубки",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "43.021342,46.838237"
        },
        {
            "name": "Дубна",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.732020,37.166897"
        },
        {
            "name": "Егорьевск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.385141,39.032322"
        },
        {
            "name": "Железнодорожный (Московск.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.737376,38.009539"
        },
        {
            "name": "Жилево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.984217,38.020460"
        },
        {
            "name": "Жуковка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.741615,37.257828"
        },
        {
            "name": "Жуковский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.597491,38.113256"
        },
        {
            "name": "Загорск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.324232,38.145211"
        },
        {
            "name": "Загорянский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.926317,37.913923"
        },
        {
            "name": "Запрудная",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.560466,37.393123"
        },
        {
            "name": "Зарайск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.758532,38.881787"
        },
        {
            "name": "Звенигород",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.731352,36.855203"
        },
        {
            "name": "Зеленоград",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.987153,37.202151"
        },
        {
            "name": "Ивантеевка (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.975927,37.919520"
        },
        {
            "name": "Икша",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.173634,37.499745"
        },
        {
            "name": "Ильинский (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.623920,38.105840"
        },
        {
            "name": "Истра",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.923093,36.866065"
        },
        {
            "name": "Калининец",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.559667,36.981779"
        },
        {
            "name": "Кашира",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.843831,38.186221"
        },
        {
            "name": "Керва",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.603282,39.575112"
        },
        {
            "name": "Климовск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.359093,37.521042"
        },
        {
            "name": "Клин",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.333382,36.730447"
        },
        {
            "name": "Клязьма",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.144457,40.081446"
        },
        {
            "name": "Кожино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.616165,36.246568"
        },
        {
            "name": "Кокошкино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.600418,37.173974"
        },
        {
            "name": "Коломна",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.093752,38.768862"
        },
        {
            "name": "Колюбакино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.669132,36.532193"
        },
        {
            "name": "Королев",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.931680,37.851855"
        },
        {
            "name": "Косино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.718824,37.858088"
        },
        {
            "name": "Котельники",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.653204,37.861322"
        },
        {
            "name": "Красково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.657681,37.982960"
        },
        {
            "name": "Красноармейск (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.106091,38.139242"
        },
        {
            "name": "Красногорск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.826331,37.326297"
        },
        {
            "name": "Краснозаводск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.444787,38.230880"
        },
        {
            "name": "Краснознаменск (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.592985,37.042257"
        },
        {
            "name": "Красный Ткач",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "59.135445,37.900881"
        },
        {
            "name": "Крюково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.980146,37.173674"
        },
        {
            "name": "Кубинка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.563490,36.702446"
        },
        {
            "name": "Купавна",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.806548,38.178496"
        },
        {
            "name": "Куровское",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.579146,38.920626"
        },
        {
            "name": "Лесной Городок",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.631860,37.211521"
        },
        {
            "name": "Ликино-Дулево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.704698,38.957595"
        },
        {
            "name": "Лобня",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.017231,37.485264"
        },
        {
            "name": "Лопатинский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "52.600983,45.782074"
        },
        {
            "name": "Лосино-Петровский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.868313,38.197662"
        },
        {
            "name": "Лотошино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.232053,35.642812"
        },
        {
            "name": "Лукино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.486394,37.363953"
        },
        {
            "name": "Луховицы",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.940244,39.027959"
        },
        {
            "name": "Лыткарино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.579537,37.912039"
        },
        {
            "name": "Львовский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.324580,37.524391"
        },
        {
            "name": "Люберцы",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.686462,37.898156"
        },
        {
            "name": "Малаховка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.645303,38.011451"
        },
        {
            "name": "Михайловское",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "57.061057,28.919390"
        },
        {
            "name": "Михнево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.124900,37.950150"
        },
        {
            "name": "Можайск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.504376,36.024595"
        },
        {
            "name": "Монино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.842684,38.187122"
        },
        {
            "name": "Московский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.598647,37.351149"
        },
        {
            "name": "Муханово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.508574,38.323465"
        },
        {
            "name": "Мытищи",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.919847,37.765498"
        },
        {
            "name": "Нарофоминск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.391624,36.724943"
        },
        {
            "name": "Нахабино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.845567,37.170791"
        },
        {
            "name": "Некрасовка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.682827,37.944129"
        },
        {
            "name": "Немчиновка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.719098,37.363169"
        },
        {
            "name": "Новобратцевский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.852331,37.383549"
        },
        {
            "name": "Новоподрезково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.936512,37.352165"
        },
        {
            "name": "Ногинск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.876116,38.466659"
        },
        {
            "name": "Обухово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.831588,38.280077"
        },
        {
            "name": "Одинцово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.673374,37.281857"
        },
        {
            "name": "Ожерелье",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.800703,38.267614"
        },
        {
            "name": "Озеры",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.858974,38.545531"
        },
        {
            "name": "Октябрьский (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.610516,37.972661"
        },
        {
            "name": "Опалиха",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.817846,37.246021"
        },
        {
            "name": "Орехово-Зуево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.803435,38.966790"
        },
        {
            "name": "Павловский Посад",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.775803,38.653292"
        },
        {
            "name": "Первомайский (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.535761,37.163255"
        },
        {
            "name": "Пески (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.218275,38.768144"
        },
        {
            "name": "Пироговский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.982156,37.743345"
        },
        {
            "name": "Подольск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.431245,37.545765"
        },
        {
            "name": "Полушкино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.120604,40.127128"
        },
        {
            "name": "Правдинский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.059879,37.868283"
        },
        {
            "name": "Привокзальный",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "58.875833,60.729444"
        },
        {
            "name": "Пролетарский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "50.789025,35.774830"
        },
        {
            "name": "Протвино (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.875414,37.205279"
        },
        {
            "name": "Пушкино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.987833,37.841177"
        },
        {
            "name": "Пущино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.839577,37.625892"
        },
        {
            "name": "Раменское",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.568573,38.221269"
        },
        {
            "name": "Реутов",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.761758,37.861302"
        },
        {
            "name": "Решетниково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.447502,36.558756"
        },
        {
            "name": "Родники (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.651694,38.065221"
        },
        {
            "name": "Рошаль",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.658370,39.865350"
        },
        {
            "name": "Рублево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.813617,37.379565"
        },
        {
            "name": "Руза",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.701632,36.193317"
        },
        {
            "name": "Салтыковка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "52.117584,44.073139"
        },
        {
            "name": "Северный",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.933085,37.547649"
        },
        {
            "name": "Сергиев Посад",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.324232,38.145211"
        },
        {
            "name": "Серебряные Пруды",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.469126,38.720103"
        },
        {
            "name": "Серпухов",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.917956,37.422996"
        },
        {
            "name": "Солнечногорск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.185204,36.977617"
        },
        {
            "name": "Солнцево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.646920,37.392808"
        },
        {
            "name": "Софрино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.136878,37.927304"
        },
        {
            "name": "Старая Купавна",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.806548,38.178496"
        },
        {
            "name": "Старбеево",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.897718,37.451063"
        },
        {
            "name": "Ступино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.904044,38.080351"
        },
        {
            "name": "Сходня",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.950000,37.300000"
        },
        {
            "name": "Талдом",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.726860,37.517472"
        },
        {
            "name": "Текстильщик",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "57.018720,40.950544"
        },
        {
            "name": "Темпы",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.634120,37.298095"
        },
        {
            "name": "Томилино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.661951,37.950316"
        },
        {
            "name": "Троицк",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "54.074757,61.567051"
        },
        {
            "name": "Туголесский Бор",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.555949,39.800164"
        },
        {
            "name": "Тучково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.600958,36.467978"
        },
        {
            "name": "Уваровка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.527201,35.606082"
        },
        {
            "name": "Удельная",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.634073,38.051218"
        },
        {
            "name": "Успенское",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "44.831259,41.403387"
        },
        {
            "name": "Фирсановка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.958306,37.245286"
        },
        {
            "name": "Фрязино",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.960260,38.044144"
        },
        {
            "name": "Фряново",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.134202,38.435911"
        },
        {
            "name": "Химки",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.894055,37.443949"
        },
        {
            "name": "Хотьково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.255692,37.989136"
        },
        {
            "name": "Черкизово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.966204,37.795960"
        },
        {
            "name": "Черноголовка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.009624,38.385309"
        },
        {
            "name": "Черусти",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.546041,40.008474"
        },
        {
            "name": "Чехов",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.152621,37.460476"
        },
        {
            "name": "Шарапово",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.583826,37.175894"
        },
        {
            "name": "Шатура",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.575960,39.530068"
        },
        {
            "name": "Шатурторф",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.567644,39.418331"
        },
        {
            "name": "Шаховская",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.031720,35.515908"
        },
        {
            "name": "Шереметьевский",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.988464,37.492631"
        },
        {
            "name": "Щелково",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.917038,38.036935"
        },
        {
            "name": "Щербинка",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.500558,37.557320"
        },
        {
            "name": "Электрогорск",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.875143,38.782330"
        },
        {
            "name": "Электросталь",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.783553,38.455161"
        },
        {
            "name": "Электроугли",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.715611,38.209320"
        },
        {
            "name": "Юбилейный (Московская обл.)",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "55.938130,37.843030"
        },
        {
            "name": "Яхрома",
            "district_id": 1,
            "region_id": 80,
            "coordinates": "56.290447,37.479973"
        },
        {
            "name": "Санкт-Петербург",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.934280,30.335099"
        },
        {
            "name": "Александровская",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.733353,30.341211"
        },
        {
            "name": "Бокситогорск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.470853,33.848729"
        },
        {
            "name": "Большая Ижора",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.935197,29.572297"
        },
        {
            "name": "Будогощь",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.283274,32.459600"
        },
        {
            "name": "Вознесенье",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "61.016287,35.485856"
        },
        {
            "name": "Волосово",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.443015,29.488560"
        },
        {
            "name": "Волхов",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.911796,32.352334"
        },
        {
            "name": "Всеволожск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.009861,30.660640"
        },
        {
            "name": "Выборг",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.713953,28.757157"
        },
        {
            "name": "Вырица",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.405163,30.326843"
        },
        {
            "name": "Высоцк",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.625186,28.568911"
        },
        {
            "name": "Гатчина",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.562463,30.106466"
        },
        {
            "name": "Дружная Горка",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.282354,30.129235"
        },
        {
            "name": "Дубровка",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "55.718581,37.681408"
        },
        {
            "name": "Ефимовский",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.498845,34.669757"
        },
        {
            "name": "Зеленогорск (Ленинградская обл.)",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.196715,29.700692"
        },
        {
            "name": "Ивангород",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.371564,28.218812"
        },
        {
            "name": "Каменногорск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.946427,29.134832"
        },
        {
            "name": "Кикерино",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.465181,29.623753"
        },
        {
            "name": "Кингисепп",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.375960,28.604339"
        },
        {
            "name": "Кириши",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.446054,32.015188"
        },
        {
            "name": "Кировск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "67.610736,33.672401"
        },
        {
            "name": "Кобринское",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.423892,30.122529"
        },
        {
            "name": "Колпино",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.761761,30.578897"
        },
        {
            "name": "Коммунар",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.627631,30.416648"
        },
        {
            "name": "Коммунар",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.627631,30.416648"
        },
        {
            "name": "Кронштадт",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.995930,29.765545"
        },
        {
            "name": "Лисий Нос",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.014381,30.006076"
        },
        {
            "name": "Лодейное Поле",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.730259,33.549417"
        },
        {
            "name": "Ломоносов",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.910701,29.735961"
        },
        {
            "name": "Луга",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "58.740819,29.850590"
        },
        {
            "name": "Павловск (Ленинградская обл.)",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.681198,30.444376"
        },
        {
            "name": "Парголово",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.078373,30.290846"
        },
        {
            "name": "Петродворец",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.884500,29.885176"
        },
        {
            "name": "Пикалёво",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.515331,34.186662"
        },
        {
            "name": "Подпорожье",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.915184,34.176541"
        },
        {
            "name": "Приозерск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "61.039019,30.134110"
        },
        {
            "name": "Пушкин",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.717593,30.406004"
        },
        {
            "name": "Светогорск",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "61.108075,28.854665"
        },
        {
            "name": "Сертолово",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.144415,30.193843"
        },
        {
            "name": "Сестрорецк",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "60.101453,29.957360"
        },
        {
            "name": "Сланцы",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.111171,28.133704"
        },
        {
            "name": "Сосновый Бор",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.869673,29.085648"
        },
        {
            "name": "Тихвин",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.644386,33.541032"
        },
        {
            "name": "Тосно",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.540395,30.889671"
        },
        {
            "name": "Шлиссельбург",
            "district_id": 3,
            "region_id": 81,
            "coordinates": "59.935347,31.029042"
        },
        {
            "name": "Адыгейск",
            "district_id": 2,
            "region_id": 2,
            "coordinates": "44.881106,39.194619"
        },
        {
            "name": "Майкоп (Адыгея)",
            "district_id": 2,
            "region_id": 2,
            "coordinates": "44.598411,40.108087"
        },
        {
            "name": "Акташ",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.311110,87.599170"
        },
        {
            "name": "Акутиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.426445,84.450805"
        },
        {
            "name": "Алейск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.493459,82.780614"
        },
        {
            "name": "Алтайский",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.793630,82.675860"
        },
        {
            "name": "Баево",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.265496,80.765183"
        },
        {
            "name": "Барнаул",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.354779,83.769783"
        },
        {
            "name": "Белово (Алтайский край)",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.954007,82.257229"
        },
        {
            "name": "Белокуриха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.994825,84.993556"
        },
        {
            "name": "Белоярск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.459444,83.891389"
        },
        {
            "name": "Бийск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.507275,85.147200"
        },
        {
            "name": "Благовещенск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.272776,127.540402"
        },
        {
            "name": "Боровлянка",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.632805,84.439693"
        },
        {
            "name": "Бурла",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.334785,78.340708"
        },
        {
            "name": "Бурсоль",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.172854,78.471424"
        },
        {
            "name": "Быстрый Исток",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.369946,84.382290"
        },
        {
            "name": "Волчиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "56.827778,60.004167"
        },
        {
            "name": "Горно-Алтайск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.942186,85.971936"
        },
        {
            "name": "Горняк",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.998831,81.467795"
        },
        {
            "name": "Ельцовка",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "55.064554,82.989352"
        },
        {
            "name": "Залесово",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.998441,84.769990"
        },
        {
            "name": "Заринск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.727380,84.926507"
        },
        {
            "name": "Заток",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "46.066254,30.452837"
        },
        {
            "name": "Змеиногорск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.154835,82.192954"
        },
        {
            "name": "Камень-на-Оби",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.781140,81.313461"
        },
        {
            "name": "Ключи (Алтайский край)",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.253061,79.163538"
        },
        {
            "name": "Кош-Агач",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "49.995829,88.675490"
        },
        {
            "name": "Красногорское (Алтайский край)",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.293402,86.185124"
        },
        {
            "name": "Краснощеково",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.666137,82.756927"
        },
        {
            "name": "Кулунда",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.559973,78.929670"
        },
        {
            "name": "Кытманово",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.456763,85.432515"
        },
        {
            "name": "Мамонтово",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.711703,81.611866"
        },
        {
            "name": "Новичиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.205189,81.394196"
        },
        {
            "name": "Новоалтайск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.441572,83.920835"
        },
        {
            "name": "Онгудай",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.754250,86.134140"
        },
        {
            "name": "Павловск (Алтайский край)",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.325201,82.986811"
        },
        {
            "name": "Петропавловское",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.069804,84.089456"
        },
        {
            "name": "Поспелиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.988610,81.843342"
        },
        {
            "name": "Ребриха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.085277,82.345418"
        },
        {
            "name": "Родино",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.501825,80.217847"
        },
        {
            "name": "Рубцовск",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.514040,81.231768"
        },
        {
            "name": "Славгород",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.993004,78.638656"
        },
        {
            "name": "Смоленское",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.307093,85.082855"
        },
        {
            "name": "Солонешное",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.659910,84.324498"
        },
        {
            "name": "Солтон",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.841430,86.472988"
        },
        {
            "name": "Староаллейское",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.017509,81.996304"
        },
        {
            "name": "Табуны",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.774987,78.808874"
        },
        {
            "name": "Тальменка",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.819439,83.557303"
        },
        {
            "name": "Тогул",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.462097,85.909836"
        },
        {
            "name": "Топчиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.824354,83.119824"
        },
        {
            "name": "Троицкое (Алтайский край)",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.980899,84.681834"
        },
        {
            "name": "Турочак",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.246795,87.132148"
        },
        {
            "name": "Тюменцево",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.320217,81.495433"
        },
        {
            "name": "Угловское",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.353597,80.202173"
        },
        {
            "name": "Усть-Калманка",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.135024,83.318159"
        },
        {
            "name": "Усть-Кан",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.933222,84.752209"
        },
        {
            "name": "Усть-Кокса",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.270819,85.613152"
        },
        {
            "name": "Усть-Улаган",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "50.643139,87.950638"
        },
        {
            "name": "Усть-Чарышская Пристань",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.400875,83.656612"
        },
        {
            "name": "Хабары",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.616158,79.535764"
        },
        {
            "name": "Целинное",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "54.497952,63.651096"
        },
        {
            "name": "Чарышское",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.389620,83.559837"
        },
        {
            "name": "Шебалино",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "51.290778,85.667752"
        },
        {
            "name": "Шелаболиха",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "53.406677,82.629357"
        },
        {
            "name": "Шипуново",
            "district_id": 5,
            "region_id": 3,
            "coordinates": "52.225517,82.269083"
        },
        {
            "name": "Айгунь",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.252105,127.500450"
        },
        {
            "name": "Архара",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "49.422578,130.065359"
        },
        {
            "name": "Белогорск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.919895,128.483383"
        },
        {
            "name": "Благовещенск (Амурская обл.)",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.272776,127.540402"
        },
        {
            "name": "Бурея",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "49.812307,129.797489"
        },
        {
            "name": "Возжаевка",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.739107,128.727935"
        },
        {
            "name": "Екатеринославка",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.385389,129.104209"
        },
        {
            "name": "Ерофей Павлович",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "53.969923,121.945394"
        },
        {
            "name": "Завитинск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.126525,129.429765"
        },
        {
            "name": "Зея",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "53.735930,127.258521"
        },
        {
            "name": "Златоустовск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "52.964713,133.562488"
        },
        {
            "name": "Ивановка",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "40.746941,48.033256"
        },
        {
            "name": "Коболдо",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "51.375530,128.133438"
        },
        {
            "name": "Магдагачи",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "53.463005,125.816807"
        },
        {
            "name": "Новобурейский",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "49.804821,129.889614"
        },
        {
            "name": "Поярково",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "49.631987,128.655113"
        },
        {
            "name": "Райчихинск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "49.788397,129.409868"
        },
        {
            "name": "Ромны",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.741509,33.480953"
        },
        {
            "name": "Свободный",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "51.376866,128.134722"
        },
        {
            "name": "Серышево",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "51.097052,128.383139"
        },
        {
            "name": "Сковородино",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "53.973257,123.909222"
        },
        {
            "name": "Стойба",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "52.794594,131.709522"
        },
        {
            "name": "Тамбовка",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "50.100967,128.069380"
        },
        {
            "name": "Тында",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "55.143833,124.741377"
        },
        {
            "name": "Февральск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "52.448727,130.854797"
        },
        {
            "name": "Шимановск",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "51.996978,127.685588"
        },
        {
            "name": "Экимчан",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "53.074828,132.936725"
        },
        {
            "name": "Ядрино",
            "district_id": 4,
            "region_id": 4,
            "coordinates": "55.934460,46.202028"
        },
        {
            "name": "Амдерма",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "69.751221,61.663696"
        },
        {
            "name": "Архангельск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.547251,40.560155"
        },
        {
            "name": "Березник",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.845949,42.733569"
        },
        {
            "name": "Вельск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.063766,42.099105"
        },
        {
            "name": "Верхняя Тойма",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.236487,45.000000"
        },
        {
            "name": "Волошка",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.337971,40.081276"
        },
        {
            "name": "Вычегодский",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.243306,46.900459"
        },
        {
            "name": "Емца",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "63.397528,41.626513"
        },
        {
            "name": "Илеза",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.049112,43.892862"
        },
        {
            "name": "Ильинско-Подомское",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.116001,47.967093"
        },
        {
            "name": "Каргополь (Архангельская обл.)",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.507116,38.932810"
        },
        {
            "name": "Карпогоры",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.000045,44.453835"
        },
        {
            "name": "Кодино",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "63.717388,39.667721"
        },
        {
            "name": "Коноша",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "60.975450,40.265773"
        },
        {
            "name": "Коряжма",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.312557,47.161097"
        },
        {
            "name": "Котлас",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.246849,46.661801"
        },
        {
            "name": "Красноборск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.546739,45.945553"
        },
        {
            "name": "Лешуконское",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.897347,45.765173"
        },
        {
            "name": "Мезень",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "65.861660,44.229317"
        },
        {
            "name": "Мирный (Архангельская обл.)",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.763683,40.330681"
        },
        {
            "name": "Нарьян-Мар",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "67.671007,53.107834"
        },
        {
            "name": "Новодвинск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.428596,40.813530"
        },
        {
            "name": "Няндома",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.661410,40.201995"
        },
        {
            "name": "Онега",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "63.917408,38.114108"
        },
        {
            "name": "Пинега",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.700001,43.391035"
        },
        {
            "name": "Плесецк",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.717023,40.300579"
        },
        {
            "name": "Савинск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.929408,40.133694"
        },
        {
            "name": "Северодвинск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.566176,39.850598"
        },
        {
            "name": "Сольвычегодск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "61.331210,46.920111"
        },
        {
            "name": "Холмогоры",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "64.226607,41.648160"
        },
        {
            "name": "Шенкурск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.102759,42.903128"
        },
        {
            "name": "Яренск",
            "district_id": 3,
            "region_id": 5,
            "coordinates": "62.178956,49.093115"
        },
        {
            "name": "Астрахань",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.358804,48.059934"
        },
        {
            "name": "Ахтубинск",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "48.282376,46.182179"
        },
        {
            "name": "Верхний Баскунчак",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "48.223292,46.726795"
        },
        {
            "name": "Володарский",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.396149,48.530819"
        },
        {
            "name": "Енотаевка",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "47.243138,47.024883"
        },
        {
            "name": "Икряное",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.101613,47.724376"
        },
        {
            "name": "Камызяк",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.117985,48.082487"
        },
        {
            "name": "Капустин Яр",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "48.575267,45.766175"
        },
        {
            "name": "Красный Яр (Астраханская обл.)",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.533292,48.343055"
        },
        {
            "name": "Лиман",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "48.989759,37.804996"
        },
        {
            "name": "Началово",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "46.336877,48.201712"
        },
        {
            "name": "Харабали",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "47.406086,47.254337"
        },
        {
            "name": "Черный Яр",
            "district_id": 2,
            "region_id": 6,
            "coordinates": "48.058919,46.107152"
        },
        {
            "name": "Агидель",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.900544,53.933435"
        },
        {
            "name": "Аксаково",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.021806,54.152569"
        },
        {
            "name": "Амзя",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "56.236097,54.388818"
        },
        {
            "name": "Архангелькое",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.787816,37.284601"
        },
        {
            "name": "Аскарово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.338413,58.510871"
        },
        {
            "name": "Аскино",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "56.091435,56.585480"
        },
        {
            "name": "Баймак",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.586551,58.319519"
        },
        {
            "name": "Бакалы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.174064,53.793663"
        },
        {
            "name": "Белебей",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.110346,54.104627"
        },
        {
            "name": "Белорецк",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.967399,58.406064"
        },
        {
            "name": "Бижбуляк",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.695696,54.276083"
        },
        {
            "name": "Бирск",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.425131,55.544293"
        },
        {
            "name": "Благовещенск (Башкирия)",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.038555,55.986122"
        },
        {
            "name": "Большеустьикинское",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.938704,58.266912"
        },
        {
            "name": "Бураево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.848760,55.405695"
        },
        {
            "name": "Верхнеяркеево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.450455,54.307480"
        },
        {
            "name": "Верхние Киги",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.412025,58.598358"
        },
        {
            "name": "Верхние Татышлы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "56.294975,55.852151"
        },
        {
            "name": "Верхний Авзян",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.532995,57.518473"
        },
        {
            "name": "Давлеканово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.216165,55.029070"
        },
        {
            "name": "Дуван",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.694370,57.894923"
        },
        {
            "name": "Дюртюли",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.478777,54.861927"
        },
        {
            "name": "Ермекеево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.081539,53.677770"
        },
        {
            "name": "Ермолаево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.702168,55.808822"
        },
        {
            "name": "Зилаир",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.238765,57.447503"
        },
        {
            "name": "Зирган",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.227432,55.917463"
        },
        {
            "name": "Иглино",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.818048,56.394369"
        },
        {
            "name": "Инзер",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.217498,57.558832"
        },
        {
            "name": "Исянгулово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.192951,56.580602"
        },
        {
            "name": "Ишимбай",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.426358,56.050767"
        },
        {
            "name": "Калтасы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.970262,54.808792"
        },
        {
            "name": "Кананикольское",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.785064,57.486280"
        },
        {
            "name": "Кандры",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.554841,54.107045"
        },
        {
            "name": "Караидель",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.842970,56.894847"
        },
        {
            "name": "Караидельский",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.739966,56.854815"
        },
        {
            "name": "Киргиз-Мияки",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.633696,54.807112"
        },
        {
            "name": "Красноусольский",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.890760,56.469813"
        },
        {
            "name": "Кумертау",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.763739,55.811568"
        },
        {
            "name": "Кушнаренково",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.106578,55.337707"
        },
        {
            "name": "Малояз",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.175047,58.150119"
        },
        {
            "name": "Межгорье",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.050000,57.816667"
        },
        {
            "name": "Мелеуз",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.961091,55.928354"
        },
        {
            "name": "Месягутово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.536024,58.245778"
        },
        {
            "name": "Мраково",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.719724,56.622547"
        },
        {
            "name": "Нефтекамск",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "56.102608,54.286739"
        },
        {
            "name": "Октябрьский (Башкирия)",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.477201,53.489539"
        },
        {
            "name": "Приютово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.904875,53.927226"
        },
        {
            "name": "Раевский",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.065675,54.932560"
        },
        {
            "name": "Салават",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.386044,55.925947"
        },
        {
            "name": "Сибай",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "52.713359,58.668136"
        },
        {
            "name": "Старобалтачево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.998674,55.918538"
        },
        {
            "name": "Старосубхангулово",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.106995,57.431456"
        },
        {
            "name": "Стерлибашево",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.440485,55.258803"
        },
        {
            "name": "Стерлитамак",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.655435,55.943893"
        },
        {
            "name": "Туймазы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.598534,53.692184"
        },
        {
            "name": "Уфа",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.738762,55.972055"
        },
        {
            "name": "Учалы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.308958,59.408949"
        },
        {
            "name": "Федоровка (Башкирия)",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "53.174305,55.187389"
        },
        {
            "name": "Чекмагуш",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "55.139398,54.640622"
        },
        {
            "name": "Чишмы",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.592402,55.375991"
        },
        {
            "name": "Шаран",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "54.815259,53.999239"
        },
        {
            "name": "Янаул",
            "district_id": 7,
            "region_id": 7,
            "coordinates": "56.267483,54.925254"
        },
        {
            "name": "Алексеевка (Белгородская обл.)",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.625654,38.697811"
        },
        {
            "name": "Белгород",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.599713,36.598262"
        },
        {
            "name": "Борисовка",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.601711,36.008939"
        },
        {
            "name": "Валуйки",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.202574,38.118053"
        },
        {
            "name": "Вейделевка",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.156638,38.453894"
        },
        {
            "name": "Волоконовка",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.482768,37.859508"
        },
        {
            "name": "Грайворон",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.477982,35.679243"
        },
        {
            "name": "Губкин",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "51.282417,37.543495"
        },
        {
            "name": "Ивня",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "51.058792,36.135994"
        },
        {
            "name": "Короча",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.814577,37.194942"
        },
        {
            "name": "Красногвардейское (Белгород.)",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.606915,36.611415"
        },
        {
            "name": "Новый Оскол",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.750151,37.880948"
        },
        {
            "name": "Ракитное",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.841909,35.836233"
        },
        {
            "name": "Ровеньки",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "48.082386,39.369977"
        },
        {
            "name": "Старый Оскол",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "51.298082,37.837959"
        },
        {
            "name": "Строитель",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "57.866114,59.937536"
        },
        {
            "name": "Чернянка",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.933989,37.820799"
        },
        {
            "name": "Шебекино",
            "district_id": 1,
            "region_id": 8,
            "coordinates": "50.411866,36.894762"
        },
        {
            "name": "Алтухово",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.671814,34.366636"
        },
        {
            "name": "Белая Березка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.383528,33.488677"
        },
        {
            "name": "Белые Берега",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.209430,34.659746"
        },
        {
            "name": "Большое Полпино",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.243039,34.502444"
        },
        {
            "name": "Брянск",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.263531,34.416110"
        },
        {
            "name": "Бытошь",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.829371,34.107883"
        },
        {
            "name": "Выгоничи",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.100151,34.061253"
        },
        {
            "name": "Вышков",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "48.725882,23.661315"
        },
        {
            "name": "Гордеевка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.956307,31.969309"
        },
        {
            "name": "Дубровка (Брянская обл.)",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.691118,33.502770"
        },
        {
            "name": "Дятьково",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.592501,34.344718"
        },
        {
            "name": "Дятьково",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.592501,34.344718"
        },
        {
            "name": "Жирятино",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.225253,33.729882"
        },
        {
            "name": "Жуковка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "55.741615,37.257828"
        },
        {
            "name": "Злынка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.428436,31.733098"
        },
        {
            "name": "Ивот",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.678906,34.192540"
        },
        {
            "name": "Карачев",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.119513,34.993445"
        },
        {
            "name": "Клетня",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.389230,33.221942"
        },
        {
            "name": "Климово",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.385907,32.189032"
        },
        {
            "name": "Клинцы",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.756616,32.256669"
        },
        {
            "name": "Кокаревка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "55.536968,43.769127"
        },
        {
            "name": "Комаричи",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.417226,34.794247"
        },
        {
            "name": "Красная Гора",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.004813,31.595712"
        },
        {
            "name": "Локоть (Брянская обл.)",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.568769,34.567819"
        },
        {
            "name": "Мглин",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.059692,32.841685"
        },
        {
            "name": "Навля",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.829339,34.506422"
        },
        {
            "name": "Новозыбков",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.534613,31.933387"
        },
        {
            "name": "Погар",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.555865,33.258476"
        },
        {
            "name": "Почеп",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.931868,33.441464"
        },
        {
            "name": "Ржаница",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.430115,33.923320"
        },
        {
            "name": "Рогнедино",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.803789,33.562845"
        },
        {
            "name": "Севск",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.149096,34.490340"
        },
        {
            "name": "Стародуб",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.591684,32.761673"
        },
        {
            "name": "Суземка",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.317533,34.073671"
        },
        {
            "name": "Сураж",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "53.017563,32.391262"
        },
        {
            "name": "Трубчевск",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.587123,33.763494"
        },
        {
            "name": "Унеча",
            "district_id": 1,
            "region_id": 9,
            "coordinates": "52.843626,32.684019"
        },
        {
            "name": "Бабушкин",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.712948,105.873049"
        },
        {
            "name": "Багдарин",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "54.447946,113.590976"
        },
        {
            "name": "Баргузин",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.266734,104.310017"
        },
        {
            "name": "Баянгол",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "50.689974,103.452499"
        },
        {
            "name": "Бичура",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "50.592741,107.588695"
        },
        {
            "name": "Выдрино",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.459354,104.639121"
        },
        {
            "name": "Гусиное Озеро",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.146304,106.357632"
        },
        {
            "name": "Гусиноозерск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.288171,106.529710"
        },
        {
            "name": "Заиграево",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.836421,108.267833"
        },
        {
            "name": "Закаменск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "50.371333,103.281698"
        },
        {
            "name": "Иволгинск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.748195,107.295567"
        },
        {
            "name": "Илька",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.719597,108.517643"
        },
        {
            "name": "Кабанск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.061224,106.652445"
        },
        {
            "name": "Каменск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.994596,106.567167"
        },
        {
            "name": "Кижинга",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.842821,109.906166"
        },
        {
            "name": "Курумкан",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "54.326732,110.325646"
        },
        {
            "name": "Кырен",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.682729,102.133985"
        },
        {
            "name": "Кяхта",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "50.349292,106.482008"
        },
        {
            "name": "Монды",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.675733,100.996081"
        },
        {
            "name": "Мухоршибирь",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.040014,107.816783"
        },
        {
            "name": "Нижнеангарск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "55.783333,109.550000"
        },
        {
            "name": "Орлик",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.508221,99.824249"
        },
        {
            "name": "Петропавловка (Бурятия)",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "50.610973,105.331916"
        },
        {
            "name": "Романовка (Бурятия)",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "53.216903,112.773376"
        },
        {
            "name": "Северобайкальск (Бурятия)",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "55.627858,109.314916"
        },
        {
            "name": "Селенгинск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.020956,106.853616"
        },
        {
            "name": "Сосново-Озерское",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.523752,111.534720"
        },
        {
            "name": "Таксимо (Бурятия)",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "56.339549,114.987561"
        },
        {
            "name": "Турунтаево",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.193671,107.666278"
        },
        {
            "name": "Улан-Удэ",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "51.823878,107.607338"
        },
        {
            "name": "Хоринск",
            "district_id": 5,
            "region_id": 10,
            "coordinates": "52.166268,109.776574"
        },
        {
            "name": "Александров",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.394731,38.712037"
        },
        {
            "name": "Андреево",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.942001,41.150074"
        },
        {
            "name": "Анопино",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.700324,40.668250"
        },
        {
            "name": "Бавлены",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.395927,39.563472"
        },
        {
            "name": "Балакирево",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.503720,38.837571"
        },
        {
            "name": "Боголюбово",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.196920,40.536127"
        },
        {
            "name": "Великодворский",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.246217,40.667403"
        },
        {
            "name": "Вербовский",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.524098,41.982363"
        },
        {
            "name": "Владимир",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.144596,40.417869"
        },
        {
            "name": "Вязники",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.239842,42.102442"
        },
        {
            "name": "Городищи (Владимирская обл.)",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.867666,39.085511"
        },
        {
            "name": "Гороховец",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.196154,42.695350"
        },
        {
            "name": "Гусевский",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "54.647736,22.168269"
        },
        {
            "name": "Гусь Хрустальный",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.606284,40.656373"
        },
        {
            "name": "Гусь-Хрустальный",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.606284,40.656373"
        },
        {
            "name": "Золотково",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.530567,41.101428"
        },
        {
            "name": "Иванищи",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.775426,40.424894"
        },
        {
            "name": "Камешково",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.350968,41.000205"
        },
        {
            "name": "Карабаново",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.309014,38.700756"
        },
        {
            "name": "Киржач",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.159218,38.863573"
        },
        {
            "name": "Ковров",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.356769,41.322631"
        },
        {
            "name": "Кольчугино",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.298385,39.370142"
        },
        {
            "name": "Красная Горбатка",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.869172,41.757317"
        },
        {
            "name": "Лакинск",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.017540,39.961032"
        },
        {
            "name": "Меленки",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.336524,41.630334"
        },
        {
            "name": "Муром",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.567397,42.016585"
        },
        {
            "name": "Петушки",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.925124,39.448906"
        },
        {
            "name": "Покров",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.918089,39.178437"
        },
        {
            "name": "Радужный (Владимирская обл.)",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.995570,40.329556"
        },
        {
            "name": "Собинка",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.988628,40.018206"
        },
        {
            "name": "Судогда",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "55.951057,40.860024"
        },
        {
            "name": "Суздаль",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.419159,40.453615"
        },
        {
            "name": "Юрьев-Польский",
            "district_id": 1,
            "region_id": 11,
            "coordinates": "56.500583,39.679404"
        },
        {
            "name": "Алексеевская",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "55.307048,50.118931"
        },
        {
            "name": "Быково (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.766008,45.390877"
        },
        {
            "name": "Волгоград",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.708048,44.513303"
        },
        {
            "name": "Волжский (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.817649,44.770729"
        },
        {
            "name": "Городище (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.801196,44.473919"
        },
        {
            "name": "Дубовка (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.051838,44.820681"
        },
        {
            "name": "Елань",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.952713,43.739581"
        },
        {
            "name": "Жирновск",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.974507,44.785342"
        },
        {
            "name": "Иловля",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.302705,43.979698"
        },
        {
            "name": "Калач-на-Дону",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.685712,43.527149"
        },
        {
            "name": "Камышин",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.094634,45.393982"
        },
        {
            "name": "Кириллов",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "59.860164,38.375519"
        },
        {
            "name": "Клетский",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.224746,42.942298"
        },
        {
            "name": "Котельниково",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "47.630995,43.142350"
        },
        {
            "name": "Котово",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.315462,44.801955"
        },
        {
            "name": "Кумылженская",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.885232,42.595923"
        },
        {
            "name": "Ленинск",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.697919,45.203217"
        },
        {
            "name": "Михайловка",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.056414,43.228590"
        },
        {
            "name": "Нехаевский",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.405938,41.765233"
        },
        {
            "name": "Николаевск",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.029728,45.458927"
        },
        {
            "name": "Новоаннинский",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.525460,42.664585"
        },
        {
            "name": "Новониколаевский",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.981853,42.370200"
        },
        {
            "name": "Ольховка",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.855778,44.556049"
        },
        {
            "name": "Палласовка (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.042977,46.888672"
        },
        {
            "name": "Рудня (Волгоградская обл.)",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.803322,44.565793"
        },
        {
            "name": "Светлый Яр",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.483333,44.783333"
        },
        {
            "name": "Серафимович",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.577148,42.730356"
        },
        {
            "name": "Средняя Ахтуба",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.714287,44.861069"
        },
        {
            "name": "Сталинград",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.708048,44.513303"
        },
        {
            "name": "Старая Полтавка",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.481998,46.481357"
        },
        {
            "name": "Суровикино",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.608569,42.845541"
        },
        {
            "name": "Урюпинск",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "50.797418,42.005600"
        },
        {
            "name": "Фролово",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "49.759035,43.659151"
        },
        {
            "name": "Чернышковский",
            "district_id": 2,
            "region_id": 12,
            "coordinates": "48.415103,42.224762"
        },
        {
            "name": "Бабаево",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.393007,35.930321"
        },
        {
            "name": "Белозерск",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.029880,37.805717"
        },
        {
            "name": "Великий Устюг",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.767961,46.306964"
        },
        {
            "name": "Верховажье",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.741997,42.039881"
        },
        {
            "name": "Вожега",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.473581,40.206577"
        },
        {
            "name": "Вологда",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.218066,39.897805"
        },
        {
            "name": "Вохтога",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "58.813070,41.040692"
        },
        {
            "name": "Вытегра",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "61.007657,36.435740"
        },
        {
            "name": "Грязовец",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "58.874034,40.250636"
        },
        {
            "name": "Кадников",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.502654,40.340696"
        },
        {
            "name": "Кадуй",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.207484,37.118156"
        },
        {
            "name": "Кириллов",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.860164,38.375519"
        },
        {
            "name": "Кичменгский Городок",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.992058,45.800486"
        },
        {
            "name": "Липин Бор",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.261532,37.979665"
        },
        {
            "name": "Никольск",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "53.712587,46.077183"
        },
        {
            "name": "Нюксеница",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.413642,44.241271"
        },
        {
            "name": "Сокол",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "55.803381,37.505108"
        },
        {
            "name": "Сямжа",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.020389,41.071120"
        },
        {
            "name": "Тарногский Городок",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "60.502878,43.564982"
        },
        {
            "name": "Тотьма",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.974486,42.753008"
        },
        {
            "name": "Устюжна",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "58.841066,36.434603"
        },
        {
            "name": "Харовск",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.954927,40.219598"
        },
        {
            "name": "Чагода",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.165580,35.324892"
        },
        {
            "name": "Череповец",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.132333,37.909181"
        },
        {
            "name": "Шексна",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.225519,38.512571"
        },
        {
            "name": "Шуйское",
            "district_id": 3,
            "region_id": 13,
            "coordinates": "59.373599,41.031203"
        },
        {
            "name": "Калач",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.420318,41.003400"
        },
        {
            "name": "Анна",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.484321,40.423141"
        },
        {
            "name": "Бобров",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.105180,40.021718"
        },
        {
            "name": "Богучар",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "49.937883,40.552904"
        },
        {
            "name": "Борисоглебск",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.376070,42.073515"
        },
        {
            "name": "Бутурлиновка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.833008,40.602387"
        },
        {
            "name": "Верхний Мамон",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.161708,40.371116"
        },
        {
            "name": "Верхняя Хава",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.837508,39.931296"
        },
        {
            "name": "Воробьевка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.646633,40.954789"
        },
        {
            "name": "Воронеж",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.675497,39.208882"
        },
        {
            "name": "Грибановский",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.443825,41.960408"
        },
        {
            "name": "Давыдовка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.155893,39.429960"
        },
        {
            "name": "Елань-Коленовский",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.164961,41.159280"
        },
        {
            "name": "Кантемировка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "49.700103,39.863477"
        },
        {
            "name": "Лиски (Воронежская обл.)",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.979677,39.494129"
        },
        {
            "name": "Нижнедевицк",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.539986,38.351583"
        },
        {
            "name": "Новая Усмань",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.626324,39.412906"
        },
        {
            "name": "Нововоронеж",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.308070,39.220019"
        },
        {
            "name": "Новохоперск",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.101344,41.622591"
        },
        {
            "name": "Ольховатка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.279407,39.277400"
        },
        {
            "name": "Острогожск",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.854842,39.063283"
        },
        {
            "name": "Павловск (Воронежская обл.)",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.455198,40.139587"
        },
        {
            "name": "Панино",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.655106,40.131246"
        },
        {
            "name": "Петропавловка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "48.457220,36.434730"
        },
        {
            "name": "Поворино",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.195407,42.248557"
        },
        {
            "name": "Подгоренский",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.482068,39.699407"
        },
        {
            "name": "Рамонь",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.905305,39.333162"
        },
        {
            "name": "Репьевка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.082858,38.640608"
        },
        {
            "name": "Россошь",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "50.202331,39.588489"
        },
        {
            "name": "Семилуки",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.681578,39.030349"
        },
        {
            "name": "Таловая",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.115843,40.733358"
        },
        {
            "name": "Терновка",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "48.521437,36.068790"
        },
        {
            "name": "Хохольский",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.578181,38.787182"
        },
        {
            "name": "Эртиль",
            "district_id": 1,
            "region_id": 14,
            "coordinates": "51.842748,40.807100"
        },
        {
            "name": "Агвали",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.539613,46.123137"
        },
        {
            "name": "Акуша",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.274178,47.341957"
        },
        {
            "name": "Ахты",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.462210,47.750126"
        },
        {
            "name": "Ачису",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.653246,47.680942"
        },
        {
            "name": "Бабаюрт",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.600476,46.776734"
        },
        {
            "name": "Бежта",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.132874,46.134589"
        },
        {
            "name": "Ботлих",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.668957,46.209278"
        },
        {
            "name": "Буйнакск",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.822275,47.116596"
        },
        {
            "name": "Вачи",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.072328,47.214130"
        },
        {
            "name": "Гергебиль",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.502850,47.062730"
        },
        {
            "name": "Гуниб",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.386128,46.962630"
        },
        {
            "name": "Дагестанские Огни",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.115381,48.187523"
        },
        {
            "name": "Дербент",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.067425,48.289091"
        },
        {
            "name": "Дылым",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.068505,46.638250"
        },
        {
            "name": "Ершовка",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "56.451874,53.880362"
        },
        {
            "name": "Избербаш",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.568499,47.875381"
        },
        {
            "name": "Карабудахкент",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.707822,47.564124"
        },
        {
            "name": "Карата",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.596970,46.334078"
        },
        {
            "name": "Каспийск",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.874049,47.640417"
        },
        {
            "name": "Касумкент",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.678098,48.162947"
        },
        {
            "name": "Кизилюрт",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.203835,46.866355"
        },
        {
            "name": "Кизляр",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.843866,46.715243"
        },
        {
            "name": "Кочубей",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "44.391212,46.556575"
        },
        {
            "name": "Кумух",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.171148,47.118147"
        },
        {
            "name": "Курах",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.585386,47.784770"
        },
        {
            "name": "Магарамкент",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.617390,48.347141"
        },
        {
            "name": "Маджалис",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.127361,47.830256"
        },
        {
            "name": "Махачкала",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.966631,47.512629"
        },
        {
            "name": "Мехельта",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.796665,46.500756"
        },
        {
            "name": "Новолакское",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.121470,46.481246"
        },
        {
            "name": "Рутул",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.533546,47.423812"
        },
        {
            "name": "Советское (Дагестан)",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.720382,48.322598"
        },
        {
            "name": "Тарумовка",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "44.072778,46.539510"
        },
        {
            "name": "Терекли-Мектеб",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "44.164937,45.874263"
        },
        {
            "name": "Тлярата",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.475000,46.314600"
        },
        {
            "name": "Тпиг",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.780654,47.594349"
        },
        {
            "name": "Унцукуль",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.710996,46.793484"
        },
        {
            "name": "Уркарах",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.160857,47.633281"
        },
        {
            "name": "Хасавюрт",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "43.256201,46.589335"
        },
        {
            "name": "Хив",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "41.751013,47.927707"
        },
        {
            "name": "Хунзах",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.547753,46.706985"
        },
        {
            "name": "Цуриб",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "42.238261,46.834390"
        },
        {
            "name": "Южно-Сухокумск",
            "district_id": 8,
            "region_id": 15,
            "coordinates": "44.661120,45.647324"
        },
        {
            "name": "Биробиджан",
            "district_id": 4,
            "region_id": 16,
            "coordinates": "48.780357,132.913074"
        },
        {
            "name": "Архиповка",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.662295,41.253549"
        },
        {
            "name": "Верхний Ландех",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.840800,42.599287"
        },
        {
            "name": "Вичуга",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.213589,41.913518"
        },
        {
            "name": "Гаврилов Посад",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.556524,40.127539"
        },
        {
            "name": "Долматовский",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.497385,42.333780"
        },
        {
            "name": "Дуляпино",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.258812,40.814110"
        },
        {
            "name": "Заволжск",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.486184,42.128367"
        },
        {
            "name": "Заречный (Ивановская обл.)",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.467124,42.280498"
        },
        {
            "name": "Иваново",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.005067,40.976645"
        },
        {
            "name": "Иваньковский",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.677013,40.107823"
        },
        {
            "name": "Ильинское-Хованское",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.970894,39.767758"
        },
        {
            "name": "Каминский",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.157252,41.470206"
        },
        {
            "name": "Кинешма",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.442625,42.115951"
        },
        {
            "name": "Комсомольск",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "50.567033,136.965895"
        },
        {
            "name": "Кохма",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.933687,41.108779"
        },
        {
            "name": "Лух",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.012404,42.259228"
        },
        {
            "name": "Палех",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.796503,41.862649"
        },
        {
            "name": "Пестяки",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.708669,42.669969"
        },
        {
            "name": "Приволжск",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.379126,41.298498"
        },
        {
            "name": "Пучеж",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.979983,43.161340"
        },
        {
            "name": "Родники (Ивановская обл.)",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.107266,41.734048"
        },
        {
            "name": "Савино",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.590877,41.206566"
        },
        {
            "name": "Сокольское",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.144745,43.164875"
        },
        {
            "name": "Тейково",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.858989,40.539738"
        },
        {
            "name": "Фурманов",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.257153,41.121667"
        },
        {
            "name": "Шуя",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.851134,41.357534"
        },
        {
            "name": "Южа",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "56.580036,42.012466"
        },
        {
            "name": "Юрьевец",
            "district_id": 1,
            "region_id": 17,
            "coordinates": "57.330141,43.104226"
        },
        {
            "name": "Алексеевск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.839285,108.348900"
        },
        {
            "name": "Алзамай",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "55.557923,98.656935"
        },
        {
            "name": "Алыгжер",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.636482,98.214054"
        },
        {
            "name": "Ангарск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.515570,103.917160"
        },
        {
            "name": "Артемовский (Иркутская обл.)",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "58.210059,114.636204"
        },
        {
            "name": "Байкал",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.558700,108.164997"
        },
        {
            "name": "Байкальск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "51.511954,104.132395"
        },
        {
            "name": "Балаганск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.014015,103.057923"
        },
        {
            "name": "Баяндай",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.063131,105.515821"
        },
        {
            "name": "Бирюсинск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "55.964595,97.811531"
        },
        {
            "name": "Бодайбо",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.854034,114.201197"
        },
        {
            "name": "Большая Речка",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "51.956410,104.733191"
        },
        {
            "name": "Большой Луг",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.071111,104.085000"
        },
        {
            "name": "Бохан",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.153491,103.777373"
        },
        {
            "name": "Братск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.173766,101.603898"
        },
        {
            "name": "Видим",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.413124,103.111317"
        },
        {
            "name": "Витимский",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "58.226964,113.248804"
        },
        {
            "name": "Вихоревка",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.114128,101.186866"
        },
        {
            "name": "Еланцы",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.807830,106.411069"
        },
        {
            "name": "Ербогачен",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "61.277659,108.013667"
        },
        {
            "name": "Железногорск-Илимский",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.584754,104.132442"
        },
        {
            "name": "Жигалово",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.813820,105.157214"
        },
        {
            "name": "Забитуй",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.277005,102.845934"
        },
        {
            "name": "Залари",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.565651,102.510158"
        },
        {
            "name": "Звездный",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.280220,104.311664"
        },
        {
            "name": "Зима",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.922585,102.042387"
        },
        {
            "name": "Иркутск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.286974,104.305018"
        },
        {
            "name": "Казачинское (Иркутская обл.)",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.295000,107.383333"
        },
        {
            "name": "Качуг",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.940702,105.874202"
        },
        {
            "name": "Квиток",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.500000,98.500000"
        },
        {
            "name": "Киренск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.774601,108.124086"
        },
        {
            "name": "Куйтун",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.335206,101.503572"
        },
        {
            "name": "Култук",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "51.724151,103.708224"
        },
        {
            "name": "Кутулик",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.349326,102.786075"
        },
        {
            "name": "Мама",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.957679,102.739912"
        },
        {
            "name": "Нижнеудинск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.901928,99.024836"
        },
        {
            "name": "Оса",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.284083,55.454325"
        },
        {
            "name": "Саянск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.106507,102.188850"
        },
        {
            "name": "Слюдянка",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "51.662882,103.704077"
        },
        {
            "name": "Тайшет",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "55.932147,98.010575"
        },
        {
            "name": "Тулун",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.569908,100.581756"
        },
        {
            "name": "Усолье-Сибирское (Иркутская обл.)",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.766424,103.638171"
        },
        {
            "name": "Усть-Илимск",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "57.984541,102.739595"
        },
        {
            "name": "Усть-Кут",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.791039,105.776868"
        },
        {
            "name": "Усть-Ордынский",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.807726,104.735037"
        },
        {
            "name": "Усть-Уда",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "54.171570,103.027249"
        },
        {
            "name": "Черемхово",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "53.140056,103.093976"
        },
        {
            "name": "Чунский",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "56.079083,99.637562"
        },
        {
            "name": "Шелехов",
            "district_id": 5,
            "region_id": 18,
            "coordinates": "52.207540,104.098831"
        },
        {
            "name": "Баксан",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.685512,43.541904"
        },
        {
            "name": "Майский",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.636391,44.062876"
        },
        {
            "name": "Нальчик",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.494992,43.604513"
        },
        {
            "name": "Нарткала",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.549286,43.850658"
        },
        {
            "name": "Прохладный",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.762522,44.010830"
        },
        {
            "name": "Советское (Кабардино-Балкария)",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.755737,43.765804"
        },
        {
            "name": "Терек",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.174057,45.811520"
        },
        {
            "name": "Тырныауз",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.399676,42.922657"
        },
        {
            "name": "Чегем-Первый",
            "district_id": 8,
            "region_id": 19,
            "coordinates": "43.567721,43.579645"
        },
        {
            "name": "Багратионовск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.384104,20.646604"
        },
        {
            "name": "Балтийск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.659122,19.922895"
        },
        {
            "name": "Гвардейск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.652134,21.067036"
        },
        {
            "name": "Гурьевск (Калининградская обл.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.780121,20.609905"
        },
        {
            "name": "Гусев",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.589050,22.203298"
        },
        {
            "name": "Железнодорожный (Калининград.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.357088,21.315311"
        },
        {
            "name": "Зеленоградск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.956234,20.474702"
        },
        {
            "name": "Знаменск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "48.588212,45.722074"
        },
        {
            "name": "Калининград (Кенигсберг)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.710426,20.452214"
        },
        {
            "name": "Краснознаменск (Калининград.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.941998,22.487194"
        },
        {
            "name": "Ладушкин",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.572877,20.176443"
        },
        {
            "name": "Мамоново",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.465815,19.934845"
        },
        {
            "name": "Неман",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "55.027626,22.026889"
        },
        {
            "name": "Нестеров",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.630547,22.569125"
        },
        {
            "name": "Озерск(Калининградская обл.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.402602,22.019374"
        },
        {
            "name": "Пионерск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.942892,20.221625"
        },
        {
            "name": "Полесск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.861456,21.102130"
        },
        {
            "name": "Правдинск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.441314,21.011982"
        },
        {
            "name": "Светлогорск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.939456,20.158471"
        },
        {
            "name": "Светлый (Калининградская обл.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.678445,20.126497"
        },
        {
            "name": "Славск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "55.045091,21.672706"
        },
        {
            "name": "Советск (Калининградская обл.)",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "55.078854,21.878707"
        },
        {
            "name": "Черняховск",
            "district_id": 3,
            "region_id": 20,
            "coordinates": "54.631272,21.831135"
        },
        {
            "name": "Аршань",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "47.607807,44.615196"
        },
        {
            "name": "Городовиковск",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.083970,41.930468"
        },
        {
            "name": "Каспийский",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "42.877198,47.636798"
        },
        {
            "name": "Комсомольский (Калмыкия)",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "45.333039,46.033085"
        },
        {
            "name": "Малые Дербеты",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "47.950428,44.675560"
        },
        {
            "name": "Приютное",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.090263,43.518576"
        },
        {
            "name": "Советское (Калмыкия)",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.307096,44.285985"
        },
        {
            "name": "Троицкое (Калмыкия)",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.417367,44.253615"
        },
        {
            "name": "Утта",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.365097,46.009994"
        },
        {
            "name": "Цаган-Аман",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "47.556814,46.718438"
        },
        {
            "name": "Элиста",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.315488,44.279401"
        },
        {
            "name": "Юста",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "53.331010,83.751021"
        },
        {
            "name": "Яшалта",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.335244,42.272809"
        },
        {
            "name": "Яшкуль",
            "district_id": 2,
            "region_id": 21,
            "coordinates": "46.174054,45.347149"
        },
        {
            "name": "Бабынино",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.388130,35.735289"
        },
        {
            "name": "Балабаново",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.181102,36.666285"
        },
        {
            "name": "Барятино",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.313285,34.524112"
        },
        {
            "name": "Белоусово",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.091435,36.670955"
        },
        {
            "name": "Бетлица",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.013128,33.948350"
        },
        {
            "name": "Боровск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.203353,36.482640"
        },
        {
            "name": "Дудоровский",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.658433,35.363394"
        },
        {
            "name": "Думиничи",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.930457,35.109003"
        },
        {
            "name": "Еленский",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.486412,35.376987"
        },
        {
            "name": "Жиздра",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.745555,34.732873"
        },
        {
            "name": "Жуков",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.031948,36.735802"
        },
        {
            "name": "Износки",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.986489,35.320104"
        },
        {
            "name": "Калуга",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.551858,36.285097"
        },
        {
            "name": "Киров (Калужская обл.)",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.071168,34.314655"
        },
        {
            "name": "Козельск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.035483,35.775604"
        },
        {
            "name": "Кондрово",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.808906,35.935913"
        },
        {
            "name": "Кремёнки",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.886529,37.115294"
        },
        {
            "name": "Людиново",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.863892,34.457475"
        },
        {
            "name": "Малоярославец",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.007577,36.466840"
        },
        {
            "name": "Медынь",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.971571,35.867823"
        },
        {
            "name": "Мещовск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.320414,35.285829"
        },
        {
            "name": "Мосальск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.491149,34.979894"
        },
        {
            "name": "Обнинск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "55.117038,36.597082"
        },
        {
            "name": "Перемышль",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "49.783862,22.767791"
        },
        {
            "name": "Спас-Деменск",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.409311,34.024478"
        },
        {
            "name": "Сухиничи",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.094506,35.334884"
        },
        {
            "name": "Таруса",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.727541,37.181140"
        },
        {
            "name": "Ульяново",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.718237,35.534921"
        },
        {
            "name": "Ферзиково",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.517863,36.764946"
        },
        {
            "name": "Хвастовичи",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "53.469876,35.096384"
        },
        {
            "name": "Юхнов",
            "district_id": 1,
            "region_id": 22,
            "coordinates": "54.740307,35.231183"
        },
        {
            "name": "Атласово",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "55.605000,159.645000"
        },
        {
            "name": "Аянка",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "63.721500,167.605606"
        },
        {
            "name": "Большерецк",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "52.812396,156.287087"
        },
        {
            "name": "Вилючинск",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "52.931030,158.404776"
        },
        {
            "name": "Елизово (Камчатская обл.)",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "53.159257,158.432064"
        },
        {
            "name": "Ильпырский",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "59.960921,164.197787"
        },
        {
            "name": "Каменское",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "48.523117,34.613683"
        },
        {
            "name": "Кировский",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "56.909224,60.815075"
        },
        {
            "name": "Ключи (Камчатская обл.)",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "56.322023,160.843332"
        },
        {
            "name": "Крапивная",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "58.092883,75.843778"
        },
        {
            "name": "Мильково",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "54.687013,158.617333"
        },
        {
            "name": "Никольское",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "59.703128,30.805805"
        },
        {
            "name": "Озерновский",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "51.478916,156.525864"
        },
        {
            "name": "Оссора",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "59.233082,163.067535"
        },
        {
            "name": "Палана",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "59.084210,159.954164"
        },
        {
            "name": "Пахачи",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "60.555000,169.140000"
        },
        {
            "name": "Петропавловск-Камчатский",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "53.040911,158.677726"
        },
        {
            "name": "Тигиль",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "57.779388,158.575226"
        },
        {
            "name": "Тиличики",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "60.433333,166.048611"
        },
        {
            "name": "Усть-Большерецк",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "52.812396,156.287087"
        },
        {
            "name": "Усть-Камчатск",
            "district_id": 4,
            "region_id": 23,
            "coordinates": "56.227470,162.469299"
        },
        {
            "name": "Амбарный",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "65.895608,33.717664"
        },
        {
            "name": "Беломорск",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "64.528106,34.771076"
        },
        {
            "name": "Валаам",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.366667,30.933333"
        },
        {
            "name": "Вирандозеро",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "64.012600,36.006300"
        },
        {
            "name": "Гирвас",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "62.470551,33.686524"
        },
        {
            "name": "Деревянка",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.562233,34.452313"
        },
        {
            "name": "Идель",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "64.131095,34.242635"
        },
        {
            "name": "Ильинский (Карелия)",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.016005,32.661163"
        },
        {
            "name": "Калевала",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "65.201499,31.183387"
        },
        {
            "name": "Кемь",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "64.950958,34.592731"
        },
        {
            "name": "Кестеньга",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "65.891228,31.833182"
        },
        {
            "name": "Кондопога",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "62.196593,34.270352"
        },
        {
            "name": "Костомукша",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "64.595032,30.611549"
        },
        {
            "name": "Лахденпохья",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.518871,30.190715"
        },
        {
            "name": "Лоухи",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "66.073346,33.054448"
        },
        {
            "name": "Медвежьегорск",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "62.913180,34.461923"
        },
        {
            "name": "Муезерский",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "63.735506,31.536817"
        },
        {
            "name": "Олонец",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "60.980184,32.972397"
        },
        {
            "name": "Петрозаводск",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.778162,34.364039"
        },
        {
            "name": "Питкяранта",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.571545,31.486934"
        },
        {
            "name": "Повенец",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "62.847791,34.827686"
        },
        {
            "name": "Пряжа",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.697235,33.620107"
        },
        {
            "name": "Пудож",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.808276,36.529811"
        },
        {
            "name": "Сегежа",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "63.738839,34.309752"
        },
        {
            "name": "Сортавала",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.704542,30.687902"
        },
        {
            "name": "Суоярви",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "62.089677,32.374408"
        },
        {
            "name": "Хийденсельга",
            "district_id": 3,
            "region_id": 24,
            "coordinates": "61.711774,30.983796"
        },
        {
            "name": "Анжеро-Судженск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.095457,85.995509"
        },
        {
            "name": "Барзас",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.723612,86.312694"
        },
        {
            "name": "Белово",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.410297,86.293695"
        },
        {
            "name": "Белогорск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "50.919895,128.483383"
        },
        {
            "name": "Березовский (Кемеровская обл.)",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.614784,86.258469"
        },
        {
            "name": "Грамотеино",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.519499,86.358927"
        },
        {
            "name": "Гурьевск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.780121,20.609905"
        },
        {
            "name": "Ижморский",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.196638,86.623594"
        },
        {
            "name": "Итатский",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.071137,89.000115"
        },
        {
            "name": "Калтан",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.521625,87.269157"
        },
        {
            "name": "Кедровка",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "57.005450,60.774398"
        },
        {
            "name": "Кемерово",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.345023,86.062304"
        },
        {
            "name": "Киселевск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.005524,86.649758"
        },
        {
            "name": "Крапивинский",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.001451,86.785629"
        },
        {
            "name": "Ленинск-Кузнецкий",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.669913,86.173454"
        },
        {
            "name": "Мариинск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.193607,87.713098"
        },
        {
            "name": "Междуреченск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.683630,88.081392"
        },
        {
            "name": "Мыски",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.711380,87.802202"
        },
        {
            "name": "Новокузнецк",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.759594,87.121570"
        },
        {
            "name": "Осинники",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.631495,87.338093"
        },
        {
            "name": "Полысаево",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.603453,86.276016"
        },
        {
            "name": "Прокопьевск",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "53.888753,86.759183"
        },
        {
            "name": "Промышленная",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "54.914389,85.646652"
        },
        {
            "name": "Тайга",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.065033,85.633576"
        },
        {
            "name": "Таштагол",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "52.764334,87.889501"
        },
        {
            "name": "Тисуль",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.762923,88.310153"
        },
        {
            "name": "Топки",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.285522,85.614381"
        },
        {
            "name": "Тяжинский",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.121895,88.501394"
        },
        {
            "name": "Юрга",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.729764,84.894452"
        },
        {
            "name": "Яшкино",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "55.867266,85.413569"
        },
        {
            "name": "Яя",
            "district_id": 5,
            "region_id": 25,
            "coordinates": "56.208615,86.452066"
        },
        {
            "name": "Кикнур",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.309169,47.210452"
        },
        {
            "name": "Кильмезь",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "56.943806,51.064267"
        },
        {
            "name": "Арбаж",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.681224,48.317703"
        },
        {
            "name": "Аркуль",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.275918,50.060180"
        },
        {
            "name": "Белая Холуница",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.838125,50.848007"
        },
        {
            "name": "Богородское (Кировская обл.)",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.829237,50.757022"
        },
        {
            "name": "Боровой",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "55.911808,87.393168"
        },
        {
            "name": "Верхошижемье",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.009808,49.104418"
        },
        {
            "name": "Вятские Поляны (Кировская обл.)",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "56.227538,51.071019"
        },
        {
            "name": "Зуевка",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.396406,51.133369"
        },
        {
            "name": "Каринторф",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.552588,50.184279"
        },
        {
            "name": "Киров (Кировская обл.)",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.603532,49.666798"
        },
        {
            "name": "Кирово-Чепецк",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.554067,49.988560"
        },
        {
            "name": "Кирс",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "59.337252,52.234862"
        },
        {
            "name": "Кобра",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "55.029627,82.908357"
        },
        {
            "name": "Котельнич",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.289950,48.309379"
        },
        {
            "name": "Кумены",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.107621,49.906271"
        },
        {
            "name": "Ленинское",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "45.252120,35.920841"
        },
        {
            "name": "Луза",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "60.632820,47.251621"
        },
        {
            "name": "Малмыж",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "56.516250,50.670335"
        },
        {
            "name": "Мураши",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "59.399383,48.967556"
        },
        {
            "name": "Нагорск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "59.315420,50.794669"
        },
        {
            "name": "Нема",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.506797,50.507717"
        },
        {
            "name": "Нововятск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.505065,49.667471"
        },
        {
            "name": "Нолинск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.562213,49.944004"
        },
        {
            "name": "Омутнинск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.677290,52.190142"
        },
        {
            "name": "Опарино",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "59.843247,48.289734"
        },
        {
            "name": "Оричи",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.400752,49.051844"
        },
        {
            "name": "Пижанка",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.457004,48.542988"
        },
        {
            "name": "Подосиновец",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "60.273788,47.069313"
        },
        {
            "name": "Санчурск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "56.936958,47.253805"
        },
        {
            "name": "Свеча",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.276880,47.513615"
        },
        {
            "name": "Слободской",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.728649,50.173165"
        },
        {
            "name": "Советск (Кировская обл.)",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.578020,48.960297"
        },
        {
            "name": "Суна",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.830850,50.068847"
        },
        {
            "name": "Тужа",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.606754,47.936872"
        },
        {
            "name": "Уни",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "45.031918,38.972786"
        },
        {
            "name": "Уржум",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.112423,50.001255"
        },
        {
            "name": "Фаленки",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.355689,51.597439"
        },
        {
            "name": "Халтурин",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "58.545677,48.888677"
        },
        {
            "name": "Юрья",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "59.038151,49.274623"
        },
        {
            "name": "Яранск",
            "district_id": 7,
            "region_id": 26,
            "coordinates": "57.298895,47.880616"
        },
        {
            "name": "Абезь",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.150000,57.216667"
        },
        {
            "name": "Адзьвавом",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "66.596420,59.290279"
        },
        {
            "name": "Айкино",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "62.217493,49.981383"
        },
        {
            "name": "Верхняя Инта",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.983199,60.311054"
        },
        {
            "name": "Визинга",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "61.072246,50.064545"
        },
        {
            "name": "Водный",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "53.744761,87.185488"
        },
        {
            "name": "Воркута",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "67.496897,64.060217"
        },
        {
            "name": "Вуктыл",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.859595,57.317710"
        },
        {
            "name": "Елецкий",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "67.042000,64.237389"
        },
        {
            "name": "Емва",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "62.589808,50.859940"
        },
        {
            "name": "Жешарт",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "62.077247,49.569811"
        },
        {
            "name": "Заполярный",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "69.424732,30.823300"
        },
        {
            "name": "Ижма",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.007007,53.919741"
        },
        {
            "name": "Инта",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "66.039510,60.130741"
        },
        {
            "name": "Ираель",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "64.415295,55.190063"
        },
        {
            "name": "Каджером",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "64.692332,55.898492"
        },
        {
            "name": "Кажым",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "60.337696,51.531277"
        },
        {
            "name": "Кожым",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.741692,59.518276"
        },
        {
            "name": "Койгородок",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "60.456399,50.990716"
        },
        {
            "name": "Корткерос",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "61.817136,51.556869"
        },
        {
            "name": "Кослан",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.452978,48.883355"
        },
        {
            "name": "Микунь",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "62.356506,50.076243"
        },
        {
            "name": "Нижний Одес",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.642908,54.836621"
        },
        {
            "name": "Объячево",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "60.347249,49.629289"
        },
        {
            "name": "Печора",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.138349,57.190391"
        },
        {
            "name": "Сосногорск",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.593219,53.906853"
        },
        {
            "name": "Сыктывкар",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "61.647851,50.833903"
        },
        {
            "name": "Троицко-Печерск",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "62.685883,56.201422"
        },
        {
            "name": "Усинск",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.999169,57.524329"
        },
        {
            "name": "Усогорск",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.425854,48.671740"
        },
        {
            "name": "Усть-Кулом",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "61.686290,53.716095"
        },
        {
            "name": "Усть-Цильма",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "65.433333,52.150000"
        },
        {
            "name": "Ухта",
            "district_id": 3,
            "region_id": 27,
            "coordinates": "63.567321,53.747159"
        },
        {
            "name": "Антропово",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.397582,43.006686"
        },
        {
            "name": "Боговарово",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.976462,47.022032"
        },
        {
            "name": "Буй",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.480781,41.526098"
        },
        {
            "name": "Волгореченск",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.445687,41.157061"
        },
        {
            "name": "Галич",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.375041,42.349385"
        },
        {
            "name": "Горчуха",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.705275,43.715069"
        },
        {
            "name": "Зебляки",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.374700,45.748041"
        },
        {
            "name": "Кадый",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.785610,43.200317"
        },
        {
            "name": "Кологрив",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.826467,44.324726"
        },
        {
            "name": "Кострома",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.777482,40.969893"
        },
        {
            "name": "Красное-на-Волге",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.513666,41.237192"
        },
        {
            "name": "Макарьев",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.881432,43.805035"
        },
        {
            "name": "Мантурово",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.322759,44.756427"
        },
        {
            "name": "Нерехта",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.457235,40.577358"
        },
        {
            "name": "Нея",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.287756,43.880669"
        },
        {
            "name": "Островское",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.799747,42.247472"
        },
        {
            "name": "Павино",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "59.110723,46.153958"
        },
        {
            "name": "Парфентьево",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "55.105665,38.819935"
        },
        {
            "name": "Поназырево",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.357936,46.316578"
        },
        {
            "name": "Солигалич",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "59.073742,42.288218"
        },
        {
            "name": "Судиславль",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "57.877367,41.712372"
        },
        {
            "name": "Сусанино",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "59.489595,30.357853"
        },
        {
            "name": "Чухлома",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.754871,42.690684"
        },
        {
            "name": "Шарья",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.379957,45.513933"
        },
        {
            "name": "Шемятино",
            "district_id": 1,
            "region_id": 28,
            "coordinates": "58.071018,44.129279"
        },
        {
            "name": "Абинск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.871534,38.164462"
        },
        {
            "name": "Абрау-Дюрсо",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.701372,37.599936"
        },
        {
            "name": "Адлер",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "43.434323,39.933946"
        },
        {
            "name": "Анапа",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.885701,37.319919"
        },
        {
            "name": "Апшеронск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.465408,39.726798"
        },
        {
            "name": "Армавир",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.987360,41.111133"
        },
        {
            "name": "Архипо-Осиповка",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.371640,38.534674"
        },
        {
            "name": "Афипский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.905613,38.842387"
        },
        {
            "name": "Ахтырский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.852717,38.294807"
        },
        {
            "name": "Ачуево",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.710571,37.773861"
        },
        {
            "name": "Белая Глина",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.081169,40.868303"
        },
        {
            "name": "Белореченск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.759197,39.881716"
        },
        {
            "name": "Верхнебаканский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.842481,37.668331"
        },
        {
            "name": "Выселки",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.579008,39.654307"
        },
        {
            "name": "Геленджик",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.591862,38.024166"
        },
        {
            "name": "Гиагинская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.863272,40.066581"
        },
        {
            "name": "Горячий Ключ",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.635384,39.135119"
        },
        {
            "name": "Гулькевичи",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.360552,40.701942"
        },
        {
            "name": "Джубга",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.326493,38.701586"
        },
        {
            "name": "Динская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.220611,39.230811"
        },
        {
            "name": "Ейск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.682578,38.270294"
        },
        {
            "name": "Ильский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.844256,38.562448"
        },
        {
            "name": "Кабардинка",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.648877,37.940110"
        },
        {
            "name": "Калинино",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "55.610433,46.847972"
        },
        {
            "name": "Калининская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.486599,38.654404"
        },
        {
            "name": "Каменномостский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.299952,40.187315"
        },
        {
            "name": "Каневская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.075914,38.967110"
        },
        {
            "name": "Кореновск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.462388,39.448110"
        },
        {
            "name": "Красноармейская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.355483,38.333766"
        },
        {
            "name": "Краснодар",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.039267,38.987221"
        },
        {
            "name": "Кропоткин",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.429605,40.554035"
        },
        {
            "name": "Крыловская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.315192,39.970020"
        },
        {
            "name": "Крымск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.927785,37.993213"
        },
        {
            "name": "Курганинск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.885976,40.586230"
        },
        {
            "name": "Кущевская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.554535,39.611664"
        },
        {
            "name": "Лабинск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.623693,40.747137"
        },
        {
            "name": "Лазаревское",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "43.915025,39.333392"
        },
        {
            "name": "Ленинградская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.326690,39.380901"
        },
        {
            "name": "Майкоп (Краснодарский край)",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.501300,38.134900"
        },
        {
            "name": "Мостовской",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.409873,40.795033"
        },
        {
            "name": "Новокубанск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.111673,41.018282"
        },
        {
            "name": "Новороссийск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.715401,37.761967"
        },
        {
            "name": "Отрадная",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.390777,41.519993"
        },
        {
            "name": "Павловская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.135968,39.787880"
        },
        {
            "name": "Приморско-Ахтарск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.047314,38.190411"
        },
        {
            "name": "Северская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.852877,38.677006"
        },
        {
            "name": "Славянск-на-Кубани",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.258801,38.124859"
        },
        {
            "name": "Сочи",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "43.602808,39.734154"
        },
        {
            "name": "Староминская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.533307,39.040516"
        },
        {
            "name": "Старощербиновская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "46.628536,38.677123"
        },
        {
            "name": "Тбилисская",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.362411,40.185445"
        },
        {
            "name": "Темрюк",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.271001,37.382298"
        },
        {
            "name": "Тимашевск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.609339,38.954701"
        },
        {
            "name": "Тихорецк",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.867652,40.105095"
        },
        {
            "name": "Туапсе",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.106518,39.080645"
        },
        {
            "name": "Тульский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.518316,40.174617"
        },
        {
            "name": "Усть-Лабинск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.215924,39.690689"
        },
        {
            "name": "Хадыженск",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "44.418695,39.531427"
        },
        {
            "name": "Хоста",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "43.515300,39.873964"
        },
        {
            "name": "Шовгеновский",
            "district_id": 2,
            "region_id": 29,
            "coordinates": "45.054944,40.149586"
        },
        {
            "name": "Абаза",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "52.622592,90.079410"
        },
        {
            "name": "Абакан",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.717564,91.429317"
        },
        {
            "name": "Агинское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "51.102832,114.526284"
        },
        {
            "name": "Артемовск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "48.598667,37.998037"
        },
        {
            "name": "Аскиз",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.141881,90.437240"
        },
        {
            "name": "Ачинск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.236084,90.490315"
        },
        {
            "name": "Байкит",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "61.683367,96.380620"
        },
        {
            "name": "Балахта",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.386381,91.638363"
        },
        {
            "name": "Балыкса",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.274526,89.177813"
        },
        {
            "name": "Белый Яр",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "58.442542,85.068031"
        },
        {
            "name": "Бея",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.047526,90.944621"
        },
        {
            "name": "Бискамжа",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.447971,89.513748"
        },
        {
            "name": "Боготол",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.213849,89.538204"
        },
        {
            "name": "Боград",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "54.229087,90.841488"
        },
        {
            "name": "Богучаны",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "58.377660,97.454817"
        },
        {
            "name": "Большая Мурта",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.910336,93.121497"
        },
        {
            "name": "Большой Улуй",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.655663,90.576845"
        },
        {
            "name": "Бородино (Красноярский край)",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.907856,94.902641"
        },
        {
            "name": "Ванавара",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "60.339410,102.296543"
        },
        {
            "name": "Горячегорск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.403599,88.914674"
        },
        {
            "name": "Дзержинское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.828952,95.221602"
        },
        {
            "name": "Дивногорск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.960443,92.371078"
        },
        {
            "name": "Диксон",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "73.504890,80.580917"
        },
        {
            "name": "Дудинка",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "69.404195,86.200291"
        },
        {
            "name": "Емельяново",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.176788,92.481397"
        },
        {
            "name": "Енисейск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "58.450100,92.186769"
        },
        {
            "name": "Ермаковское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.274830,92.398024"
        },
        {
            "name": "Железногорск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.234356,93.488816"
        },
        {
            "name": "Заозерный",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.974213,94.709633"
        },
        {
            "name": "Зеленогорск (Красноярский край)",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.110355,94.613901"
        },
        {
            "name": "Игарка",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "67.464922,86.577976"
        },
        {
            "name": "Идринское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "54.366717,92.102410"
        },
        {
            "name": "Иланский",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.243705,96.095439"
        },
        {
            "name": "Ирбейское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.641817,95.455650"
        },
        {
            "name": "Казачинское (Красноярский край)",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "57.695150,93.275382"
        },
        {
            "name": "Канск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.216814,95.719815"
        },
        {
            "name": "Каратузское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.604957,92.872516"
        },
        {
            "name": "Караул",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "70.070114,83.230835"
        },
        {
            "name": "Кодинск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "58.607673,99.177909"
        },
        {
            "name": "Козулька",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.162193,91.393907"
        },
        {
            "name": "Копьево",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "54.988608,89.833339"
        },
        {
            "name": "Краснотуранск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "54.320410,91.548113"
        },
        {
            "name": "Красноярск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.015283,92.893248"
        },
        {
            "name": "Курагино",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.897095,92.681212"
        },
        {
            "name": "Лесосибирск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "58.227618,92.496032"
        },
        {
            "name": "Минусинск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.697821,91.696317"
        },
        {
            "name": "Мотыгино",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "58.184233,94.676674"
        },
        {
            "name": "Назарово",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.013195,90.402565"
        },
        {
            "name": "Нижний Ингаш",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.193706,96.525080"
        },
        {
            "name": "Новоселово",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.012321,90.981387"
        },
        {
            "name": "Норильск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "69.355790,88.189294"
        },
        {
            "name": "Партизанское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.503936,94.403289"
        },
        {
            "name": "Пировское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "57.612732,92.281510"
        },
        {
            "name": "Северо-Енисейский",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "60.373528,93.046448"
        },
        {
            "name": "Сосновоборск (Красноярский край)",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.123153,93.340080"
        },
        {
            "name": "Тасеево",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "57.191980,94.901711"
        },
        {
            "name": "Таштып",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "52.804527,89.883080"
        },
        {
            "name": "Тура",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "64.273851,100.218793"
        },
        {
            "name": "Туруханск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "65.795860,87.962418"
        },
        {
            "name": "Тюхтет",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "56.532166,89.316750"
        },
        {
            "name": "Ужур",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.325349,89.878543"
        },
        {
            "name": "Уяр",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.820421,94.341147"
        },
        {
            "name": "Хатанга",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "71.964027,102.440613"
        },
        {
            "name": "Черемушки",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "43.100392,131.903800"
        },
        {
            "name": "Черногорск",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.824709,91.322872"
        },
        {
            "name": "Шалинское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.727945,93.768409"
        },
        {
            "name": "Шарыпово (Красноярский край)",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "55.522254,89.220532"
        },
        {
            "name": "Шира",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "54.510694,90.196545"
        },
        {
            "name": "Шушенское",
            "district_id": 5,
            "region_id": 30,
            "coordinates": "53.337199,91.933470"
        },
        {
            "name": "Варгаши",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.366951,65.815522"
        },
        {
            "name": "Глядянское",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "54.894007,65.089465"
        },
        {
            "name": "Далматово",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "56.265626,62.946875"
        },
        {
            "name": "Каргаполье",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.956158,64.428211"
        },
        {
            "name": "Катайск",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "56.289717,62.577401"
        },
        {
            "name": "Кетово",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.347915,65.323903"
        },
        {
            "name": "Курган",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.464911,65.305351"
        },
        {
            "name": "Куртамыш",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "54.915113,64.441627"
        },
        {
            "name": "Лебяжье",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "59.960695,29.416431"
        },
        {
            "name": "Макушино",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.211337,67.254318"
        },
        {
            "name": "Мишкино",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.534467,55.957569"
        },
        {
            "name": "Мокроусово",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.808658,66.765825"
        },
        {
            "name": "Петухово",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.071137,67.897051"
        },
        {
            "name": "Половинное",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "54.789409,65.967484"
        },
        {
            "name": "Сафакулево",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "54.989789,62.547128"
        },
        {
            "name": "Целинное",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "54.497952,63.651096"
        },
        {
            "name": "Шадринск",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "56.088256,63.634265"
        },
        {
            "name": "Шатрово",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "56.515564,64.631671"
        },
        {
            "name": "Шумиха",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.230006,63.287460"
        },
        {
            "name": "Щучье",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.207787,62.744182"
        },
        {
            "name": "Юргамыш",
            "district_id": 6,
            "region_id": 31,
            "coordinates": "55.380052,64.458841"
        },
        {
            "name": "Альменево",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "54.941458,63.561041"
        },
        {
            "name": "Белая",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "54.389266,56.241705"
        },
        {
            "name": "Большое Солдатское",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.327875,35.517544"
        },
        {
            "name": "Глушково",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.341478,34.631008"
        },
        {
            "name": "Горшечное",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.528472,38.027636"
        },
        {
            "name": "Дмитриев-Льговский",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "52.120696,35.061851"
        },
        {
            "name": "Железногорск",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "56.234356,93.488816"
        },
        {
            "name": "Золотухино",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "52.085488,36.376376"
        },
        {
            "name": "Касторное",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.831543,38.139458"
        },
        {
            "name": "Конышевка",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.840927,35.287606"
        },
        {
            "name": "Коренево",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.401256,34.912835"
        },
        {
            "name": "Курск",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.709196,36.156224"
        },
        {
            "name": "Курчатов",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.657186,35.678330"
        },
        {
            "name": "Кшенский",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.839112,37.727791"
        },
        {
            "name": "Льгов",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.655396,35.257255"
        },
        {
            "name": "Мантурово",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "58.322759,44.756427"
        },
        {
            "name": "Медвенка",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.416746,36.111934"
        },
        {
            "name": "Обоянь",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.212174,36.270820"
        },
        {
            "name": "Поныри",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "52.311809,36.300050"
        },
        {
            "name": "Пристень",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.233438,36.697122"
        },
        {
            "name": "Прямицыно",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.654603,35.944112"
        },
        {
            "name": "Рыльск",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.575974,34.679482"
        },
        {
            "name": "Суджа",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.204192,35.304277"
        },
        {
            "name": "Тим",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.620270,37.127684"
        },
        {
            "name": "Фатеж",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "52.093906,35.851992"
        },
        {
            "name": "Хомутовка",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.927262,34.562129"
        },
        {
            "name": "Черемисиново",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.887598,37.267204"
        },
        {
            "name": "Щигры",
            "district_id": 1,
            "region_id": 32,
            "coordinates": "51.869679,36.914859"
        },
        {
            "name": "Грязи",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.490854,39.959718"
        },
        {
            "name": "Данков",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "53.247386,39.140108"
        },
        {
            "name": "Доброе",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.861569,39.807398"
        },
        {
            "name": "Долгоруково",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.321721,38.346308"
        },
        {
            "name": "Елец",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.617099,38.504867"
        },
        {
            "name": "Задонск",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.390232,38.931498"
        },
        {
            "name": "Измалково",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.695765,37.962398"
        },
        {
            "name": "Казинка",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.537475,39.828465"
        },
        {
            "name": "Лебедянь",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "53.017669,39.131402"
        },
        {
            "name": "Лев Толстой",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "53.209845,39.448058"
        },
        {
            "name": "Липецк",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.612200,39.598123"
        },
        {
            "name": "Тербуны",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.151306,38.277921"
        },
        {
            "name": "Усмань",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.040784,39.740619"
        },
        {
            "name": "Хлевное",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "52.195712,39.098886"
        },
        {
            "name": "Чаплыгин",
            "district_id": 1,
            "region_id": 33,
            "coordinates": "53.245813,39.976736"
        },
        {
            "name": "Анадырь (Магаданская обл.)",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "64.733661,177.496826"
        },
        {
            "name": "Атка",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "60.836169,151.788489"
        },
        {
            "name": "Беринговский",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "63.065438,179.355123"
        },
        {
            "name": "Билибино",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "68.059639,166.443893"
        },
        {
            "name": "Большевик",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "78.549991,103.051774"
        },
        {
            "name": "Ванкарем",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "67.831085,-175.869843"
        },
        {
            "name": "Кадыкчан",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "63.083333,147.050000"
        },
        {
            "name": "Лаврентия",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "65.583549,-171.038925"
        },
        {
            "name": "Магадан",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "59.561152,150.830141"
        },
        {
            "name": "Мыс Шмидта",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "68.884224,-179.431122"
        },
        {
            "name": "Ола",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "59.581848,151.288561"
        },
        {
            "name": "Омсукчан",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "62.533333,155.800000"
        },
        {
            "name": "Палатка",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "60.106366,150.949000"
        },
        {
            "name": "Певек",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "69.692947,170.399612"
        },
        {
            "name": "Провидения",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "64.432720,-173.238567"
        },
        {
            "name": "Сеймчан",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "62.930833,152.385000"
        },
        {
            "name": "Синегорье",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "62.083644,150.519445"
        },
        {
            "name": "Сусуман",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "62.781062,148.145281"
        },
        {
            "name": "Усть-Омчуг",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "61.150000,149.633333"
        },
        {
            "name": "Эвенск",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "61.916667,159.233333"
        },
        {
            "name": "Эгвекинот",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "66.320504,-179.118379"
        },
        {
            "name": "Ягодное",
            "district_id": 4,
            "region_id": 34,
            "coordinates": "62.521018,149.618348"
        },
        {
            "name": "Волжск",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "55.872277,48.356852"
        },
        {
            "name": "Дубовский",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "48.080357,39.151543"
        },
        {
            "name": "Звенигово",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "55.972086,48.015521"
        },
        {
            "name": "Йошкар-Ола",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.640223,47.883858"
        },
        {
            "name": "Килемары",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.779429,46.863721"
        },
        {
            "name": "Козьмодемьянск",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.329418,46.553016"
        },
        {
            "name": "Куженер",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.814821,48.909865"
        },
        {
            "name": "Мари-Турек",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.790463,49.623187"
        },
        {
            "name": "Медведево",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.632281,47.790243"
        },
        {
            "name": "Морки",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.433103,48.993194"
        },
        {
            "name": "Новый Торьял",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "57.008218,48.726879"
        },
        {
            "name": "Оршанка",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.919295,47.889218"
        },
        {
            "name": "Параньга",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.704201,49.402827"
        },
        {
            "name": "Сернур",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.934065,49.141249"
        },
        {
            "name": "Советский (Марий Эл)",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.760173,48.468650"
        },
        {
            "name": "Юрино",
            "district_id": 7,
            "region_id": 35,
            "coordinates": "56.293681,46.292361"
        },
        {
            "name": "Ардатов",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.846949,46.242137"
        },
        {
            "name": "Атюрьево",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.316540,43.337213"
        },
        {
            "name": "Атяшево",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.588237,46.086956"
        },
        {
            "name": "Большие Березники",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.174553,45.959178"
        },
        {
            "name": "Большое Игнатово",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "55.017188,45.579272"
        },
        {
            "name": "Выша",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.027398,42.106350"
        },
        {
            "name": "Ельники",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.622400,43.867979"
        },
        {
            "name": "Зубова Поляна",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.091667,42.816667"
        },
        {
            "name": "Инсар",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "53.861193,44.376432"
        },
        {
            "name": "Кадошкино",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.028190,44.421523"
        },
        {
            "name": "Кемля",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.694935,45.235670"
        },
        {
            "name": "Ковылкино",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.042541,43.942676"
        },
        {
            "name": "Комсомольский (Мордовия)",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.434583,45.838694"
        },
        {
            "name": "Кочкурово",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.033828,45.427183"
        },
        {
            "name": "Краснослободск",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.427262,43.785904"
        },
        {
            "name": "Лямбирь",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.282962,45.131163"
        },
        {
            "name": "Ромоданово",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.420705,45.343696"
        },
        {
            "name": "Рузаевка",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.060056,44.949053"
        },
        {
            "name": "Саранск",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.200048,45.174512"
        },
        {
            "name": "Старое Шайгово",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.309081,44.453123"
        },
        {
            "name": "Темников",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.636598,43.220486"
        },
        {
            "name": "Теньгушево",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.768061,42.712722"
        },
        {
            "name": "Торбеево",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.073283,43.246101"
        },
        {
            "name": "Чамзинка",
            "district_id": 7,
            "region_id": 36,
            "coordinates": "54.400691,45.789359"
        },
        {
            "name": "Апатиты",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.577788,33.390416"
        },
        {
            "name": "Африканда",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.437080,32.745888"
        },
        {
            "name": "Верхнетуломский",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.611635,31.830740"
        },
        {
            "name": "Видяево",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.318166,32.799855"
        },
        {
            "name": "Гаджиево",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.251016,33.320091"
        },
        {
            "name": "Заозерск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.405460,32.442513"
        },
        {
            "name": "Заполярный",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.424732,30.823300"
        },
        {
            "name": "Зареченск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "66.679831,31.429823"
        },
        {
            "name": "Зашеек",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.403064,32.518949"
        },
        {
            "name": "Зеленоборский",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "66.870387,32.391962"
        },
        {
            "name": "Кандалакша",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.170051,32.422966"
        },
        {
            "name": "Кильдинстрой",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.807121,33.121338"
        },
        {
            "name": "Кировск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.610736,33.672401"
        },
        {
            "name": "Ковдор",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.570005,30.473871"
        },
        {
            "name": "Кола",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.883333,33.083333"
        },
        {
            "name": "Конда",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "60.115926,68.066594"
        },
        {
            "name": "Ловозеро",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.006372,35.026000"
        },
        {
            "name": "Мончегорск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.943134,32.891956"
        },
        {
            "name": "Мурманск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.958524,33.082660"
        },
        {
            "name": "Мурмаши",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.814909,32.812192"
        },
        {
            "name": "Никель",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.409166,30.217118"
        },
        {
            "name": "Оленегорск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "68.142461,33.257392"
        },
        {
            "name": "Полярные Зори",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.374401,32.488946"
        },
        {
            "name": "Полярный",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.198673,33.439448"
        },
        {
            "name": "Ревда (Мурманская обл.)",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "67.943883,34.549659"
        },
        {
            "name": "Североморск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.065506,33.409269"
        },
        {
            "name": "Снежногорск",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "69.188234,33.245483"
        },
        {
            "name": "Умба",
            "district_id": 3,
            "region_id": 37,
            "coordinates": "66.697186,34.335096"
        },
        {
            "name": "Ардатов",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "54.846949,46.242137"
        },
        {
            "name": "Арзамас",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.396461,43.829918"
        },
        {
            "name": "Арья",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.487375,45.975792"
        },
        {
            "name": "Балахна",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.517046,43.581947"
        },
        {
            "name": "Богородск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.103729,43.517444"
        },
        {
            "name": "Большереченск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.211154,74.449471"
        },
        {
            "name": "Большое Болдино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.004504,45.311813"
        },
        {
            "name": "Большое Козино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.404360,43.713485"
        },
        {
            "name": "Большое Мурашкино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.779525,44.772699"
        },
        {
            "name": "Большое Пикино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.347450,44.192340"
        },
        {
            "name": "Бор",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.358830,44.076680"
        },
        {
            "name": "Бутурлино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.572108,44.871899"
        },
        {
            "name": "Вад",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "60.037529,30.420164"
        },
        {
            "name": "Варнавино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.398739,45.087055"
        },
        {
            "name": "Васильсурск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.131044,46.017139"
        },
        {
            "name": "Вахтан",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.960996,46.687885"
        },
        {
            "name": "Вача",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.803030,42.771149"
        },
        {
            "name": "Ветлуга",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.856702,45.777401"
        },
        {
            "name": "Виля",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.257147,42.205173"
        },
        {
            "name": "Вознесенское",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "54.894864,42.771797"
        },
        {
            "name": "Володарск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.225469,43.182963"
        },
        {
            "name": "Воротынец",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.061875,45.854965"
        },
        {
            "name": "Ворсма",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.986411,43.270671"
        },
        {
            "name": "Воскресенское",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.532854,37.448643"
        },
        {
            "name": "Выездное",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.378368,43.785492"
        },
        {
            "name": "Выкса",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.326215,42.170170"
        },
        {
            "name": "Гагино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.228584,45.022403"
        },
        {
            "name": "Гидроторф",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.472969,43.541328"
        },
        {
            "name": "Горбатов",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.127664,43.072999"
        },
        {
            "name": "Горбатовка",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.259367,43.745722"
        },
        {
            "name": "Городец",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.649955,43.480090"
        },
        {
            "name": "Дальнее Константиново",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.807127,44.086347"
        },
        {
            "name": "Дзержинск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.244099,43.435181"
        },
        {
            "name": "Дивеево",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.037502,43.246443"
        },
        {
            "name": "Досчатое",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.405384,42.119280"
        },
        {
            "name": "Заволжье",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.641585,43.402906"
        },
        {
            "name": "Керженец",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.449092,44.782007"
        },
        {
            "name": "Княгинино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.822083,45.030341"
        },
        {
            "name": "Ковернино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.126044,43.805995"
        },
        {
            "name": "Красные Баки",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.126080,45.149252"
        },
        {
            "name": "Кстово",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.132885,44.174010"
        },
        {
            "name": "Кулебаки",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.420361,42.523365"
        },
        {
            "name": "Лукоянов",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.031491,44.479946"
        },
        {
            "name": "Лысково",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.013544,45.034201"
        },
        {
            "name": "Навашино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.544832,42.199041"
        },
        {
            "name": "Нижний Новгород",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.296504,43.936059"
        },
        {
            "name": "Новосмолинский",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.286208,43.026435"
        },
        {
            "name": "Павлово",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.962069,43.091169"
        },
        {
            "name": "Первомайск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "48.045125,30.888431"
        },
        {
            "name": "Перевоз",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.592166,44.540103"
        },
        {
            "name": "Пильна",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.557197,45.918943"
        },
        {
            "name": "Починки",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "54.712461,44.837903"
        },
        {
            "name": "Саров (Нижегородская обл.)",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "54.934279,43.325250"
        },
        {
            "name": "Семенов",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.788948,44.501832"
        },
        {
            "name": "Сергач",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.521864,45.466572"
        },
        {
            "name": "Сеченово",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.231322,45.896181"
        },
        {
            "name": "Сосновское",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.800875,43.165450"
        },
        {
            "name": "Спасское",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "58.027299,39.063895"
        },
        {
            "name": "Тонкино",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.370012,46.455025"
        },
        {
            "name": "Тоншаево",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.734580,47.012798"
        },
        {
            "name": "Уразовка",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.398197,45.615076"
        },
        {
            "name": "Урень",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.474637,45.793052"
        },
        {
            "name": "Чкаловск",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "56.767133,43.241912"
        },
        {
            "name": "Шаранга",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.178496,46.541831"
        },
        {
            "name": "Шатки",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "55.186000,44.119799"
        },
        {
            "name": "Шахунья",
            "district_id": 7,
            "region_id": 38,
            "coordinates": "57.673451,46.610728"
        },
        {
            "name": "Анциферово",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "55.556387,38.814138"
        },
        {
            "name": "Батецкий",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.644669,30.304372"
        },
        {
            "name": "Большая Вишера",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.908056,32.083114"
        },
        {
            "name": "Боровичи",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.392551,33.906826"
        },
        {
            "name": "Валдай",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.978879,33.243615"
        },
        {
            "name": "Великий Новгород (Новгород)",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.525570,31.274193"
        },
        {
            "name": "Волот",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.928288,30.705742"
        },
        {
            "name": "Зарубино",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "42.647737,131.077030"
        },
        {
            "name": "Крестцы",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.247707,32.523177"
        },
        {
            "name": "Любытино",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.813224,33.391386"
        },
        {
            "name": "Малая Вишера",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.847342,32.220568"
        },
        {
            "name": "Марево",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.313207,32.088048"
        },
        {
            "name": "Мошенское",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.508379,34.583003"
        },
        {
            "name": "Окуловка",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.399536,33.291002"
        },
        {
            "name": "Парфино",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.967979,31.651525"
        },
        {
            "name": "Пестово",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.593197,35.808054"
        },
        {
            "name": "Поддорье",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.466898,31.108730"
        },
        {
            "name": "Сольцы",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.118644,30.307658"
        },
        {
            "name": "Старая Русса",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.989523,31.354785"
        },
        {
            "name": "Хвойная",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.893606,34.509830"
        },
        {
            "name": "Холм",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "57.147205,31.175418"
        },
        {
            "name": "Чудово",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "59.127272,31.670282"
        },
        {
            "name": "Шимск",
            "district_id": 3,
            "region_id": 39,
            "coordinates": "58.210039,30.713571"
        },
        {
            "name": "Баган",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.098445,77.679384"
        },
        {
            "name": "Барабинск",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.346360,78.346685"
        },
        {
            "name": "Бердск",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.775064,83.080031"
        },
        {
            "name": "Биаза",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "56.591362,78.298080"
        },
        {
            "name": "Болотное",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.668739,84.389770"
        },
        {
            "name": "Венгерово",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.683921,76.758651"
        },
        {
            "name": "Довольное",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.493307,79.683317"
        },
        {
            "name": "Завьялово",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "52.838208,80.915920"
        },
        {
            "name": "Искитим",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.642619,83.308300"
        },
        {
            "name": "Карасук",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "53.734294,78.002410"
        },
        {
            "name": "Каргат",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.198733,80.283522"
        },
        {
            "name": "Колывань",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.303440,82.736478"
        },
        {
            "name": "Краснозерское",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.002725,79.253276"
        },
        {
            "name": "Крутиха",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "53.968556,81.198764"
        },
        {
            "name": "Куйбышев (Новосибирская обл.)",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.447652,78.311387"
        },
        {
            "name": "Купино",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.368612,77.295878"
        },
        {
            "name": "Кыштовка",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "56.546544,76.646094"
        },
        {
            "name": "Маслянино",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.345319,84.209766"
        },
        {
            "name": "Мошково",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.308143,83.613887"
        },
        {
            "name": "Новосибирск",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.008353,82.935733"
        },
        {
            "name": "Норильск",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "69.355790,88.189294"
        },
        {
            "name": "Обь",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "59.656797,74.728165"
        },
        {
            "name": "Ордынское",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.350639,81.845435"
        },
        {
            "name": "Северное",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "56.344586,78.345323"
        },
        {
            "name": "Сузун",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "53.784247,82.314837"
        },
        {
            "name": "Татарск",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.193653,75.968454"
        },
        {
            "name": "Тогучин",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.241270,84.397544"
        },
        {
            "name": "Убинское",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.302549,79.682797"
        },
        {
            "name": "Усть-Тарка",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.574680,75.702905"
        },
        {
            "name": "Чаны",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.313514,76.776139"
        },
        {
            "name": "Черепаново",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.219066,83.367094"
        },
        {
            "name": "Чистоозерное",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "54.708305,76.580838"
        },
        {
            "name": "Чулым",
            "district_id": 5,
            "region_id": 40,
            "coordinates": "55.101514,80.969875"
        },
        {
            "name": "Береговой",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "45.353739,36.811824"
        },
        {
            "name": "Большеречье",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.089996,74.620287"
        },
        {
            "name": "Большие Уки",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.950877,72.632731"
        },
        {
            "name": "Горьковское",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.370783,74.364699"
        },
        {
            "name": "Знаменское (Омская обл.)",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "57.121944,73.898071"
        },
        {
            "name": "Исилькуль",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.901309,71.266145"
        },
        {
            "name": "Калачинск",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.032388,74.569742"
        },
        {
            "name": "Колосовка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.469938,73.604372"
        },
        {
            "name": "Кормиловка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.998272,74.096363"
        },
        {
            "name": "Крутинка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.005836,71.500557"
        },
        {
            "name": "Любинский",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.153634,72.693732"
        },
        {
            "name": "Марьяновка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.960858,72.639224"
        },
        {
            "name": "Муромцево",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.372892,75.239353"
        },
        {
            "name": "Называевск",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.567878,71.352459"
        },
        {
            "name": "Нижняя Омка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.433063,74.938555"
        },
        {
            "name": "Нововаршавка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.169452,74.693250"
        },
        {
            "name": "Одесское",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.208454,72.961436"
        },
        {
            "name": "Оконешниково",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.833494,75.087290"
        },
        {
            "name": "Омск",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.988480,73.324236"
        },
        {
            "name": "Павлоградка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.204853,73.565890"
        },
        {
            "name": "Полтавка",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.364736,71.753868"
        },
        {
            "name": "Русская Поляна",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "53.778695,73.878447"
        },
        {
            "name": "Саргатское",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.608492,73.488201"
        },
        {
            "name": "Седельниково",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.944416,75.301193"
        },
        {
            "name": "Таврическое",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.585987,73.638661"
        },
        {
            "name": "Тара",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "56.885684,74.375943"
        },
        {
            "name": "Тевриз",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "57.512722,72.400780"
        },
        {
            "name": "Тюкалинск",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "55.871335,72.207429"
        },
        {
            "name": "Усть-Ишим",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "57.692596,71.167194"
        },
        {
            "name": "Черлак",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.157684,74.796445"
        },
        {
            "name": "Шербакуль",
            "district_id": 5,
            "region_id": 41,
            "coordinates": "54.633563,72.401636"
        },
        {
            "name": "Абдулино",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.681954,53.647480"
        },
        {
            "name": "Адамовка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.521760,59.941868"
        },
        {
            "name": "Айдырлинский",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.937603,43.503299"
        },
        {
            "name": "Акбулак",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.001821,55.630588"
        },
        {
            "name": "Аккермановка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.190126,58.221235"
        },
        {
            "name": "Асекеево",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.574846,52.812900"
        },
        {
            "name": "Беляевка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "46.489488,30.201623"
        },
        {
            "name": "Бугуруслан",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.623405,52.433222"
        },
        {
            "name": "Бузулук",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.773283,52.261325"
        },
        {
            "name": "Гай",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.473158,58.455201"
        },
        {
            "name": "Грачевка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "45.203056,42.401887"
        },
        {
            "name": "Домбаровский",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "50.761050,59.533186"
        },
        {
            "name": "Дубенский",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.453284,56.633879"
        },
        {
            "name": "Илек",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.525806,53.389854"
        },
        {
            "name": "Ириклинский",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.672793,58.640245"
        },
        {
            "name": "Кувандык",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.479495,57.364103"
        },
        {
            "name": "Курманаевка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.516732,52.068768"
        },
        {
            "name": "Матвеевка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.504606,53.478484"
        },
        {
            "name": "Медногорск",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.396870,57.608466"
        },
        {
            "name": "Новоорск",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.383305,58.976996"
        },
        {
            "name": "Новосергиевка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.094117,53.639226"
        },
        {
            "name": "Новотроицк",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.201105,58.298754"
        },
        {
            "name": "Октябрьское (Оренбург.)",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.347965,55.506134"
        },
        {
            "name": "Оренбург",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.766648,55.100454"
        },
        {
            "name": "Орск",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.214524,58.544057"
        },
        {
            "name": "Первомайский (Оренбург.)",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.542581,54.957490"
        },
        {
            "name": "Переволоцкий",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.876783,54.187792"
        },
        {
            "name": "Пономаревка",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.318693,54.107108"
        },
        {
            "name": "Саракташ",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.786287,56.355368"
        },
        {
            "name": "Светлый (Оренбургская обл.)",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "50.820238,60.851560"
        },
        {
            "name": "Северное",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "56.344586,78.345323"
        },
        {
            "name": "Соль-Илецк",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.164590,54.988457"
        },
        {
            "name": "Сорочинск",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.424332,53.155701"
        },
        {
            "name": "Ташла",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "53.705438,49.759283"
        },
        {
            "name": "Тоцкое",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.522007,52.744454"
        },
        {
            "name": "Тюльган",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.356947,56.158224"
        },
        {
            "name": "Шарлык",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.920971,54.746108"
        },
        {
            "name": "Энергетик",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "52.032724,113.503317"
        },
        {
            "name": "Ясный",
            "district_id": 7,
            "region_id": 42,
            "coordinates": "51.028829,59.868361"
        },
        {
            "name": "Болхов",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "53.440651,36.006971"
        },
        {
            "name": "Верховье",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.805639,37.228367"
        },
        {
            "name": "Глазуновка",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.501509,36.328257"
        },
        {
            "name": "Дмитровск-Орловский",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.508184,35.145935"
        },
        {
            "name": "Долгое",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.058167,37.530089"
        },
        {
            "name": "Залегощь",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.897238,36.873491"
        },
        {
            "name": "Змиевка",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.665669,36.369316"
        },
        {
            "name": "Знаменское (Орловская обл.)",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "53.276523,35.683023"
        },
        {
            "name": "Колпны",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.223578,37.023021"
        },
        {
            "name": "Красная Заря",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "55.783442,37.717374"
        },
        {
            "name": "Кромы",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.686510,35.757624"
        },
        {
            "name": "Ливны",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.424625,37.599641"
        },
        {
            "name": "Малоархангельск",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.399280,36.502826"
        },
        {
            "name": "Мценск",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "53.288938,36.580145"
        },
        {
            "name": "Нарышкино",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.964451,35.728010"
        },
        {
            "name": "Новосиль",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.974378,37.047619"
        },
        {
            "name": "Орел",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.966847,36.062490"
        },
        {
            "name": "Покровское",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "55.662050,36.812791"
        },
        {
            "name": "Сосково",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.746312,35.383899"
        },
        {
            "name": "Тросна",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.447033,35.785078"
        },
        {
            "name": "Хомутово",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.472576,104.403914"
        },
        {
            "name": "Хотынец",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "53.121299,35.387945"
        },
        {
            "name": "Шаблыкино",
            "district_id": 1,
            "region_id": 43,
            "coordinates": "52.856629,35.199593"
        },
        {
            "name": "Башмаково",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.213144,43.042961"
        },
        {
            "name": "Беднодемьяновск",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.927459,43.180429"
        },
        {
            "name": "Беково",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.460468,43.705761"
        },
        {
            "name": "Белинский",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.968911,43.407302"
        },
        {
            "name": "Бессоновка",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.277050,45.030018"
        },
        {
            "name": "Вадинск",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.691329,43.047814"
        },
        {
            "name": "Верхозим",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.913314,46.365284"
        },
        {
            "name": "Городище (Пензенская обл.)",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.279089,45.696072"
        },
        {
            "name": "Евлашево",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.102333,46.821804"
        },
        {
            "name": "Заречный (Пензенская обл.)",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.185580,45.168509"
        },
        {
            "name": "Земетчино",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.496286,42.614721"
        },
        {
            "name": "Золотаревка",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.072254,45.319319"
        },
        {
            "name": "Исса",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.862826,44.855823"
        },
        {
            "name": "Каменка",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.186259,44.012306"
        },
        {
            "name": "Колышлей",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.704412,44.551941"
        },
        {
            "name": "Кондоль",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.820349,45.042128"
        },
        {
            "name": "Кузнецк",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.118366,46.584552"
        },
        {
            "name": "Лопатино",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.621017,45.803424"
        },
        {
            "name": "Малая Сердоба",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.469710,44.958240"
        },
        {
            "name": "Мокшан",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.430883,44.614973"
        },
        {
            "name": "Наровчат",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.881279,43.701818"
        },
        {
            "name": "Неверкино",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.786808,46.739760"
        },
        {
            "name": "Нижний Ломов",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.531332,43.670438"
        },
        {
            "name": "Никольск (Пензенская обл.)",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.712587,46.077183"
        },
        {
            "name": "Пачелма",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.327660,43.321725"
        },
        {
            "name": "Пенза",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "53.227290,45.000000"
        },
        {
            "name": "Русский Камешкир",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.861099,46.096427"
        },
        {
            "name": "Сердобск",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.466304,44.213591"
        },
        {
            "name": "Сосновоборск",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "56.123153,93.340080"
        },
        {
            "name": "Сура",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "54.560361,45.967643"
        },
        {
            "name": "Тамала",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.547166,43.256691"
        },
        {
            "name": "Шемышейка",
            "district_id": 7,
            "region_id": 44,
            "coordinates": "52.893953,45.386884"
        },
        {
            "name": "Александровск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.156233,57.594216"
        },
        {
            "name": "Барда",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "56.926920,55.586809"
        },
        {
            "name": "Березники",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.413183,56.784932"
        },
        {
            "name": "Большая Соснова",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.673013,54.595702"
        },
        {
            "name": "Верещагино",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.070416,54.653860"
        },
        {
            "name": "Гайны",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "60.327829,54.303388"
        },
        {
            "name": "Горнозаводск (Пермский край)",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.377762,58.324327"
        },
        {
            "name": "Гремячинск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.548355,57.834447"
        },
        {
            "name": "Губаха",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.838948,57.554426"
        },
        {
            "name": "Добрянка",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.470478,56.423226"
        },
        {
            "name": "Елово",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.047333,54.940993"
        },
        {
            "name": "Зюкайка",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.208500,54.707343"
        },
        {
            "name": "Ильинский (Пермская обл.)",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.567340,55.695542"
        },
        {
            "name": "Карагай",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.263232,54.932677"
        },
        {
            "name": "Керчевский",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.850000,56.316667"
        },
        {
            "name": "Кизел",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.054873,57.623832"
        },
        {
            "name": "Коса",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.949406,55.016249"
        },
        {
            "name": "Кочево",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.618570,54.331020"
        },
        {
            "name": "Красновишерск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "60.405048,57.072029"
        },
        {
            "name": "Краснокамск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.078955,55.767187"
        },
        {
            "name": "Кудымкар",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.006998,54.664387"
        },
        {
            "name": "Куеда",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "56.432172,55.599972"
        },
        {
            "name": "Кунгур",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.431641,56.939712"
        },
        {
            "name": "Лысьва",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.107205,57.788851"
        },
        {
            "name": "Ныроб",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "60.741284,56.724029"
        },
        {
            "name": "Нытва",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.933156,55.346720"
        },
        {
            "name": "Октябрьский",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "54.477201,53.489539"
        },
        {
            "name": "Орда",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.192847,56.919964"
        },
        {
            "name": "Оса",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.284083,55.454325"
        },
        {
            "name": "Оханск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.719311,55.389120"
        },
        {
            "name": "Очер",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.872133,54.728828"
        },
        {
            "name": "Пермь",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.029681,56.266792"
        },
        {
            "name": "Соликамск",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.672033,56.755767"
        },
        {
            "name": "Суксун",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.139207,57.396148"
        },
        {
            "name": "Уинское",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "56.881356,56.570105"
        },
        {
            "name": "Усолье",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.425469,56.680381"
        },
        {
            "name": "Усть-Кишерть",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.364691,57.244372"
        },
        {
            "name": "Чайковский",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "56.766116,54.127671"
        },
        {
            "name": "Частые",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "57.293618,54.952974"
        },
        {
            "name": "Чердынь",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "60.405320,56.477982"
        },
        {
            "name": "Чернореченский",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "54.651113,83.278538"
        },
        {
            "name": "Чернушка",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "56.506877,56.083651"
        },
        {
            "name": "Чусовой",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.275433,57.831415"
        },
        {
            "name": "Юрла",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "59.331367,54.337379"
        },
        {
            "name": "Юсьва",
            "district_id": 7,
            "region_id": 45,
            "coordinates": "58.963251,54.957848"
        },
        {
            "name": "Анучино",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.967680,133.054702"
        },
        {
            "name": "Арсеньев",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.158043,133.264547"
        },
        {
            "name": "Артем",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.369661,132.172475"
        },
        {
            "name": "Артемовский (Приморский край)",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.371659,132.320978"
        },
        {
            "name": "Большой Камень",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.112474,132.345166"
        },
        {
            "name": "Валентин",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.572784,39.735084"
        },
        {
            "name": "Владивосток",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.119809,131.886924"
        },
        {
            "name": "Высокогорск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.406245,135.393597"
        },
        {
            "name": "Горные Ключи",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "45.238272,133.506503"
        },
        {
            "name": "Горный",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "59.929200,30.269484"
        },
        {
            "name": "Дальнегорск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.557395,135.622719"
        },
        {
            "name": "Дальнереченск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "45.929455,133.742790"
        },
        {
            "name": "Зарубино",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.647737,131.077030"
        },
        {
            "name": "Кавалерово",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.255169,135.057261"
        },
        {
            "name": "Каменка (Приморский край)",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.458638,136.012488"
        },
        {
            "name": "Камень-Рыболов",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.727908,132.036721"
        },
        {
            "name": "Кировский",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "56.909224,60.815075"
        },
        {
            "name": "Лазо",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.381518,133.905570"
        },
        {
            "name": "Лесозаводск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "45.471517,133.410117"
        },
        {
            "name": "Лучегорск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "46.444832,134.301322"
        },
        {
            "name": "Михайловка (Приморский край)",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.928937,132.011068"
        },
        {
            "name": "Находка (Приморский край)",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.822275,132.883404"
        },
        {
            "name": "Новопокровка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "45.851288,134.498070"
        },
        {
            "name": "Ольга",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "57.815018,28.300017"
        },
        {
            "name": "Партизанск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.127645,133.125214"
        },
        {
            "name": "Пластун",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.754811,136.308995"
        },
        {
            "name": "Пограничный",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.407997,131.380808"
        },
        {
            "name": "Покровка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "55.759847,37.648353"
        },
        {
            "name": "Посьет",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.654106,130.806254"
        },
        {
            "name": "Русский",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.998581,131.843587"
        },
        {
            "name": "Славянка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "59.700398,30.419753"
        },
        {
            "name": "Спасск-Дальний",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.595572,132.830291"
        },
        {
            "name": "Терней",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "45.043256,136.609225"
        },
        {
            "name": "Уссурийск",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "43.802313,131.963089"
        },
        {
            "name": "Фокино",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.975556,132.414598"
        },
        {
            "name": "Хасан",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "42.431389,130.643728"
        },
        {
            "name": "Хороль",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.429067,132.079997"
        },
        {
            "name": "Черниговка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.334846,132.556511"
        },
        {
            "name": "Чугуевка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.167627,133.868543"
        },
        {
            "name": "Яковлевка",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "44.425173,133.476725"
        },
        {
            "name": "Ярославский",
            "district_id": 4,
            "region_id": 46,
            "coordinates": "55.114079,61.349482"
        },
        {
            "name": "Бежаницы",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.980172,29.890511"
        },
        {
            "name": "Великие Луки",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.339609,30.531475"
        },
        {
            "name": "Гдов",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "58.745082,27.818883"
        },
        {
            "name": "Дедовичи",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.553391,29.945583"
        },
        {
            "name": "Дно",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.828784,29.963430"
        },
        {
            "name": "Заплюсье",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "58.434026,29.738397"
        },
        {
            "name": "Идрица",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.330178,28.885098"
        },
        {
            "name": "Красногородское",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.833861,28.291814"
        },
        {
            "name": "Кунья",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.290390,30.989611"
        },
        {
            "name": "Локня",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.825916,30.152973"
        },
        {
            "name": "Невель",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.018199,29.929196"
        },
        {
            "name": "Новоржев",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.027362,29.333067"
        },
        {
            "name": "Новосокольники",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.341780,30.157403"
        },
        {
            "name": "Опочка",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.711850,28.671508"
        },
        {
            "name": "Остров",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.102785,65.571000"
        },
        {
            "name": "Палкино",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.539468,28.012115"
        },
        {
            "name": "Печоры",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.814631,27.626894"
        },
        {
            "name": "Плюсса",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "58.424963,29.367711"
        },
        {
            "name": "Порхов",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.764999,29.544263"
        },
        {
            "name": "Псков",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.816699,28.334474"
        },
        {
            "name": "Пустошка",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.336870,29.365210"
        },
        {
            "name": "Пушкинские Горы",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.022803,28.914211"
        },
        {
            "name": "Пыталово",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "57.063557,27.919500"
        },
        {
            "name": "Себеж",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "56.288925,28.467939"
        },
        {
            "name": "Струги-Красные",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "58.272280,29.105238"
        },
        {
            "name": "Усвяты",
            "district_id": 3,
            "region_id": 47,
            "coordinates": "55.743747,30.746858"
        },
        {
            "name": "Азов",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.094745,39.413655"
        },
        {
            "name": "Аксай (Ростовская обл.)",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.265125,39.870586"
        },
        {
            "name": "Алмазный",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "62.446815,114.318271"
        },
        {
            "name": "Аютинск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.778889,40.142778"
        },
        {
            "name": "Багаевский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.317825,40.378946"
        },
        {
            "name": "Батайск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.139761,39.737848"
        },
        {
            "name": "Белая Калитва",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.177315,40.779508"
        },
        {
            "name": "Боковская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "49.223570,41.836636"
        },
        {
            "name": "Большая Мартыновка",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.273098,41.667194"
        },
        {
            "name": "Вешенская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "49.631564,41.714717"
        },
        {
            "name": "Волгодонск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.506047,42.179434"
        },
        {
            "name": "Восход",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "56.892885,59.941115"
        },
        {
            "name": "Гигант",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "55.022893,82.987048"
        },
        {
            "name": "Горняцкий",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.289783,40.950635"
        },
        {
            "name": "Гуково",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.051311,39.937705"
        },
        {
            "name": "Донецк",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.015883,37.802850"
        },
        {
            "name": "Донской (Ростовская обл.)",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.415834,40.257530"
        },
        {
            "name": "Дубовское",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.406725,42.770263"
        },
        {
            "name": "Егорлыкская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.563809,40.652721"
        },
        {
            "name": "Жирнов",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.175694,41.133236"
        },
        {
            "name": "Заветное",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.118944,43.881250"
        },
        {
            "name": "Заводской",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "52.469570,72.022723"
        },
        {
            "name": "Зверево",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.021924,40.120757"
        },
        {
            "name": "Зерноград",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.849038,40.307872"
        },
        {
            "name": "Зимовники",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.128435,42.454366"
        },
        {
            "name": "Кагальницкая",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.882676,40.146160"
        },
        {
            "name": "Казанская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "55.830431,49.066081"
        },
        {
            "name": "Каменоломни",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.672309,40.204110"
        },
        {
            "name": "Каменск-Шахтинский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.314118,40.268954"
        },
        {
            "name": "Кашары",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "49.037104,41.012489"
        },
        {
            "name": "Коксовый",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.197388,40.658482"
        },
        {
            "name": "Константиновск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.587223,41.091318"
        },
        {
            "name": "Красный Сулин",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.888083,40.067677"
        },
        {
            "name": "Куйбышево",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.814367,38.914922"
        },
        {
            "name": "Матвеев Курган",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.568983,38.869701"
        },
        {
            "name": "Мигулинская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "49.687305,41.261891"
        },
        {
            "name": "Миллерово",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.918268,40.405028"
        },
        {
            "name": "Милютинская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.622215,41.678841"
        },
        {
            "name": "Морозовск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.345051,41.826475"
        },
        {
            "name": "Новочеркасск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.417769,40.072678"
        },
        {
            "name": "Новошахтинск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.756879,39.935769"
        },
        {
            "name": "Обливская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.536307,42.495047"
        },
        {
            "name": "Орловский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.871153,42.031798"
        },
        {
            "name": "Песчанокопское",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.193184,41.084894"
        },
        {
            "name": "Покровское",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "55.662050,36.812791"
        },
        {
            "name": "Пролетарск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.702365,41.728533"
        },
        {
            "name": "Ремонтное",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.572582,43.646842"
        },
        {
            "name": "Родионово-Несветайская",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.612421,39.710099"
        },
        {
            "name": "Ростов-на-Дону",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.235714,39.701505"
        },
        {
            "name": "Сальск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.480651,41.537242"
        },
        {
            "name": "Семикаракорск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.515574,40.814031"
        },
        {
            "name": "Таганрог",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.241633,38.867601"
        },
        {
            "name": "Тарасовский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.726679,40.375127"
        },
        {
            "name": "Тацинский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.197883,41.272991"
        },
        {
            "name": "Усть-Донецкий",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.642076,40.875840"
        },
        {
            "name": "Целина",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "46.533176,41.017630"
        },
        {
            "name": "Цимлянск",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.645152,42.088948"
        },
        {
            "name": "Чалтырь",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.284461,39.499178"
        },
        {
            "name": "Чертково",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "49.388706,40.146751"
        },
        {
            "name": "Шахты",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "47.723622,40.235514"
        },
        {
            "name": "Шолоховский",
            "district_id": 2,
            "region_id": 48,
            "coordinates": "48.275411,41.046250"
        },
        {
            "name": "Александро-Невский",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.477379,40.211143"
        },
        {
            "name": "Горняк",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "50.998831,81.467795"
        },
        {
            "name": "Гусь Железный",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "55.048892,41.165184"
        },
        {
            "name": "Елатьма",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.966215,41.751759"
        },
        {
            "name": "Ермишь",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.766620,42.270177"
        },
        {
            "name": "Заречный (Рязанская обл.)",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.728132,39.595475"
        },
        {
            "name": "Захарово",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "55.649236,36.962573"
        },
        {
            "name": "Кадом",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.560184,42.468169"
        },
        {
            "name": "Касимов",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.949757,41.397405"
        },
        {
            "name": "Кораблино",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.921767,40.034018"
        },
        {
            "name": "Милославское",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.577434,39.433820"
        },
        {
            "name": "Михайлов",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.228276,39.020624"
        },
        {
            "name": "Новомичуринск",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.034284,39.759242"
        },
        {
            "name": "Пителино",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.574814,41.813932"
        },
        {
            "name": "Пронск",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.110937,39.589463"
        },
        {
            "name": "Путятино",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.161622,41.118768"
        },
        {
            "name": "Рыбное",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.725091,39.510467"
        },
        {
            "name": "Ряжск",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.710440,40.075064"
        },
        {
            "name": "Рязань",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.609542,39.712586"
        },
        {
            "name": "Сапожок",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.944071,40.680928"
        },
        {
            "name": "Сараи",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.727900,40.999080"
        },
        {
            "name": "Сасово",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.356424,41.919413"
        },
        {
            "name": "Скопин",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.825747,39.556825"
        },
        {
            "name": "Спас-Клепики",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "55.132864,40.177680"
        },
        {
            "name": "Спасск-Рязанский",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.410401,40.380495"
        },
        {
            "name": "Старожилово",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.229484,39.907451"
        },
        {
            "name": "Ухолово",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "53.796711,40.481364"
        },
        {
            "name": "Чучково",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.266794,41.445922"
        },
        {
            "name": "Шацк",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.031480,41.713386"
        },
        {
            "name": "Шилово",
            "district_id": 1,
            "region_id": 49,
            "coordinates": "54.303068,40.867997"
        },
        {
            "name": "Алексеевка (Самарская обл.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.248759,50.492794"
        },
        {
            "name": "Безенчук",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.983075,49.440596"
        },
        {
            "name": "Богатое",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.060913,51.340654"
        },
        {
            "name": "Богатырь",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "44.580093,34.008557"
        },
        {
            "name": "Большая Глушица",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.383864,50.484806"
        },
        {
            "name": "Большая Глущица (Самарск.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.383864,50.484806"
        },
        {
            "name": "Большая Черниговка",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.097114,50.866024"
        },
        {
            "name": "Борское",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.029078,51.688005"
        },
        {
            "name": "Волжский (Самарская обл.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.435502,50.118683"
        },
        {
            "name": "Жигулевск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.390725,49.472270"
        },
        {
            "name": "Зольное",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.444298,49.799098"
        },
        {
            "name": "Исаклы",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.130828,51.544465"
        },
        {
            "name": "Камышла",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.107689,52.134628"
        },
        {
            "name": "Кинель",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.221013,50.634392"
        },
        {
            "name": "Кинель-Черкасы",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.467128,51.505877"
        },
        {
            "name": "Клявлино",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.256028,52.026029"
        },
        {
            "name": "Кошки",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.208020,50.467634"
        },
        {
            "name": "Красноармейское (Самарск.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.707759,50.032706"
        },
        {
            "name": "Красный Яр (Самарская обл.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.497777,50.392272"
        },
        {
            "name": "Куйбышев",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "55.447652,78.311387"
        },
        {
            "name": "Нефтегорск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.996667,142.946389"
        },
        {
            "name": "Новокуйбышевск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.096067,49.891289"
        },
        {
            "name": "Октябрьск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.183533,48.769042"
        },
        {
            "name": "Отрадный",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.376990,51.340210"
        },
        {
            "name": "Пестравка",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.407932,49.953492"
        },
        {
            "name": "Похвистнево",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.648206,52.122954"
        },
        {
            "name": "Приволжье",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.850975,48.590142"
        },
        {
            "name": "Самара",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.241504,50.221246"
        },
        {
            "name": "Сергиевск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.949076,51.167681"
        },
        {
            "name": "Сургут (Самарская обл.)",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.919783,51.191909"
        },
        {
            "name": "Сызрань",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.150450,48.397896"
        },
        {
            "name": "Тольятти",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.508600,49.419834"
        },
        {
            "name": "Хворостянка",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.605230,48.965995"
        },
        {
            "name": "Чапаевск",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "52.969666,49.706732"
        },
        {
            "name": "Челно-Вершины",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.423126,51.082504"
        },
        {
            "name": "Шентала",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "54.431542,51.471088"
        },
        {
            "name": "Шигоны",
            "district_id": 7,
            "region_id": 50,
            "coordinates": "53.388679,48.674719"
        },
        {
            "name": "Александров Гай",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.143771,48.549450"
        },
        {
            "name": "Аркадак",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.934886,43.502775"
        },
        {
            "name": "Аткарск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.874029,45.000000"
        },
        {
            "name": "Базарный Карабулак",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.277355,46.413026"
        },
        {
            "name": "Балаково",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.024559,47.780663"
        },
        {
            "name": "Балашов",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.543181,43.177096"
        },
        {
            "name": "Балтай",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.465161,46.628409"
        },
        {
            "name": "Возрождение",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "59.563096,150.800092"
        },
        {
            "name": "Вольск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.049708,47.369227"
        },
        {
            "name": "Воскресенское (Саратовск.)",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.826473,46.938409"
        },
        {
            "name": "Горный",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "59.929200,30.269484"
        },
        {
            "name": "Дергачи",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.109721,36.115503"
        },
        {
            "name": "Духовницкое",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.480108,48.209029"
        },
        {
            "name": "Екатериновка",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.051820,44.352522"
        },
        {
            "name": "Ершов",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.349396,48.276180"
        },
        {
            "name": "Ивантеевка (Саратовская обл.)",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.275795,49.099701"
        },
        {
            "name": "Калининск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.500631,44.483579"
        },
        {
            "name": "Каменский",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "48.523117,34.613683"
        },
        {
            "name": "Красноармейск (Саратовск.)",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.017877,45.711802"
        },
        {
            "name": "Красный Кут",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.949650,46.970876"
        },
        {
            "name": "Лысые Горы",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.551650,44.836714"
        },
        {
            "name": "Маркс",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.710612,46.748481"
        },
        {
            "name": "Мокроус",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.238778,47.511373"
        },
        {
            "name": "Новоузенск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.467958,48.140283"
        },
        {
            "name": "Новые Бурасы",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.128022,46.069659"
        },
        {
            "name": "Озинки",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.197850,49.733508"
        },
        {
            "name": "Перелюб",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.861497,50.345676"
        },
        {
            "name": "Петровск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.314403,45.388255"
        },
        {
            "name": "Питерка",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.676089,47.437185"
        },
        {
            "name": "Пугачев",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.027401,48.799294"
        },
        {
            "name": "Ровное",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "50.772030,46.047967"
        },
        {
            "name": "Романовка",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "60.044885,30.705434"
        },
        {
            "name": "Ртищево",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.260073,43.781435"
        },
        {
            "name": "Самойловка",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.175756,43.705731"
        },
        {
            "name": "Саратов",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.592365,45.960803"
        },
        {
            "name": "Степное (Саратовская обл.)",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.377281,46.842585"
        },
        {
            "name": "Татищево",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.672679,45.573203"
        },
        {
            "name": "Турки",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.990713,43.266886"
        },
        {
            "name": "Хвалынск",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "52.501019,48.092330"
        },
        {
            "name": "Энгельс",
            "district_id": 7,
            "region_id": 51,
            "coordinates": "51.475330,46.113677"
        },
        {
            "name": "Абый",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "68.393872,145.068911"
        },
        {
            "name": "Айхал",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "65.941719,111.488113"
        },
        {
            "name": "Алдан",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "58.605723,125.396100"
        },
        {
            "name": "Амга",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "60.896367,131.973712"
        },
        {
            "name": "Батагай",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "67.662513,134.654350"
        },
        {
            "name": "Бердигестях",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.098139,126.698340"
        },
        {
            "name": "Беркакит",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "56.575729,124.783661"
        },
        {
            "name": "Бестях",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "61.963978,129.913129"
        },
        {
            "name": "Борогонцы",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.679165,131.152863"
        },
        {
            "name": "Верхневилюйск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "63.443588,120.319713"
        },
        {
            "name": "Верхоянск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "67.550592,133.399340"
        },
        {
            "name": "Вилюйск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "63.746440,121.627667"
        },
        {
            "name": "Витим",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "59.432083,112.539253"
        },
        {
            "name": "Власово",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "55.575128,37.125015"
        },
        {
            "name": "Депутатский",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "69.302603,139.958383"
        },
        {
            "name": "Жиганск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "66.752064,123.394112"
        },
        {
            "name": "Зырянка",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "65.767376,150.841238"
        },
        {
            "name": "Кангалассы",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.355676,129.987912"
        },
        {
            "name": "Ленск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "60.721391,114.902403"
        },
        {
            "name": "Майя",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "61.734038,130.316886"
        },
        {
            "name": "Мирный (Саха)",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.531337,113.977388"
        },
        {
            "name": "Нерюнгри",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "56.661427,124.705816"
        },
        {
            "name": "Нижний Куранах",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "58.816667,125.533333"
        },
        {
            "name": "Нюрба",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "63.280310,118.361898"
        },
        {
            "name": "Олекминск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "60.370182,120.430210"
        },
        {
            "name": "Покровск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "48.282193,37.184780"
        },
        {
            "name": "Сангар",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "63.922001,127.469507"
        },
        {
            "name": "Саскылах",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "71.954308,114.119835"
        },
        {
            "name": "Солнечный",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "56.172698,101.664810"
        },
        {
            "name": "Среднеколымск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "67.437307,153.728674"
        },
        {
            "name": "Сунтар",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.154919,117.633134"
        },
        {
            "name": "Тикси",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "71.637482,128.864472"
        },
        {
            "name": "Удачный",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "66.407021,112.297781"
        },
        {
            "name": "Усть-Мая",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "60.383333,134.450000"
        },
        {
            "name": "Усть-Нера",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "64.559610,143.224425"
        },
        {
            "name": "Хандыга",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.656408,135.553980"
        },
        {
            "name": "Хонуу",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "66.455612,143.222580"
        },
        {
            "name": "Чернышевский",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "63.025038,112.490249"
        },
        {
            "name": "Черский",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "68.742677,161.350784"
        },
        {
            "name": "Чокурдах",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "70.622169,147.916168"
        },
        {
            "name": "Чульман",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "56.835189,124.906155"
        },
        {
            "name": "Чурапча",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.003605,132.430810"
        },
        {
            "name": "Якутск",
            "district_id": 4,
            "region_id": 52,
            "coordinates": "62.035452,129.675475"
        },
        {
            "name": "Александровск-Сахалинский",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "50.907923,142.174636"
        },
        {
            "name": "Анива",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "46.726014,142.522618"
        },
        {
            "name": "Бошняково",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "49.640895,142.165384"
        },
        {
            "name": "Быков",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.335609,142.550415"
        },
        {
            "name": "Вахрушев",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "48.950955,142.939738"
        },
        {
            "name": "Взморье",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.851532,142.506484"
        },
        {
            "name": "Гастелло",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "49.109598,142.944825"
        },
        {
            "name": "Горнозаводск (Сахалин)",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "46.565474,141.825851"
        },
        {
            "name": "Долинск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.335006,142.789952"
        },
        {
            "name": "Ильинский (Сахалин)",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.990305,142.200949"
        },
        {
            "name": "Катангли",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "51.709626,143.244026"
        },
        {
            "name": "Корсаков",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "46.635380,142.784188"
        },
        {
            "name": "Курильск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "44.034522,145.858604"
        },
        {
            "name": "Макаров",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "48.627222,142.778243"
        },
        {
            "name": "Невельск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "46.678613,141.855958"
        },
        {
            "name": "Ноглики",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "51.792042,143.140039"
        },
        {
            "name": "Оха",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "53.577557,142.942474"
        },
        {
            "name": "Поронайск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "49.224031,143.094817"
        },
        {
            "name": "Северо-Курильск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "50.668080,156.113880"
        },
        {
            "name": "Смирных",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "49.756724,142.848110"
        },
        {
            "name": "Томари",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.752088,142.061521"
        },
        {
            "name": "Тымовское",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "50.853288,142.665628"
        },
        {
            "name": "Углегорск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "49.072014,142.049308"
        },
        {
            "name": "Холмск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "47.065740,142.058436"
        },
        {
            "name": "Шахтерск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "48.048675,38.450530"
        },
        {
            "name": "Южно-Курильск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "44.034522,145.858604"
        },
        {
            "name": "Южно-Сахалинск",
            "district_id": 4,
            "region_id": 53,
            "coordinates": "46.964113,142.734756"
        },
        {
            "name": "Алапаевск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.848349,61.688030"
        },
        {
            "name": "Алтынай",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.074386,61.989929"
        },
        {
            "name": "Арамиль",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.696452,60.833025"
        },
        {
            "name": "Артемовский (Свердловская обл.)",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.339039,61.878323"
        },
        {
            "name": "Арти",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.425103,58.533089"
        },
        {
            "name": "Асбест",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.005257,61.458096"
        },
        {
            "name": "Ачит",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.793851,57.893094"
        },
        {
            "name": "Байкалово",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.398995,63.762211"
        },
        {
            "name": "Басьяновский",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.312576,60.743053"
        },
        {
            "name": "Белоярский (Свердловская обл.)",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.756844,61.374226"
        },
        {
            "name": "Березовский (Свердловская обл.)",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.908879,60.795006"
        },
        {
            "name": "Бисерть",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.852060,59.047636"
        },
        {
            "name": "Богданович",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.774336,62.052292"
        },
        {
            "name": "Буланаш",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.280592,61.992345"
        },
        {
            "name": "Верхний Тагил",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.369654,59.941087"
        },
        {
            "name": "Верхняя Пышма",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.966483,60.586416"
        },
        {
            "name": "Верхняя Салда",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.041109,60.559247"
        },
        {
            "name": "Верхняя Синячиха",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.985880,61.680262"
        },
        {
            "name": "Верхняя Сысерть",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.438359,60.748006"
        },
        {
            "name": "Верхняя Тура",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.363471,59.810034"
        },
        {
            "name": "Верхотурье",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.864159,60.753309"
        },
        {
            "name": "Висим",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.654066,59.503309"
        },
        {
            "name": "Волчанск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.930214,60.086211"
        },
        {
            "name": "Гари",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.428254,62.355608"
        },
        {
            "name": "Дегтярск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.698003,60.102074"
        },
        {
            "name": "Екатеринбург",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.838926,60.605702"
        },
        {
            "name": "Ертарский",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.792305,64.298038"
        },
        {
            "name": "Заводоуспенское",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.856946,65.031500"
        },
        {
            "name": "Заречный",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.805799,61.323812"
        },
        {
            "name": "Ивдель",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "60.692338,60.431650"
        },
        {
            "name": "Изумруд",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "43.118209,131.886731"
        },
        {
            "name": "Ирбит",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.668013,63.063205"
        },
        {
            "name": "Ис",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.798416,59.718127"
        },
        {
            "name": "Каменск-Уральский",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.425339,61.922298"
        },
        {
            "name": "Камышлов",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.852264,62.708235"
        },
        {
            "name": "Карпинск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.765398,60.013485"
        },
        {
            "name": "Качканар",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.697859,59.492904"
        },
        {
            "name": "Кировград",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.416051,60.070580"
        },
        {
            "name": "Краснотурьинск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.765062,60.215883"
        },
        {
            "name": "Красноуральск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.330297,60.071332"
        },
        {
            "name": "Красноуфимск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.615307,57.753675"
        },
        {
            "name": "Кушва",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.285735,59.777631"
        },
        {
            "name": "Лесной",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.633315,59.783258"
        },
        {
            "name": "Михайловск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "45.128744,42.009232"
        },
        {
            "name": "Невьянск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.490278,60.212086"
        },
        {
            "name": "Нижние Серги",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.662660,59.300020"
        },
        {
            "name": "Нижний Тагил",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.921491,59.981619"
        },
        {
            "name": "Нижняя Салда",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.072634,60.733583"
        },
        {
            "name": "Нижняя Тура",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.627704,59.855890"
        },
        {
            "name": "Новая Ляля",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.049090,60.597470"
        },
        {
            "name": "Новоуральск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.257524,60.083449"
        },
        {
            "name": "Новоуральск (Свердловская обл.)",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.257524,60.083449"
        },
        {
            "name": "Оус",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "60.907868,61.519249"
        },
        {
            "name": "Первоуральск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.899916,59.952113"
        },
        {
            "name": "Полевской",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.482482,60.244648"
        },
        {
            "name": "Пышма",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.966483,60.586416"
        },
        {
            "name": "Ревда (Свердловская обл.)",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.818850,59.903640"
        },
        {
            "name": "Реж",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.366583,61.422176"
        },
        {
            "name": "Рефтинск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.094873,61.671753"
        },
        {
            "name": "Свердловск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.838926,60.605702"
        },
        {
            "name": "Североуральск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "60.155308,59.964636"
        },
        {
            "name": "Серов",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.610464,60.617743"
        },
        {
            "name": "Сосьва",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "59.155724,61.838100"
        },
        {
            "name": "Среднеуральск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.985920,60.470107"
        },
        {
            "name": "Сухой Лог",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.911645,62.038646"
        },
        {
            "name": "Сысерть",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "56.510302,60.824737"
        },
        {
            "name": "Таборы",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.528389,64.553238"
        },
        {
            "name": "Тавда",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.044289,65.256109"
        },
        {
            "name": "Талица",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.012712,63.719148"
        },
        {
            "name": "Тугулым",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.056336,64.628299"
        },
        {
            "name": "Туринск",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "58.041296,63.685014"
        },
        {
            "name": "Туринская Слобода",
            "district_id": 6,
            "region_id": 54,
            "coordinates": "57.612747,64.387530"
        },
        {
            "name": "Алагир",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.038989,44.220374"
        },
        {
            "name": "Ардон",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.178799,44.296090"
        },
        {
            "name": "Беслан",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.193660,44.548375"
        },
        {
            "name": "Бурон",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "42.794432,44.007366"
        },
        {
            "name": "Владикавказ",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.025234,44.665976"
        },
        {
            "name": "Дигора",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.166439,44.162252"
        },
        {
            "name": "Моздок",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.753769,44.649043"
        },
        {
            "name": "Орджоникидзе",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "44.961680,35.358952"
        },
        {
            "name": "Чикола",
            "district_id": 8,
            "region_id": 55,
            "coordinates": "43.197120,43.915763"
        },
        {
            "name": "Велиж",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.602466,31.175401"
        },
        {
            "name": "Верхнеднепровский",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.984025,33.341774"
        },
        {
            "name": "Ворга",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "53.758999,32.745483"
        },
        {
            "name": "Вязьма",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.210071,34.292591"
        },
        {
            "name": "Гагарин",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.552886,34.996654"
        },
        {
            "name": "Глинка",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "53.395456,50.188525"
        },
        {
            "name": "Голынки",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.867559,31.395757"
        },
        {
            "name": "Демидов",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.264460,31.517750"
        },
        {
            "name": "Десногорск",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.152383,33.287855"
        },
        {
            "name": "Дорогобуж",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.910707,33.297656"
        },
        {
            "name": "Духовщина",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.195211,32.400089"
        },
        {
            "name": "Ельня",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.579084,33.178707"
        },
        {
            "name": "Ершичи",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "53.672060,32.751230"
        },
        {
            "name": "Издешково",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.144629,33.626831"
        },
        {
            "name": "Кардымово",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.888540,32.434468"
        },
        {
            "name": "Красный",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.044442,82.916309"
        },
        {
            "name": "Монастырщина",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.352236,31.845310"
        },
        {
            "name": "Новодугино",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.631735,34.292683"
        },
        {
            "name": "Починок",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.408323,32.437377"
        },
        {
            "name": "Рославль",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "53.953118,32.863845"
        },
        {
            "name": "Рудня",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.948864,31.057080"
        },
        {
            "name": "Сафоново",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.108106,33.237745"
        },
        {
            "name": "Смоленск",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.790311,32.050366"
        },
        {
            "name": "Сычевка",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.831261,34.281313"
        },
        {
            "name": "Угра",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.764190,34.271829"
        },
        {
            "name": "Хиславичи",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "54.187586,32.154223"
        },
        {
            "name": "Холм-Жирковский",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.516912,33.484927"
        },
        {
            "name": "Шумячи",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "53.858049,32.420264"
        },
        {
            "name": "Ярцево",
            "district_id": 1,
            "region_id": 56,
            "coordinates": "55.059299,32.685013"
        },
        {
            "name": "Александровское (Ставрополь.)",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.715313,42.997872"
        },
        {
            "name": "Арзгир",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.370997,44.224500"
        },
        {
            "name": "Благодарный",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.102452,43.435281"
        },
        {
            "name": "Буденновск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.792520,44.153616"
        },
        {
            "name": "Георгиевск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.149767,43.457769"
        },
        {
            "name": "Дивное (Ставропольский край)",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.908325,43.346381"
        },
        {
            "name": "Домбай",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.289402,41.623506"
        },
        {
            "name": "Донское",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.456370,41.974757"
        },
        {
            "name": "Ессентуки",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.045512,42.857523"
        },
        {
            "name": "Железноводск(Ставропольский)",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.140427,43.007012"
        },
        {
            "name": "Зеленокумск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.414088,43.873616"
        },
        {
            "name": "Изобильный",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.370057,41.710684"
        },
        {
            "name": "Иноземцево",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.096758,43.094568"
        },
        {
            "name": "Ипатово",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.720543,42.903514"
        },
        {
            "name": "Карачаевск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.772218,41.914243"
        },
        {
            "name": "Кисловодск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.905601,42.728095"
        },
        {
            "name": "Кочубеевское",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.679565,41.820410"
        },
        {
            "name": "Красногвардейское (Ставрополь.)",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.853086,41.507480"
        },
        {
            "name": "Курсавка",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.459784,42.503480"
        },
        {
            "name": "Левокумское",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.819246,44.663554"
        },
        {
            "name": "Лермонтов",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.110967,42.968418"
        },
        {
            "name": "Минеральные Воды",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.211675,43.123853"
        },
        {
            "name": "Михайловск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.128744,42.009232"
        },
        {
            "name": "Невинномысск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.638015,41.950464"
        },
        {
            "name": "Нефтекумск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.750354,44.988417"
        },
        {
            "name": "Новоалександровск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.497026,41.218190"
        },
        {
            "name": "Новоалександровская",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.497026,41.218190"
        },
        {
            "name": "Новопавловск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.958858,43.623730"
        },
        {
            "name": "Новоселицкое",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.747634,43.436437"
        },
        {
            "name": "Преградная",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.953110,41.191112"
        },
        {
            "name": "Пятигорск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.049893,43.039636"
        },
        {
            "name": "Светлоград",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.330222,42.863667"
        },
        {
            "name": "Солнечнодольск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.290643,41.488153"
        },
        {
            "name": "Ставрополь",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "45.045476,41.968343"
        },
        {
            "name": "Степное (Ставропольский край)",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.271368,44.587571"
        },
        {
            "name": "Теберда",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "43.449884,41.745915"
        },
        {
            "name": "Усть-Джегута",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.090141,41.977194"
        },
        {
            "name": "Хабез",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.042366,41.764098"
        },
        {
            "name": "Черкесск",
            "district_id": 8,
            "region_id": 57,
            "coordinates": "44.227397,42.059171"
        },
        {
            "name": "Бондари",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.952178,42.055644"
        },
        {
            "name": "Гавриловка Вторая",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.861240,42.793167"
        },
        {
            "name": "Жердевка",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "51.844257,41.464135"
        },
        {
            "name": "Знаменка",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "48.719200,32.677096"
        },
        {
            "name": "Инжавино",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.320247,42.476151"
        },
        {
            "name": "Кирсанов",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.653269,42.720743"
        },
        {
            "name": "Котовск",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.597808,41.509319"
        },
        {
            "name": "Мичуринск",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.893034,40.498096"
        },
        {
            "name": "Мордово",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.085083,40.768095"
        },
        {
            "name": "Моршанск",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "53.444776,41.819164"
        },
        {
            "name": "Мучкапский",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "51.851948,42.477873"
        },
        {
            "name": "Первомайский (Тамбовская обл.)",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "53.248812,40.288411"
        },
        {
            "name": "Петровское",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "57.079351,28.949774"
        },
        {
            "name": "Пичаево",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "53.235598,42.204787"
        },
        {
            "name": "Рассказово",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.658662,41.881486"
        },
        {
            "name": "Ржакса",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.139035,42.032008"
        },
        {
            "name": "Сосновка",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "55.033542,82.918818"
        },
        {
            "name": "Староюрьево",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "53.316610,40.692427"
        },
        {
            "name": "Тамбов",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "52.723598,41.442306"
        },
        {
            "name": "Токаревка",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "51.991745,41.149065"
        },
        {
            "name": "Уварово",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "51.972473,42.264158"
        },
        {
            "name": "Умет",
            "district_id": 1,
            "region_id": 58,
            "coordinates": "54.116470,42.700041"
        },
        {
            "name": "Агрыз",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "56.519347,52.940539"
        },
        {
            "name": "Азнакаево",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.858697,53.071919"
        },
        {
            "name": "Аксубаево",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.846375,50.794959"
        },
        {
            "name": "Актаныш",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.711589,54.076967"
        },
        {
            "name": "Актюбинский",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.811388,52.803878"
        },
        {
            "name": "Алексеевское",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.307048,50.118931"
        },
        {
            "name": "Альметьевск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.893713,52.317293"
        },
        {
            "name": "Апастово",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.201756,48.506999"
        },
        {
            "name": "Арск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "56.088910,49.875402"
        },
        {
            "name": "Бавлы",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.389454,53.277347"
        },
        {
            "name": "Базарные Матаки",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.903116,49.930424"
        },
        {
            "name": "Балтаси",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "56.342391,50.213514"
        },
        {
            "name": "Богатые Сабы",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "56.013051,50.442181"
        },
        {
            "name": "Бугульма",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.522031,52.826081"
        },
        {
            "name": "Буинск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.975630,48.278704"
        },
        {
            "name": "Васильево",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.830595,48.717218"
        },
        {
            "name": "Верхний Услон",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.766803,48.983524"
        },
        {
            "name": "Высокая Гора",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.912177,49.307369"
        },
        {
            "name": "Дербешкинский",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.867050,53.485788"
        },
        {
            "name": "Елабуга",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.763166,52.025494"
        },
        {
            "name": "Заинск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.289809,52.013121"
        },
        {
            "name": "Зеленодольск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.851604,48.537153"
        },
        {
            "name": "Казань",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.830431,49.066081"
        },
        {
            "name": "Камское Устье",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.195175,49.259694"
        },
        {
            "name": "Карабаш (Татарстан)",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.693045,52.581413"
        },
        {
            "name": "Куйбышев (Татарстан)",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.160467,49.173867"
        },
        {
            "name": "Кукмор",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "56.188643,50.896336"
        },
        {
            "name": "Лаишево",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.403071,49.545412"
        },
        {
            "name": "Лениногорск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.601302,52.460713"
        },
        {
            "name": "Мамадыш",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.712187,51.396484"
        },
        {
            "name": "Менделеевск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.899189,52.293816"
        },
        {
            "name": "Мензелинск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.724647,53.106319"
        },
        {
            "name": "Муслюмово",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.302976,53.196052"
        },
        {
            "name": "Набережные Челны",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.718505,52.372104"
        },
        {
            "name": "Нижнекамск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.613196,51.846997"
        },
        {
            "name": "Новошешминск",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.064236,51.227402"
        },
        {
            "name": "Нурлат",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.419219,50.818898"
        },
        {
            "name": "Пестрецы",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.757708,49.648648"
        },
        {
            "name": "Рыбная Слобода",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.460207,50.145451"
        },
        {
            "name": "Сарманово",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.251905,52.588223"
        },
        {
            "name": "Старое Дрожжаное",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.726263,47.557474"
        },
        {
            "name": "Тетюши",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.947927,48.824742"
        },
        {
            "name": "Черемшан",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "54.659677,51.502016"
        },
        {
            "name": "Чистополь",
            "district_id": 7,
            "region_id": 59,
            "coordinates": "55.363473,50.640464"
        },
        {
            "name": "Андреаполь",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.652747,32.279776"
        },
        {
            "name": "Бежецк",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.776499,36.686507"
        },
        {
            "name": "Белый",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "55.835239,32.933668"
        },
        {
            "name": "Белый Городок",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.961207,37.518635"
        },
        {
            "name": "Березайка",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.987001,33.907155"
        },
        {
            "name": "Бологое",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.875845,34.071977"
        },
        {
            "name": "Васильевский Мох",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.013155,35.920390"
        },
        {
            "name": "Весьегонск",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "58.657894,37.256887"
        },
        {
            "name": "Выползово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.870299,33.695089"
        },
        {
            "name": "Вышний Волочек",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.588894,34.568600"
        },
        {
            "name": "Жарковский",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "55.850201,32.263306"
        },
        {
            "name": "Западная Двина",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.263568,32.075993"
        },
        {
            "name": "Зубцов",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.170028,34.573563"
        },
        {
            "name": "Изоплит",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.871754,60.732567"
        },
        {
            "name": "Калашниково",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.279017,35.224238"
        },
        {
            "name": "Калинин",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.859690,35.915836"
        },
        {
            "name": "Калязин",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.236534,37.840130"
        },
        {
            "name": "Кашин",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.356844,37.611184"
        },
        {
            "name": "Кесова Гора",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.586179,37.294278"
        },
        {
            "name": "Кимры",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.860398,37.359892"
        },
        {
            "name": "Конаково",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.696509,36.773310"
        },
        {
            "name": "Красный Холм",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "58.052792,37.113520"
        },
        {
            "name": "Кувшиново",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.030031,34.164551"
        },
        {
            "name": "Лесное",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "55.090944,82.837083"
        },
        {
            "name": "Лихославль",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.124616,35.461449"
        },
        {
            "name": "Максатиха",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.793071,35.891639"
        },
        {
            "name": "Молоково",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "55.561712,37.861741"
        },
        {
            "name": "Нелидово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.229171,32.790847"
        },
        {
            "name": "Оленино",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.208652,33.485110"
        },
        {
            "name": "Осташков",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.140268,33.128516"
        },
        {
            "name": "Пено",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.926717,32.745604"
        },
        {
            "name": "Рамешки",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.341272,36.051681"
        },
        {
            "name": "Ржев",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.258397,34.328349"
        },
        {
            "name": "Сандово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "58.463313,36.411609"
        },
        {
            "name": "Селижарово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.851568,33.454806"
        },
        {
            "name": "Сонково",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.779010,37.157266"
        },
        {
            "name": "Спирово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.421686,34.980370"
        },
        {
            "name": "Старица",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.501573,34.935079"
        },
        {
            "name": "Тверь",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.858721,35.917597"
        },
        {
            "name": "Торжок",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.035934,34.969076"
        },
        {
            "name": "Торопец",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "56.501204,31.639144"
        },
        {
            "name": "Удомля",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.875412,35.014095"
        },
        {
            "name": "Фирово",
            "district_id": 1,
            "region_id": 60,
            "coordinates": "57.481603,33.705199"
        },
        {
            "name": "Александровское (Томская обл.)",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "60.427500,77.867874"
        },
        {
            "name": "Асино",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.986229,86.162324"
        },
        {
            "name": "Бакчар",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "57.027144,82.098413"
        },
        {
            "name": "Батурино",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.256248,84.971832"
        },
        {
            "name": "Белый Яр",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "58.442542,85.068031"
        },
        {
            "name": "Зырянское",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.826874,86.617512"
        },
        {
            "name": "Итатка",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.818464,85.602828"
        },
        {
            "name": "Каргасок",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "59.053540,80.877060"
        },
        {
            "name": "Катайга",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "58.746479,87.926684"
        },
        {
            "name": "Кожевниково",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.263716,83.969491"
        },
        {
            "name": "Колпашево",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "58.318606,82.917796"
        },
        {
            "name": "Кривошеино",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "57.344554,83.924016"
        },
        {
            "name": "Мельниково",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.549680,84.075153"
        },
        {
            "name": "Молчаново",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "57.586388,83.771275"
        },
        {
            "name": "Парабель",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "58.704280,81.511599"
        },
        {
            "name": "Первомайское",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "60.359954,29.738078"
        },
        {
            "name": "Подгорное",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "57.791639,82.651757"
        },
        {
            "name": "Северск",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.602678,84.880648"
        },
        {
            "name": "Стрежевой",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "60.724111,77.581375"
        },
        {
            "name": "Томск",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "56.501040,84.992451"
        },
        {
            "name": "Тымск",
            "district_id": 5,
            "region_id": 61,
            "coordinates": "59.374411,80.297300"
        },
        {
            "name": "Ак-Довурак",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.172748,90.588775"
        },
        {
            "name": "Бай Хаак",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.158764,94.462876"
        },
        {
            "name": "Кызыл",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.715083,94.457480"
        },
        {
            "name": "Самагалтай",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "50.600180,94.999641"
        },
        {
            "name": "Сарыг-Сеп",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.490097,95.552472"
        },
        {
            "name": "Тоора-Хем",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "52.474609,96.110054"
        },
        {
            "name": "Туран",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "52.142118,93.921065"
        },
        {
            "name": "Тээли",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.006915,90.213581"
        },
        {
            "name": "Хову-Аксы",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.111839,93.660220"
        },
        {
            "name": "Чадан",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.289390,91.566861"
        },
        {
            "name": "Шагонар",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "51.532126,92.888266"
        },
        {
            "name": "Эрзин",
            "district_id": 5,
            "region_id": 62,
            "coordinates": "50.252666,95.157997"
        },
        {
            "name": "Агеево",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.158966,36.471044"
        },
        {
            "name": "Алексин",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.507201,37.001323"
        },
        {
            "name": "Арсеньево",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.738677,36.662685"
        },
        {
            "name": "Барсуки",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.419970,33.362059"
        },
        {
            "name": "Белев",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.812415,36.122573"
        },
        {
            "name": "Богородицк",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.770996,38.127631"
        },
        {
            "name": "Болохово",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.090652,37.825046"
        },
        {
            "name": "Велегож",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.704295,37.258243"
        },
        {
            "name": "Венев",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.349466,38.258259"
        },
        {
            "name": "Волово",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.558350,38.007581"
        },
        {
            "name": "Горелки",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.286503,37.613871"
        },
        {
            "name": "Донской",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.967479,38.352923"
        },
        {
            "name": "Дубна (Тульская обл.)",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.154879,36.964852"
        },
        {
            "name": "Епифань",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.823007,38.557228"
        },
        {
            "name": "Ефремов",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.149449,38.093733"
        },
        {
            "name": "Заокский",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.733260,37.395952"
        },
        {
            "name": "Казановка",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.215484,90.048007"
        },
        {
            "name": "Кимовск",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.970476,38.540126"
        },
        {
            "name": "Киреевск",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.935465,37.925621"
        },
        {
            "name": "Куркино",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "55.891917,37.388824"
        },
        {
            "name": "Ленинский",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "56.007613,92.968581"
        },
        {
            "name": "Лянтор",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.621311,72.164521"
        },
        {
            "name": "Новомосковск",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.010903,38.296306"
        },
        {
            "name": "Одоев",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.938491,36.684900"
        },
        {
            "name": "Плавск",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.711108,37.292090"
        },
        {
            "name": "Советск (Тульская обл.)",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.936934,37.636892"
        },
        {
            "name": "Суворов",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.125458,36.485623"
        },
        {
            "name": "Тула",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.204836,37.618491"
        },
        {
            "name": "Узловая",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.978996,38.166683"
        },
        {
            "name": "Щекино",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "53.999057,37.509634"
        },
        {
            "name": "Ясногорск",
            "district_id": 1,
            "region_id": 63,
            "coordinates": "54.480840,37.694128"
        },
        {
            "name": "Яр-Сале",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "66.862587,70.854469"
        },
        {
            "name": "Абатский",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.288368,70.438285"
        },
        {
            "name": "Аган",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.672366,75.664949"
        },
        {
            "name": "Аксарка",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "66.558310,67.787762"
        },
        {
            "name": "Армизонское",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "55.943987,67.685944"
        },
        {
            "name": "Аромашево",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.862190,68.643792"
        },
        {
            "name": "Белоярский (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "63.694070,66.698791"
        },
        {
            "name": "Бердюжье",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "55.801868,68.316758"
        },
        {
            "name": "Березово",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "63.936532,65.047903"
        },
        {
            "name": "Большое Сорокино",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.629711,69.807202"
        },
        {
            "name": "Вагай",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.934182,69.010741"
        },
        {
            "name": "Викулово",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.817816,70.610068"
        },
        {
            "name": "Винзили",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.960660,65.770247"
        },
        {
            "name": "Голышманово",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.466140,68.602156"
        },
        {
            "name": "Губкинский (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.216169,65.514876"
        },
        {
            "name": "Заводопетровский",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.839861,66.727519"
        },
        {
            "name": "Заводоуковск",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.498271,66.548842"
        },
        {
            "name": "Игрим",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "63.190833,64.418368"
        },
        {
            "name": "Излучинск",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "60.952778,76.888889"
        },
        {
            "name": "Исетское",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.481896,65.324858"
        },
        {
            "name": "Ишим",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.114631,69.477125"
        },
        {
            "name": "Казанское",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "55.640223,69.226185"
        },
        {
            "name": "Казым-Мыс",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "64.667358,65.657280"
        },
        {
            "name": "Когалым (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "62.235468,74.541794"
        },
        {
            "name": "Кондинское",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "59.650890,67.412319"
        },
        {
            "name": "Красноселькуп",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "65.694556,82.525613"
        },
        {
            "name": "Лабытнанги",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "66.655763,66.389832"
        },
        {
            "name": "Лангепас",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.270318,75.170086"
        },
        {
            "name": "Ларьяк",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.102470,80.264305"
        },
        {
            "name": "Лянторский",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.621311,72.164521"
        },
        {
            "name": "Мегион",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.037431,76.099798"
        },
        {
            "name": "Междуреченский",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "59.594584,65.911667"
        },
        {
            "name": "Мужи",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "65.402601,64.705997"
        },
        {
            "name": "Муравленко (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.175449,65.549299"
        },
        {
            "name": "Надым (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "65.600000,75.708333"
        },
        {
            "name": "Находка (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.133860,65.597425"
        },
        {
            "name": "Нефтеюганск",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.098064,72.581647"
        },
        {
            "name": "Нижневартовск",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "60.943118,76.543372"
        },
        {
            "name": "Нижняя Тавда",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.670116,66.174226"
        },
        {
            "name": "Новоаганск",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.943134,76.662363"
        },
        {
            "name": "Новый Уренгой (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "66.091339,76.683205"
        },
        {
            "name": "Ноябрьск (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "63.202714,75.452266"
        },
        {
            "name": "Нягань",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "62.129277,65.374514"
        },
        {
            "name": "Октябрьское (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.289069,68.931550"
        },
        {
            "name": "Омутинский",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.478648,67.665959"
        },
        {
            "name": "Покачи (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.712007,75.361554"
        },
        {
            "name": "Приобье",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "62.546583,65.628237"
        },
        {
            "name": "Пыть-Ях",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "60.727359,72.821191"
        },
        {
            "name": "Радужный (Ханты-Мансийский АО)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "62.103942,77.475399"
        },
        {
            "name": "Салехард",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "66.550073,66.602811"
        },
        {
            "name": "Сладково",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "55.529644,70.351971"
        },
        {
            "name": "Советский (Тюменская обл.)",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.888426,67.503949"
        },
        {
            "name": "Сургут",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.255950,73.384547"
        },
        {
            "name": "Тазовский",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "67.461304,78.708664"
        },
        {
            "name": "Тобольск",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "58.200024,68.263523"
        },
        {
            "name": "Тюмень",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.161298,65.525017"
        },
        {
            "name": "Уват",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "59.141359,68.892757"
        },
        {
            "name": "Унъюган",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "61.947710,64.929808"
        },
        {
            "name": "Упорово",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.312242,66.273255"
        },
        {
            "name": "Урай",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "60.125434,64.806621"
        },
        {
            "name": "Ханты-Мансийск",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.009092,69.037460"
        },
        {
            "name": "Югорск",
            "district_id": 6,
            "region_id": 78,
            "coordinates": "61.313828,63.342955"
        },
        {
            "name": "Юрибей",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "68.534025,70.631307"
        },
        {
            "name": "Ялуторовск",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "56.658867,66.305853"
        },
        {
            "name": "Ярково",
            "district_id": 6,
            "region_id": 64,
            "coordinates": "57.402569,67.075195"
        },
        {
            "name": "Алнаши",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.184805,52.471895"
        },
        {
            "name": "Балезино",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.970139,53.004901"
        },
        {
            "name": "Вавож",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.778016,51.923469"
        },
        {
            "name": "Воткинск",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.040944,53.976930"
        },
        {
            "name": "Глазов",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "58.136884,52.654834"
        },
        {
            "name": "Грахово",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.041542,51.964538"
        },
        {
            "name": "Дебесы",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.652547,53.810393"
        },
        {
            "name": "Завьялово",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "52.838208,80.915920"
        },
        {
            "name": "Игра",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.542138,53.069413"
        },
        {
            "name": "Ижевск",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.861860,53.232428"
        },
        {
            "name": "Кама",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.814815,53.053326"
        },
        {
            "name": "Камбарка",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.265022,54.204573"
        },
        {
            "name": "Каракулино",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.011700,53.701144"
        },
        {
            "name": "Кез",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.903389,53.715125"
        },
        {
            "name": "Кизнер",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.281072,51.506689"
        },
        {
            "name": "Киясово",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.340018,53.119622"
        },
        {
            "name": "Красногорское (Удмуртия)",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.704651,52.491752"
        },
        {
            "name": "Можга",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.438044,52.211660"
        },
        {
            "name": "Сарапул",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.452146,53.783363"
        },
        {
            "name": "Селты",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.307133,52.134271"
        },
        {
            "name": "Сюмси",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.102510,51.608223"
        },
        {
            "name": "Ува",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "56.983443,52.165387"
        },
        {
            "name": "Устинов",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.921398,60.104704"
        },
        {
            "name": "Шаркан",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.301470,53.867630"
        },
        {
            "name": "Юкаменское",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.890878,52.241932"
        },
        {
            "name": "Якшур-Бодья",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "57.185860,53.163872"
        },
        {
            "name": "Яр",
            "district_id": 7,
            "region_id": 65,
            "coordinates": "58.243379,52.111027"
        },
        {
            "name": "Базарный Сызган",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.750036,46.761044"
        },
        {
            "name": "Барыш",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.653627,47.108048"
        },
        {
            "name": "Большое Нагаткино",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.518802,47.990899"
        },
        {
            "name": "Вешкайма",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.051781,47.122325"
        },
        {
            "name": "Глотовка",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.948639,46.699598"
        },
        {
            "name": "Димитровград",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.226979,49.568457"
        },
        {
            "name": "Игнатовка",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.940209,47.643479"
        },
        {
            "name": "Измайлово",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "55.783513,37.773935"
        },
        {
            "name": "Инза",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.852988,46.354899"
        },
        {
            "name": "Ишеевка",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.422488,48.275921"
        },
        {
            "name": "Канадей",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.150955,47.516735"
        },
        {
            "name": "Карсун",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.199819,46.977715"
        },
        {
            "name": "Кузоватово",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.546033,47.688574"
        },
        {
            "name": "Майна",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.114376,47.617584"
        },
        {
            "name": "Новая Малыкла",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.199877,49.936088"
        },
        {
            "name": "Новоспасское",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.144754,47.760506"
        },
        {
            "name": "Новоульяновск",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.145036,48.390554"
        },
        {
            "name": "Павловка",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "55.421552,56.560955"
        },
        {
            "name": "Радищево",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "52.849819,47.859528"
        },
        {
            "name": "Сенгилей",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.960618,48.786363"
        },
        {
            "name": "Старая Кулатка",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "52.728502,47.619733"
        },
        {
            "name": "Старая Майна",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.605743,48.923141"
        },
        {
            "name": "Сурское",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.474814,46.713514"
        },
        {
            "name": "Тереньга",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "53.718944,48.368204"
        },
        {
            "name": "Ульяновск",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.318160,48.383792"
        },
        {
            "name": "Чердаклы",
            "district_id": 7,
            "region_id": 66,
            "coordinates": "54.355818,48.839541"
        },
        {
            "name": "Амурск",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "50.226651,136.895263"
        },
        {
            "name": "Аян",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "56.454056,138.167328"
        },
        {
            "name": "Березовый",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "52.232304,104.271063"
        },
        {
            "name": "Бикин",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "46.827948,134.246441"
        },
        {
            "name": "Бира",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.002620,132.467133"
        },
        {
            "name": "Биракан",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.003301,131.725335"
        },
        {
            "name": "Богородское (Хабаровский край)",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "52.372196,140.442719"
        },
        {
            "name": "Ванино",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.084445,140.253438"
        },
        {
            "name": "Волочаевка Вторая",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "48.558727,134.569588"
        },
        {
            "name": "Высокогорный",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "50.093464,139.138054"
        },
        {
            "name": "Вяземский",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "47.533514,134.752866"
        },
        {
            "name": "Горный",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "59.929200,30.269484"
        },
        {
            "name": "Гурское",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "50.312302,138.100372"
        },
        {
            "name": "Дормидонтовка",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "47.762070,134.925460"
        },
        {
            "name": "Заветы Ильича",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.019667,140.222110"
        },
        {
            "name": "Известковый",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "48.984774,131.573400"
        },
        {
            "name": "Иннокентьевка",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.678889,136.901667"
        },
        {
            "name": "Комсомольск-на-Амуре",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "50.567033,136.965895"
        },
        {
            "name": "Ленинское",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "45.252120,35.920841"
        },
        {
            "name": "Нелькан",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "57.658165,136.152283"
        },
        {
            "name": "Николаевск-на-Амуре",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "53.142390,140.731471"
        },
        {
            "name": "Облучье",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "49.013831,131.059458"
        },
        {
            "name": "Охотск",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "59.358460,143.203491"
        },
        {
            "name": "Переяславка",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "47.978948,135.062434"
        },
        {
            "name": "Смидович",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "48.601918,133.808841"
        },
        {
            "name": "Советская Гавань",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "48.975523,140.265355"
        },
        {
            "name": "Софийск",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "51.567827,139.845431"
        },
        {
            "name": "Троицкое",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "55.386770,37.418566"
        },
        {
            "name": "Тугур",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "53.771999,136.842438"
        },
        {
            "name": "Хабаровск",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "48.515784,135.101171"
        },
        {
            "name": "Чегдомын",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "51.120499,132.997330"
        },
        {
            "name": "Чумикан",
            "district_id": 4,
            "region_id": 68,
            "coordinates": "54.708952,135.322998"
        },
        {
            "name": "Абакан",
            "district_id": 5,
            "region_id": 69,
            "coordinates": "53.717564,91.429317"
        },
        {
            "name": "Саяногорск",
            "district_id": 5,
            "region_id": 69,
            "coordinates": "53.096619,91.416452"
        },
        {
            "name": "Черногорск",
            "district_id": 5,
            "region_id": 69,
            "coordinates": "53.824709,91.322872"
        },
        {
            "name": "Агаповка",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.302843,59.141396"
        },
        {
            "name": "Аргаяш",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.485710,60.875195"
        },
        {
            "name": "Аша",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.989093,57.273388"
        },
        {
            "name": "Бакал",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.952401,58.826205"
        },
        {
            "name": "Бреды",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "52.412784,60.345282"
        },
        {
            "name": "Варна",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "43.214050,27.914733"
        },
        {
            "name": "Верхнеуральск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.876414,59.220787"
        },
        {
            "name": "Верхний Уфалей",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "56.058903,60.223868"
        },
        {
            "name": "Еманжелинск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.756913,61.321149"
        },
        {
            "name": "Златоуст",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.155879,59.685885"
        },
        {
            "name": "Карабаш",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.477739,60.199568"
        },
        {
            "name": "Карталы",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.055399,60.637378"
        },
        {
            "name": "Касли",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.889724,60.744475"
        },
        {
            "name": "Катав-Ивановск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.764069,58.215203"
        },
        {
            "name": "Копейск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.133969,61.645764"
        },
        {
            "name": "Коркино",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.900951,61.367991"
        },
        {
            "name": "Красногорский",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.798008,37.241216"
        },
        {
            "name": "Кунашак",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.704090,61.538249"
        },
        {
            "name": "Куса",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.346438,59.446843"
        },
        {
            "name": "Кыштым",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.717471,60.552127"
        },
        {
            "name": "Магнитогорск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.412943,59.001623"
        },
        {
            "name": "Миасс",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.050679,60.103496"
        },
        {
            "name": "Миньяр",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.069349,57.551000"
        },
        {
            "name": "Озерск(Челябинская обл.)",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.713810,60.700959"
        },
        {
            "name": "Октябрьское (Челябинская обл.)",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.406122,62.723795"
        },
        {
            "name": "Пласт",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.372055,60.810784"
        },
        {
            "name": "Сатка",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.046748,59.008255"
        },
        {
            "name": "Сим",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.989612,57.687421"
        },
        {
            "name": "Снежинск (Челябинская обл.)",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "56.057173,60.754399"
        },
        {
            "name": "Трехгорный",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.817651,58.445493"
        },
        {
            "name": "Троицк",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.074757,61.567051"
        },
        {
            "name": "Увельский",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.441435,61.361988"
        },
        {
            "name": "Уйское",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.374959,60.006911"
        },
        {
            "name": "Усть-Катав",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.931170,58.164571"
        },
        {
            "name": "Фершампенуаз",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.519989,59.815899"
        },
        {
            "name": "Чебаркуль",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.981070,60.385617"
        },
        {
            "name": "Челябинск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "55.164442,61.436843"
        },
        {
            "name": "Чесма",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "53.805047,60.653002"
        },
        {
            "name": "Южно-Уральск",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.442065,61.260629"
        },
        {
            "name": "Юрюзань",
            "district_id": 6,
            "region_id": 70,
            "coordinates": "54.858562,58.424432"
        },
        {
            "name": "Аргун",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.292687,45.880238"
        },
        {
            "name": "Грозный",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.316880,45.681486"
        },
        {
            "name": "Гудермес",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.354630,46.102554"
        },
        {
            "name": "Знаменское",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.675302,45.124310"
        },
        {
            "name": "Малгобек",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.505394,44.583491"
        },
        {
            "name": "Назрань",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.214880,44.776350"
        },
        {
            "name": "Наурская",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.652255,45.310610"
        },
        {
            "name": "Ножай-Юрт",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.092597,46.377133"
        },
        {
            "name": "Орджоникидзевская",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.321331,45.044839"
        },
        {
            "name": "Советское (Чечено-Ингушетия)",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.405170,44.820300"
        },
        {
            "name": "Урус-Мартан",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.131106,45.540823"
        },
        {
            "name": "Шали",
            "district_id": 8,
            "region_id": 71,
            "coordinates": "43.143468,45.904291"
        },
        {
            "name": "Агинское",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.102832,114.526284"
        },
        {
            "name": "Аксеново-Зиловское",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "53.069313,117.509486"
        },
        {
            "name": "Акша",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.285078,113.276686"
        },
        {
            "name": "Арбагар",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.940517,116.281454"
        },
        {
            "name": "Атамановка",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.930956,113.643677"
        },
        {
            "name": "Балей",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.581173,116.655812"
        },
        {
            "name": "Борзя",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.383575,116.509108"
        },
        {
            "name": "Букачача",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "52.973796,116.903496"
        },
        {
            "name": "Газимурский Завод",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.538642,118.327804"
        },
        {
            "name": "Давенда",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "53.557251,119.311470"
        },
        {
            "name": "Дарасун",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.658416,113.975410"
        },
        {
            "name": "Домна",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.901362,113.153095"
        },
        {
            "name": "Дровяная",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.580681,113.039986"
        },
        {
            "name": "Дульдурга",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.674952,113.590561"
        },
        {
            "name": "Забайкальск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "49.664716,117.327561"
        },
        {
            "name": "Карымское",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.607910,114.356556"
        },
        {
            "name": "Ключевский",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "53.539783,119.447451"
        },
        {
            "name": "Кокуй",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "52.207096,117.549289"
        },
        {
            "name": "Краснокаменск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.096614,118.036131"
        },
        {
            "name": "Красный Чикой",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.370171,108.770378"
        },
        {
            "name": "Кыра",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "49.590272,111.980506"
        },
        {
            "name": "Моготуй",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.2843635,114.9041513"
        },
        {
            "name": "Могоча",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "53.741700,119.757515"
        },
        {
            "name": "Нерчинск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.976935,116.569712"
        },
        {
            "name": "Нерчинский Завод",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.308611,119.616667"
        },
        {
            "name": "Нижний Цасучей",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.515804,115.126221"
        },
        {
            "name": "Оловянная",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.939713,115.556827"
        },
        {
            "name": "Первомайский (Читинская обл.)",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.670401,115.619792"
        },
        {
            "name": "Петровск-Забайкальский",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.273122,108.848811"
        },
        {
            "name": "Приаргунск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "50.368238,119.073599"
        },
        {
            "name": "Сретенск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "52.251164,117.701442"
        },
        {
            "name": "Тупик",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "54.419976,119.935636"
        },
        {
            "name": "Улеты",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.359117,112.484985"
        },
        {
            "name": "Хилок",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.359297,110.449869"
        },
        {
            "name": "Чара",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "56.913055,118.250862"
        },
        {
            "name": "Чернышевск",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "52.535136,117.026669"
        },
        {
            "name": "Чита",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "52.051503,113.471191"
        },
        {
            "name": "Шелопугино",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.645562,117.582581"
        },
        {
            "name": "Шилка",
            "district_id": 5,
            "region_id": 72,
            "coordinates": "51.869290,116.023848"
        },
        {
            "name": "Алатырь",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "54.838343,46.581879"
        },
        {
            "name": "Аликово",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.739057,46.748305"
        },
        {
            "name": "Батырева",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.737585,37.612633"
        },
        {
            "name": "Буинск",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "54.975630,48.278704"
        },
        {
            "name": "Вурнары",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.492286,46.955016"
        },
        {
            "name": "Ибреси",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.307827,47.050327"
        },
        {
            "name": "Канаш",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.512178,47.496965"
        },
        {
            "name": "Киря",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.077223,46.866939"
        },
        {
            "name": "Комсомольское",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "47.666871,38.076284"
        },
        {
            "name": "Красноармейское (Чувашия)",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.765521,47.173629"
        },
        {
            "name": "Красные Четаи",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.695000,46.179315"
        },
        {
            "name": "Кугеси",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "56.031215,47.300919"
        },
        {
            "name": "Мариинский Посад",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "56.111901,47.721057"
        },
        {
            "name": "Моргауши",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.969555,46.765084"
        },
        {
            "name": "Новочебоксарск",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "56.103603,47.506507"
        },
        {
            "name": "Порецкое",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.198443,46.313259"
        },
        {
            "name": "Урмары",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.6831624,47.9232484"
        },
        {
            "name": "Цивильск",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.8649658,47.4372632"
        },
        {
            "name": "Чебоксары",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "56.1042955,47.1893781"
        },
        {
            "name": "Шемурша",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "54.8840549,47.5037238"
        },
        {
            "name": "Шумерля",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.5042111,46.3736186"
        },
        {
            "name": "Ядрин",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.9441152,46.1632121"
        },
        {
            "name": "Яльчики",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.1616148,47.9942868"
        },
        {
            "name": "Янтиково",
            "district_id": 7,
            "region_id": 73,
            "coordinates": "55.5179856,47.7431485"
        },
        {
            "name": "Анадырь (Чукотский АО)",
            "district_id": 4,
            "region_id": 74,
            "coordinates": "64.7279718,177.4654577"
        },
        {
            "name": "Билибино",
            "district_id": 4,
            "region_id": 74,
            "coordinates": "68.0596464,166.4351382"
        },
        {
            "name": "Губкинский (Ямало-Ненецкий АО)",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "64.4456549,76.3945291"
        },
        {
            "name": "Заполярный (Ямало-Ненецкий АО)",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "66.4583409,73.8329122"
        },
        {
            "name": "Муравленко",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "63.7152163,74.2896446"
        },
        {
            "name": "Надым",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "65.5315478,72.4911046"
        },
        {
            "name": "Новый Уренгой",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "66.0970223,76.6009381"
        },
        {
            "name": "Ноябрьск",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "63.1767548,75.377127"
        },
        {
            "name": "Пангоды",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "65.8532925,74.4640057"
        },
        {
            "name": "Пуровск",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "64.9445659,77.5311593"
        },
        {
            "name": "Салехард",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "66.5580591,66.5350883"
        },
        {
            "name": "Тазовский",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "67.4613116,78.6999091"
        },
        {
            "name": "Тарко-Сале",
            "district_id": 6,
            "region_id": 75,
            "coordinates": "64.9225127,77.744406"
        },
        {
            "name": "Берендеево",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "56.5983674,39.0122919"
        },
        {
            "name": "Большое Село",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.7208968,38.9254573"
        },
        {
            "name": "Борисоглебский",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.2673676,39.1170666"
        },
        {
            "name": "Брейтово",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "58.2937108,37.8483572"
        },
        {
            "name": "Бурмакино",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.4360809,40.2941835"
        },
        {
            "name": "Варегово",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.7760261,39.267609"
        },
        {
            "name": "Волга",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.9508447,38.3602326"
        },
        {
            "name": "Гаврилов Ям",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.3017995,39.8171232"
        },
        {
            "name": "Данилов",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "58.1834463,40.1037948"
        },
        {
            "name": "Любим",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "58.3559372,40.6611481"
        },
        {
            "name": "Мышкин",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.7840604,38.4195411"
        },
        {
            "name": "Некрасовское",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.6830266,40.3280346"
        },
        {
            "name": "Новый Некоуз",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.9023958,38.0240115"
        },
        {
            "name": "Переславль-Залесский",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "56.7352865,38.7835907"
        },
        {
            "name": "Пошехонье-Володарск",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "58.504144,39.0949595"
        },
        {
            "name": "Ростов",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.1968466,39.38051"
        },
        {
            "name": "Рыбинск",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "58.0610653,38.6718131"
        },
        {
            "name": "Тутаев",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.8699376,39.4638227"
        },
        {
            "name": "Углич",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.5285873,38.2312432"
        },
        {
            "name": "Ярославль",
            "district_id": 1,
            "region_id": 76,
            "coordinates": "57.6525163,39.5843354"
        },
        {
            "name": "Черкесск",
            "district_id": 8,
            "region_id": 77,
            "coordinates": "44.2237731,41.9871642"
        }
    ]