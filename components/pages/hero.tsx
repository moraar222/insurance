import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroHeader } from "@/config/contents";
import { CheckCircle } from "lucide-react";

export default function HeroHeader() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row justify-between items-center py-16 lg:py-20">
      {/* Text Section */}
      <div className="flex flex-1 flex-col gap-2 lg:gap-6">
        <div className="space-y-2 m-2">
          {/* Header */}
          <h1 className="text-2xl font-bold lg:text-4xl text-left text-grey-900 ">
            {heroHeader.header}
          </h1>
          {/* Subheader */}
          <h2 className="text-lg font-light text-muted-foreground lg:text-1xl text-left color-grey-700">
            {heroHeader.subheader}
          </h2>
        </div>

        {/* Button */}
        <Link
          href="/register"
          target="_blank"
          className={`mt-6 inline-block w-[12rem] ${cn(
            buttonVariants({ size: "lg", variant: "default" })
          )}`}
        >
          Get Started
        </Link>
      </div>

      {/* Image Section */}
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end mb-6 lg:mb-0">
          <Image
            src={heroHeader.image}
            width={500}
            height={500}
            alt="Header image"
            className="rounded-lg shadow-md"
          />
        </div>
      ) : null}
    </section>
  );
}
