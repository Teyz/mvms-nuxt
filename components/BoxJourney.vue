<template>
  <section class="boxJourneyRoot">
    <div class="firstStepRoot">
      <p>
        Clickez ici pour en savoir plus sur chaque point de trajet et découvrez
        des infos exclusives sur vos commerçants !
      </p>
      <svg
        width="24"
        height="64"
        viewBox="0 0 24 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="firstStep"
      >
        <path
          d="M3.13408 63.3198C2.58678 63.3938 2.08308 63.0102 2.00903 62.4629L0.802311 53.5441C0.728262 52.9968 1.1119 52.4931 1.6592 52.4191C2.2065 52.345 2.7102 52.7287 2.78425 53.276L3.85689 61.2037L11.7847 60.1311C12.332 60.057 12.8357 60.4407 12.9097 60.988C12.9838 61.5353 12.6001 62.039 12.0528 62.113L3.13408 63.3198ZM21.4639 1.42535C21.4639 0.87306 21.9116 0.425342 22.4639 0.425343C23.0162 0.425344 23.4639 0.873059 23.4639 1.42534L21.4639 1.42535ZM2.20447 61.7229C9.68427 51.9023 14.4611 44.9117 17.3993 36.3698C20.3393 27.823 21.4639 17.6444 21.4639 1.42535L23.4639 1.42534C23.4639 17.7065 22.3406 28.1535 19.2906 37.0203C16.2389 45.892 11.2837 53.1031 3.79553 62.9347L2.20447 61.7229Z"
          fill="#98A0C6"
        />
      </svg>
    </div>
    <div class="secondStepRoot">
      <img src="../assets/img/marqueur.png" alt="" class="stepPopup" />
      <img src="../assets/img/boucherie.png" alt="" class="secondStepImage" />
      <svg
        width="49"
        height="1132"
        viewBox="0 0 49 1132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="mainStep"
      >
        <path
          d="M23.7183 0.555567C23.4728 0.0608234 22.8728 -0.141266 22.378 0.104188C21.8833 0.349642 21.6812 0.94969 21.9267 1.44443L23.7183 0.555567ZM7.00885 1131.71C7.39938 1132.1 8.03254 1132.1 8.42307 1131.71L14.787 1125.34C15.1776 1124.95 15.1776 1124.32 14.787 1123.93C14.3965 1123.54 13.7633 1123.54 13.3728 1123.93L7.71596 1129.59L2.0591 1123.93C1.66858 1123.54 1.03542 1123.54 0.644891 1123.93C0.254367 1124.32 0.254367 1124.95 0.644891 1125.34L7.00885 1131.71ZM21.9267 1.44443C26.0578 9.77128 32.3326 29.2801 37.5721 60.6252C42.8074 91.9448 47 135.026 47 190.461H49C49 134.927 44.8001 91.7348 39.5447 60.2955C34.2937 28.8815 27.9796 9.14488 23.7183 0.555567L21.9267 1.44443ZM47 190.461C47 259.681 35.196 302.374 24.2478 343.634C13.2872 384.941 3.1838 424.816 6.71751 488.241L8.71441 488.13C5.19841 425.022 15.2371 385.391 26.1809 344.147C37.1372 302.857 49 259.954 49 190.461H47ZM6.71751 488.241C10.2473 551.596 20.3369 592.782 29.5216 638.008C38.7023 683.214 47 732.54 47 812.299H49C49 732.37 40.6805 682.906 31.4816 637.61C22.2868 592.334 12.2343 551.308 8.71441 488.13L6.71751 488.241ZM47 812.299C47 892.022 36.9516 926.944 26.8924 964.285C16.8037 1001.74 6.71596 1041.58 6.71596 1131H8.71596C8.71596 1041.79 18.7703 1002.12 28.8236 964.805C38.9064 927.376 49 892.266 49 812.299H47Z"
          fill="#98A0C6"
        />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.boxJourneyRoot {
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
  }

  .secondStepRoot {
    margin: 24px 0;
    position: relative;
    .secondStepImage {
      display: block;
      margin: 0 auto;
      object-fit: cover;
      width: 168px;
    }

    #mainStep {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 95%;
    }
  }

  .stepPopup {
    display: block;
    margin: 0 auto;
    width: 44px;
    animation: float infinite ease 5s;
  }
}
</style>
