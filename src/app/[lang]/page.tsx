import SideBar from "@/components/SideBar";
import { getDictionary, getLocale, SupportedLocales } from "@/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: SupportedLocales }>;
}) {
  const { lang } = await params;
  const locale = await getLocale(lang);
  const dictionary = await getDictionary(locale);

  return (
    <>
      <SideBar dictionary={dictionary} sections={[]} />

      <main className="p-4 w-full flex flex-col"></main>
    </>
  );
}
