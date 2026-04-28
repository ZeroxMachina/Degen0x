import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Page Manager | degen0x",
  robots: { index: false, follow: false },
};

export default function AdminPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
