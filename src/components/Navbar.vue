<template>
  <div class="flex flex-row items-center py-[8px] mx-[10px]
              lg:justify-between lg:py-[16px] lg:mx-[120px]">
    <!-- nav left -->
    <div class="flex flex-row">
      <img  src="/assets/logo.svg"  
            alt="cars spot logo"/>
    </div>
    <!-- nav center -->
    <div class="grow flex justify-end
                lg:justify-center">
      <!-- nav mobile -->
      <label  for="mobile-menu"
              class="cursor-pointer border rounded-full p-1 flex
                    lg:hidden 
                    hover:scale-105">
          <span class="material-symbols-outlined">
            menu
          </span>
      </label>
      <input  class="peer hidden" 
              type="checkbox"
              id="mobile-menu" />
      <!-- links -->
      <ul class="flex flex-row gap-[8px] font-roboto-flex text-[16px] justify-around absolute top-[47px] right-0 text-white p-2 w-full bg-blue
                lg:w-auto lg:static lg:bg-blue/0 lg:text-gray-dark lg:justify-normal lg:gap-[24px] lg:visible
                invisible peer-checked:visible">
        <li class="relative group">
          <a href="#">
            Galeria zdjęć
          </a>
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 transition-all bg-white 
                    lg:bg-blue 
                    group-hover:w-full"></span>
        </li>
        <li class="relative group">
          <a href="#">
            FaQ
          </a>
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 transition-all bg-white 
                    lg:bg-blue 
                      group-hover:w-full"></span>
        </li>
      </ul>
    </div>
    <!-- nav right -->
    <div>
      <button class="w-auto h-auto flex items-center justify-center ml-[12px] bg-blue text-off-white rounded-full p-1 font-roboto-flex font-semibold text-[15px] tracking-tightest leading-low
                    lg:py-[12px] lg:px-[24px] lg:w-[158px] lg:h-[47px] lg:ml-0 lg:rounded-lg">
        <span class="hidden 
                    lg:block
                    hover:scale-105">
                      Zadzwoń do nas
        </span>
        <span class="material-symbols-outlined 
                    lg:hidden
                    hover:scale-105">
                      call
        </span> 
      </button>
    </div>
  </div>
</template>