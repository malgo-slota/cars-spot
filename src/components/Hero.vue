<template>
  <div class="mt-[60px]
              lg:mt-[120px] lg:mx-[120px]">
    <div class="flex flex-col items-center 
                lg:items-start">
      <div class="flex-none">
        <h1 class="text-[48px] text-center text-gray-dark uppercase font-['bebas_neue'] mb-[16px] tracking-tight
                  lg:text-[76.29px] lg:text-left lg:mb-[32px] lg:leading-[83.92px]">
          Sprzedajemy samochody<br> z europy
        </h1>
        <p class="font-['roboto_condensed'] text-gray-dark mb-[26px] text-center 
                  lg:mb-[48px] lg:text-left">
          Kup komfortowy pojazd, aby każda podróż <br> była wyjątkowym przeżyciem.
        </p>
      </div>
      <div class="flex gap-[24px] font-['roboto_flex']
                  lg:basis-1/4 lg:mx-0">
        <button class="py-[12px] px-[24px] bg-blue text-white rounded-lg font-roboto-flex font-semibold text-[15px] tracking-tightest leading-low
                      hover:scale-105">
          Zobacz zdjęcia
        </button>
        <button class="py-[12px] px-[24px] border border-blue text-blue rounded-lg font-roboto-flex font-semibold text-[15px] tracking-tightest leading-low
                       hover:scale-105">
          Zadzwoń do nas
        </button>
      </div>
    </div>
    <!-- hero images -->
    <div>
      <img src="/assets/hero-back.svg" 
            alt="background image"
            class="absolute right-0 top-0 z-[-10] rotate-90 scale-150
                  lg:right-[70px] md:rotate-0 md:scale-100"/>
      <img src="/assets/hero.png" 
            alt="image of black cars"  
            class="absolute top-[434px] z-[-1] right-0 w-[85%]
                  lg:top-[407px] lg:w-[1064px]" />
    </div>
  </div>
</template>