import ImageSlideShow from "@/component/image-slideshow";
import Cards from "@/component/cards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
      <ImageSlideShow></ImageSlideShow>
      <Cards></Cards>
      </main>
     
    </div>
  );
}
