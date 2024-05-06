import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="w-full mt-2 lg:mt-[4.03125rem] animation-delay:.85s py-20 pb-10 delay-500 relative opacity-0  animate-fade-in-down h-screen">
      <div className="isolate relative w-full py-0 lg:pt-8 lg:pb-24 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:[mask-image:radial-gradient(circle_at_10%_50%,white,transparent)]">
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:[display:block] mix-blend-soft-light"
        >
          <PerlinNoise />
        </div>

        <div className="relative container">
          <div className="relative w-full">
            <div className="relative flex flex-col gap-4 lg:gap-8 text-foreground/80">
              <GridBorder left right overflow />

              <div className="relative flex flex-col w-full text-foreground">
                <span className="relative !leading-[.76] text-8xl lg:text-[250px] font-bold -tracking-[.06em] -ml-[.7%]">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none select-none text-primary [mask-image:linear-gradient(to_bottom,white,transparent)]"
                  >
                    404
                  </div>
                  <div className="relative [-webkit-text-fill-color:transparent] [-webkit-text-stroke:#9333ea_2px] [mask-image:linear-gradient(to_bottom,white,transparent)]">
                    404
                  </div>
                </span>

                <GridBorder top bottom overflow />
              </div>

              <div className="relative flex flex-col w-full text-foreground">
                <GridBorder top bottom />

                <span className="!leading-[.73] text-6xl lg:text-[7.125rem] font-bold -tracking-[.06em] -ml-1">
                  Not found.
                </span>
              </div>

              <div className="relative flex flex-col w-full">
                <GridBorder top bottom />
                <div>
                  <Button className="h-10 lg:h-14 lg:text-lg" asChild>
                    <Link href="/sign-in">Voltar para a home</Link>
                  </Button>
                </div>
              </div>

              <div className="relative mt-4 lg:mt-8 flex flex-col w-full text-lg lg:text-4xl">
                {/* <div className="relative mt-4 lg:mt-8 flex flex-col w-full text-sm lg:text-base"> */}
                <GridBorder top />
                <GridBorder bottom overflow />

                <span>Gerencie sua agência da melhor forma</span>
              </div>
            </div>
          </div>
        </div>

        {/* <Spotlight /> */}
      </div>
    </div>
  );
}

function GridBorder({
  overflow = false,
  ...props
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  overflow?: boolean;
}) {
  const className =
    "pointer-events-none absolute inset-0 [&_line]:stroke-black/55 [&_line]:[stroke-width:2px] [&_line]:[stroke-dasharray:3,5]";

  // TODO: deduplicate
  return (
    <>
      {(props.left || props.right) && (
        <div
          aria-hidden
          className={cn(
            className,
            overflow &&
              "-top-[20%] -bottom-[20%] [mask-image:linear-gradient(to_bottom,transparent_3%,black_10%,black_90%,transparent_97%)]",
          )}
        >
          <svg height="100%" width="100%" preserveAspectRatio="none">
            {props.left && <line x1="0" y1="0" x2="0" y2="100%" />}
            {props.right && <line x1="100%" y1="0" x2="100%" y2="100%" />}
          </svg>
        </div>
      )}
      {(props.bottom || props.top) && (
        <div
          aria-hidden
          className={cn(
            className,
            overflow &&
              "-left-[20%] -right-[20%] [mask-image:linear-gradient(to_right,transparent_3%,black_10%,black_90%,transparent_97%)]",
          )}
        >
          <svg height="100%" width="100%" preserveAspectRatio="none">
            {props.top && <line x1="0" y1="0" x2="100%" y2="0" />}
            {props.bottom && <line x1="0" y1="100%" x2="100%" y2="100%" />}
          </svg>
        </div>
      )}
    </>
  );
}

function PerlinNoise() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(30%_40%_at_center,black,transparent)]"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      opacity="1"
    >
      <defs>
        <filter
          id="noise"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            result="turbulence"
            baseFrequency="0.8"
            numOctaves="4"
            seed="10"
            stitchTiles="stitch"
          >
            {/* <animate
              id="noiseAnimate"
              attributeName="baseFrequency"
              attributeType="XML"
              values="10;11;10"
              keyTimes="0;.5;1"
              begin="0s"
              dur="5s"
              repeatCount="indefinite"
            /> */}
          </feTurbulence>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
