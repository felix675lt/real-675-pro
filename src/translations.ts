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
          detail: "Occupying the entire 2nd floor, the Redline Zone is a dual-purpose facility.\n\nArena de Juegos:\nCuenta con dos estaciones de juegos de PC de alta especificación y simuladores de carreras.\n\nSuite de Bienestar:\nRestablezca su sistema nervioso autónomo en nuestra sauna finlandesa tradicional forrada de cedro.",
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
      return: "Return to Home",
      orPlatform: "Or Book via Platform",
      airbnb: "Book on Airbnb"
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
      return: "홈으로 돌아가기",
      orPlatform: "또는 플랫폼으로 예약",
      airbnb: "에어비앤비로 예약하기"
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
      title
