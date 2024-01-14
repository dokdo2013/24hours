export type Project = {
  priority: number;
  name: string;
  description: string;
  logoUrl: string;
  tags: string[];
  status: "standby" | "inProgress" | "done";
  startDate?: string | null;
  endDate?: string | null;
};

export const projects: Project[] = [
  {
    priority: 1,
    name: "24 Hours - 24시간이 모자라",
    description: "2024년에는 프로젝트 24개, 24시간이 모자라",
    logoUrl: "/24hours_logo.png",
    tags: ["Tailwind UI", "Turborepo", "next-font"],
    status: "inProgress",
    startDate: "2024-01-13",
    endDate: null,
  },
  {
    priority: 2,
    name: "Inflearn Study Alert (ISA)",
    description: "인프런 스터디/팀프로젝트 키워드 알림 서비스",
    logoUrl: "/isa_logo.png",
    tags: ["Kafka", "Auth0", "next-auth"],
    status: "inProgress",
    startDate: "2024-01-14",
    endDate: null,
  },
  {
    priority: 3,
    name: "회고4u - 모두의 회고 서비스",
    description: "개발자들의 회고를 모아서 공유하는 서비스",
    logoUrl: "https://placehold.co/400",
    tags: ["Nuxt.js", "Django", "Nx"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
  {
    priority: 4,
    name: "Haenu IDP (private)",
    description: "사이드 프로젝트 배포 및 관리를 위한 내부 포털",
    logoUrl: "https://placehold.co/400",
    tags: ["Next.js App Router", "Turborepo"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
  {
    priority: 5,
    name: "Chzzk Onair Webhook - 치지직 생방송 웹훅 플랫폼",
    description: "치지직 서드파티 개발자들을 위한 웹훅 플랫폼 서비스",
    logoUrl: "https://placehold.co/400",
    tags: ["NestJS", "Serverless Framework"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
  {
    priority: 6,
    name: "Code Memorial - 종료된 프로젝트를 추모하는 서비스",
    description:
      "지금까지의 작업물 중 서비스 종료를 맞이한 프로젝트를 추모하는 서비스",
    logoUrl: "https://placehold.co/400",
    tags: ["GraphQL"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
  {
    priority: 7,
    name: "VMusic.kr - 버츄얼 크리에이터 오리지널/커버곡 감상 플랫폼",
    description:
      "버츄얼 크리에이터의 오리지널곡, 커버곡을 모아서 감상할 수 있는 플랫폼",
    logoUrl: "https://placehold.co/400",
    tags: ["Next.js"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
  {
    priority: 8,
    name: "숏.닷컴 - 한글로만 이루어진 URL 단축 서비스",
    description: "긴 URL을 한글로만 이루어진 URL로 단축해주는 서비스",
    logoUrl: "https://placehold.co/400",
    tags: ["Remix", "Serverless Framework"],
    status: "standby",
    startDate: null,
    endDate: null,
  },
];
