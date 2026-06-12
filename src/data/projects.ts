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
  kpi?: string;
  links?: { label: string; url: string }[];
  content: {
    problem: string;
    approach: { num: string; step: string; desc: string }[];
    insights?: { num: string; title: string; body: string }[];
    results: { label: string; desc: string }[];
    contribution: { role: string; scope: string; output: string };
    flow?: {
      title: string;
      layout: 'chain' | 'roadmap';
      tone?: 'negative' | 'process';
      caption?: string;
      steps: { label: string; desc?: string }[];
      note?: string;
    };
    architecture?: {
      title: string;
      caption?: string;
      layers: { name: string; items: string[] }[];
      loop?: string;
    };
  };
  screenshots?: { src: string; caption?: string; url?: string; wide?: boolean; cols?: number }[];
};

export const projects: Project[] = [

  {
    slug: 'fastcampus',
    name: '패스트캠퍼스 교육 상품 기획',
    title: '강사 분석부터 런칭 매니징까지, 신규 교육 상품 6개를 기획했다',
    subtitle: '강사 분석 → 커리큘럼 설계 → 페이지 IA → 런칭 매니징',
    period: '2024.05 — 2024.12',
    category: '콘텐츠 상품 기획',
    tags: ['상품 기획', 'IA 설계', '커리큘럼 설계', 'Notion', 'Figma'],
    isMain: true,
    highlight: '강사 의존 제작→표준 프로세스 구축',
    kpi: '신규 강의 6개',
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
      insights: [
        { num: '01', title: '강사의 강점과 수강생의 구매 이유는 다르다', body: '초기엔 강사의 강점인 "심미적 영상미"를 강의 핵심 소구점으로 잡았다. 그런데 강사 채널의 조회수·댓글·팔로워 반응을 분석하니 실제 니즈는 "최소 공수로 조회수를 만드는 실전 숏폼 전략"에 가까웠다. 주관적 판단 대신 데이터가 가리키는 방향으로 기획을 전면 수정했다.' },
        { num: '02', title: '담당자 경험에 의존하던 제작을 표준 프로세스로 바꿨다', body: '콘텐츠 방향·타겟·커리큘럼·페이지 기획이 담당자 경험에만 의존해 일정 지연과 품질 편차가 반복됐다. 강사 분석부터 런칭까지를 Notion 표준 템플릿으로 문서화하자, 누가 맡아도 같은 품질이 나오고 온보딩 시간이 줄었다.' },
        { num: '03', title: '상세페이지는 정보 나열이 아니라 이해 흐름이다', body: '기존 구매 페이지의 클릭 흐름을 분석하고 경쟁사를 벤치마킹해, 기능 나열이 아니라 수강생이 강의 가치를 이해하는 순서로 IA를 재설계했다. 콘텐츠 이해도가 전환의 출발점이었다.' },
        { num: '04', title: '기획과 런칭 매니징은 다른 근육이다', body: '신규 6개 중 4개는 직접 기획하고 2개는 PM으로 촬영·디자인·편집팀의 일정과 품질을 조율했다. 0→1로 만드는 일과, 여러 팀을 굴려 출시까지 가져가는 일은 서로 다른 역량이었다.' },
      ],
      results: [
        { label: '런칭', desc: '신규 강의 6개 기획·출시 완료 — 4개 직접 기획·2개 PM 진행 (7개월, 2024.05–12)' },
        { label: '페이지 개선', desc: '상세페이지 구성 방식 개선, 수강생 이해도 기준 내부 피드백 반영' },
        { label: '프로세스', desc: '표준 제작 프로세스 도입, 담당자 간 품질 편차 감소 및 온보딩 시간 단축' },
      ],
      contribution: {
        role: '콘텐츠 상품 기획자',
        scope: '강사 분석·커리큘럼 설계·IA 기획·런칭 매니징·프로세스 문서화',
        output: '신규 강의 상품 6개 출시, 표준 제작 프로세스 Notion 문서',
      },
    },
    screenshots: [
      { src: '/images/fastcampus/minshortform.webp',   caption: '민썸 — 숏폼 영상 기획·편집 실무 강의',    url: 'https://fastcampus.co.kr/dgn_online_minshortform' },
      { src: '/images/fastcampus/memil.webp',          caption: '메밀 작가 이모티콘 클래스',               url: 'https://fastcampus.co.kr/dgn_online_memil' },
      { src: '/images/fastcampus/editman.webp',        caption: '편집하는 남자 — 영상 편집 실무 강의',     url: 'https://fastcampus.co.kr/dgn_online_editman' },
      { src: '/images/fastcampus/figure.webp',         caption: '피규어 디자인 클래스',                    url: 'https://fastcampus.co.kr/dgn_online_figure' },
      { src: '/images/fastcampus/cinematicclip.webp', caption: '시네마틱 클립 영상 제작 강의',            url: 'https://fastcampus.co.kr/data_online_cinematicclip' },
      { src: '/images/fastcampus/apeai.webp',          caption: 'THE APE SQUAD — AI 영상 제작 실무 강의',  url: 'https://fastcampus.co.kr/data_online_apeai' },
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
    highlight: '이탈 원인을 고객 여정으로 재정의',
    kpi: '37,923건',
    content: {
      problem:
        'Gcar 앱의 부정 리뷰가 반복되고 있었으나, 어떤 문제가 핵심 이탈을 유발하는지 구조적으로 파악된 데이터가 없었다. 개별 이슈 대응에 그칠 뿐, 근본 원인을 고객 여정 관점으로 정의한 시도가 없었다.',
      approach: [
        { num: '01', step: '데이터 수집', desc: 'Google Play · App Store에서 Gcar·경쟁사 앱 리뷰 37,923건 크롤링 및 전처리 (수집 기간: 2021–2025)' },
        { num: '02', step: '감정 분류', desc: '사전학습 KoELECTRA-Base-v3 모델 적용, 감정 분류(정확도 0.976 · F1 0.984) 후 SHAP로 부정 감정 유발 핵심 키워드 도출' },
        { num: '03', step: '이슈 구조화', desc: '부정 리뷰를 4개 영역(고객센터·앱오류·반납예약·과금)으로 클러스터링. A지표(전체 리뷰 대비 부정 비율)·B지표(부정 리뷰 내 구성비)로 이중 지표화해 리뷰량 편향을 보정' },
        { num: '04', step: '여정 시각화', desc: '앱오류 → 반납실패 → 과금 이슈 → CS 문의 → 1점 리뷰로 이어지는 실패 여정 맵 작성' },
        { num: '05', step: '개선안 도출', desc: '여정 기반 4개 우선 개선 방향 제안 (고객센터 IA 재설계 / 반납 장소 혼잡도 사전 안내 / 과금 사전 경고 / 자동 문의 연결)' },
      ],
      insights: [
        { num: '01', title: '가격 경쟁력은 불만을 덮지 못한다', body: '가격 만족도가 높음에도 1★ 리뷰 비율은 Socar(23.9%) 대비 Gcar(31.4%)가 높았고, Mann-Whitney U 검정에서 이 차이는 통계적으로 유의했다(p<0.05). 저렴한 이용료는 오히려 경쟁 우위였지만(카셰어링 차량 선택 기준 1위, 82.7%), 가격이 아닌 반납·패널티·CS 여정이 평점을 낮추는 핵심 변수였다.' },
        { num: '02', title: '부정 경험은 단일 문제가 아니라 연쇄 여정이다', body: '앱 오류 → 반납 실패 → 패널티 → CS 지연이 단계별로 이어지며 불만이 증폭됐다. 단일 기능 개선보다 여정 전체의 불확실성 제거가 필요했다.' },
        { num: '03', title: 'CS 개선의 핵심은 응대 속도가 아니라 정보 구조다', body: '사용자는 문제 발생 후 해결 방법을 빠르게 찾지 못했다. 공지사항 중심 구조를 문제 상황별 FAQ 구조로 재배치하는 방향을 잡았다.' },
        { num: '04', title: '개선이 통계적으로 입증된 영역은 고객센터뿐이다', body: '분기별 시계열 추세 검정(OLS+Newey–West) 결과 고객센터 부정 비율만 유의하게 감소했고(연 −1.90%p, p<0.05), 앱·반납예약·페널티는 감소 추세가 확인되지 않았다(p>0.28). 단일 기능 패치가 아니라 여정 전체의 통합 개선이 필요한 근거다.' },
      ],
      results: [
        { label: '분석 규모', desc: 'Google Play · App Store 리뷰 37,923건(8개 칼럼) 수집·전처리·분류 (수집 기간: 2021–2025)' },
        { label: '접근성 격차', desc: '경쟁사 대비 차고지 약 2배(2,300 vs 5,000) · 운영 차량 약 3배(6,700 vs 23,000) · MAU 16.4만 vs 61.4만 — 인프라 열위가 불만의 구조적 배경 (외부 출처 기반)' },
        { label: '분류·추출', desc: 'KoELECTRA-Base-v3로 감정 분류(정확도 0.976 · F1 0.984), SHAP으로 핵심 불만 키워드를 추출. 별점 차이는 Mann-Whitney U 검정으로 유의성 확인(p<0.05)' },
        { label: '구조 발견', desc: '부정 리뷰를 4개 클러스터로 구조화(부정 비율 — 반납·예약 92.9% · 과금 90.7% · 고객센터 87.2% · 앱 79.2%), 실패 여정 맵 작성. 반납·예약 92.86%로 가장 심각해 1순위 개선 영역으로 도출' },
        { label: '개선안', desc: '고객센터·이용가이드 통합 페이지 재설계(A/B 테스트 제안) / 반납 장소 혼잡도 사전 안내 / 과금 사전 경고 / 자동 문의 연결 — 4개 우선순위 방향 도출' },
        { label: '기대 효과', desc: '개선안 적용 시 기대 평균 평점 3.49 → 3.65, 1점 비율 31.4% → 27.5% (목표치) + 실시간 혼잡도 예측 대시보드 제안' },
      ],
      flow: {
        title: '실패 여정',
        layout: 'chain',
        tone: 'negative',
        caption: '단일 기능 오류가 아니라 여정 전반에서 누적되는 연쇄 구조였다.',
        steps: [
          { label: '앱 오류' },
          { label: '예약·반납 실패' },
          { label: '시간 초과·과금' },
          { label: '고객센터 지연' },
          { label: '1점 리뷰' },
        ],
      },
      contribution: {
        role: '데이터 분석·여정 매핑 담당 (공개 리뷰 데이터 기반 4인 팀 프로젝트)',
        scope: '크롤링·전처리·감정분석·이슈 구조화·여정 맵 작성·개선안 설계 전 과정',
        output: '고객 여정 기반 이탈 구조 분석 보고서, 통계 검정(Mann-Whitney·시계열 추세) 기반 개선 우선순위, 4개 개선 방향 제안 + 혼잡도 예측 대시보드 시안',
      },
    },
    screenshots: [
      {
        src: '/images/gcar-voc/slide_tmp_8-08.png',
        caption: '앱 평점 비교 — Gcar의 평균 평점과 1점 리뷰 비율이 경쟁사 대비 뚜렷하게 낮은 구간 확인',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_11-11.webp',
        caption: '부정 리뷰 키워드 분석 — 고객센터, 앱 오류, 로그인, 반납 관련 불만 키워드가 반복적으로 등장',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_21-21.webp',
        caption: '반납 장소 혼잡도 사전 안내 제안 — 시간대별 혼잡도 예측으로 반납 실패와 CS 문의를 줄이는 흐름',
        wide: true,
      },
      {
        src: '/images/gcar-voc/slide_tmp_22-22.webp',
        caption: '고객센터·이용가이드 재설계 — 문제 상황에서 FAQ와 반납 관련 기능까지 도달하는 시간을 줄이는 IA 개선안',
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
    tags: ['AI 서비스', 'MVP', 'UX 기획', '사이즈 추천', '이커머스', '서비스 설계', 'Next.js', 'Supabase', 'Gemini'],
    isMain: true,
    highlight: '사이즈 불안을 추천 근거로 해소',
    kpi: 'AI 사이즈 추천',
    links: [{ label: '서비스 사용해보기', url: 'https://www.pullsize.kr/recommend' }],
    content: {
      problem:
        '살미달라 브랜드를 직접 운영하며 사이즈 문의와 교환 요청을 현장에서 반복적으로 겪었다. 온라인 의류 구매자는 브랜드마다 다른 실측 기준과 착용감 차이 때문에 사이즈 선택에 불안을 느낀다. 상품 상세페이지의 치수표만으로는 내 체형에 맞는 사이즈와 여유도를 판단하기 어렵고, 이는 구매 망설임과 교환·반품으로 이어질 수 있다.',
      approach: [
        { num: '01', step: '입력 흐름 설계', desc: '상품 URL과 키·몸무게·평소 착용 사이즈 등 최소 입력만으로 추천을 시작하는 폼 구성' },
        { num: '02', step: '상품 정보 해석', desc: '상품 페이지의 사이즈 정보와 사용자의 신체 정보를 비교할 수 있도록 추천에 필요한 데이터 구조 정의' },
        { num: '03', step: '추천 로직 설계', desc: '사이즈 후보별 적합도와 여유도를 계산해 추천 사이즈와 판단 근거를 함께 제공하는 흐름 설계' },
        { num: '04', step: '결과 UI 구현', desc: '추천 사이즈, 여유도, 신체 부위별 핏 정보를 한 화면에서 이해할 수 있도록 시각화' },
        { num: '05', step: 'MVP 검증', desc: '실제 쇼핑 상황에서 사용자가 입력 → 추천 → 판단까지 이어질 수 있는 최소 기능 제품으로 구현' },
      ],
      insights: [
        { num: '01', title: '문제는 사이즈표가 없는 게 아니라 연결 기준이 없는 것이다', body: '대부분의 쇼핑몰이 사이즈표를 제공하지만, 내 치수와 상품 치수를 연결하는 방법이 없어 사용자는 여전히 불확실함을 느꼈다.' },
        { num: '02', title: '추천 신뢰도의 핵심은 결과가 아니라 근거다', body: '"그냥 M 추천"보다 "어깨 너비 기준으로 M을 추천하는 이유"가 있을 때 구매 결정이 빨라졌다. 설명 가능한 추천 구조가 필요했다.' },
        { num: '03', title: 'MVP는 기능 수보다 흐름의 완결성이다', body: '사이즈 입력 → 상품 분석 → 추천 결과 → 근거 제시의 4단계 흐름이 끊기지 않아야 신뢰가 생긴다. 기능 수보다 흐름 완결을 우선했다.' },
      ],
      results: [
        { label: 'MVP', desc: '상품 URL 입력, 신체 정보 입력, AI 사이즈 추천 결과까지 이어지는 핵심 사용자 플로우 구현' },
        { label: 'UX', desc: '단순 사이즈명 추천이 아니라 여유도와 판단 근거를 함께 보여줘 사용자가 추천을 납득할 수 있도록 설계' },
        { label: '확장성', desc: '향후 브랜드별 실측 데이터, 후기 기반 핏 데이터, 개인 선호 핏을 반영할 수 있는 서비스 구조로 정리' },
        { label: '기술 구현', desc: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Gemini로 직접 구현, cheerio로 상품 페이지 실측 치수 파싱 — Claude Code 기반 프론트·백엔드 단독 개발·배포' },
      ],
      flow: {
        title: '서비스 플로우',
        layout: 'roadmap',
        caption: '사이즈명이 아니라 판단 근거까지 주는 4단계 추천 흐름.',
        steps: [
          { label: '정보 입력', desc: '키·몸무게·평소 사이즈 등 신체 정보와 상품 URL을 최소 입력으로 받는다.' },
          { label: '데이터 추출', desc: 'cheerio로 상품 페이지의 실측 치수를 파싱하고 비교 가능한 기준으로 정규화한다.' },
          { label: 'AI 추천', desc: '신체 정보와 상품 치수를 매칭해 사이즈 후보별 적합도·여유도를 산출한다.' },
          { label: '근거 제시', desc: '추천 사이즈와 부위별 핏·여유도, 추천 이유를 한 화면에서 보여준다.' },
        ],
      },
      architecture: {
        title: '서비스 구조',
        caption: 'Claude Code로 프론트·백엔드를 직접 구현하고 Vercel에 배포한 풀스택 구조.',
        layers: [
          { name: '빌드 · 배포', items: ['Claude Code 직접 구현', 'GitHub Actions CI/CD', 'Vercel'] },
          { name: '프론트엔드', items: ['Next.js 16 / React 19', '추천', '블로그', '어드민'] },
          { name: 'API', items: ['Vercel Functions', '추천', '이미지 기반 추천', '피드백', '제휴 리다이렉트', '블로그', '어드민'] },
          { name: '데이터 · AI', items: ['Supabase', 'Gemini 사이즈 추천', 'cheerio 치수 파싱'] },
          { name: '측정 · 전환', items: ['제휴 → 구매 전환', 'GA 분석'] },
        ],
        loop: '인스타(@pullsize) → 블로그 유입 → AI 사이즈 추천 → 구매 전환 → 콘텐츠 재생산 ↺',
      },
      contribution: {
        role: '서비스 기획자 · UX 설계 (AI 도구 기반 직접 구현)',
        scope: '문제 정의·사용자 입력 플로우·추천 결과 UX·MVP 화면 설계·Claude Code 기반 프론트엔드·백엔드 직접 구현·서비스 배포',
        output: '실서비스 배포 (pullsize.kr), AI 추천 결과 화면, 메인 입력 화면',
      },
    },
    screenshots: [
      { src: '/images/pullsize/service-main.webp', caption: '서비스 메인 화면 — 상품 URL 입력 및 신체 정보 입력 UI' },
      { src: '/images/pullsize/service-result.webp', caption: '추천 결과 화면 — AI 사이즈 추천 및 여유도 시각화' },
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
        { num: '02', step: 'AI 연동', desc: '브랜드 분석 기준·카피 포맷 설계 후 Claude AI로 실행, Figma MCP로 디자인 자동 반영 (수동 Figma 작업 제거)' },
        { num: '03', step: '품질 게이트', desc: 'fact_check·QA 체크리스트 자동화로 게시 전 오류 검증 (인물 권리·브랜드 정보 정확도 포함)' },
        { num: '04', step: '대시보드 구축', desc: 'Google Sheets로 39개 피드 진행 현황·캡션·발행 상태 통합 관리' },
        { num: '05', step: 'SEO 전략', desc: '캡션 v4 포맷 + 3-Tier 해시태그 전략 설계·적용 (발행 피드 전수 적용 완료)' },
      ],
      insights: [
        { num: '01', title: '병목은 이미지 선정이 아니라 브랜드별 규칙 재설계의 반복이었다', body: '매 피드마다 브랜드 톤·캡션 포맷·이미지 크롭 기준을 처음부터 결정하는 것이 진짜 시간 낭비였다. 기준을 한 번 설계하면 AI가 반복할 수 있다.' },
        { num: '02', title: 'AI 실행 전에 인간의 설계 레이어가 있어야 품질이 안정된다', body: 'Claude API에 그냥 위임하면 결과가 들쑥날쑥하다. 브랜드 분석 기준·캡션 구조·출력 포맷을 먼저 설계한 뒤 AI를 실행했을 때 일관성이 생겼다.' },
        { num: '03', title: '자동화의 진짜 효과는 속도보다 담당자 의존도 제거다', body: '3시간 → 30분 단축보다 중요한 건, 누가 하더라도 같은 품질이 나온다는 것. 이 프로젝트의 목표는 속도가 아니라 재현 가능한 프로세스 설계였다.' },
      ],
      results: [
        { label: '시간 절감', desc: '브랜드당 평균 제작 시간 3시간 → 30분 이내, 약 83% 단축 (29개 브랜드 평균 기준)' },
        { label: '생산성', desc: '29개 이상 피드 자동 생성 완료, 22개 브랜드 커버 (2026.03–05, 약 3개월)' },
        { label: '운영', desc: 'Google Sheets 대시보드로 39개 피드 전수 관리, 캡션 v4 전략 전면 적용' },
      ],
      flow: {
        title: '제작 파이프라인',
        layout: 'chain',
        tone: 'process',
        caption: '조사부터 게시까지 4단계 + 단계마다 사람 검수 게이트.',
        steps: [
          { label: '자료조사', desc: '브랜드 리서치·이미지 수집' },
          { label: '전략·카피', desc: '카피 생성·검수 기준' },
          { label: 'Figma 적용', desc: 'MCP로 디자인 자동 반영' },
          { label: 'QA', desc: 'fact_check 게이트' },
          { label: '게시·동기화', desc: '@pullsize 게시·Sheets 연동' },
        ],
        note: '게시 후 회고를 다음 제작에 반영하는 반복 루프 ↺',
      },
      contribution: {
        role: '콘텐츠 기획자 · 파이프라인 구조 설계자 (AI 실행 도구 활용, 1인 프로젝트)',
        scope: '파이프라인 구조 설계·AI 프롬프트 설계·QA 체계·SEO 전략 수립·Claude Code 기반 파이프라인 직접 구현',
        output: '29개+ 피드 자동 생성 파이프라인, 캡션 v4 전략 문서, 운영 대시보드',
      },
    },
    screenshots: [
      {
        src: '/images/ai-content-automation/instagram-feed.webp',
        caption: '실제 게시된 인스타그램 피드 — AI가 생성한 카드뉴스가 @pullsize.official 계정에 발행된 결과물',
        wide: true,
      },
      {
        src: '/images/ai-content-automation/figma-overview.webp',
        caption: 'Figma 작업 전체 현황 — 스트릿·컨템포러리·캐주얼 3개 카테고리, 29개+ 브랜드 피드를 AI 파이프라인으로 자동 생성한 결과물',
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
        '3인 팀으로 패션 브랜드를 처음 창업해 원단 선정부터 샘플·생산·판매·마케팅까지 MD 전 과정을 직접 맡아야 했다. 시즌마다 사이즈·원단 품질 피드백을 반영해 상품과 프로세스를 개선해야 했다.',
      approach: [
        { num: '01', step: '상품 기획', desc: '시즌별 컨셉 → 트렌드 조사 → 원단 선정 → 샘플·피팅 → 생산 관리' },
        { num: '02', step: '품질 관리', desc: '봉제·프린팅 공장 품질 검수 및 납기 관리' },
        { num: '03', step: '콘텐츠 마케팅', desc: '유튜브 브이로그 27편 + 숏츠 23편 직접 기획·촬영·편집' },
        { num: '04', step: '오프라인 판매', desc: '팝업스토어 3회 (카페위탁 / 대학축제 / 서울플리마켓) 기획·운영' },
        { num: '05', step: '피드백 반영', desc: '고객 리뷰·DM 수집 → 차기 시즌 상품 개선 반영 (사이즈 그레이딩 재설계 포함)' },
      ],
      insights: [
        { num: '01', title: '브랜드는 한 번의 상품이 아니라 시즌의 반복이다', body: '21SS 140벌 완판에 멈추지 않고 고객 리뷰·DM을 모아 사이즈·원단을 다음 시즌에 반영하며 21FW·22SS로 이어갔다. 운영의 핵심은 피드백을 다음 시즌 상품으로 되돌리는 루프였다(사이즈 그레이딩 재설계 포함).' },
        { num: '02', title: '콘텐츠 자체가 브랜드의 유통 채널이었다', body: '유튜브 브이로그 27편·숏츠 23편을 직접 기획·촬영·편집해 2년간 조회수 2.4만+를 만들고 팔로워를 464→863명(+86%)으로 키웠다. 광고가 아니라 제작 과정 자체가 도달을 만들었다.' },
        { num: '03', title: '온라인만으로는 부족해 채널을 다각화했다', body: '팝업스토어 3회(카페 위탁·대학 축제·서울 플리마켓)로 오프라인 접점을 만들고 ACC·굿즈백·키링으로 품목을 확장하며, 한 채널에 의존하지 않는 판매 구조를 시도했다.' },
      ],
      results: [
        { label: '21SS 완판', desc: '첫 시즌 자체 제작 의류 140벌 완판 — 이후 21FW · 22SS 연속 출시' },
        { label: 'SNS 성장', desc: '인스타그램 팔로워 464 → 863명 (+86%), 유튜브 조회수 총 2.4만+ (2년 기준)' },
        { label: '오프라인', desc: '팝업스토어 3회 운영, 학교 축제·플리마켓·카페 위탁 등 채널 다각화' },
      ],
      contribution: {
        role: '패션 브랜드 공동 창업·대표 (3인 팀, 기획·MD 총괄)',
        scope: '상품 기획·생산 관리·영상 제작·팝업 운영·SNS 마케팅',
        output: '3시즌 출시, 인스타 팔로워 464→863명, 팝업 3회 운영, 유튜브 2.4만+ 조회',
      },
    },
    screenshots: [
      { src: '/images/salmidalla/location-front.webp',       caption: '시즌 룩북 촬영 — 브랜드 콘셉트와 제품 스타일링 기획',         wide: true },
      { src: '/images/salmidalla/quality-check.webp',        caption: '의류 검수 현장 — 납품 전 봉제·프린팅 품질 직접 검수' },
      { src: '/images/salmidalla/21ss-product.jpg',         caption: '21SS 상품 — 자체 제작 의류 140벌 완판' },
      { src: '/images/salmidalla/21fw-product-1.gif',       caption: '21FW 컬렉션 — 21SS 완판에 이어 가을/겨울 라인 출시' },
      { src: '/images/salmidalla/sample-spec.webp',          caption: '21SS 샘플 작업의뢰서 — 봉제 스펙·사이즈 그레이딩 직접 작성' },
      { src: '/images/salmidalla/22ss-cloth-1.webp',         caption: '22SS 의류 라인 — 네 종 출시, ACC·굿즈백·키링으로 품목 확장' },
      { src: '/images/salmidalla/location-lookbook.webp',    caption: '로케이션 룩북 컷 — 시즌 무드와 그래픽 티셔츠 착장 시각화',   wide: true },
      { src: '/images/salmidalla/location-graphic-tee.webp', caption: '브랜드 그래픽 티셔츠 착장 — 상품 기획부터 촬영까지 운영' },
      { src: '/images/salmidalla/22ss-acc-keyring-1.jpg',   caption: '22SS 키링 ACC — 2종 완판' },
    ],
  },
  {
    slug: 'areun-sai',
    name: '아른 사이',
    title: '텀블벅 177% 달성 — 인터뷰 콘텐츠를 도서로 만들었다',
    subtitle: '창업동아리 PM · 영상 제작 · 출판 · 전시 · 크라우드펀딩',
    period: '2023.04 — 2025.06',
    category: '콘텐츠 기획 · PM',
    tags: ['PM', '출판', '전시', 'InDesign', '크라우드펀딩', '영상 편집', '콘텐츠 기획'],
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
        { num: '02', step: '콘텐츠 확장', desc: '인터뷰 원천 콘텐츠를 출판·전시·굿즈로 확장, 인스타그램 운영 병행' },
        { num: '03', step: '도서 제작', desc: 'InDesign으로 인터뷰집 편집·출판 (2권)' },
        { num: '04', step: '크라우드펀딩', desc: '텀블벅 캠페인 기획·운영 — 목표 금액 대비 177% 달성' },
        { num: '05', step: '팀 PM', desc: '편집제작팀·마케팅팀·디자인팀 9명 조율 (2023.04–2025.06, 2년 2개월)' },
      ],
      insights: [
        { num: '01', title: '하나의 원천 콘텐츠를 여러 포맷으로 확장했다', body: '영상으로만 소비되던 인터뷰를 인터뷰집·전시·굿즈로 확장해 더 넓은 독자에게 도달했다. 콘텐츠의 가치는 같은 원천을 포맷으로 늘릴수록 커졌다.' },
        { num: '02', title: '크라우드펀딩의 성패는 리워드 설계에 있었다', body: '도서·굿즈·상세페이지를 하나의 리워드 패키지로 묶어 텀블벅 목표 대비 177%를 달성했다. 모금은 홍보가 아니라 무엇을 어떻게 묶어 주느냐의 문제였다.' },
        { num: '03', title: 'PM의 일은 산출물이 아니라 흐름을 잇는 것이다', body: '편집제작·마케팅·디자인 9명 팀의 일정과 자료 흐름을 2년 2개월간 조율했다. 핵심 산출물은 팀 공동 제작이었고, 내 역할은 흐름이 끊기지 않게 연결하는 것이었다.' },
      ],
      results: [
        { label: '크라우드펀딩', desc: '텀블벅 목표 금액 대비 177% 달성 (2024, 캠페인 종료 기준)' },
        { label: '출판물', desc: '애\'Say / 처음은 아니지만 — 2권 출판 완료' },
        { label: 'PM', desc: '9명 팀 2년 2개월 리드, 기획·제작·마케팅 전 과정 조율' },
      ],
      contribution: {
        role: '프로젝트 매니저',
        scope: '인터뷰 기획·영상 편집·인터뷰집 편집·전시 기획·크라우드펀딩 운영·팀 PM',
        output: '출판물 2권, 텀블벅 177% 달성, 인스타 콘텐츠 운영',
      },
    },
    screenshots: [
      { src: '/images/areun-sai/book-cover.webp',             caption: '인터뷰집 표지·북 패키지 디자인 — 장기 프로젝트의 핵심 출판물 시각화', wide: true },
      { src: '/images/areun-sai/funding-goods.webp',          caption: '텀블벅 리워드 패키지 구성 — 도서·굿즈·상세페이지까지 연결한 펀딩 설계' },
      { src: '/images/areun-sai/interview-shoot.webp',        caption: '인터뷰 촬영 현장 — 대상 섭외부터 질문 설계·촬영·편집까지 진행' },
      { src: '/images/areun-sai/question-board.webp',         caption: '콘텐츠 질문 보드 — 인터뷰 주제와 독자 반응을 수집해 출판 콘텐츠로 확장' },
      { src: '/images/areun-sai/fulfillment-packaging.webp', caption: '리워드 포장·배송 준비 — 펀딩 이후 실물 제작과 발송 운영' },
    ],
  },];
