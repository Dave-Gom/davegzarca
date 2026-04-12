import { ImageResponse } from "next/og";
import { locales } from "@/infrastructure/translations/dictionaries";

export const alt = "David Gómez — Senior Fullstack Mobile & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = async () =>
  locales.map((lang) => ({ lang }));

const titles: Record<string, { role: string; subtitle: string }> = {
  en: {
    role: "Senior Fullstack Mobile & Web Developer",
    subtitle: "React Native · TypeScript · Node.js",
  },
  es: {
    role: "Desarrollador Senior Fullstack Mobile & Web",
    subtitle: "React Native · TypeScript · Node.js",
  },
  de: {
    role: "Senior Fullstack Mobile & Web Entwickler",
    subtitle: "React Native · TypeScript · Node.js",
  },
};

export default async function OGImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = titles[lang] ?? titles.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #001733 0%, #162c49 50%, #334866 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #b2c8ec, #d5e3ff, #b2c8ec)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            David Gómez
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#b2c8ec",
              lineHeight: 1.3,
            }}
          >
            {t.role}
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#7f94b6",
              marginTop: "8px",
              letterSpacing: "2px",
            }}
          >
            {t.subtitle}
          </div>
        </div>

        {/* Bottom bar with URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#7f94b6",
              letterSpacing: "1px",
            }}
          >
            davegzarca.dev
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              fontSize: 16,
              color: "#7f94b6",
            }}
          >
            <span style={{ color: lang === "en" ? "#d5e3ff" : "#7f94b6", fontWeight: lang === "en" ? 700 : 400 }}>EN</span>
            <span style={{ color: "#4b5f7f" }}>/</span>
            <span style={{ color: lang === "es" ? "#d5e3ff" : "#7f94b6", fontWeight: lang === "es" ? 700 : 400 }}>ES</span>
            <span style={{ color: "#4b5f7f" }}>/</span>
            <span style={{ color: lang === "de" ? "#d5e3ff" : "#7f94b6", fontWeight: lang === "de" ? 700 : 400 }}>DE</span>
          </div>
        </div>

        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(178, 200, 236, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(178, 200, 236, 0.06)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
