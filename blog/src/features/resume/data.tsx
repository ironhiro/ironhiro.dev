import type {
  DetailBlock,
  EducationItem,
  EmailParts,
  Job,
  Profile,
  Project,
  SectionLink,
  SkillGroup,
  SocialLink,
  SpecItem,
} from '../../types/resume';

export const profile: Profile = {
  name: '조용현',
  nameEn: 'Yonghyun Cho · ironhiro',
  role: '소프트웨어와 하드웨어를 잇는 개발자',
  lead: '카메라, 결제기, 시리얼 장비와 맞물려 돌아가는 Windows 소프트웨어를 만드는 5년차 개발자입니다.',
  kicker: 'software ⇄ hardware',
};

export const meta = {
  title: 'Resume of ironhiro',
  description: '소프트웨어와 하드웨어를 잇는 개발자, 조용현. C# · .NET · WPF 기반 키오스크 풀스택 개발자.',
  ogDescription: '소프트웨어와 하드웨어를 잇는 개발자. 무인 운영 환경의 SW–HW 경계를 다루는 키오스크 풀스택 개발자.',
};

export const BLOG_URL = 'https://blog.ironhiro.dev';
export const GITHUB_URL = 'https://github.com/ironhiro';

export const socials: SocialLink[] = [
  { label: 'GitHub', icon: 'github', href: GITHUB_URL, external: true },
  { label: 'Blog', icon: 'blog', href: BLOG_URL },
];

export const email: EmailParts = { user: 'iuncehiro', domain: 'gmail.com' };

export const spec: SpecItem[] = [
  { label: 'Role', value: '키오스크 풀스택' },
  { label: 'Experience', value: '5년차' },
  { label: 'Core', value: 'C# · .NET · WPF' },
  { label: 'Domain', value: '비전 · 결제 · 디바이스' },
];

export const sections: SectionLink[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

export const about = [
  <>CUDA/C++ 홀로그램 생성 알고리즘 연구로 시작해, 4D 영상 솔루션의 Windows 클라이언트를 거쳐 <strong>인생네컷 키오스크 솔루션</strong>의 신규 아키텍처 설계와 결제·하드웨어 통합을 맡았습니다. 카메라 입력부터 합성, 인쇄까지 전 구간을 직접 다뤘습니다.</>,
  <>미디어 쪽에서는 OpenCV·LUT 색 보정과 Canon SDK · FFmpeg · Windows Graphics 파이프라인을, 장비 쪽에서는 RS232 / MDB 제어와 국내외 <strong>결제 디바이스 7종을 하나의 인터페이스로 묶는 구조</strong>를 설계하고 구현했습니다.</>,
  <>운영 중인 서비스를 멈추지 않고 .NET Framework → .NET Core, WinForms → WPF, MVVM Helper 종속 → DI 기반 구조로 단계적으로 옮겼습니다. 동작하는 코드보다 <strong>다음 작업자가 모듈만 교체하면 되는 구조</strong>를 남기는 데 우선순위를 둡니다. 비전, 디바이스 제어, 결제처럼 도메인 지식이 쌓일수록 더 잘할 수 있는 분야에서 계속 일하고 싶습니다.</>,
];

export const skills: SkillGroup[] = [
  { label: 'Core', items: ['C#', '.NET / .NET Core', 'WPF', 'MVVM', 'DI', 'OOP'] },
  { label: 'UI', items: ['XAML', 'DevExpress', 'WebView2'] },
  { label: 'Vision · Media', items: ['OpenCV', 'Canon SDK (EDSDK)', 'FFmpeg', 'Windows Graphics'] },
  { label: 'Protocol', items: ['RESTful API', 'RS232 / MDB', 'TCP', 'Named Pipe'] },
  { label: 'Server · Infra', items: ['AWS EC2 / S3', 'Docker', 'FastAPI', 'Node.js'] },
  { label: 'DB', items: ['MSSQL', 'MySQL'] },
  { label: '관심 / 경험', items: ['React', 'TypeScript', 'Next.js', 'Three.js'] },
];

const lkDetails: DetailBlock[] = [
  {
    title: '인생네컷 키오스크 솔루션 리뉴얼 및 유지보수',
    period: '2024 – 2026.04',
    context: '6년 이상 운영된 .NET Framework + WinForms 레거시는 이벤트·결제 추가 시 분기 코드가 누적되어 신규 기능마다 사이드이펙트 점검 비용이 커지는 상태. 이를 .NET 6.0 + WPF + MVVM 기반 신규 솔루션으로 옮기면서, 이벤트·결제를 추가할 때 기존 코드를 고치지 않아도 되는 구조를 목표로 잡았습니다.',
    points: [
      <><strong>MVVM Helper 종속 → DI 기반 OOP 아키텍처로 전환.</strong> 결제·카메라·이벤트 로직이 ViewModel에 직접 결합되어 유사 프로그램마다 프로젝트를 새로 만들어야 하던 구조를, <code>Microsoft.Extensions.DependencyInjection</code> 도입으로 서비스 레이어를 분리하고 핵심 도메인을 인터페이스 단위로 추상화. 결제기·이벤트를 추가할 때는 구현체만 DI 컨테이너에 등록.</>,
      <><strong>공통 모듈을 Git Submodule + 내부 패키지로 분리.</strong> Face Tracking, Background Removal, Canon EDSDK 래퍼, OpenCV/LUT 후처리 등 중복 구현되던 모듈을 분리하고 솔루션 간 동일 인터페이스로 통일.</>,
      <><strong>이벤트 플러그인 구조 설계.</strong> 연 10건 이상 단기간에 들어오는 콜라보·시즌 이벤트를 유형(스탬프형 / 필터형 / 릴레이형 / 영상연동형)별 인터페이스와 IoC 등록 규약으로 추상화해, 신규 이벤트는 리소스 + 콘텐츠 로직만 작성하면 등록되는 플러그인 방식으로 전환. 룰렛 스탬프·히든 메시지·농심 60주년·쿠팡 트래블·절단네컷 등을 동일 구조 위에서 처리.</>,
      <><strong>Custom Control 체계.</strong> 외부 UI 프레임워크의 라이선스·런타임 부담 없이 키오스크 전용 인터랙션(터치 응답, 풀스크린 전이, 카메라 라이브뷰 합성, 인쇄 미리보기)에 대응하도록 ControlTemplate + Attached Behavior 기반 재사용 컴포넌트 체계 구축.</>,
    ],
  },
  {
    title: '국내·해외 결제 인프라 통합',
    period: '2024 – 2025',
    context: '30개국 이상의 결제 수단(PAYCO·KakaoPay·MYPG / SwipePay(QRIS)·Global Payments·NZ Payments·Spectra·Nayax·PAX)을 운영하며 통신 프로토콜이 RESTful API · RS232 · MDB로 제각각이라, 연 4건 이상 들어오는 신규 결제기 연동마다 호출부 분기 코드를 새로 써야 했습니다.',
    points: [
      <>결제 모듈을 <code>IPayment</code> 단일 인터페이스로 추상화하고 프로토콜 어댑터(REST / Serial / MDB)와 결제사 구현체를 2단계로 분리. 신규 결제기는 어댑터 재사용 + 구현체 추가만으로 연동.</>,
      '사내망에서 직접 호출할 수 없는 KakaoPay용 Proxy 서버를 AWS EC2 + FastAPI + Docker로 설계·배포·운영. 결제사 IP 화이트리스트 적용.',
      '사내 결제 테스트 도구를 개발해 키오스크 실결제 검증을 데스크톱의 프로토콜별 요청/응답/취소 시뮬레이션으로 대체.',
    ],
  },
  {
    title: '카메라·영상·이미지 처리 파이프라인',
    period: '2023.09 – 2026.04',
    context: '라이브 프리뷰 → 촬영 → 후처리 → 합성 → 인쇄까지의 미디어 파이프라인을 카메라 모델·이벤트 프레임·LUT 색감 변경에 따라 빠르게 교체할 수 있어야 했습니다.',
    points: [
      'Canon SDK(EDSDK) 카메라 제어 래퍼 작성. 라이브뷰 스트리밍, AF 락, 셔터 트리거, 비동기 이미지 다운로드를 멀티 카메라 동시 운용 가능한 구조로 추상화.',
      <>OpenCV 기반 화각 탐색 도구로 매장 설치 시 카메라 위치를 실시간 프리뷰로 조정. LUT 색 보정 파이프라인은 디자인팀이 <code>.cube</code> 파일만 교체하면 즉시 반영되도록 외부화.</>,
      'FFmpeg 기반 영상·타임랩스 생성과 Windows Graphics 기반 프레임-사진 합성을 구현해 영상형 결과물도 동일 파이프라인에서 처리.',
    ],
  },
  {
    title: '하드웨어 연동 (RS232 · MDB · 외부 디바이스)',
    points: [
      '스튜디오 조명, 일본향 입수금지 안내 보드 등 주변기기를 RS232 시리얼로 연동. 응답 지연이 UI를 막지 않도록 비동기 큐 + 타임아웃·재시도 정책을 가진 공용 시리얼 매니저 설계.',
      '시리얼 페이로드를 디코딩 단위까지 직접 추적해, HW 이슈로 분류되던 문제를 여러 건 자체 해결.',
    ],
  },
  {
    title: '포키2: WPF + WebView2 하이브리드 앱',
    period: '2024',
    points: [
      '레거시 WinForms 솔루션을 .NET 8.0 + WPF + WebView2 하이브리드로 전환. 네이티브와 웹 UI 프로세스를 IPC(Named Pipe)로 분리하고 메시지 브릿지 인터페이스를 설계해, 프론트엔드 팀(React + TypeScript + Zustand)과 서로 독립적으로 배포. 실 매장 운영 중.',
    ],
  },
];

const fourDDetails: DetailBlock[] = [
  {
    title: '.NET Migration',
    period: '2023.05',
    points: ['.NET Framework 4.8 → .NET 5 마이그레이션과 WinForms → WPF 전환을 동시 수행. GDI+ / Windows Forms 비호환 API를 대체 구현으로 해소.'],
  },
  {
    title: '솔루션 기능 개발 및 운영',
    period: '2021.12 – 2023.07',
    points: [
      'TCP Socket 기반 Daemon 통신 프로토콜 설계·구현. 다중 카메라 제어/녹화/송출 명령을 비동기 큐로 처리해, 명령 유실 방지·순서 보장·에러 복구를 클라이언트마다 같은 방식으로 다루게 함.',
      'VLC 래퍼 기반 RTSP 라이브 송출 플레이어로 다중 화면 동시 송출 지원. OpenCV 색 보정과 FFmpeg 녹화 파일 백업·트랜스코딩을 솔루션에 내장.',
    ],
  },
  {
    title: '4D Golf POC',
    period: '2023.05 – 2023.07',
    points: ['.NET 5 + WPF 키오스크 앱으로 골프 스윙 영상 촬영·클립 자동 제작 PoC 단독 구현. C++ 영상 처리 모듈과의 P/Invoke 인터페이스 설계.'],
  },
  {
    title: 'Media Management',
    period: '2022.08 – 2022.10',
    points: ['다중 카메라 원본·리플레이 영상 백업·관리 도구. FFmpeg 기반 Merge·트랜스코딩 파이프라인을 만들고, 진행률 표시와 취소 기능으로 긴 작업 중에도 UI가 멈추지 않게 함.'],
  },
  {
    title: 'Template Editor',
    period: '2022.02 – 2022.04',
    points: ['리플레이 영상 양식 편집 데스크톱 도구. JSON 직렬화 기반 저장/백업, 예상 재생 시간 미리보기 구현.'],
  },
];

export const jobs: Job[] = [
  {
    period: '2023.09 — 2026.04',
    title: '엘케이벤쳐스 · 대리',
    meta: '서울본부 개발1팀 · 2년 8개월',
    summary: '인생네컷 키오스크 솔루션과 전사 결제 인프라 담당. 신규 솔루션("퀀텀") 설계와 레거시 유지보수를 병행.',
    points: [
      <>6년 된 .NET Framework + WinForms 레거시를 <strong>.NET 6 + WPF + DI 기반 구조</strong>로 재설계</>,
      <>결제 디바이스 7종(REST · RS232 · MDB)을 <code>IPayment</code> <strong>단일 인터페이스</strong>로 통합해, 새 결제기는 구현체 추가만으로 연동</>,
      <>연 10건 이상 들어오는 콜라보 이벤트를 <strong>플러그인 구조</strong>로 바꿔, 리소스와 콘텐츠 로직만 작성하면 등록되게 함</>,
      <>Canon EDSDK · OpenCV · LUT · FFmpeg <strong>미디어 파이프라인</strong> 구축</>,
    ],
    stack: ['C#', '.NET 6/8', 'WPF', 'MVVM', 'DI', 'Canon EDSDK', 'OpenCV', 'FFmpeg', 'RS232 / MDB', 'WebView2', 'AWS', 'FastAPI', 'Docker'],
    details: lkDetails,
  },
  {
    period: '2021.12 — 2023.08',
    title: '포디리플레이코리아 · 사원',
    meta: 'Product Division · 1년 9개월',
    summary: '4D 리플레이 영상 솔루션의 Windows 클라이언트 및 Daemon 개발.',
    points: [
      <><strong>.NET Framework 4.8 → .NET 5</strong>, WinForms → WPF 마이그레이션</>,
      <>다중 카메라 Daemon용 <strong>TCP 통신 프로토콜</strong> 설계</>,
      'RTSP 라이브 송출 플레이어, FFmpeg 백업·트랜스코딩 파이프라인',
      '골프 스윙 영상 PoC 단독 구현 (C++ 모듈 P/Invoke 연동)',
    ],
    stack: ['C#', '.NET 5', 'WPF', 'WinForms', 'DevExpress', 'TCP', 'RTSP', 'OpenCV', 'FFmpeg', 'P/Invoke'],
    details: fourDDetails,
  },
  {
    period: '2020.08 — 2021.08',
    title: '구미전자정보기술원 · 위촉연구원',
    meta: '실감미디어연구센터 · 1년 1개월',
    summary: <>홀로그램 생성 오픈소스 라이브러리 <strong>OpenHolo</strong> 개발 참여. PAS · Angular Spectrum 알고리즘을 C++로 구현한 뒤 CUDA 커널로 포팅해 연산 시간을 줄이고, CPU/GPU 중 백엔드를 고를 수 있는 인터페이스 설계.</>,
    stack: ['C++', 'CUDA'],
  },
];

export const projects: Project[] = [
  {
    tag: '2026 · 개인',
    title: '태고 멀티뷰',
    href: 'https://multiview.ironhiro.dev',
    description: '태고의 달인 매장들의 YouTube 라이브 방송을 한 화면에서 모아 보는 웹 서비스.',
    links: [{ label: 'GitHub ↗', href: 'https://github.com/ironhiro/taiko-multiview' }],
    stack: ['ASP.NET Core (.NET 10)', 'React', 'TypeScript', 'Vite', 'YouTube Data API', 'Docker', 'Azure Container Apps', 'GitHub Actions'],
  },
  {
    tag: '2025 · 개인',
    title: '붕오떡',
    subtitle: '3D 인터랙티브 웹',
    href: 'https://ironhiro.github.io/bungodduk',
    description: '벽에 부딪힐 때마다 쪼개지는 3D 큐브 시뮬레이션. 분열 깊이, 중력, 탄성을 실시간으로 조절할 수 있음.',
    stack: ['Next.js 14', 'React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Zustand', 'GitHub Pages'],
  },
  {
    tag: '2025 · 인생네컷',
    title: '농심 60주년 이벤트',
    subtitle: 'QR 기반 다자간 릴레이 촬영',
    description: '키오스크와 모바일 웹을 QR로 이어, 여러 사람이 릴레이로 한 장의 사진을 완성하는 촬영 이벤트.',
    stack: ['C#', '.NET', 'WPF', 'MVVM', 'QR', 'Mobile Web'],
  },
  {
    tag: '2024 · 인생네컷',
    title: '절단네컷',
    subtitle: '영상·BGM 연동 촬영 솔루션',
    description: '영상과 BGM에 맞춰 촬영하고, 촬영할 때마다 다른 프레임이 나오는 이벤트.',
    stack: ['C#', '.NET', 'WPF', 'MVVM', 'DI'],
  },
  {
    tag: '2024 · 인생네컷',
    title: '쿠팡 트래블',
    subtitle: '지역 연동 영상·프레임 매칭 이벤트',
    description: '여행 지역 영상을 틀어 주고, 그 지역에 맞는 프레임으로 촬영하는 쿠팡 콜라보 이벤트.',
    stack: ['C#', '.NET', 'WPF', 'MVVM', 'DI'],
  },
  {
    tag: '2020 · 연구',
    title: 'OpenHolo',
    subtitle: 'CUDA/C++ 홀로그램 생성 라이브러리',
    href: 'https://github.com/ironhiro/Openholo',
    description: 'CPU와 GPU에서 홀로그램을 생성하는 오픈소스 라이브러리.',
    stack: ['C++', 'CUDA'],
  },
];

export const education: EducationItem[] = [
  {
    period: '2012 — 2020',
    title: '금오공과대학교',
    issuer: '컴퓨터소프트웨어공학과',
    notes: [
      '졸업 작품: Whereisit, 지역별 공중화장실 탐색 Android 앱 (6인 팀)',
      '교내 C/C++ 멘토링 활동',
      '클라우드 기반 모듈식 BMS 적용 이차전지 배터리팩 개발 (산학 연구과제)',
    ],
  },
  { period: '2025.12', title: '정보처리기사', issuer: '한국산업인력공단' },
  { period: '2025.01', title: 'JLPT N1', issuer: '일본국제교육협회' },
  { period: '2019.03', title: '컴퓨터활용능력 1급', issuer: '대한상공회의소' },
];
