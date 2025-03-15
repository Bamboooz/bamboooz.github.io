import { LucideGithub, LucideTwitter, LucideCoffee } from "lucide-react";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="fixed bottom-[24px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-[24px] px-[24px] py-[12px] bg-background border border-terminal rounded-lg">
        <FooterItem
          icon={<LucideGithub size={17} />}
          text="github"
          href="https://github.com/Bamboooz"
        />

        <FooterItem
          icon={<LucideTwitter size={17} />}
          text="twitter"
          href="https://x.com/bambooozdev"
        />

        <FooterItem
          icon={<LucideCoffee size={17} />}
          text="ko-fi"
          href="https://ko-fi.com/bamboooz"
        />
      </div>
    </div>
  );
}
