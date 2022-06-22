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
        <div class="inputName">
          <input type="text" placeholder="Nom*" />
          <input type="text" placeholder="Prénom*" />
        </div>
        <textarea
          rows=""
          cols=""
          placeholder="Pour vous aider :
- Expliquez-nous pourquoi vous avez mis cette note ?
- Qu’avez-vous préféré de cette boutique ?
- La recommanderiez-vous à vos proches ?"
        ></textarea>
        <button class="button">Publier votre avis</button>
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
  emits: ["showModal", "update:showModal"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("showModal", false);
    };

    return { closeModal };
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
  padding: 98px 0 32px 0;
  max-width: 335px;
  box-shadow: 0px 1px 16px rgba(29, 33, 57, 0.16);

  @include above(small) {
    padding: 24px 0 0 0;
    max-width: 1015px;

    .button {
      max-width: 270px;
    }
  }
  .modalForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > input {
      margin-bottom: 20px;
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
  input {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #b2b8d4;
    border-radius: 8px;
  }
  .inputName {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  textarea {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #b2b8d4;
    border-radius: 8px;
    width: 100%;
    height: 100px;
    margin-bottom: 16px;
  }
}
</style>
