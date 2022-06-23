<template>
  <div class="modalReviewRoot" ref="target">
    <img
      src="@/assets/img/svg/close.svg"
      alt=""
      class="closeIcon"
      @click="closeModal"
    />
    <div class="modalReviewContent">
      <img
        src="@/assets/img/avatar-cityzen-fond-blanc.png"
        alt=""
        class="avatar"
      />
      <h2>Qu’avez-vous pensé de <span>Goûts Malins</span> ?</h2>
      <hr class="orangeLine" />
      <VForm @submit="addReview" class="modalForm">
        <div class="stars">
          <StarsRatings
            v-bind:show-rating="false"
            v-model:rating="rating"
            star-size="40"
          ></StarsRatings>
        </div>
        <div class="inputName">
          <div>
            <label for="name">Nom*</label>
            <VField
              id="name"
              type="text"
              as="input"
              rules="required"
              name="name"
              v-model="name"
              placeholder="ex: Rigaud"
            />
            <VErrorMessage name="name"></VErrorMessage>
          </div>
          <div class="firstnameDiv">
            <label for="firstname">Prénom*</label>
            <VField
              id="firstname"
              type="text"
              as="input"
              rules="required"
              name="firstname"
              v-model="firstname"
              placeholder="ex: Tom"
            />
            <VErrorMessage name="firstname"></VErrorMessage>
          </div>
        </div>
        <div>
          <label for="review">Votre avis*</label>
          <VField
            id="review"
            name="review"
            rules="required"
            v-model="review"
            as="textarea"
            rows=""
            cols=""
            placeholder="Pour vous aider :
- Expliquez-nous pourquoi vous avez mis cette note ?
- Qu’avez-vous préféré de cette boutique ?
- La recommanderiez-vous à vos proches ?"
          />
          <VErrorMessage name="review"></VErrorMessage>
        </div>
        <div class="rgpd">
          <VField
            id="checkbox"
            name="checkbox"
            rules="required"
            as="input"
            type="checkbox"
            value="false"
            unchecked-value="false"
          />
          <label for="checkbox"
            >J’ai lu et j’accepte les règles de publication des avis.*</label
          >
          <VErrorMessage name="checkbox"></VErrorMessage>
        </div>
        <button class="button addReview">Publier votre avis</button>
      </VForm>
    </div>
  </div>
</template>

<script lang="ts">
import { disableScroll } from "@/utils/utils";
import { onClickOutside } from "@vueuse/core";
export default defineComponent({
  name: "modalReview",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["showModal", "update:showModal", "reloadReview"],
  data() {
    return {
      validations: { required: true },
    };
  },
  setup(props, { emit }) {
    const client = useSupabaseClient();
    const name = ref("");
    const firstname = ref("");
    const review = ref("");
    const rating = ref(0);

    const target = ref(null);
    onClickOutside(target, () => {
      disableScroll(false);
      emit("showModal", false);
    });

    const addReview = async () => {
      const { data, error } = await client.from("reviews").insert([
        {
          name: name.value,
          firstname: firstname.value,
          review: review.value,
          rating: rating.value,
        },
      ]);
      emit("reloadReview");
      emit("showModal", false);
      disableScroll(false);
    };

    const closeModal = () => {
      disableScroll(false);
      emit("showModal", false);
    };

    return {
      closeModal,
      addReview,
      name,
      firstname,
      rating,
      review,
      target,
    };
  },
});
</script>

<style lang="scss" scoped>
.modalReviewRoot {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
  border-radius: 8px;
  z-index: 10;
  padding: 24px 0 0 0;
  max-width: 335px;
  box-shadow: 0px 1px 16px rgba(29, 33, 57, 0.16);

  @include above(small) {
    max-width: 1015px;
    .button {
      max-width: 270px;
    }
  }

  .closeIcon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .modalReviewContent {
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .avatar {
    object-fit: cover;
    width: 90px;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
  }
  .orangeLine {
    width: 80px;
    border: 1px solid #de8e00;
    margin: 25px auto;
  }
  h2 {
    color: $third;
    @include typo-title;
    text-align: center;
    max-width: 350px;
    margin: 0 auto;
    span {
      color: #de8e00;
    }
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: #8797a6;
    text-align: center;
  }

  h3 {
    color: $third;
    @include typo-title;
    font-size: 26px;
    margin: 12px 0;
  }
  .stars {
    margin: 0 auto 25px auto;
  }

  .modalForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > input {
      margin-bottom: 20px;
    }

    input {
      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #b2b8d4;
      border-radius: 8px;
      padding-left: 10px;
    }
    .inputName {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 16px;

        input {
          box-sizing: border-box;
          background: #ffffff;
          border: 1px solid #b2b8d4;
          border-radius: 8px;
          width: 260px;
          height: 40px;
        }
      }
      @include above(small) {
        .firstnameDiv {
          margin-left: 10px;
        }
      }
    }
    textarea {
      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #b2b8d4;
      border-radius: 8px;
      width: 100%;
      height: 100px;
    }
    label {
      font-weight: 600;
    }
    .rgpd {
      display: flex;
      justify-content: flex-start;
      margin: 20px 0;
      input {
        margin-right: 15px;
      }
    }
    .addReview {
      margin: 0 auto;
    }
  }
}
</style>
