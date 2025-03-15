import Link from "next/link";

interface FooterItemProps {
  icon: React.ReactElement;
  text: string;
  href: string;
}

export default function FooterItem({ icon, text, href }: FooterItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center gap-[8px] hover:underline underline-offset-[3px]"
    >
      {icon}
      {text}
    </Link>
  );
}
