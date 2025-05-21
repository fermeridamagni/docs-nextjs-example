"use client";

import NextLink from "next/link";
import NextImage from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import type { Dictionary } from "@/types/dictionaries";
import { Button } from "@/components/new-york/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/new-york/ui/select";
import { Input } from "./new-york/ui/input";

export default function Header({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const handleChangeLanguage = (value: string) => {
    router.push(pathname.replace(lang, value));
  };

  return (
    <header className="w-full fixed left-0 right-0 flex items-center justify-center border-dashed border-b bg-background/90 backdrop-blur z-50">
      <div className="max-w-[1550px] mx-auto w-full flex items-center justify-between py-2 px-4 sm:px-6 border-dashed border-x">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-6">
            <NextLink
              target="_blank"
              href={"https://www.example.com"}
              className="inline-flex gap-x-4 items-center text-xl"
            >
              <NextImage
                src={
                  "https://www.example.com/icons/default-icon-bottomless-400x260.svg"
                }
                alt={"Example Logo"}
                width={45}
                height={45}
                className={"invert-50 dark:invert-0"}
              />
            </NextLink>

            <div className="h-[25px] w-[2px] bg-border -rotate-12" />

            <div className="text-lg">{dictionary.header.title}</div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Input
            placeholder={dictionary.header.search.placeholder}
            className="w-[250px]"
          />

          <Select defaultValue={lang} onValueChange={handleChangeLanguage}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={dictionary.header.lang.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="es">{dictionary.header.lang.es}</SelectItem>
              <SelectItem value="en">{dictionary.header.lang.en}</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="icon"
            className="size-10"
          >
            {theme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
