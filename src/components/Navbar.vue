<template>
  <div class="flex flex-row items-center 
              py-[8px] mx-[10px]
              lg:justify-between 
              lg:py-[16px] lg:mx-[120px]">
    <!-- nav left -->
    <div class="flex flex-row">
      <img  src="/assets/logo.svg"  
            alt="cars spot logo"/>
    </div>
    <!-- nav center -->
    <div class="flex justify-end grow
                lg:justify-center">
      <!-- nav mobile -->
      <label  for="mobile-menu"
              class="flex 
                    border rounded-full 
                    p-1 
                    cursor-pointer
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
      <ul class="font-roboto-flex text-[16px] text-white 
                  flex flex-row gap-[8px] justify-around
                  absolute top-[47px] right-0 w-full p-2 bg-blue
                  invisible
                  lg:text-gray-dark lg:static lg:bg-blue/0 lg:justify-normal lg:gap-[24px] lg:w-auto
                  lg:visible 
                  peer-checked:visible">
        <li class="relative group">
          <a href="#">
            Galeria zdjęć
          </a>
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all
                    lg:bg-blue 
                    group-hover:w-full"></span>
        </li>
        <li class="relative group">
          <a href="#">
            FaQ
          </a>
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all
                    lg:bg-blue 
                      group-hover:w-full"></span>
        </li>
      </ul>
    </div>
    <!-- nav right -->      
    <div>
      <button class="font-roboto-flex text-[15px] font-semibold text-off-white tracking-tightest leading-low 
                    flex items-center justify-center w-auto h-auto 
                    ml-[12px] bg-blue rounded-full p-1 
                    lg:w-[158px] lg:h-[47px] 
                    lg:ml-0 lg:rounded-lg lg:py-[12px] lg:px-[24px]">
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