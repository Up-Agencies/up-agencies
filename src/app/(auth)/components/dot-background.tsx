export function DotBackground() {
  return (
    <div className="h-full w-full bg-primary bg-dot-white/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <p className="text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Up Agencies
      </p>
    </div>
  );
}
