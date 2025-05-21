"use client";

import NextLink from "next/link";
import { BoxIcon, ChevronRightIcon, HomeIcon } from "lucide-react";

import type { SideBarItem, SideBarSection } from "../types/components";
import type { Dictionary } from "@/types/dictionaries";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/new-york/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/new-york/ui/collapsible";

export default function SideBarComponent({
  dictionary,
  sections,
}: {
  dictionary: Dictionary;
  sections: SideBarSection[];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <></>;
  }

  return (
    <div className="w-full max-w-[300px] border-r border-b border-dashed p-4 flex flex-col gap-y-4">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={
              <>
                <BoxIcon />

                {dictionary.navbar.products.placeholder}
              </>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="as">Product 1</SelectItem>
          <SelectItem value="a">Product 2</SelectItem>
        </SelectContent>
      </Select>

      <div className="w-full flex flex-col gap-y-4">
        {sections.map((section, idx) =>
          section.items ? (
            <SectionComponent key={idx} section={section} />
          ) : section.href ? (
            <NextLink
              key={idx}
              href={section.href}
              className="inline-flex gap-x-2 items-center text-lg font-medium"
            >
              {section.icon} {section.title}
            </NextLink>
          ) : null
        )}
      </div>
    </div>
  );
}

// NavItem component to render links consistently
function NavItem({ item }: { item: SideBarItem }) {
  return (
    <NextLink
      href={item.href}
      className="inline-flex gap-x-2 items-center text-lg font-medium"
    >
      {item.icon} {item.title}
    </NextLink>
  );
}

// Reusable collapsible component
function CollapsibleItem({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Collapsible className="w-full flex flex-col gap-y-2 group/collapsible">
      <CollapsibleTrigger className="text-lg font-medium w-full inline-flex">
        <div className="flex gap-x-2 items-center">
          {icon}
          {title}
        </div>
        <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 border-l border-dashed flex flex-col gap-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

// Component to handle items (both simple and with nested items)
function ItemComponent({ item }: { item: SideBarItem }) {
  if (item.items) {
    return (
      <CollapsibleItem title={item.title} icon={item.icon}>
        {item.items.map((subItem, subIdx) => (
          <NavItem key={subIdx} item={subItem} />
        ))}
      </CollapsibleItem>
    );
  }
  return <NavItem item={item} />;
}

function SectionComponent({ section }: { section: SideBarSection }) {
  return (
    <CollapsibleItem title={section.title} icon={section.icon}>
      {section.items?.map((item, idx) => (
        <ItemComponent key={idx} item={item} />
      ))}
    </CollapsibleItem>
  );
}
