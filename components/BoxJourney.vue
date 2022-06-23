<template>
  <section class="boxJourneyRoot">
    <div class="firstStepRoot" :class="{ desktop: isDesktop }">
      <p data-aos="draw">
        Cliquez ici pour en savoir plus sur chaque point de trajet et découvrez
        des infos exclusives sur vos commerçants !
      </p>
      <svg
        width="24"
        height="64"
        viewBox="0 0 24 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="firstStep"
        v-if="!isDesktop"
      >
        <path
          d="M3.13408 63.3198C2.58678 63.3938 2.08308 63.0102 2.00903 62.4629L0.802311 53.5441C0.728262 52.9968 1.1119 52.4931 1.6592 52.4191C2.2065 52.345 2.7102 52.7287 2.78425 53.276L3.85689 61.2037L11.7847 60.1311C12.332 60.057 12.8357 60.4407 12.9097 60.988C12.9838 61.5353 12.6001 62.039 12.0528 62.113L3.13408 63.3198ZM21.4639 1.42535C21.4639 0.87306 21.9116 0.425342 22.4639 0.425343C23.0162 0.425344 23.4639 0.873059 23.4639 1.42534L21.4639 1.42535ZM2.20447 61.7229C9.68427 51.9023 14.4611 44.9117 17.3993 36.3698C20.3393 27.823 21.4639 17.6444 21.4639 1.42535L23.4639 1.42534C23.4639 17.7065 22.3406 28.1535 19.2906 37.0203C16.2389 45.892 11.2837 53.1031 3.79553 62.9347L2.20447 61.7229Z"
          fill="#98A0C6"
        />
      </svg>
      <svg
        width="107"
        height="46"
        viewBox="0 0 107 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="firstStep"
        v-else
      >
        <path
          d="M0.0124702 43.3427C-0.0744772 43.8881 0.29717 44.4007 0.842568 44.4876L9.73034 45.9045C10.2757 45.9915 10.7884 45.6198 10.8753 45.0744C10.9622 44.529 10.5906 44.0164 10.0452 43.9294L2.14496 42.67L3.40442 34.7697C3.49137 34.2243 3.11972 33.7117 2.57432 33.6248C2.02893 33.5378 1.51631 33.9095 1.42936 34.4549L0.0124702 43.3427ZM105.98 2.99986C106.532 3.01079 106.989 2.57203 107 2.01985C107.011 1.46768 106.572 1.01118 106.02 1.00025L105.98 2.99986ZM1.58697 44.3097C11.5528 37.0845 27.6462 26.5473 46.2703 17.9199C64.9078 9.28642 85.9975 2.60416 105.98 2.99986L106.02 1.00025C85.6025 0.595947 64.1922 7.41371 45.4297 16.1052C26.6538 24.8028 10.4472 35.4157 0.413032 42.6905L1.58697 44.3097Z"
          stroke="#98A0C6"
          stroke-width="1"
          data-aos="draw"
        />
      </svg>
    </div>
    <div class="mainSteps">
      <div class="secondStepRoot">
        <div class="imageRoot">
          <img
            src="@/assets/img/marqueur.png"
            alt=""
            class="stepPopup"
            @click="test"
          />
          <img src="@/assets/img/boucherie.png" alt="" class="stepImage" />
        </div>
        <svg
          width="49"
          height="1132"
          viewBox="0 0 49 1132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="mainStep"
          v-if="!isDesktop"
        >
          <path
            d="M23.7183 0.555567C23.4728 0.0608234 22.8728 -0.141266 22.378 0.104188C21.8833 0.349642 21.6812 0.94969 21.9267 1.44443L23.7183 0.555567ZM7.00885 1131.71C7.39938 1132.1 8.03254 1132.1 8.42307 1131.71L14.787 1125.34C15.1776 1124.95 15.1776 1124.32 14.787 1123.93C14.3965 1123.54 13.7633 1123.54 13.3728 1123.93L7.71596 1129.59L2.0591 1123.93C1.66858 1123.54 1.03542 1123.54 0.644891 1123.93C0.254367 1124.32 0.254367 1124.95 0.644891 1125.34L7.00885 1131.71ZM21.9267 1.44443C26.0578 9.77128 32.3326 29.2801 37.5721 60.6252C42.8074 91.9448 47 135.026 47 190.461H49C49 134.927 44.8001 91.7348 39.5447 60.2955C34.2937 28.8815 27.9796 9.14488 23.7183 0.555567L21.9267 1.44443ZM47 190.461C47 259.681 35.196 302.374 24.2478 343.634C13.2872 384.941 3.1838 424.816 6.71751 488.241L8.71441 488.13C5.19841 425.022 15.2371 385.391 26.1809 344.147C37.1372 302.857 49 259.954 49 190.461H47ZM6.71751 488.241C10.2473 551.596 20.3369 592.782 29.5216 638.008C38.7023 683.214 47 732.54 47 812.299H49C49 732.37 40.6805 682.906 31.4816 637.61C22.2868 592.334 12.2343 551.308 8.71441 488.13L6.71751 488.241ZM47 812.299C47 892.022 36.9516 926.944 26.8924 964.285C16.8037 1001.74 6.71596 1041.58 6.71596 1131H8.71596C8.71596 1041.79 18.7703 1002.12 28.8236 964.805C38.9064 927.376 49 892.266 49 812.299H47Z"
            fill="#98A0C6"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.1 105.2">
          <path
            class="st0"
            d="M190.9,105.2c-55.1,0-110.1-21-152.1-62.9L-1.7,1.7L0,0l40.6,40.6c40.2,40.2,93.5,62.3,150.3,62.3
	s110.2-22.1,150.3-62.3l38.1-38.1l1.7,1.7L343,42.3C301,84.3,246,105.2,190.9,105.2z"
            data-aos="draw"
            stroke="black"
            fill="none"
            stroke-miterlimit="10"
            stroke-width="18"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.44 74.33">
          <path
            class="squiggle"
            fill="none"
            stroke="#bc85ff"
            stroke-miterlimit="10"
            stroke-width="18"
            data-aos="draw"
            d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27"
          />
        </svg>
      </div>
      <div class="thirdStepRoot">
        <img src="@/assets/img/marqueur.png" alt="" class="stepPopup" />
        <img src="@/assets/img/fromagerie.png" alt="" class="stepImage" />
      </div>
      <div class="fourthStepRoot">
        <img src="@/assets/img/marqueur.png" alt="" class="stepPopup" />
        <img src="@/assets/img/caviste.png" alt="" class="stepImage" />
      </div>
      <div class="fifthStepRoot">
        <img src="@/assets/img/marqueur.png" alt="" class="stepPopup" />
        <img src="@/assets/img/commerce.png" alt="" class="stepImage" />
      </div>
      <div class="finalStepRoot">
        <img src="@/assets/img/succes.png" alt="" class="stepImage" />
      </div>
    </div>
    <transition name="fade">
      <ModalStep @showModal="showModal = $event" v-if="showModal" />
    </transition>
  </section>
</template>

<script lang="ts">
import { isMobile } from "~/utils";

export default defineComponent({
  name: "BoxJourney",
  emits: ["update:showModal"],
  setup() {
    const isDesktop = ref(false);
    const showModal = ref(false);

    const toggleModal = (event: boolean) => {
      showModal.value = event;
    };

    const test = () => {
      showModal.value = true;
    };

    onMounted(() => {
      if (!isMobile()) {
        isDesktop.value = true;
      }
    });

    return { isDesktop, toggleModal, showModal, test };
  },
});
</script>

<style lang="scss" scoped>
.boxJourneyRoot {
  position: relative;

  @include above(small) {
    height: 800px;
  }
  .firstStepRoot {
    position: relative;
    padding: 24px 20px;
    background-color: rgba($primary, 0.2);
    max-width: 240px;
    margin: 0 auto;
    border-radius: 8px;

    p {
      font-family: "Montserrat";
      font-size: 16px;
      font-weight: 500;
    }

    #firstStep {
      right: 50px;
      top: 95%;
      position: absolute;
    }

    &.desktop {
      #firstStep {
        top: 50%;
        position: absolute;
        right: 100%;
      }
    }
  }

  .mainSteps {
    position: relative;
  }

  .secondStepRoot {
    margin: 24px 0;
    position: relative;

    #mainStep {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 95%;
      z-index: 1;
    }
  }

  .thirdStepRoot {
    margin: 160px 0;
  }

  .fourthStepRoot {
    margin-bottom: 160px;
  }

  .stepImage {
    display: block;
    margin: 0 auto;
    object-fit: cover;
    width: 168px;
    z-index: 2;
    position: relative;
  }

  .fifthStepRoot {
    margin-bottom: 60px;
  }

  .finalStepRoot {
    .stepImage {
      z-index: 0;
    }
  }

  .stepPopup {
    display: block;
    margin: 0 auto;
    width: 44px;
    animation: float infinite ease 5s;
    cursor: pointer;
  }
}

@include above(small) {
  .secondStepRoot {
    .imageRoot {
      position: absolute;
      top: -150px;
      left: 26%;
    }
  }

  .thirdStepRoot {
    position: absolute;
    left: 12%;
  }

  .fourthStepRoot {
    position: absolute;
    top: 15%;
    left: 49%;
  }

  .fifthStepRoot {
    position: absolute;
    left: 72%;
    top: -30%;
  }

  .finalStepRoot {
    position: absolute;
    right: 16%;
    top: 250px;
  }
}

[data-aos="draw"] {
  stroke-dasharray: 3473.97705078125;
  stroke-dashoffset: 3473.97705078125;

  &.aos-animate {
    animation: dash 10s ease forwards;
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
