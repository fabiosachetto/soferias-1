import ImageSlider from '@/components/ImageSlider';

export default function Suites() {
  return (


    <div id="default-carousel" className="relative w-full" data-carousel="slide">

      <h1 className="text-9xl text-white">Suítes.</h1>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
          <ImageSlider />
        </main>
      </div>
    </div>

  );
};