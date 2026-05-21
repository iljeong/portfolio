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
  content: {
    problem: string;
    approach: { num: string; step: string; desc: string }[];
    results: { label: string; desc: string }[];
    contribution: { role: string; scope: string; output: string };
  };
};

export const projects: Project[] = [
  {
    slug: 'gcar-voc',
    name: 'Gcar VoC 분석',
    title: '37,923건의 리뷰에서 이탈 구조를 찾았다',
    subtitle: '앱 리뷰 감정 분석 → 고객 여정 기반 서비스 개선안 설계',
    period: '2025',
    category: '데이터 분석 · 서비스 기획',
    tags: ['Python', 'KoELECTRA', 'SHAP', 'SQL', '사용자 여정', '데이터 분석'],
    isMain: true,
    highlight: '37,923건 분석',
    content: {
      problem:
        'Gcar 앱의 부정 리뷰가 반복되고 있었으나, 어떤 문제가 핵심 이탈을 유발하는지 구조적으로 파악된 데이터가 없었다. 개별 이슈 대응에 그칠 뿐, 근본 원인을 고객 여정 관점으로 정의한 시도가 없었다.',
      approach: [
        { num: '01', step: '데이터 수집', desc: 'Gcar·경쟁사 앱 리뷰 37,923건 크롤링 및 전처리' },
        { num: '02', step: '감정 분석', desc: 'KoELECTRA 감정 분류 + SHAP으로 핵심 요인 도출' },
        { num: '03', step: '이슈 구조화', desc: '4개 영역(고객센터/앱오류/반납예약/과금)으로 클러스터링' },
        { num: '04', step: '여정 설계', desc: '앱오류→반납실패→과금→CS→1점 리뷰 실패 여정 시각화' },
        { num: '05', step: '개선안 도출', desc: '여정 기반 3개 우선 개선 방향 제안' },
      ],
      results: [
        { label: '핵심 발견', desc: '부정 리뷰의 근본 원인이 개별 버그가 아닌 반납·과금 프로세스의 구조적 결함임을 데이터로 규명' },
        { label: '분석 규모', desc: 'Google Play · App Store 리뷰 37,923건 수집·분석 완료' },
        { label: '개선 영향', desc: '개선안 적용 시 CS 문의 건수 및 1점 리뷰 비율 감소 효과 예상' },
      ],
      contribution: {
        role: '데이터 분석가 · 서비스 기획자',
        scope: '크롤링·전처리·감정분석·이슈 구조화·개선안 설계 전 과정',
        output: '고객 여정 기반 이탈 구조 분석 보고서 및 3개 개선 방향 제안',
      },
    },
  },
  {
    slug: 'fastcampus',
    name: '패스트캠퍼스 교육 상품 기획',
    title: 'URL 하나로 신규 강의 흐름을 설계했다',
    subtitle: '강사 분석 → 커리큘럼 설계 → 페이지 IA → 런칭 매니징',
    period: '2024.05 — 2024.12',
    category: '콘텐츠 상품 기획',
    tags: ['상품 기획', 'IA 설계', '커리큘럼 설계', 'Notion', 'Figma'],
    isMain: true,
    highlight: '신규 강의 4개+',
    content: {
      problem:
        '새로운 강사 영입 시 콘텐츠 방향, 타겟, 커리큘럼 구성, 페이지 기획이 담당자 경험에만 의존하고 있었다. 제작 프로세스가 문서화되지 않아 일정 지연과 품질 편차가 반복됐다.',
      approach: [
        { num: '01', step: '강사·타겟 분석', desc: '강사 콘텐츠 히스토리 분석 + 타겟 학습자 니즈 파악' },
        { num: '02', step: '커리큘럼 설계', desc: '학습 목표 → 차시 구조 → 난이도 설계' },
        { num: '03', step: '페이지 IA 설계', desc: '기존 구매 흐름 분석 → 경쟁 벤치마킹 → 페이지 구조 재설계' },
        { num: '04', step: '제작 협업', desc: '촬영·디자인·편집팀과 일정·품질 관리' },
        { num: '05', step: '프로세스 문서화', desc: '전 과정을 Notion 기반 표준 템플릿으로 정리' },
      ],
      results: [
        { label: '런칭', desc: '신규 강의 4개+ 기획·출시 완료' },
        { label: '전환율', desc: '페이지 IA 개선으로 콘텐츠 이해도 및 구매 전환율 향상' },
        { label: '효율', desc: '프로세스 표준화로 신규 강의 제작 일정 지연 감소' },
      ],
      contribution: {
        role: '콘텐츠 상품 기획자',
        scope: '강사 분석·커리큘럼 설계·IA 기획·런칭 매니징·프로세스 문서화',
        output: '신규 강의 상품 4개+ 출시, 제작 표준 프로세스 문서',
      },
    },
  },
  {
    slug: 'pullsize',
    name: 'pullsize AI 자동화',
    title: 'AI 파이프라인으로 콘텐츠 제작 시간을 80% 단축했다',
    subtitle: 'Claude AI + Figma MCP 연동 → 29개 피드 자동 생성',
    period: '2026.03 — 현재',
    category: 'AI 자동화 · 콘텐츠 기획',
    tags: ['Claude AI', 'Figma MCP', 'Python', 'Google Sheets', '자동화', '콘텐츠 기획'],
    isMain: true,
    highlight: '제작 시간 80%+ 단축',
    content: {
      problem:
        '패션 브랜드 인스타그램 피드를 매 브랜드마다 자료조사 → 전략 수립 → 카피 작성 → 디자인 적용 순서로 수작업하면 브랜드당 수 시간이 소요됐다. 품질 일관성도 담당자에 따라 편차가 컸다.',
      approach: [
        { num: '01', step: '파이프라인 설계', desc: '자료조사 → 전략 → 카피 생성 → 디자인 자동 적용 4단계 구성' },
        { num: '02', step: 'AI 연동', desc: 'Claude AI로 브랜드 분석·카피 자동 생성, Figma MCP로 디자인 직접 반영' },
        { num: '03', step: '품질 게이트', desc: 'fact_check·QA 체크리스트로 게시 전 오류 자동 검증' },
        { num: '04', step: '대시보드 구축', desc: 'Google Sheets로 39개 피드 통합 관리 및 진행 현황 추적' },
        { num: '05', step: 'SEO 전략', desc: '캡션 v4 + 3-Tier 해시태그 전략 설계 및 적용' },
      ],
      results: [
        { label: '생산성', desc: '29개 이상 피드 자동 생성 완료 (22개 브랜드 커버)' },
        { label: '시간 절감', desc: '브랜드당 제작 시간 80%+ 단축' },
        { label: '운영', desc: 'Google Sheets 대시보드로 39개 피드 통합 관리' },
      ],
      contribution: {
        role: '기획자 · AI 파이프라인 설계자',
        scope: '파이프라인 구조 설계·AI 프롬프트 설계·QA 체계·SEO 전략 수립',
        output: '29개+ 피드 자동 생성 파이프라인, 캡션 v4 전략, 운영 대시보드',
      },
    },
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
    content: {
      problem:
        '창업동아리 인터뷰 콘텐츠가 영상 단독으로만 소비되고 있었다. 인터뷰 데이터를 더 많은 포맷으로 확장해 더 넓은 독자에게 도달하는 방법이 필요했다.',
      approach: [
        { num: '01', step: '인터뷰 기획', desc: '대상 섭외·질문 설계·촬영·편집' },
        { num: '02', step: '콘텐츠 확장', desc: '인스타그램 콘텐츠 운영 병행' },
        { num: '03', step: '도서 제작', desc: 'InDesign으로 인터뷰집 편집·출판 (3권)' },
        { num: '04', step: '크라우드펀딩', desc: '텀블벅 캠페인 기획·운영' },
        { num: '05', step: '팀 PM', desc: '편집제작팀·마케팅팀·디자인팀 9명 조율 (2년 2개월)' },
      ],
      results: [
        { label: '크라우드펀딩', desc: '텀블벅 목표 금액 대비 177% 달성' },
        { label: '출판물', desc: '살미달라:The Epilogue / 애\'Say / 처음은 아니지만 — 3권 출판' },
        { label: 'PM', desc: '9명 팀 2년 2개월 리드' },
      ],
      contribution: {
        role: '프로젝트 매니저',
        scope: '인터뷰 기획·영상 편집·인터뷰집 편집·크라우드펀딩 운영·팀 PM',
        output: '출판물 3권, 텀블벅 177% 달성, 인스타 콘텐츠 운영',
      },
    },
  },
  {
    slug: 'salmidalla',
    name: '살미달라',
    title: '패션 브랜드를 창업하고 3시즌을 출시했다',
    subtitle: '컨셉 → 생산 → 마케팅 → 판매 — 브랜드 전 과정 운영',
    period: '2021.01 — 2023.04',
    category: '브랜드 기획 · 패션 MD',
    tags: ['브랜드 기획', 'MD', '영상 편집', 'Premiere Pro', 'Photoshop', '팝업스토어'],
    isMain: false,
    highlight: '판매량 30% 성장',
    content: {
      problem:
        '패션 브랜드를 처음 창업해 원단 선정부터 샘플, 생산, 판매, 마케팅까지 MD 전 과정을 혼자 운영해야 했다. 시즌마다 사이즈·원단 품질 피드백을 반영해 상품과 프로세스를 개선해야 했다.',
      approach: [
        { num: '01', step: '상품 기획', desc: '시즌별 컨셉 → 트렌드 조사 → 원단 선정 → 샘플·피팅 → 생산 관리' },
        { num: '02', step: '품질 관리', desc: '봉제·프린팅 공장 품질 검수 및 납기 관리' },
        { num: '03', step: '콘텐츠 마케팅', desc: '유튜브 브이로그 27편 + 숏츠 23편 직접 기획·촬영·편집' },
        { num: '04', step: '오프라인 판매', desc: '팝업스토어 3회 (카페위탁 / 대학축제 / 서울플리마켓) 기획·운영' },
        { num: '05', step: '피드백 반영', desc: '고객 리뷰·DM 수집 → 차기 시즌 상품 개선 반영' },
      ],
      results: [
        { label: '시즌 출시', desc: '21SS · 21FW · 22SS 3시즌 출시 완료' },
        { label: '판매 성장', desc: '판매량 30% 증가, 고객 만족도 25% 향상, 출시 기간 20% 단축' },
        { label: '채널 성장', desc: '인스타 팔로워 464 → 863명 (86% 성장), 유튜브 조회수 총 2.4만+' },
      ],
      contribution: {
        role: '패션 브랜드 대표 (1인 기획·운영)',
        scope: '상품 기획·생산 관리·영상 제작·팝업 운영·SNS 마케팅',
        output: '3시즌 출시, 인스타 팔로워 86% 성장, 팝업 3회 운영',
      },
    },
  },
];
