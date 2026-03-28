// ─── Home ────────────────────────────────────────────────────────────────────

export type HeroSectionTranslations = {
  basedIn: string;
  heroName: string;
  heroTagline: string;
  heroDescription: string;
  viewWork: string;
  getInTouch: string;
  portraitAlt: string;
};

export type AboutSectionTranslations = {
  philosophyLabel: string;
  philosophyTitle: string;
  philosophyP1Start: string;
  philosophyP1Bold1: string;
  philosophyP1Mid: string;
  philosophyP1Bold2: string;
  philosophyP1End: string;
  philosophyP2: string;
  yearsCount: string;
  yearsLabel: string;
  appsCount: string;
  appsLabel: string;
};

export type ProjectsSectionTranslations = {
  worksLabel: string;
  worksTitle: string;
  project1Alt: string;
  project1Title: string;
  project1Desc: string;
  project1Impact: string;
  project1ImpactLabel: string;
  project1Role: string;
  project2Alt: string;
  project2Title: string;
  project2Desc: string;
  project2Impact: string;
  project2ImpactLabel: string;
  project2Role: string;
};

export type HomExperienceSectionTranslations = {
  historyLabel: string;
  historyTitle: string;
  role1Period: string;
  role1Title: string;
  role1Desc: string;
  role1Item1: string;
  role1Item2: string;
  role2Period: string;
  role2Title: string;
  role2Desc: string;
  role2Item1: string;
  role2Item2: string;
  role3Period: string;
  role3Title: string;
  role3Desc: string;
  role4Period: string;
  role4Title: string;
  role4Desc: string;
  role5Period: string;
  role5Title: string;
  role5Desc: string;
};

export type SkillsSectionTranslations = {
  skillsLabel: string;
  skillsTitle: string;
  mobileTitle: string;
  webTitle: string;
  backendTitle: string;
  devopsTitle: string;
};

export type HomeContactSectionTranslations = {
  ctaLabel: string;
  ctaTitle: string;
  ctaLinkedIn: string;
};

export type HomeTranslations = {
  heroSection: HeroSectionTranslations;
  aboutSection: AboutSectionTranslations;
  projectsSection: ProjectsSectionTranslations;
  experienceSection: HomExperienceSectionTranslations;
  skillsSection: SkillsSectionTranslations;
  contactSection: HomeContactSectionTranslations;
};

// ─── About ───────────────────────────────────────────────────────────────────

export type AboutHeroSectionTranslations = {
  subtitle: string;
  title: string;
  p1: string;
  p2: string;
  portraitAlt: string;
};

export type PhilosophySectionTranslations = {
  philosophyTitle: string;
  archTitle: string;
  archDesc: string;
  precisionTitle: string;
  precisionDesc: string;
  craftTitle: string;
  craftDesc: string;
  humanTitle: string;
  humanDesc: string;
};

export type MentoringCardTranslations = {
  label: string;
  title: string;
  description: string;
  workshops: string;
  coaching: string;
};

export type OpenSourceCardTranslations = {
  label: string;
  title: string;
  description: string;
  stars: string;
};

export type SpeakingCardTranslations = {
  imageAlt: string;
  title: string;
  description: string;
};

export type AppearancesCardTranslations = {
  title: string;
  appearance1: string;
  appearance1Detail: string;
  appearance2: string;
  appearance2Detail: string;
  appearance3: string;
  appearance3Detail: string;
};

export type BeyondCodeSectionTranslations = {
  title: string;
  subtitle: string;
  mentoringCard: MentoringCardTranslations;
  openSourceCard: OpenSourceCardTranslations;
  speakingCard: SpeakingCardTranslations;
  appearancesCard: AppearancesCardTranslations;
};

export type AboutTranslations = {
  heroSection: AboutHeroSectionTranslations;
  philosophySection: PhilosophySectionTranslations;
  beyondCodeSection: BeyondCodeSectionTranslations;
};

// ─── Experience ──────────────────────────────────────────────────────────────

export type ExperienceHeaderTranslations = {
  subtitle: string;
  title: string;
  description: string;
};

export type ExperienceTimelineTranslations = {
  current: string;
  years3: string;
  years2: string;
  period1: string;
  company1: string;
  role1: string;
  role1Item1: string;
  role1Item2: string;
  role1Item3: string;
  period2: string;
  company2: string;
  role2: string;
  role2Item1: string;
  role2Item2: string;
  role2Item3: string;
  period3: string;
  company3: string;
  role3: string;
  role3Item1: string;
  role3Item2: string;
  role3Item3: string;
  period4: string;
  company4: string;
  years4: string;
  role4: string;
  role4Item1: string;
  role4Item2: string;
  role4Item3: string;
  period5: string;
  company5: string;
  years5: string;
  role5: string;
  role5Item1: string;
  role5Item2: string;
  role5Item3: string;
};

export type ExperienceCtaTranslations = {
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  ctaDownload: string;
};

export type ExperienceTranslations = {
  header: ExperienceHeaderTranslations;
  timeline: ExperienceTimelineTranslations;
  cta: ExperienceCtaTranslations;
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export type ContactHeroTranslations = {
  availability: string;
  title: string;
  titleLine2: string;
  description: string;
  imageAlt: string;
};

export type ContactCardTranslations = {
  formTitle: string;
  emailLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  visionLabel: string;
  visionPlaceholder: string;
  sendButton: string;
  socialLabel: string;
};

export type TrustIndicatorTranslations = {
  trustText: string;
};

export type ContactSidebarTranslations = {
  contactCard: ContactCardTranslations;
  trustIndicator: TrustIndicatorTranslations;
};

export type ContactTranslations = {
  hero: ContactHeroTranslations;
  sidebar: ContactSidebarTranslations;
};

// ─── Root ────────────────────────────────────────────────────────────────────

export type ScreensTranslations = {
  home: HomeTranslations;
  about: AboutTranslations;
  experience: ExperienceTranslations;
  contact: ContactTranslations;
};
