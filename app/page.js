import ImageSlideShow from "@/component/image-slideshow";
import Cards from "@/component/cards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <ImageSlideShow></ImageSlideShow>
      <Cards></Cards>
      </main>
     
    </div>
  );
}
