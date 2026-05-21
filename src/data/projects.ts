export type Project = {
  slug: string;
  name: string;       // short name for list view
  title: string;
  subtitle: string;
  period: string;
  category: string;
  tags: string[];
  isMain: boolean;
  highlight: string;
  links?: { label: string; url: string }[];
  content: {
    problem: string;
    approach: { num: string; step: string; desc: string }[];
    results: { label: string; desc: string }[];
    contribution: { role: string; scope: string; output: string };
  };
  screenshots?: { src: string; caption?: string; url?: string; wide?: boolean; cols?: number }[];
};

export const projects: Project[] = [
  {
    slug: 'fastcampus',
    name: '패스트캠퍼스 교육 상품 기획',
    title: 'URL 하나로 신규 강의 흐름을 설계했다',
    subtitle: '강사 분석 → 커리큘럼 설계 → 페이지 IA → 런칭 매니징',
    period: '2024.05 — 2024.12',
    category: '콘텐츠 상품 기획',
    tags: ['상품 기획', 'IA 설계', '커리큘럼 설계', 'Notion', 'Figma'],
    isMain: true,
    highlight: '신규 강의 6개',
    content: {
      problem:
        '새로운 강사 영입 시 콘텐츠 방향, 타겟, 커리큘럼 구성, 페이지 기획이 담당자 경험에만 의존하고 있었다. 제작 프로세스가 문서화되지 않아 일정 지연과 품질 편차가 반복됐다.',
      approach: [
        { num: '01', step: '강사·타겟 분석', desc: '강사 콘텐츠 히스토리·SNS 분석 + 경쟁 강의 비교를 통한 차별화 포지션 도출' },
        { num: '02', step: '커리큘럼 설계', desc: '학습 목표 정의 → 차시 구조화 → 난이도 흐름 설계 (강사 협업)' },
        { num: '03', step: '페이지 IA 설계', desc: '기존 구매 페이지 클릭 흐름 분석 → 경쟁사 벤치마킹 → 콘텐츠 이해도 우선 IA 재설계' },
        { num: '04', step: '제작 협업', desc: '촬영·디자인·편집팀과 마일스톤 기반 일정 관리, 품질 체크리스트 운영' },
        { num: '05', step: '프로세스 문서화', desc: '전 과정을 Notion 기반 표준 템플릿으로 정리, 후임자 인수인계 완료' },
      ],
      results: [
        { label: '런칭', desc: '신규 강의 6개 기획·출시 완료 (7개월, 2024.05–12)' },
        { label: '페이지 개선', desc: 'IA 재설계 후 상품 페이지 구성 이해도 개선 확인 (정량 지표 사내 비공개)' },
        { label: '프로세스', desc: '표준 제작 프로세스 도입, 담당자 간 품질 편차 감소 및 온보딩 시간 단축' },
      ],
      contribution: {
        role: '콘텐츠 상품 기획자',
        scope: '강사 분석·커리큘럼 설계·IA 기획·런칭 매니징·프로세스 문서화',
        output: '신규 강의 상품 6개 출시, 표준 제작 프로세스 Notion 문서',
      },
    },
    screenshots: [
      { src: '/images/fastcampus/minshortform.png',   caption: '민썸 — 숏폼 영상 기획·편집 실무 강의',    url: 'https://fastcampus.co.kr/dgn_online_minshortform' },
      { src: '/images/fastcampus/memil.png',          caption: '메밀 작가 이모티콘 클래스',               url: 'https://fastcampus.co.kr/dgn_online_memil' },
      { src: '/images/fastcampus/editman.png',        caption: '편집하는 남자 — 영상 편집 실무 강의',     url: 'https://fastcampus.co.kr/dgn_online_editman' },
      { src: '/images/fastcampus/figure.jpg',         caption: '피규어 디자인 클래스',                    url: 'https://fastcampus.co.kr/dgn_online_figure' },
      { src: '/images/fastcampus/cinematicclip.webp', caption: '시네마틱 클립 영상 제작 강의',            url: 'https://fastcampus.co.kr/data_online_cinematicclip' },
      { src: '/images/fastcampus/apeai.jpg',          caption: 'THE APE SQUAD — AI 영상 제작 실무 강의',  url: 'https://fastcampus.co.kr/data_online_apeai' },
    ],
  },
  {
    slug: 'gcar-voc',
    name: 'Gcar VoC 분석',
    title: '37,923건의 리뷰에서 이탈 구조를 찾았다',
    subtitle: '앱 리뷰 감정 분석 → 고객 여정 기반 서비스 개선안 설계',
    period: '2025.11',
    category: '데이터 분석 · 서비스 기획',
    tags: ['Python', 'KoELECTRA', 'SHAP', 'SQL', '사용자 여정', '데이터 분석'],
    isMain: true,
    highlight: '37,923건 분석',
    content: {
      problem:
        'Gcar 앱의 부정 리뷰가 반복되고 있었으나, 어떤 문제가 핵심 이탈을 유발하는지 구조적으로 파악된 데이터가 없었다. 개별 이슈 대응에 그칠 뿐, 근본 원인을 고객 여정 관점으로 정의한 시도가 없었다.',
      approach: [
        { num: '01', step: '데이터 수집', desc: 'Google Play · App Store에서 Gcar·경쟁사 앱 리뷰 37,923건 크롤링 및 전처리 (수집 기간: 최근 3년)' },
        { num: '02', step: '감정 분류', desc: 'KoELECTRA 감정 분류 모델 적용 + SHAP로 부정 감정 유발 핵심 키워드 도출' },
        { num: '03', step: '이슈 구조화', desc: '부정 리뷰를 4개 영역(고객센터·앱오류·반납예약·과금)으로 클러스터링, 빈도·영향도 매트릭스 구성' },
        { num: '04', step: '여정 시각화', desc: '앱오류 → 반납실패 → 과금 이슈 → CS 문의 → 1점 리뷰로 이어지는 실패 여정 맵 작성' },
        { num: '05', step: '개선안 도출', desc: '여정 기반 3개 우선 개선 방향 제안 (반납 UI 재설계 / 과금 사전 알림 / CS 봇 플로우 개선)' },
      ],
      results: [
        { label: '핵심 발견', desc: '부정 리뷰 원인의 68%가 개별 버그가 아닌 반납·과금 프로세스의 구조적 결함 (클러스터링 분석 기준)' },
        { label: '분석 규모', desc: 'Google Play · App Store 리뷰 37,923건 수집·분석, 감정 분류 정확도 F1 0.84' },
        { label: '개선 여지 추산', desc: '반납 UI 개선 시 해당 클러스터 내 1점 리뷰 발생 요인이 해소될 경우, 최대 30% 개선 여지가 있다고 추산' },
      ],
      contribution: {
        role: '데이터 분석가 · 서비스 기획자 (공개 리뷰 데이터 기반 개인 분석 프로젝트)',
        scope: '크롤링·전처리·감정분석·이슈 구조화·여정 맵 작성·개선안 설계 전 과정',
        output: '고객 여정 기반 이탈 구조 분석 보고서, 3개 우선 개선 방향 제안서',
      },
    },
    screenshots: [
      {
        src: '/images/gcar-voc/slide_tmp_8-08.png',
        caption: '앱 평점 비교 — Gcar의 평균 평점과 1점 리뷰 비율이 경쟁사 대비 유의하게 낮은 구간 확인',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_11-11.png',
        caption: '부정 리뷰 키워드 분석 — 고객센터, 앱 오류, 로그인, 반납 관련 불만 키워드가 반복적으로 등장',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_21-21.png',
        caption: '반납 장소 혼잡도 사전 안내 제안 — 시간대별 혼잡도 예측으로 반납 실패와 CS 문의를 줄이는 흐름',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_22-22.png',
        caption: '고객센터·이용가이드 재설계 — 문제 상황에서 FAQ와 반납 관련 기능까지 도달하는 시간을 줄이는 IA 개선안',
        wide: true,
      },
    ],
  },
  {
    slug: 'salmidalla',
    name: '살미달라',
    title: '패션 브랜드를 창업하고 3시즌을 출시했다',
    subtitle: '컨셉부터 판매까지, 브랜드 전 과정 운영',
    period: '2021.01 — 2023.04',
    category: '브랜드 기획 · 패션 MD',
    tags: ['브랜드 기획', 'MD', '영상 편집', 'Premiere Pro', 'Photoshop', '팝업스토어'],
    isMain: false,
    highlight: '팔로워 +86%',
    links: [{ label: '브랜드 사이트 보기', url: 'https://www.sixshop.com/salmidollar/home' }],
    content: {
      problem:
        '패션 브랜드를 처음 창업해 원단 선정부터 샘플, 생산, 판매, 마케팅까지 MD 전 과정을 혼자 운영해야 했다. 시즌마다 사이즈·원단 품질 피드백을 반영해 상품과 프로세스를 개선해야 했다.',
      approach: [
        { num: '01', step: '상품 기획', desc: '시즌별 컨셉 → 트렌드 조사 → 원단 선정 → 샘플·피팅 → 생산 관리' },
        { num: '02', step: '품질 관리', desc: '봉제·프린팅 공장 품질 검수 및 납기 관리' },
        { num: '03', step: '콘텐츠 마케팅', desc: '유튜브 브이로그 27편 + 숏츠 23편 직접 기획·촬영·편집' },
        { num: '04', step: '오프라인 판매', desc: '팝업스토어 3회 (카페위탁 / 대학축제 / 서울플리마켓) 기획·운영' },
        { num: '05', step: '피드백 반영', desc: '고객 리뷰·DM 수집 → 차기 시즌 상품 개선 반영 (사이즈 그레이딩 재설계 포함)' },
      ],
      results: [
        { label: '21SS 완판', desc: '첫 시즌 자체 제작 의류 140벌 완판 — 이후 21FW · 22SS 연속 출시' },
        { label: 'SNS 성장', desc: '인스타그램 팔로워 464 → 863명 (+86%), 유튜브 조회수 총 2.4만+ (2년 기준)' },
        { label: '오프라인', desc: '팝업스토어 3회 운영, 학교 축제·플리마켓·카페 위탁 등 채널 다각화' },
      ],
      contribution: {
        role: '패션 브랜드 공동 창업·대표 (3인 팀, 기획·MD 총괄)',
        scope: '상품 기획·생산 관리·영상 제작·팝업 운영·SNS 마케팅',
        output: '3시즌 출시, 인스타 팔로워 +86%, 팝업 3회 운영, 유튜브 2.4만+ 조회',
      },
    },
    screenshots: [
      { src: '/images/salmidalla/location-front.jpg',       caption: '시즌 룩북 촬영 — 브랜드 콘셉트와 제품 스타일링 기획',         wide: true },
      { src: '/images/salmidalla/quality-check.png',        caption: '의류 검수 현장 — 납품 전 봉제·프린팅 품질 직접 검수' },
      { src: '/images/salmidalla/21ss-product.jpg',         caption: '21SS 상품 — 자체 제작 의류 140벌 완판' },
      { src: '/images/salmidalla/21fw-product-1.gif',       caption: '21FW 컬렉션 — 21SS 완판에 이어 가을/겨울 라인 출시' },
      { src: '/images/salmidalla/sample-spec.png',          caption: '21SS 샘플 작업의뢰서 — 봉제 스펙·사이즈 그레이딩 직접 작성' },
      { src: '/images/salmidalla/22ss-cloth-1.jpg',         caption: '22SS 의류 라인 — 네 종 출시, ACC·굿즈백·키링으로 품목 확장' },
      { src: '/images/salmidalla/location-lookbook.jpg',    caption: '로케이션 룩북 컷 — 시즌 무드와 그래픽 티셔츠 착장 시각화',   wide: true },
      { src: '/images/salmidalla/location-graphic-tee.jpg', caption: '브랜드 그래픽 티셔츠 착장 — 상품 기획부터 촬영까지 운영' },
      { src: '/images/salmidalla/22ss-acc-keyring-1.jpg',   caption: '22SS 키링 ACC — 2종 완판' },
    ],
  },
  {
    slug: 'ai-content-automation',
    name: 'AI 콘텐츠 생성 자동화',
    title: 'AI 파이프라인으로 콘텐츠 제작 시간을 83% 단축했다',
    subtitle: 'Claude AI + Figma MCP 연동 → 29개 피드 자동 생성',
    period: '2026.03 — 2026.05',
    category: 'AI 자동화 · 콘텐츠 기획',
    tags: ['Claude AI', 'Figma MCP', 'Python', 'Google Sheets', '자동화', '콘텐츠 기획'],
    isMain: true,
    highlight: '3시간 → 30분',
    content: {
      problem:
        '패션 브랜드 인스타그램 피드를 자료조사 → 전략 수립 → 카피 작성 → 디자인 적용 순서로 수작업 시 브랜드당 평균 3시간 이상 소요됐다. 품질 일관성도 담당자에 따라 편차가 컸다.',
      approach: [
        { num: '01', step: '파이프라인 설계', desc: '자료조사 → 전략 → 카피 생성 → 디자인 자동 적용 4단계 구성. 각 단계 입출력 스펙 정의' },
        { num: '02', step: 'AI 연동', desc: 'Claude AI로 브랜드 분석·카피 자동 생성, Figma MCP로 디자인 노드 직접 반영 (수동 Figma 작업 제거)' },
        { num: '03', step: '품질 게이트', desc: 'fact_check·QA 체크리스트 자동화로 게시 전 오류 검증 (인물 권리·브랜드 정보 정확도 포함)' },
        { num: '04', step: '대시보드 구축', desc: 'Google Sheets로 39개 피드 진행 현황·캡션·발행 상태 통합 관리' },
        { num: '05', step: 'SEO 전략', desc: '캡션 v4 포맷 + 3-Tier 해시태그 전략 설계·적용 (발행 피드 전수 적용 완료)' },
      ],
      results: [
        { label: '시간 절감', desc: '브랜드당 평균 제작 시간 3시간 → 30분 이내, 약 83% 단축 (29개 브랜드 평균 기준)' },
        { label: '생산성', desc: '29개 이상 피드 자동 생성 완료, 22개 브랜드 커버 (2026.03–05, 약 3개월)' },
        { label: '운영', desc: 'Google Sheets 대시보드로 39개 피드 전수 관리, 캡션 v4 전략 전면 적용' },
      ],
      contribution: {
        role: '기획자 · AI 파이프라인 설계자 (1인 프로젝트)',
        scope: '파이프라인 구조 설계·AI 프롬프트 설계·QA 체계·SEO 전략 수립',
        output: '29개+ 피드 자동 생성 파이프라인, 캡션 v4 전략 문서, 운영 대시보드',
      },
    },
    screenshots: [
      {
        src: '/images/ai-content-automation/instagram-feed.png',
        caption: '실제 게시된 인스타그램 피드 — AI가 생성한 카드뉴스가 @pullsize.official 계정에 발행된 결과물',
        wide: true,
      },
      {
        src: '/images/ai-content-automation/figma-overview.png',
        caption: 'Figma 작업 전체 현황 — 스트릿·컨템포러리·캐주얼 3개 카테고리, 29개+ 브랜드 피드를 AI 파이프라인으로 자동 생성한 결과물',
        wide: true,
      },
    ],
  },
  {
    slug: 'pullsize',
    name: 'Pullsize',
    title: '신체 정보와 상품 URL로 의류 사이즈를 추천하는 서비스를 만들었다',
    subtitle: '온라인 쇼핑 사이즈 불안을 줄이는 AI 추천 MVP',
    period: '2026.03 — 현재',
    category: 'AI 서비스 기획 · MVP',
    tags: ['AI 서비스', 'MVP', 'UX 기획', '사이즈 추천', '이커머스', '서비스 설계'],
    isMain: true,
    highlight: 'MVP 출시',
    links: [{ label: '서비스 사용해보기', url: 'https://www.pullsize.kr/recommend' }],
    content: {
      problem:
        '온라인 의류 구매자는 브랜드마다 다른 실측 기준과 착용감 차이 때문에 사이즈 선택에 불안을 느낀다. 상품 상세페이지의 치수표만으로는 내 체형에 맞는 사이즈와 여유도를 판단하기 어렵고, 이는 구매 망설임과 교환·반품으로 이어질 수 있다.',
      approach: [
        { num: '01', step: '입력 흐름 설계', desc: '상품 URL과 키·몸무게·평소 착용 사이즈 등 최소 입력만으로 추천을 시작하는 폼 구성' },
        { num: '02', step: '상품 정보 해석', desc: '상품 페이지의 사이즈 정보와 사용자의 신체 정보를 비교할 수 있도록 추천에 필요한 데이터 구조 정의' },
        { num: '03', step: '추천 로직 설계', desc: '사이즈 후보별 적합도와 여유도를 계산해 추천 사이즈와 판단 근거를 함께 제공하는 흐름 설계' },
        { num: '04', step: '결과 UI 구현', desc: '추천 사이즈, 여유도, 신체 부위별 핏 정보를 한 화면에서 이해할 수 있도록 시각화' },
        { num: '05', step: 'MVP 검증', desc: '실제 쇼핑 상황에서 사용자가 입력 → 추천 → 판단까지 이어질 수 있는 최소 기능 제품으로 구현' },
      ],
      results: [
        { label: 'MVP', desc: '상품 URL 입력, 신체 정보 입력, AI 사이즈 추천 결과까지 이어지는 핵심 사용자 플로우 구현' },
        { label: 'UX', desc: '단순 사이즈명 추천이 아니라 여유도와 판단 근거를 함께 보여줘 사용자가 추천을 납득할 수 있도록 설계' },
        { label: '확장성', desc: '향후 브랜드별 실측 데이터, 후기 기반 핏 데이터, 개인 선호 핏을 반영할 수 있는 서비스 구조로 정리' },
      ],
      contribution: {
        role: '서비스 기획자 · MVP 설계자',
        scope: '문제 정의·사용자 입력 플로우·추천 결과 UX·MVP 화면 설계',
        output: '사이즈 추천 서비스 MVP, 메인 입력 화면, AI 추천 결과 화면',
      },
    },
    screenshots: [
      { src: '/images/pullsize/service-main.png', caption: '서비스 메인 화면 — 상품 URL 입력 및 신체 정보 입력 UI' },
      { src: '/images/pullsize/service-result.png', caption: '추천 결과 화면 — AI 사이즈 추천 및 여유도 시각화' },
    ],
  },
  {
    slug: 'areun-sai',
    name: '아른 사이',
    title: '텀블벅 177% 달성 — 인터뷰 콘텐츠를 도서로 만들었다',
    subtitle: '창업동아리 PM · 영상 제작 · 출판 · 크라우드펀딩',
    period: '2023.04 — 2025.06',
    category: '콘텐츠 기획 · PM',
    tags: ['PM', '출판', 'InDesign', '크라우드펀딩', '영상 편집', '콘텐츠 기획'],
    isMain: false,
    highlight: '텀블벅 177%',
    links: [
      { label: '텀블벅 페이지 보기', url: 'https://tumblbug.com/areunsight' },
      { label: '아른 사이 링크 모음', url: 'https://litt.ly/areun.sight' },
    ],
    content: {
      problem:
        '창업동아리 인터뷰 콘텐츠가 영상 단독으로만 소비되고 있었다. 인터뷰 데이터를 더 많은 포맷으로 확장해 더 넓은 독자에게 도달하는 방법이 필요했다.',
      approach: [
        { num: '01', step: '인터뷰 기획', desc: '대상 섭외·질문 설계·촬영·편집' },
        { num: '02', step: '콘텐츠 확장', desc: '인스타그램 콘텐츠 운영 병행' },
        { num: '03', step: '도서 제작', desc: 'InDesign으로 인터뷰집 편집·출판 (2권)' },
        { num: '04', step: '크라우드펀딩', desc: '텀블벅 캠페인 기획·운영 — 목표 금액 대비 177% 달성' },
        { num: '05', step: '팀 PM', desc: '편집제작팀·마케팅팀·디자인팀 9명 조율 (2023.04–2025.06, 2년 2개월)' },
      ],
      results: [
        { label: '크라우드펀딩', desc: '텀블벅 목표 금액 대비 177% 달성 (2024, 캠페인 종료 기준)' },
        { label: '출판물', desc: '애\'Say / 처음은 아니지만 — 2권 출판 완료' },
        { label: 'PM', desc: '9명 팀 2년 2개월 리드, 기획·제작·마케팅 전 과정 조율' },
      ],
      contribution: {
        role: '프로젝트 매니저',
        scope: '인터뷰 기획·영상 편집·인터뷰집 편집·크라우드펀딩 운영·팀 PM',
        output: '출판물 2권, 텀블벅 177% 달성, 인스타 콘텐츠 운영',
      },
    },
    screenshots: [
      { src: '/images/areun-sai/book-cover.jpg',             caption: '인터뷰집 표지·북 패키지 디자인 — 장기 프로젝트의 핵심 출판물 시각화', wide: true },
      { src: '/images/areun-sai/funding-goods.jpg',          caption: '텀블벅 리워드 패키지 구성 — 도서·굿즈·상세페이지까지 연결한 펀딩 설계' },
      { src: '/images/areun-sai/interview-shoot.jpg',        caption: '인터뷰 촬영 현장 — 대상 섭외부터 질문 설계·촬영·편집까지 진행' },
      { src: '/images/areun-sai/question-board.jpg',         caption: '콘텐츠 질문 보드 — 인터뷰 주제와 독자 반응을 수집해 출판 콘텐츠로 확장' },
      { src: '/images/areun-sai/fulfillment-packaging.jpeg', caption: '리워드 포장·배송 준비 — 펀딩 이후 실물 제작과 발송 운영' },
    ],
  },
];
