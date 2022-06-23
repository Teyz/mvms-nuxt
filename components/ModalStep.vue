<template>
  <div class="modalStepRoot" ref="target">
    <div class="modalStepContainer">
      <img
        src="@/assets/img/svg/close.svg"
        alt=""
        class="closeIcon"
        @click="closeModal"
      />
      <div class="titleRoot">Épicerie</div>
      <div class="modalStepContent">
        <div class="modalStepMain">
          <div class="modalStepHeader">
            <img
              src="@/assets/img/avatar-cityzen-fond-blanc.png"
              alt=""
              class="avatar"
            />
            <div class="modalReviews">
              <h2>Goûts Malins</h2>
              <p>...</p>
              <img src="@/assets/img/reviews.png" alt="" class="reviews" />
              <img
                src="@/assets/img/reviews-left.png"
                alt=""
                class="reviews-left"
              />
            </div>
            <button class="button">Voir plus de produits</button>
          </div>
          <div class="imageRoot">
            <img
              src="@/assets/img/etalage-saucissons.png"
              alt=""
              class="saucissonImage"
            />
            <img
              src="@/assets/img/etalage-saucissons-planche.png"
              alt=""
              class="saucissonImage second"
            />
          </div>
          <p class="description">
            Les box personnalisées sont une nouvelle façon de vivre une
            expérience avec vos commerçants. C’est un moyen pour les
            consommateurs de découvrir de nouveaux produits et de se sentir plus
            proches de leurs marques préférées. Les box personnalisées offrent
            également aux commerçants une plateforme pour présenter leurs
            produits d’une manière unique et engageante. Les boxes
            personnalisées sont une nouvelle façon de vivre une expérience avec
            vos commerçants. Elles permettent aux consommateurs de recevoir des
            produits et services sur mesure, selon leurs besoins et goûts.
          </p>
        </div>
        <div class="divider"></div>
        <div class="modalStepMain modalStepDescription">
          <p class="description">Dans votre box</p>
          <img
            src="@/assets/img/saucissons-au-choix.png"
            alt=""
            class="saucissonImage"
          />
          <div class="title">
            <img src="@/assets/img/svg/home.svg" alt="" />
            <p>Goûts Malins</p>
          </div>
          <h3>Saucissons au choix</h3>
          <p class="tag">Saucisson</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { disableScroll } from "@/utils/utils";
import { onClickOutside } from "@vueuse/core";
export default defineComponent({
  name: "ModalStep",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["showModal", "update:showModal"],
  setup(props, { emit }) {
    const target = ref(null);
    onClickOutside(target, () => {
      disableScroll(false);
      emit("showModal", false);
    });

    const closeModal = () => {
      disableScroll(false);
      emit("showModal", false);
    };

    return { closeModal, target };
  },
});
</script>

<style lang="scss" scoped>
.modalStepRoot {
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
  border-radius: 8px;
  z-index: 10;
  padding: 98px 0 32px 0;
  width: 335px;
  max-width: 100%;
  height: 100%;
  box-shadow: 0px 1px 16px rgba(29, 33, 57, 0.16);

  .modalStepContainer {
    overflow: scroll;
    height: 100%;
  }

  .titleRoot {
    display: none;
  }

  @include above(small) {
    padding: 24px 0 0 0;
    width: 1000px;
    max-width: 100%;
    top: 50%;

    .titleRoot {
      padding: 0 0 16px 16px;
      border-bottom: 1px solid #e2e6f5;
      display: block;
    }

    .button {
      max-width: 270px;
    }

    .modalReviews {
      margin-left: 32px;
      p {
        text-align: left;
      }
    }
    .imageRoot {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .modalStepHeader {
    overflow: visible;
    @include above(small) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 16px;
    }
  }

  .closeIcon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .modalStepContent {
    @include above(small) {
      display: flex;
    }
  }

  .modalStepMain {
    padding: 0 16px;
  }

  .avatar {
    object-fit: cover;
    width: 115px;
    height: 115px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -3%;

    @include above(small) {
      object-fit: cover;
      width: 133px;
      height: 100%;
      position: relative;
      display: block;
      left: inherit;
      top: inherit;
      transform: inherit;
    }
  }

  h2 {
    color: $third;
    @include typo-title;
    text-align: center;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: #8797a6;
    text-align: center;
  }

  .reviews-left {
    object-fit: contain;
    width: 172px;
    margin-top: 16px;
    display: none;

    @include above(small) {
      display: block;
    }
  }

  .reviews {
    object-fit: contain;
    width: 172px;
    margin: 16px auto;
    display: block;

    @include above(small) {
      display: none;
    }
  }

  .saucissonImage {
    object-fit: contain;
    width: 100%;
    margin: 24px 0 16px 0;
    border-radius: 8px;

    @include above(small) {
      object-fit: contain;
      width: 315px;
      height: 236px;
      border-radius: 8px;
    }
  }

  .description {
    color: #8797a6;
    @include typo-text;
    font-size: 16px;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @include above(small) {
      margin: 24px 0;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #e2e6f5;
    margin: 16px 0;

    @include above(small) {
      display: none;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      color: #8797a6;
      @include typo-text;
      font-size: 14px;
      margin-left: 8px;
    }
  }

  h3 {
    color: $third;
    @include typo-title;
    font-size: 26px;
    margin: 12px 0;
  }

  .tag {
    color: $third;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }

  .modalStepDescription {
    @include above(small) {
      border-left: 1px solid #e2e6f5;

      p {
        margin-bottom: 0;
      }

      .saucissonImage {
        margin: 0;
        max-width: 273px;
      }
    }
  }

  .second {
    display: none;

    @include above(small) {
      display: block;
    }
  }
}
</style>
