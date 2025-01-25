import { GoogleAnalytics } from "@next/third-parties/google";
import Sheet from "@/app/_components/_Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
  title: "メンバー",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="My-skills" sub="スキル" />
      <Sheet>{children}</Sheet>
      <GoogleAnalytics gaId="G-XXX" />
    </>
  );
}
