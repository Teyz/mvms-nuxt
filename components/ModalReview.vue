<template>
  <div class="modalReviewRoot">
    <img
      src="../assets/img/svg/close.svg"
      alt=""
      class="closeIcon"
      @click="closeModal"
    />
    <div class="modalReviewContent">
      <img
        src="../assets/img/avatar-cityzen-fond-blanc.png"
        alt=""
        class="avatar"
      />
      <h2>Qu’avez-vous pensé de <span>Goûts Malins</span> ?</h2>
      <hr class="orangeLine" />
      <div class="modalForm">
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
            <input
              id="name"
              type="text"
              v-model="name"
              placeholder="ex: Rigaud"
            />
          </div>
          <div class="firstnameDiv">
            <label for="firstname">Prénom*</label>
            <input
              id="firstname"
              type="text"
              v-model="firstname"
              placeholder="ex: Tom"
            />
          </div>
        </div>
        <div>
          <label for="review">Votre avis*</label>
          <textarea
            id="review"
            v-model="review"
            rows=""
            cols=""
            placeholder="Pour vous aider :
- Expliquez-nous pourquoi vous avez mis cette note ?
- Qu’avez-vous préféré de cette boutique ?
- La recommanderiez-vous à vos proches ?"
          ></textarea>
        </div>
        <div class="rgpd">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"
            >J’ai lu et j’accepte les règles de publication des avis.*</label
          >
        </div>
        <button class="button addReview" @click="addReview">
          Publier votre avis
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "modalReview",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["showModal", "update:showModal", "reloadReview"],

  setup(props, { emit }) {
    const client = useSupabaseClient();
    const name = ref("");
    const firstname = ref("");
    const review = ref("");
    const rating = ref(0);

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
    };

    const closeModal = () => {
      emit("showModal", false);
    };

    return {
      closeModal,
      addReview,
      name,
      firstname,
      rating,
      review,
    };
  },
});
</script>

<style lang="scss" scoped>
.modalReviewRoot {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  background-color: white;
  border-radius: 8px;
  position: relative;
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
      margin-bottom: 16px;
    }
    label {
      font-weight: 600;
    }
    .rgpd {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
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
