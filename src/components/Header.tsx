import recipeImg from "@/assets/recipe.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6">
      <div className="w-48 h-48 relative">
        <Image
          src={recipeImg}
          alt="Delicious recipe"
          fill
          className="object-cover rounded-lg shadow-xl dark:shadow-gray-800"
        />
      </div>
      <h1 className="text-3xl font-bold text-center sm:text-left">
        Welcome to Recipe Finder!
      </h1>
    </header>
  );
}
