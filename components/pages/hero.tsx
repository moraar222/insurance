import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroHeader } from "@/config/contents";

export default function HeroHeader() {
  return (
    <section className="flex flex-col items-center py-16 lg:py-20 ">
      <div className="container max-w-6xl px-4">
        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="space-y-2">
              {/* Header */}
              <h1 className="text-3xl font-bold lg:text-5xl text-gray-900">
                {heroHeader.header}
              </h1>
              {/* Subheader */}
              <h2 className="text-lg font-light text-gray-700 lg:text-xl">
                {heroHeader.subheader}
              </h2>
            </div>

            {/* Button */}
            <Link
              href="/register"
              target="_blank"
              className={`mt-6 inline-block ${cn(
                buttonVariants({ size: "lg", variant: "default" })
              )}`}
            >
              Get Started
            </Link>
          </div>

          {/* Image Section */}
          {heroHeader.image && (
            <div className="flex justify-center lg:justify-end">
              <Image
                src={heroHeader.image}
                width={400}
                height={400}
                alt="Header image"
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
