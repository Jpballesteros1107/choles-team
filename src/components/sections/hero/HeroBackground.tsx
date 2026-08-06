export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-primary" />

      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0B224A] to-[#041126]" />

      <div className="absolute left-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-secondary/20 blur-[140px]" />

      <div className="absolute -right-37.5 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[140px]" />
    </>
  );
}