import Landing from '@/pages/Landing';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-center w-full flex-col min-h-screen">
        <h1 className="text-3xl font-bold text-center w-full">
          Hello world! Start From here Root Page: src/app/page.tsx
        </h1>
        <Landing params="Landing:" />
      </div>
    </div>
  );
}
