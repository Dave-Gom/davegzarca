import type { ExperienceDictionary } from "@/infrastructure/types";
import TimelineItem from "./TimelineItem";

interface ExperienceTimelineProps {
  t: ExperienceDictionary;
}

const ExperienceTimeline = ({ t }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 transform md:-translate-x-1/2 hidden md:block"></div>

      <TimelineItem
        period={t.period1}
        company={t.company1}
        badge={t.current}
        badgeVariant="current"
        role={t.role1}
        items={[
          { icon: "architecture", text: t.role1Item1 },
          { icon: "speed", text: t.role1Item2 },
          { icon: "groups", text: t.role1Item3 },
        ]}
        position="left"
      />

      <TimelineItem
        period={t.period5}
        company={t.company5}
        badge={t.years5}
        role={t.role5}
        items={[
          { icon: "sports_tennis", text: t.role5Item1 },
          { icon: "leaderboard", text: t.role5Item2 },
          { icon: "layers", text: t.role5Item3 },
        ]}
        position="right"
      />

      <TimelineItem
        period={t.period2}
        company={t.company2}
        badge={t.years3}
        role={t.role2}
        items={[
          { icon: "verified_user", text: t.role2Item1 },
          { icon: "star", text: t.role2Item2 },
          { icon: "monitoring", text: t.role2Item3 },
        ]}
        position="left"
      />

      <TimelineItem
        period={t.period3}
        company={t.company3}
        badge={t.years2}
        role={t.role3}
        items={[
          { icon: "rocket_launch", text: t.role3Item1 },
          { icon: "database", text: t.role3Item2 },
          { icon: "layers", text: t.role3Item3 },
        ]}
        position="right"
      />

      <TimelineItem
        period={t.period4}
        company={t.company4}
        badge={t.years4}
        role={t.role4}
        items={[
          { icon: "directions_run", text: t.role4Item1 },
          { icon: "timer", text: t.role4Item2 },
          { icon: "layers", text: t.role4Item3 },
        ]}
        position="left"
        isLast
      />
    </div>
  );
};

export default ExperienceTimeline;
