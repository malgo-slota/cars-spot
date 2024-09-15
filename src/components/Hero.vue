<template>
  <div class="mt-[60px]
              lg:mt-[120px] lg:mx-[120px]">
    <div class="flex flex-col items-center 
                lg:items-start">
      <div class="flex-none">
        <h1 class="font-bebas-neue text-[48px] text-gray-dark uppercase text-center tracking-tight
                    mb-[16px] 
                    lg:text-[76.29px] lg:text-left lg:leading-[83.92px] lg:mb-[32px]">
          Sprzedajemy samochody<br> z europy
        </h1>
        <p class="font-roboto-condensend text-gray-dark text-center mb-[26px] 
                  lg:text-left lg:mb-[48px]">
          Kup komfortowy pojazd, aby każda podróż <br> była wyjątkowym przeżyciem.
        </p>
      </div>
      <div class="font-roboto-flex
                  flex gap-[24px] 
                  lg:basis-1/4 lg:mx-0">
        <button class="font-roboto-flex text-[15px] font-semibold text-white tracking-tightest leading-low 
                        py-[12px] px-[24px] bg-blue rounded-lg 
                        hover:scale-105">
          Zobacz zdjęcia
        </button>
        <button class="font-roboto-flex text-[15px] font-semibold  text-blue tracking-tightest leading-low 
                        border border-blue 
                        py-[12px] px-[24px] rounded-lg 
                        hover:scale-105">
          Zadzwoń do nas
        </button>
      </div>
    </div>
  </div>
    <!-- hero images -->
    <div class="flex 
                absolute z-[-1] top-[47px] h-[825px] w-full overflow-hidden 
                md:overflow-visible">
      <img src="/assets/hero-back.svg" 
            alt="background image"
            class="absolute z-[-10] rotate-90 scale-150
                    md:right-[71.95px] 
                    md:top-[-47px]
                    md:rotate-0
                    md:scale-100"/>
      <img src="/assets/hero.png" 
            alt="image of black cars" 
            class="absolute top-[360px] right-0 w-[1064px]"/>
    </div>
</template>

