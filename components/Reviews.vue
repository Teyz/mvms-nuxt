<template>
  <section class="reviewSection">
    <h2>Partagez-nous <span>votre avis</span></h2>
    <hr class="orangeLine" />
    <div class="reviewHeader">
      <div class="starHeader">
        <div class="stars">
          <span>{{ average.toFixed(1) }}/5</span>
          <span class="starsIcons">
            <StarsRatings
              v-bind:show-rating="false"
              v-bind:rating="average.toFixed(0)"
              v-bind:read-only="true"
              star-size="20"
            ></StarsRatings
          ></span>
        </div>
        <p class="starsAverage">
          Note globale sur {{ reviews?.length }} avis clients
        </p>
      </div>
      <button
        class="button addReview"
        @click="
          () => {
            showModal = true;
            disableScroll(true);
          }
        "
      >
        Laisser un avis
      </button>
      <transition name="fade">
        <ModalReview
          @reloadReview="getReviews"
          @showModal="showModal = $event"
          v-if="showModal"
        />
      </transition>
    </div>
    <div
      v-for="review in reviews?.slice(0, 3)"
      :key="review?.id"
      class="review"
    >
      <img src="@/assets/img/avatar-cityzen-fond-bleu.png" alt="" />
      <div class="reviewContent">
        <div class="reviewRightRow">
          <div>
            <span>{{ review.firstname }} {{ review.name }}</span>
            <span class="starsIcons">
              <StarsRatings
                v-bind:show-rating="false"
                v-bind:rating="review.rating"
                v-bind:read-only="true"
                star-size="20"
              ></StarsRatings>
            </span>
          </div>
          <span>{{ new Date(review.created_at).toLocaleDateString() }}</span>
        </div>
        <p class="reviewText">{{ review.review }}</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { disableScroll } from "@/utils/utils";
export default defineComponent({
  name: "Reviews",
  emits: ["update:showModal"],
  setup() {
    const client = useSupabaseClient();
    const showModal = ref(false);

    const average = ref(0);
    const reviews = ref();

    const toggleModal = (event: boolean) => {
      showModal.value = event;
    };

    const getReviews = async () => {
      await useAsyncData("reviews", async () => {
        const { data } = await client
          .from("reviews")
          .select("*")
          .order("created_at", { ascending: false });
        reviews.value = data;
        averageRating();
      });
    };

    const averageRating = () => {
      average.value =
        reviews?.value.reduce((sum, review) => sum + review.rating, 0) /
        reviews.value.length;
    };

    onBeforeMount(async () => {
      await getReviews();
    });

    return {
      reviews,
      average,
      getReviews,
      toggleModal,
      showModal,
      disableScroll,
    };
  },
});
</script>
<style lang="scss" scoped>
.orangeLine {
  width: 80px;
  border: 1px solid #de8e00;
}
.reviewSection {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 24px;
  .reviewHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;
    flex-wrap: wrap;
    .starHeader {
      width: 100%;
      text-align: center;
      @include above(small) {
        width: auto;
        text-align: initial;
      }
    }
    .stars {
      @include typo-title;
    }
    .starsAverage {
      color: #8797a6;
    }
    .addReview {
      width: auto;
      font-size: 16px;
      margin: 0 auto;
      padding: 10px 24px;
      @include above(small) {
        margin: 0;
      }
    }
  }
  .review {
    background: #ffffff;
    box-shadow: 0px 5px 24px rgba(29, 33, 57, 0.08);
    border-radius: 8px;
    display: flex;
    width: 100%;
    padding: 12px 17px 14px 16px;
    @include above(small) {
      padding: 12px 18px 12px 33px;
    }
    margin-bottom: 16px;
    img {
      max-width: 40px;
      margin-right: 15px;
      height: 100%;
      @include above(small) {
        max-width: 80px;
        margin-right: 40px;
      }
    }
    .reviewContent {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .reviewRightRow {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .reviewText {
      color: #8797a6;
      font-size: 12px;
    }
  }
}
h2 > span {
  color: $primary;
}
</style>
