import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MenuSectionView } from "@/components/MenuSectionView";
import { MENU_SECTIONS, getSection } from "@/data/menu";

export function generateStaticParams() {
  return MENU_SECTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  return { title: section?.title ?? "Menú" };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();
  return <MenuSectionView section={section} />;
}
