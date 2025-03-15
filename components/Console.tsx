import ConsoleAnimation from "./ConsoleAnimation";

export default function Console() {
  return (
    <div className="max-md:size-full w-[750px] h-[550px] border border-terminal rounded-t-lg shadow-lg overflow-hidden">
      <div className="h-[40px] flex items-center justify-center font-semibold select-none bg-terminal">
        bamboooz@bamboooz: ~
      </div>

      <div className="size-full flex flex-col gap-[8px] p-[8px] bg-background">
        <ConsoleAnimation />
      </div>
    </div>
  );
}
