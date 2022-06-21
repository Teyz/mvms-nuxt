<template>
  <section class="heroRoot">
    <h1>Une nouvelle façon de vivre une expérience avec vos commerçants</h1>
    <div class="heroText">
      <p>
        Découvrez le trajet effectué par votre facteur, les commerçants des
        différents points de collecte et apprenez-en plus sur la manière dont
        celui-ci a assemblé votre box !
      </p>
      <img
        src="../assets/img/livraison.png"
        alt="Ma ville mon shopping livraison à vélo"
      />
    </div>
    <div class="buttonRoot">
      <button class="btn">Découvrir</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.heroRoot {
  padding: 42px 24px;
}
h1 {
  color: $primary;
  @include typo-title;
  text-align: center;

  @include above(small) {
    max-width: 900px;
    margin: 0 auto;
  }
}
.heroText {
  margin: 56px 0 24px 0;
  p {
    text-align: center;
    margin: 0 auto;
    max-width: 265px;
    @include typo-text-mobile;
    position: relative;
    z-index: 1;

    @include above(small) {
      @include typo-text;
      max-width: 730px;
      margin: 0 auto;
    }
  }
  img {
    z-index: -1;
    display: block;
    margin: 0 auto;
    transform: translateY(-10%);
    object-fit: cover;
    width: 252px;

    @include above(small) {
      width: 480px;
    }
  }

  button {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
  }
}

.buttonRoot {
  text-align: center;
}
</style>
