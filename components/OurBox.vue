<template>
  <section class="ourBoxRoot">
    <h3>Détails de votre box</h3>
    <div class="ourBoxMain">
      <div class="ourBoxItem" v-for="box in ourBox" :key="box.productBoutique">
        <h2>{{ box.productBoutique }}</h2>
        <p>{{ box.productRegion }}</p>
        <div class="ourBoxDetails">
          <img :src="imgUrl(box.productImage)" />
          <div class="ourBoxContent">
            <h3>{{ box.productTitle }}</h3>
            <p>{{ box.productWeight ?? "..." }}</p>
            <p class="productQte">Qté {{ box.productQuantity }}</p>
          </div>
        </div>
      </div>
      <div class="subTotal">
        <div>
          <p>Sous-total</p>
          <p class="bold">60,00 €</p>
        </div>
        <div>
          <p>Livraison</p>
          <p class="bold">Gratuite</p>
        </div>
        <div>
          <p>Réduction</p>
          <p class="bold">-4,00 €</p>
        </div>
      </div>
      <div class="total">
        <p>Total TTC</p>
        <p class="big">56,00 €</p>
      </div>
    </div>
  </section>
</template>

<script>
import getOurBox from "./ourBoxList";
import bouteille from "../assets/img/bouteille-de-vin.png";
import saucisson from "../assets/img/saucissons-au-choix.png";
import foie from "../assets/img/foie-gras-de-canard.png";
import emmental from "../assets/img/emmental.png";

export default defineComponent({
  name: "OurBox",
  setup() {
    const ourBox = getOurBox;

    const imgUrl = (name) => {
      if (name === "bouteille-de-vin") {
        return bouteille;
      } else if (name === "saucissons-au-choix") {
        return saucisson;
      } else if (name === "foie-gras-de-canard") {
        return foie;
      } else {
        return emmental;
      }
    };

    return { ourBox, imgUrl };
  },
});
</script>

<style lang="scss" scoped>
.ourBoxRoot {
  max-width: 335px;
  position: relative;
  margin: 64px auto;

  &:before {
    content: "";
    background-image: url("../assets/img/ourBox.png");
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 314px;
    height: 206px;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;

    @include above(small) {
      width: 563px;
      height: 443px;
      top: -38%;
      z-index: 1;
    }
  }

  @include above(small) {
    max-width: 1125px;
  }

  & > h3 {
    margin: 0 0 196px 16px;
    @include typo-subtitle;
    color: $third;
    z-index: 2;

    @include above(small) {
      margin: 0 0 32px 16px;
    }
  }
  .ourBoxMain {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px 32px;

    .ourBoxItem {
      margin-bottom: 32px;

      h2 {
        @include typo-title;
        font-size: 16px;
      }

      p {
        @include typo-subtext;
        color: #8797a6;
      }
    }

    .ourBoxDetails {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 8px;

      img {
        object-fit: contain;
        width: 100px;

        @include above(small) {
          object-fit: contain;
          width: 215px;
          height: 88px;
        }
      }
    }

    .ourBoxContent {
      @include above(small) {
        margin-left: 48px;
      }
      margin-left: 12px;

      h3 {
        @include typo-subtitle;
      }

      p {
        margin: 8px 0;
      }

      .productQte {
        color: $third;
      }
    }
  }

  .subTotal {
    border-top: 1px solid #e2e6f5;
    padding: 16px 0;
    border-bottom: 1px solid #e2e6f5;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 8px 0;

      p {
        @include typo-text-mobile;

        &.bold {
          font-weight: 600;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    p {
      @include typo-subtitle;

      &.big {
        font-size: 20px;
      }
    }
  }
}
</style>
