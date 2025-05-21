"use client";

import Col1 from "@/comps/col1";
import Col2 from "@/comps/col2";
import Col3 from "@/comps/col3";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <h1 className="text-2xl font-bold">Propuesta 1</h1>
      <main
        data-theme="prototipouno"
        className="text-base-content mx-auto grid gap-6 pb-20 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 [&_.carbon-responsive-wrap]:flex-nowrap! [&_.carbon-responsive-wrap]:text-[11px]! [&_:is(div,button)]:[transition:background-color_0ms,border-color_100ms,box-shadow_300ms,border-radius_500ms_ease-out] [&>*]:mb-6 max-w-[1200px] py-12"
      >
        <Col1 />
        <Col2 />
        <Col3 />
      </main>
      <h1 className="text-2xl font-bold">Propuesta 2</h1>
      <main
        data-theme="prototipodos"
        className="text-base-content mx-auto grid gap-6 pb-20 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 [&_.carbon-responsive-wrap]:flex-nowrap! [&_.carbon-responsive-wrap]:text-[11px]! [&_:is(div,button)]:[transition:background-color_0ms,border-color_100ms,box-shadow_300ms,border-radius_500ms_ease-out] [&>*]:mb-6 max-w-[1200px] py-12"
      >
        <Col1 />
        <Col2 />
        <Col3 />
      </main>
      <h1 className="text-2xl font-bold">Propuesta 3</h1>
      <main
        data-theme="prototipotres"
        className="text-base-content mx-auto grid gap-6 pb-20 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 [&_.carbon-responsive-wrap]:flex-nowrap! [&_.carbon-responsive-wrap]:text-[11px]! [&_:is(div,button)]:[transition:background-color_0ms,border-color_100ms,box-shadow_300ms,border-radius_500ms_ease-out] [&>*]:mb-6 max-w-[1200px] py-12"
      >
        <Col1 />
        <Col2 />
        <Col3 />
      </main>
    </div>
  );
}
