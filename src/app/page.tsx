import ButtonArrow from "@/components/buttons/ButtonArrow";
import LavenderSection from "@/components/sections/LavenderSection";

export default function Home() {
  return (
    <LavenderSection>
      <div className="h-full flex justify-between">
        <div className="w-1/2 flex flex-col justify-center space-y-4">
          <h2 className="font-medium text-3xl">Never Stop Learning</h2>
          <h2 className="font-medium text-3xl">
            Life <b>Never Stop</b> Teaching
          </h2>
          <p>
            Every teaching and learning journey is unique Following We will help
            guide your way.
          </p>

          <ButtonArrow>Start Free Trial</ButtonArrow>
        </div>
      </div>
    </LavenderSection>
  );
}
