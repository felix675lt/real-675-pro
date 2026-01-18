import { Language } from './types';

export const translations: Record<Language, any> = {
  en: {
    nav: {
      concept: "Concept",
      suites: "Suites",
      amenities: "Amenities",
      reserve: "Reserve"
    },
    hero: {
      subtitle: "Private Garage Suites",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "Experience the transparency of luxury.\nYour vehicle, showcased in your private sanctuary.",
      enter: "ENTER SANCTUARY",
      access: "Biometric Access"
    },
    features: {
      concept: "The Concept",
      title: "Designed for the Driven Individual.",
      desc: "Glass Room reinvents the luxury stay. We understand that your vehicle is an extension of yourself. Our \"Garage Suites\" feature glass-walled viewing areas connecting your private garage to your living space, so your pride and joy is always the centerpiece.",
      items: [
        { title: "Absolute Privacy", desc: "Check-in via app. Drive directly into your suite's garage. No front desk, no cameras, no eyes." },
        { title: "Acoustic Perfection", desc: "Sound-dampened walls and high-fidelity Bang & Olufsen audio systems in every room." },
        { title: "Smart Control", desc: "Control lighting, climate, garage doors, and room service via the in-suite iPad or voice control." },
        { title: "Premium Provisions", desc: "A fully stocked bar, Nespresso Vertuo, and a curated selection of cigars in your private lounge." }
      ],
      quote: "\"The only hotel where your car sleeps as comfortably as you do.\""
    },
    gallery: {
      spaces: "The Spaces",
      explore: "Explore the Facility",
      checkAvailability: "Check Availability",
      viewDetails: "View Details",
      details: "Details",
      book: "Book This Suite",
      inquire: "Inquire Access",
      close: "Close",
      rooms: [
        {
          title: "The Glass Suite",
          desc: "Located on the 1.5 floor. A private sanctuary featuring 2 Single King beds and a direct panoramic view of your parked vehicle.",
          detail: "Situated on the unique 1.5 level, the Glass Suite is the architectural heart of our facility.\n\nAccommodation:\nTwo oversized Single King beds fitted with 1000-thread count Egyptian cotton linens.\n\nThe View:\nA hermetically sealed, floor-to-ceiling acoustic glass wall separates the living area from your private garage bay.\n\nVirtual Tuning Studio:\nTransform your passion into play. Scan your vehicle through the glass and virtually install performance parts using our AR app.",
          price: "Max 3 Guests"
        },
        {
          title: "The Paddock Lounge",
          desc: "Located on the 1st floor. An exclusive social hub where you can enjoy curated drinks and premium snacks.",
          detail: "Located on the ground floor (1F), The Paddock is the communal soul of the Glass Room.\n\nAtmosphere:\nDark, moody, and intimate.\n\nFood & Beverage:\nGuests enjoy complimentary access to a curated selection of rare scotches, cognacs, and artisanal coffee.",
          price: "Access Included"
        },
        {
          title: "Redline Zone",
          desc: "Located on the 2nd floor. Recharge with a private sauna session or engage in high-octane excitement.",
          detail: "Occupying the entire 2nd floor, the Redline Zone is a dual-purpose facility.\n\nGaming Arena:\nFeatures two high-specification PC gaming stations and sim-racing rigs.\n\nWellness Suite:\nReset your autonomic nervous system in our traditional cedar-lined Finnish sauna.",
          price: "Access Included"
        }
      ]
    },
    reservation: {
      step1: "Step 01",
      selectExp: "Select Experience",
      expDesc: "Choose how you wish to engage with the facility.",
      overnight: "Overnight Stay",
      overnightDesc: "Check-in: 3:00 PM \n Check-out: 11:00 AM",
      overnightPrice: "From $1,200 / Night",
      dayuse: "Daytime Pitstop",
      dayuseDesc: "4-Hour Access \n Flexible Check-in",
      dayusePrice: "From $450 / Session",
      step2: "Step 02",
      dateDetails: "Date & Details",
      back: "Back",
      checkin: "Check-in Time",
      guests: "Guest Count",
      maxGuests: "Max 3 guests per suite",
      continue: "Continue to Payment",
      step3: "Step 03",
      secure: "Secure Reservation",
      summary: "Booking Summary",
      experience: "Experience",
      date: "Date",
      total: "Total Due",
      cardName: "Cardholder Name",
      cardNumber: "Card Number",
      expiry: "Expiry",
      cvc: "CVC",
      pay: "Confirm & Pay",
      processing: "Processing...",
      success: "Success",
      confirmed: "Reservation Confirmed",
      confirmMsg: "Thank you. Your suite has been secured. A digital key and detailed arrival instructions have been sent to your email.",
      return: "Return to Home"
    }
  },
  ko: {
    nav: {
      concept: "컨셉",
      suites: "스위트",
      amenities: "어메니티",
      reserve: "예약하기"
    },
    hero: {
      subtitle: "프라이빗 개러지 스위트",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "투명한 럭셔리를 경험하세요.\n당신의 차량이 전시되는 프라이빗한 성역.",
      enter: "입장하기",
      access: "생체 인식 보안"
    },
    features: {
      concept: "컨셉",
      title: "드라이버를 위한 설계.",
      desc: "Glass Room은 럭셔리 스테이를 재정의합니다. 자동차는 당신의 확장입니다. 우리의 \"개러지 스위트\"는 유리 벽을 통해 거실과 개인 차고를 연결하여, 당신의 애마가 항상 중심에 있도록 설계되었습니다.",
      items: [
        { title: "완벽한 프라이버시", desc: "앱으로 체크인하고 차고로 직접 운전해서 들어오세요. 프론트 데스크도, 카메라도, 시선도 없습니다." },
        { title: "완벽한 방음", desc: "모든 객실에 방음 벽과 고성능 Bang & Olufsen 오디오 시스템이 설치되어 있습니다." },
        { title: "스마트 컨트롤", desc: "조명, 실내 온도, 차고 문, 룸서비스를 아이패드나 음성으로 제어하세요." },
        { title: "프리미엄 제공품", desc: "풀 스톡 바, 네스프레소 버츄오, 그리고 엄선된 시가가 준비되어 있습니다." }
      ],
      quote: "\"자동차가 당신만큼 편안하게 쉴 수 있는 유일한 호텔.\""
    },
    gallery: {
      spaces: "공간 소개",
      explore: "시설 둘러보기",
      checkAvailability: "예약 가능 여부 확인",
      viewDetails: "상세 보기",
      details: "상세 정보",
      book: "이 스위트 예약",
      inquire: "입장 문의",
      close: "닫기",
      rooms: [
        {
          title: "글래스 스위트",
          desc: "1.5층 위치. 킹 베드 2개와 주차된 차량의 파노라마 뷰를 즐길 수 있는 프라이빗 성역입니다.",
          detail: "독특한 1.5층 구조의 글래스 스위트는 이 시설의 핵심입니다.\n\n숙박:\n1000수 이집트 면 침구로 덮인 오버사이즈 싱글 킹 베드 2개.\n\n뷰:\n밀폐된 방음 유리 벽이 거실과 개인 차고를 분리합니다.\n\n가상 튜닝 스튜디오:\n열정을 놀이로 바꾸세요. 유리를 통해 차량을 스캔하고 AR 앱으로 퍼포먼스 부품을 가상으로 장착해보세요.",
          price: "최대 3인"
        },
        {
          title: "패독 라운지",
          desc: "1층 위치. 엄선된 음료와 프리미엄 스낵을 즐길 수 있는 익스클루시브 소셜 허브입니다.",
          detail: "1층(1F)에 위치한 패독은 글래스 룸의 소셜 중심지입니다.\n\n분위기:\n어둡고 무드 있으며 친밀합니다.\n\n식음료:\n희귀한 스카치, 코냑, 아티장 커피를 무료로 즐기실 수 있습니다.",
          price: "입장 포함"
        },
        {
          title: "레드라인 존",
          desc: "2층 위치. 프라이빗 사우나로 재충전하거나 고성능 게이밍을 즐기세요.",
          detail: "2층 전체를 사용하는 레드라인 존은 아드레날린과 회복을 위한 공간입니다.\n\n게이밍 아레나:\n두 대의 고사양 PC와 심 레이싱 장비를 갖추고 있습니다.\n\n웰니스 스위트:\n전통 핀란드식 편백나무 사우나에서 자율 신경계를 재설정하세요.",
          price: "입장 포함"
        }
      ]
    },
    reservation: {
      step1: "Step 01",
      selectExp: "경험 선택",
      expDesc: "시설 이용 방식을 선택해주세요.",
      overnight: "숙박 (Overnight)",
      overnightDesc: "체크인: 3:00 PM \n 체크아웃: 11:00 AM",
      overnightPrice: "$1,200 부터 / 1박",
      dayuse: "데이 유즈 (Daytime Pitstop)",
      dayuseDesc: "4시간 이용 \n 유연한 체크인",
      dayusePrice: "$450 부터 / 1회",
      step2: "Step 02",
      dateDetails: "날짜 및 상세",
      back: "뒤로",
      checkin: "체크인 시간",
      guests: "게스트 수",
      maxGuests: "스위트당 최대 3명",
      continue: "결제하기",
      step3: "Step 03",
      secure: "예약 확정",
      summary: "예약 요약",
      experience: "선택 항목",
      date: "날짜",
      total: "총 결제 금액",
      cardName: "카드 소유자 이름",
      cardNumber: "카드 번호",
      expiry: "유효기간",
      cvc: "CVC",
      pay: "결제 및 확정",
      processing: "처리 중...",
      success: "성공",
      confirmed: "예약이 확정되었습니다",
      confirmMsg: "감사합니다. 스위트가 확보되었습니다. 디지털 키와 상세 도착 안내가 이메일로 전송되었습니다.",
      return: "홈으로 돌아가기"
    }
  },
  ja: {
    nav: {
      concept: "コンセプト",
      suites: "スイート",
      amenities: "アメニティ",
      reserve: "予約する"
    },
    hero: {
      subtitle: "プライベート・ガレージ・スイート",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "透明なラグジュアリーを体験してください。\nあなたの愛車が、あなただけの聖域で展示されます。",
      enter: "サンクチュアリへ",
      access: "生体認証アクセス"
    },
    features: {
      concept: "コンセプト",
      title: "ドライバーのための設計",
      desc: "Glass Roomはラグジュアリーステイを再定義します。車はあなたの一部です。私たちの「ガレージスイート」は、ガラス張りのエリアでガレージと居住空間をつなぎ、愛車が常に主役となるように設計されています。",
      items: [
        { title: "完全なプライバシー", desc: "アプリでチェックイン。ガレージへ直接乗り入れ。フロントもカメラも視線もありません。" },
        { title: "完璧な音響", desc: "全室に防音壁とBang & Olufsenのハイファイオーディオシステムを完備。" },
        { title: "スマートコントロール", desc: "照明、空調、ガレージドア、ルームサービスをiPadや音声で操作。" },
        { title: "プレミアムな設備", desc: "フルストックバー、ネスプレッソ・ヴァーチュオ、厳選された葉巻をご用意。" }
      ],
      quote: "\"愛車があなたと同じくらい快適に眠れる唯一のホテル\""
    },
    gallery: {
      spaces: "スペース",
      explore: "施設を見る",
      checkAvailability: "空室状況を確認",
      viewDetails: "詳細を見る",
      details: "詳細",
      book: "予約する",
      inquire: "アクセスをリクエスト",
      close: "閉じる",
      rooms: [
        {
          title: "グラス・スイート",
          desc: "1.5階に位置。キングベッド2台と駐車した車のパノラマビューを備えたプライベートな聖域。",
          detail: "ユニークな1.5階層にあるグラス・スイートは、この施設の中心的建築です。\n\n宿泊:\n1000スレッドカウントのエジプト綿リネンを使用した特大シングルキングベッド2台。\n\n眺望:\n密閉された防音ガラス壁が、リビングエリアとプライベートガレージを隔てています。\n\nバーチャルチューニングスタジオ:\n情熱を遊びに。ガラス越しに車両をスキャンし、ARアプリを使用してパフォーマンスパーツを仮想的に装着できます。",
          price: "最大3名"
        },
        {
          title: "パドック・ラウンジ",
          desc: "1階に位置。厳選されたドリンクとプレミアムスナックを楽しめる専用ソーシャルハブ。",
          detail: "1階（1F）にあるパドックは、Glass Roomの社交の中心です。\n\n雰囲気:\nダークでムーディー、そして親密。\n\n飲食:\n厳選されたスコッチ、コニャック、職人技のコーヒーを無料でお楽しみいただけます。",
          price: "アクセス込み"
        },
        {
          title: "レッドライン・ゾーン",
          desc: "2階に位置。プライベートサウナでリチャージするか、ハイオクな興奮に没頭するか。",
          detail: "2階全体を占めるレッドライン・ゾーンは、アドレナリンと回復のための多目的施設です。\n\nゲーミングアリーナ:\nハイスペックPCとシムレーシングリグを完備。\n\nウェルネススイート:\n伝統的なヒノキのフィンランド式サウナで自律神経をリセット。",
          price: "アクセス込み"
        }
      ]
    },
    reservation: {
      step1: "Step 01",
      selectExp: "体験を選択",
      expDesc: "施設のご利用方法をお選びください。",
      overnight: "ご宿泊 (Overnight)",
      overnightDesc: "チェックイン: 3:00 PM \n チェックアウト: 11:00 AM",
      overnightPrice: "$1,200 から / 泊",
      dayuse: "デイユース (Daytime Pitstop)",
      dayuseDesc: "4時間利用 \n フレキシブルチェックイン",
      dayusePrice: "$450 から / 回",
      step2: "Step 02",
      dateDetails: "日時と詳細",
      back: "戻る",
      checkin: "チェックイン時間",
      guests: "ゲスト人数",
      maxGuests: "1スイート最大3名",
      continue: "支払いに進む",
      step3: "Step 03",
      secure: "予約の確保",
      summary: "予約概要",
      experience: "プラン",
      date: "日付",
      total: "合計金額",
      cardName: "カード名義人",
      cardNumber: "カード番号",
      expiry: "有効期限",
      cvc: "CVC",
      pay: "確定して支払う",
      processing: "処理中...",
      success: "成功",
      confirmed: "予約が確定しました",
      confirmMsg: "ありがとうございます。スイートが確保されました。デジタルキーと詳細な到着案内がメールで送信されました。",
      return: "ホームに戻る"
    }
  },
  zh: {
    nav: {
      concept: "理念",
      suites: "套房",
      amenities: "设施",
      reserve: "预订"
    },
    hero: {
      subtitle: "私人车库套房",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "体验透明的奢华。\n您的爱车将在私人圣所中展示。",
      enter: "进入圣所",
      access: "生物识别访问"
    },
    features: {
      concept: "理念",
      title: "为驾驶者设计。",
      desc: "Glass Room 重新定义了豪华住宿。我们理解您的车辆是您自身的延伸。我们的“车库套房”设有玻璃墙观赏区，将您的私人车库与生活空间连接起来，让您的爱车永远是焦点。",
      items: [
        { title: "绝对隐私", desc: "通过应用程序办理入住。直接驶入套房车库。无前台，无摄像头，无视线打扰。" },
        { title: "完美声学", desc: "每个房间均配有隔音墙和高保真 Bang & Olufsen 音响系统。" },
        { title: "智能控制", desc: "通过套房内的 iPad 或语音控制照明、气候、车库门和客房服务。" },
        { title: "尊享供应", desc: "私人休息室内设有储备充足的酒吧、Nespresso Vertuo 咖啡机和精选雪茄。" }
      ],
      quote: "\"唯一一家让您的爱车和您一样舒适入睡的酒店。\""
    },
    gallery: {
      spaces: "空间",
      explore: "探索设施",
      checkAvailability: "检查空房",
      viewDetails: "查看详情",
      details: "详情",
      book: "预订此套房",
      inquire: "查询访问",
      close: "关闭",
      rooms: [
        {
          title: "玻璃套房",
          desc: "位于1.5楼。一个私人圣所，设有2张单人特大床，可直接全景俯瞰您停放的车辆。",
          detail: "玻璃套房位于独特的1.5层，是我们设施的建筑核心。\n\n住宿：\n两张超大单人特大床，铺有1000支埃及棉床单。\n\n景观：\n密封的落地隔音玻璃墙将生活区与您的私人车库隔开。\n\n虚拟改装工作室：\n将激情转化为游戏。通过玻璃扫描您的车辆，并使用我们的AR应用程序虚拟安装性能部件。",
          price: "最多3位客人"
        },
        {
          title: "围场休息室",
          desc: "位于1楼。一个专属社交中心，您可以在此享用精选饮品和优质小吃。",
          detail: "位于一楼（1F）的围场是 Glass Room 的社交灵魂。\n\n氛围：\n黑暗、情绪化且亲密。\n\n餐饮：\n客人可免费享用精选的稀有威士忌、干邑白兰地和手工咖啡。",
          price: "包含访问权限"
        },
        {
          title: "红线区",
          desc: "位于2楼。通过私人桑拿恢复活力，或参与高强度的刺激活动。",
          detail: "红线区占据整个2楼，是专为肾上腺素和恢复而设的双重用途设施。\n\n游戏竞技场：\n配备两台高规格 PC 游戏站和模拟赛车设备。\n\n健康套房：\n在我们传统的雪松衬里芬兰桑拿房中重置您的自主神经系统。",
          price: "包含访问权限"
        }
      ]
    },
    reservation: {
      step1: "Step 01",
      selectExp: "选择体验",
      expDesc: "选择您希望如何使用该设施。",
      overnight: "过夜住宿 (Overnight)",
      overnightDesc: "入住: 3:00 PM \n 退房: 11:00 AM",
      overnightPrice: "$1,200 起 / 晚",
      dayuse: "日间休息 (Daytime Pitstop)",
      dayuseDesc: "4小时使用 \n 灵活入住",
      dayusePrice: "$450 起 / 次",
      step2: "Step 02",
      dateDetails: "日期与详情",
      back: "返回",
      checkin: "入住时间",
      guests: "客人数",
      maxGuests: "每套房最多3人",
      continue: "继续支付",
      step3: "Step 03",
      secure: "安全预订",
      summary: "预订摘要",
      experience: "体验",
      date: "日期",
      total: "总应付",
      cardName: "持卡人姓名",
      cardNumber: "卡号",
      expiry: "有效期",
      cvc: "安全码",
      pay: "确认并支付",
      processing: "处理中...",
      success: "成功",
      confirmed: "预订已确认",
      confirmMsg: "谢谢。您的套房已保留。数字钥匙和详细的到达说明已发送到您的电子邮件。",
      return: "返回首页"
    }
  },
  es: {
    nav: {
      concept: "Concepto",
      suites: "Suites",
      amenities: "Servicios",
      reserve: "Reservar"
    },
    hero: {
      subtitle: "Suites de Garaje Privadas",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "Experimente la transparencia del lujo.\nSu vehículo, exhibido en su santuario privado.",
      enter: "ENTRAR AL SANTUARIO",
      access: "Acceso Biométrico"
    },
    features: {
      concept: "El Concepto",
      title: "Diseñado para el Individuo Motivado.",
      desc: "Glass Room reinventa la estancia de lujo. Entendemos que su vehículo es una extensión de usted mismo. Nuestras \"Garage Suites\" cuentan con áreas de visualización con paredes de vidrio que conectan su garaje privado con su espacio vital.",
      items: [
        { title: "Privacidad Absoluta", desc: "Check-in vía app. Conduzca directamente a su garaje. Sin recepción, sin cámaras, sin miradas." },
        { title: "Perfección Acústica", desc: "Paredes insonorizadas y sistemas de audio Bang & Olufsen de alta fidelidad en cada habitación." },
        { title: "Control Inteligente", desc: "Controle la iluminación, el clima, las puertas del garaje y el servicio de habitaciones mediante el iPad o por voz." },
        { title: "Provisiones Premium", desc: "Un bar completamente surtido, Nespresso Vertuo y una selección curada de cigarros en su salón privado." }
      ],
      quote: "\"El único hotel donde su coche duerme tan cómodamente como usted.\""
    },
    gallery: {
      spaces: "Los Espacios",
      explore: "Explorar las Instalaciones",
      checkAvailability: "Ver Disponibilidad",
      viewDetails: "Ver Detalles",
      details: "Detalles",
      book: "Reservar esta Suite",
      inquire: "Consultar Acceso",
      close: "Cerrar",
      rooms: [
        {
          title: "The Glass Suite",
          desc: "Ubicada en el piso 1.5. Un santuario privado con 2 camas King individuales y vista panorámica directa de su vehículo.",
          detail: "Situada en el nivel único 1.5, la Glass Suite es el corazón arquitectónico de nuestras instalaciones.\n\nAlojamiento:\nDos camas King individuales de gran tamaño con sábanas de algodón egipcio de 1000 hilos.\n\nLa Vista:\nUna pared de vidrio acústico herméticamente sellada separa la sala de estar de su garaje privado.\n\nEstudio de Tuning Virtual:\nTransforme su pasión en juego. Escanee su vehículo a través del vidrio e instale virtualmente piezas de rendimiento usando nuestra aplicación AR.",
          price: "Max 3 Huéspedes"
        },
        {
          title: "The Paddock Lounge",
          desc: "Ubicado en el 1er piso. Un centro social exclusivo donde puede disfrutar de bebidas curadas y bocadillos premium.",
          detail: "Ubicado en la planta baja (1F), The Paddock es el alma comunitaria de Glass Room.\n\nAtmósfera:\nOscura, melancólica e íntima.\n\nAlimentos y Bebidas:\nLos huéspedes disfrutan de acceso gratuito a una selección curada de whiskies raros, coñacs y café artesanal.",
          price: "Acceso Incluido"
        },
        {
          title: "Redline Zone",
          desc: "Ubicada en el 2do piso. Recárguese con una sesión de sauna privada o participe en emociones de alto octanaje.",
          detail: "Ocupando todo el segundo piso, la Redline Zone es una instalación de doble propósito para la adrenalina y la recuperación.\n\nArena de Juegos:\nCuenta con dos estaciones de juegos de PC de alta especificación y simuladores de carreras.\n\nSuite de Bienestar:\nRestablezca su sistema nervioso autónomo en nuestra sauna finlandesa tradicional forrada de cedro.",
          price: "Acceso Incluido"
        }
      ]
    },
    reservation: {
      step1: "Paso 01",
      selectExp: "Seleccionar Experiencia",
      expDesc: "Elija cómo desea interactuar con la instalación.",
      overnight: "Estancia Nocturna",
      overnightDesc: "Check-in: 3:00 PM \n Check-out: 11:00 AM",
      overnightPrice: "Desde $1,200 / Noche",
      dayuse: "Parada Diurna",
      dayuseDesc: "Acceso de 4 horas \n Check-in flexible",
      dayusePrice: "Desde $450 / Sesión",
      step2: "Paso 02",
      dateDetails: "Fecha y Detalles",
      back: "Atrás",
      checkin: "Hora de Check-in",
      guests: "Huéspedes",
      maxGuests: "Max 3 huéspedes por suite",
      continue: "Continuar al Pago",
      step3: "Paso 03",
      secure: "Asegurar Reserva",
      summary: "Resumen de Reserva",
      experience: "Experiencia",
      date: "Fecha",
      total: "Total a Pagar",
      cardName: "Nombre del Titular",
      cardNumber: "Número de Tarjeta",
      expiry: "Expiración",
      cvc: "CVC",
      pay: "Confirmar y Pagar",
      processing: "Procesando...",
      success: "Éxito",
      confirmed: "Reserva Confirmada",
      confirmMsg: "Gracias. Su suite ha sido asegurada. Se ha enviado una llave digital e instrucciones detalladas de llegada a su correo electrónico.",
      return: "Volver al Inicio"
    }
  },
  ru: {
    nav: {
      concept: "Концепция",
      suites: "Люксы",
      amenities: "Удобства",
      reserve: "Забронировать"
    },
    hero: {
      subtitle: "Частные Гаражные Люксы",
      title: "THE GLASS ROOM",
      slogan: "Drive In. Zone Out.",
      desc: "Ощутите прозрачность роскоши.\nВаш автомобиль, выставленный в вашем личном святилище.",
      enter: "ВОЙТИ В СВЯТИЛИЩЕ",
      access: "Биометрический доступ"
    },
    features: {
      concept: "Концепция",
      title: "Создано для увлеченных.",
      desc: "Glass Room изобретает заново роскошный отдых. Мы понимаем, что ваш автомобиль — это продолжение вас самих. Наши «Гаражные Люксы» оснащены стеклянными стенами, соединяющими ваш личный гараж с жилой зоной.",
      items: [
        { title: "Абсолютная Приватность", desc: "Регистрация через приложение. Заезжайте прямо в гараж вашего люкса. Никакой стойки регистрации, никаких камер, никаких взглядов." },
        { title: "Акустическое Совершенство", desc: "Звукоизолированные стены и аудиосистемы Bang & Olufsen высокой четкости в каждой комнате." },
        { title: "Умное Управление", desc: "Управляйте освещением, климатом, гаражными воротами и обслуживанием номеров через iPad или голосом." },
        { title: "Премиальные Припасы", desc: "Полностью укомплектованный бар, Nespresso Vertuo и отборные сигары в вашем личном лаундже." }
      ],
      quote: "\"Единственный отель, где ваш автомобиль спит так же комфортно, как и вы.\""
    },
    gallery: {
      spaces: "Пространства",
      explore: "Исследовать Объект",
      checkAvailability: "Проверить Наличие",
      viewDetails: "Подробнее",
      details: "Детали",
      book: "Забронировать",
      inquire: "Запросить Доступ",
      close: "Закрыть",
      rooms: [
        {
          title: "Стеклянный Люкс",
          desc: "Расположен на 1.5 этаже. Частное святилище с 2 кроватями King и панорамным видом на ваш припаркованный автомобиль.",
          detail: "Стеклянный Люкс, расположенный на уникальном уровне 1.5, является архитектурным сердцем нашего объекта.\n\nПроживание:\nДве огромные односпальные кровати King с бельем из египетского хлопка плотностью 1000 нитей.\n\nВид:\nГерметичная звукоизолирующая стеклянная стена от пола до потолка отделяет жилую зону от вашего личного гаража.\n\nСтудия Виртуального Тюнинга:\nПревратите страсть в игру. Сканируйте свой автомобиль через стекло и виртуально устанавливайте детали с помощью нашего AR-приложения.",
          price: "Макс 3 Гостя"
        },
        {
          title: "Лаундж Паддок",
          desc: "Расположен на 1 этаже. Эксклюзивный социальный центр, где можно насладиться отборными напитками и закусками.",
          detail: "Расположенный на первом этаже (1F), Паддок является социальной душой Glass Room.\n\nАтмосфера:\nТемная, угрюмая и интимная.\n\nЕда и Напитки:\nГости могут бесплатно насладиться отборными редкими сортами виски, коньяка и авторским кофе.",
          price: "Доступ Включен"
        },
        {
          title: "Красная Зона",
          desc: "Расположена на 2 этаже. Зарядитесь энергией в частной сауне или окунитесь в мир высоких скоростей.",
          detail: "Занимая весь 2 этаж, Красная Зона — это объект двойного назначения для адреналина и восстановления.\n\nИгровая Арена:\nОснащена двумя мощными ПК и симуляторами гонок.\n\nОздоровительный Люкс:\nПерезагрузите свою вегетативную нервную систему в нашей традиционной финской сауне, обшитой кедром.",
          price: "Доступ Включен"
        }
      ]
    },
    reservation: {
      step1: "Шаг 01",
      selectExp: "Выберите Опыт",
      expDesc: "Выберите, как вы хотите взаимодействовать с объектом.",
      overnight: "Ночевка (Overnight)",
      overnightDesc: "Заезд: 3:00 PM \n Выезд: 11:00 AM",
      overnightPrice: "От $1,200 / Ночь",
      dayuse: "Дневная Остановка",
      dayuseDesc: "Доступ 4 часа \n Гибкий заезд",
      dayusePrice: "От $450 / Сессия",
      step2: "Шаг 02",
      dateDetails: "Дата и Детали",
      back: "Назад",
      checkin: "Время Заезда",
      guests: "Кол-во Гостей",
      maxGuests: "Макс 3 гостя",
      continue: "К Оплате",
      step3: "Шаг 03",
      secure: "Оформить Бронь",
      summary: "Итог Бронирования",
      experience: "Опыт",
      date: "Дата",
      total: "Итого",
      cardName: "Имя на Карте",
      cardNumber: "Номер Карты",
      expiry: "Срок",
      cvc: "CVC",
      pay: "Подтвердить и Оплатить",
      processing: "Обработка...",
      success: "Успех",
      confirmed: "Бронирование Подтверждено",
      confirmMsg: "Спасибо. Ваш люкс забронирован. Цифровой ключ и инструкции по прибытию отправлены на вашу почту.",
      return: "На Главную"
    }
  }
};