<script>
export default {
    data () {
        return {
            images: [
                {
                    index: 0,
                    alt: "photo of alfa romeo",
                    src: "assets/alfa-romeo.png"
                },
                {
                    index: 1,
                    alt: "photo of masseratti",
                    src: "assets/masseratti.png"
                },
                {
                    index: 2,
                    alt: "photo of audi",
                    src:  "assets/audi.png"
                },
                {
                    index: 3,
                    alt: "photo of black car",
                    src:  "assets/pexels-maria-geller-801267-2127022-1-1024x683.jpg"
                },
                {
                    index: 4,
                    alt: "photo of blurred cars lights",
                    src:  "assets/pexels-pixabay-315938.jpg"
                }   
            ],
            translateValue: 0,
            width: ''
        };
    },
    mounted() {
        this.getWidth();
    },
    methods: {  
        getWidth(){
            const innerWidth = this.$refs.img.scrollWidth
            const totalCards = this.images.length
            this.width = innerWidth / totalCards
        },

        next(index) {
            window.onresize = this.getWidth();
            switch(index) {
                case 0:
                    this.translateValue = 0
                    break;
                case 1:
                    this.translateValue = this.width
                    break;
                case 2:
                    this.translateValue = this.width *2
                    break;
                case 3:
                    this.translateValue = this.width *3
                    break;
                case 4:
                    this.translateValue = this.width *4
                    break;
            }
        },
    }   
}
</script>

<template>
    <div>
        <div class="mx-[40px] mt-[262px] pt-[80px]
                    lg:mx-[88px] lg:mt-[362px]">
            <div class="font-roboto-condensend text-[21.5px] text-blue">
                    Prezentacja firmy
            </div>
            <div class="font-bebas-neue text-[32px] leading-high 
                        mb-[24px]
                        lg:text-[40px]">
                    Zobacz naszą galerię zdjęć
            </div>
            
            <div class="font-roboto-flex text-[15px] tracking-tightest leadind-low text-center
                        flex flex-row gap-[6px] 
                        lg:gap-[48px]">
                <button
                    class="font-semibold text-blue 
                            border-b">
                    Samochody osobowe
                </button>
                <button
                    class="hover:font-semibold hover:text-blue hover:border-b">
                    Samochody dostawcze
            </button>
            </div>
        </div>
        <!-- photo gallery carousel -->
        <div class="flex flex-col"> 
            <div class="overflow-hidden 
                        ml-[44px]
                        lg:ml-[88px]">
                <div class="gap-[64px] 
                            pt-[80px] pb-[48px]
                            whitespace-nowrap
                            transition-transform"
                    ref="img"
                    :style="{transform: `translateX(-${translateValue}px)`}">

                    <div class="inline-flex h-[223px] w-[300px] mr-6 
                                            lg:h-[446px] lg:w-[600px] lg:mr-16 "
                            v-for="image in images" 
                            :key="image.alt"
                            >
                        <img :src="image.src" 
                            class="object-cover" 
                            :alt="image.alt" />
                    </div>
                </div>
            </div>
            <!-- photo gallery navigation -->
            <div class="flex self-center gap-2.5 
                        mb-[88px] ">
                <div class="flex items-center">
                    <input type="radio" name="dots" id="dot-1" class="hidden peer" checked @click="next(0)"/>
                    <label for="dot-1" class="w-2 h-2 rounded-full bg-gray-light peer-checked:bg-blue"></label>
                </div>
                <div class="flex items-center">
                    <input type="radio" name="dots" id="dot-2" class="hidden peer" @click="next(1)"/>
                    <label for="dot-2" class="w-2 h-2 rounded-full bg-gray-light peer-checked:bg-blue"></label>
                </div>
                <div class="flex items-center">
                    <input type="radio" name="dots" id="dot-3" class="hidden peer" @click="next(2)"/>
                    <label for="dot-3" class="w-2 h-2 rounded-full bg-gray-light peer-checked:bg-blue"></label>
                </div>
                <div class="flex items-center">
                    <input type="radio" name="dots" id="dot-4" class="hidden peer" @click="next(3)"/>
                    <label for="dot-4" class="w-2 h-2 rounded-full bg-gray-light peer-checked:bg-blue"></label>
                </div>
                <div class="flex items-center">
                    <input type="radio" name="dots" id="dot-5" class="hidden peer" @click="next(4)"/>
                    <label for="dot-5" class="w-2 h-2 rounded-full bg-gray-light peer-checked:bg-blue"></label>
                </div>
            </div>
        </div>
    </div>
</template>