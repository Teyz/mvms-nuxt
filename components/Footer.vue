<template>
  <footer id="footer">
    <div
      id="container-newsletter"
      class="background-blue-very-light container-newsletter"
      data-cy="wrapper-newsletter"
    >
      <div class="font-12 text-center mb-2 orange uppercase semi-bold">
        La newsletter
      </div>
      <div class="semi-bold font-22 mb-4 line-26 text-center blue-navy">
        <i>Et avec ceci</i>, vous voudrez sûrement un peu plus d'actu' et de
        bons plans ?<br />Abonnez-vous à notre newsletter pour tout savoir de la
        vie locale !
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-5 mb-3 mb-md-1" style="max-width: 526px">
          <form
            id="form-newsletter"
            class="mb-3"
            action="/fr/email_newsletters"
            accept-charset="UTF-8"
            data-remote="true"
            method="post"
          >
            <input name="utf8" type="hidden" value="✓" /><input
              type="hidden"
              name="authenticity_token"
              value="DBdXatrD/9TABnsogpcSI06G74/g38idimN3OSuv0VwLJ98ylxOQszNtuLpud41zk+G/XJOLQ8gCWAn7u10ZZQ=="
            />
            <div class="input-group">
              <input
                placeholder="Votre e-mail"
                class="form-control"
                type="email"
                name="email_newsletter[email]"
              />
              <input
                type="submit"
                name="commit"
                value="Je m'abonne"
                class="btn btn-primary"
                data-disable-with="Je m'abonne"
              />
            </div>
            <div id="error" class="red-rose font-10"></div>
          </form>
          <p class="mb-0 text-center font-10 grey-hanoi fw-light">
            Conformément à la réglementation relative à la protection des
            données à caractère personnel, E-SY COM traite vos données en
            qualité de responsable de traitement à des fins de gestion de la
            newsletter. Vous disposez d'un droit d'accès, de rectification,
            d'opposition, de limitation, de portabilité et d'effacement des
            données. Ces droits peuvent être exercés en écrivant à l'adresse
            suivante :
            <a href="mailto:rgpd@mavillemonshopping.fr"
              >rgpd@mavillemonshopping.fr</a
            >. Pour plus d'informations sur le traitement de vos données
            personnelles,
            <a target="_blank" href="/fr/politique-sur-les-cookies"
              >consultez la Politique de confidentialité</a
            >
            de mavillemonshopping.fr.
          </p>
        </div>
      </div>
    </div>

    <div class="container-xxl py-4 px-3">
      <div
        class="d-flex flex-column flex-md-row justify-content-md-around justify-content-xl-evenly"
      >
        <div class="mb-4 mb-md-0 px-0 px-md-2" data-cy="wrapper-about">
          <div class="mb-2 font-18 fw-bolder">À propos</div>
          <ul class="grey-typo">
            <li><a href="/fr/about_us">Qui sommes-nous ?</a></li>
            <li>
              <a target="_blank" href="https://blog.mavillemonshopping.fr/"
                >Blog</a
              >
            </li>
          </ul>

          <ul
            class="icons-social d-flex mt-3 mb-3"
            data-cy="ul-social-networks"
          >
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/mavillemonshopping.fr/"
              >
                <!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  style="enable-background: new 0 0 32 32"
                  xml:space="preserve"
                  height="20"
                  width="20"
                >
                  <path
                    class="st0"
                    d="M7,5C5.9,5,5,5.9,5,7v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H7z M7,7h18v18h-5.2v-6.8h2.6  l0.4-3h-3v-1.9c0-0.9,0.2-1.5,1.5-1.5h1.6V9.1c-0.3,0-1.2-0.1-2.3-0.1c-2.3,0-3.9,1.4-3.9,4v2.2h-2.6v3h2.6V25H7V7z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/mavillemonshopping/?hl=fr"
              >
                <!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  style="enable-background: new 0 0 32 32"
                  xml:space="preserve"
                  height="20"
                  width="20"
                >
                  <path
                    class="st0"
                    d="M11.5,5C7.9,5,5,7.9,5,11.5v9.1c0,3.6,2.9,6.5,6.5,6.5h9.1c3.6,0,6.5-2.9,6.5-6.5v-9.1C27,7.9,24.1,5,20.5,5  H11.5z M11.5,7h9.1C23,7,25,9,25,11.5v9.1c0,2.5-2,4.5-4.5,4.5h-9.1C9,25,7,23,7,20.5v-9.1C7,9,9,7,11.5,7z M21.9,9.2  c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9S22.4,9.2,21.9,9.2z M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6  S19.3,10,16,10z M16,12c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S13.8,12,16,12z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/mavillemonshop?lang=fr"
              >
                <!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  style="enable-background: new 0 0 32 32"
                  xml:space="preserve"
                  height="20"
                  width="20"
                >
                  <path
                    class="st0"
                    d="M28,8.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-0.9,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6  c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1c-4.1-0.2-7.7-2.2-10.1-5.1C5.2,7.9,5,8.7,5,9.6c0,1.7,0.9,3.2,2.2,4.1  c-0.8,0-1.6-0.2-2.2-0.6c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4  c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6  C26.5,10.4,27.3,9.5,28,8.6z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCuHrlydxabQ75aTkKuapK0A?view_as=subscribe"
              >
                <!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Calque_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 16 16"
                  style="enable-background: new 0 0 16 16"
                  xml:space="preserve"
                  height="20"
                  width="20"
                >
                  <path
                    class="st0"
                    d="M8,2C6,2,4.2,2.2,3.1,2.4C2.2,2.5,1.4,3.2,1.3,4.1C1.1,4.9,1,6.1,1,7.5c0,1.4,0.1,2.6,0.3,3.4  c0.2,0.9,0.9,1.6,1.8,1.7C4.2,12.8,6,13,8,13s3.8-0.2,4.9-0.4h0c0.9-0.1,1.6-0.8,1.8-1.7c0.1-0.8,0.3-1.9,0.3-3.4  c0-1.4-0.1-2.6-0.3-3.4c-0.2-0.9-0.9-1.6-1.8-1.7C11.8,2.2,10,2,8,2z M8,3c2,0,3.7,0.2,4.8,0.4c0.5,0.1,0.8,0.4,0.9,0.9  C13.9,5,14,6.1,14,7.5s-0.1,2.5-0.3,3.2c-0.1,0.5-0.5,0.9-0.9,0.9C11.7,11.8,10,12,8,12s-3.7-0.2-4.8-0.4c-0.5-0.1-0.9-0.4-0.9-0.9  C2.1,10,2,8.9,2,7.5C2,6.1,2.1,5,2.3,4.3c0.1-0.5,0.5-0.9,0.9-0.9h0C4.3,3.2,6,3,8,3z M6,5v5l5-2.5L6,5z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <div>
            <div class="mb-2 font-18 fw-bolder">
              Découvrez l’application<br />Ma Ville Mon Shopping
            </div>

            <div class="d-flex">
              <a
                class="me-3"
                target="_blank"
                href="https://apps.apple.com/app/ma-ville-mon-shopping/id1584987543"
              >
                <img
                  width="100"
                  height="32"
                  alt="Bouton AppStore pour télécharger l'application"
                  src="@/assets/img/svg/appstore.svg"
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.mvms.app&amp;gl=FR"
              >
                <img
                  width="100"
                  height="32"
                  alt="Bouton GooglePlay pour télécharger l'application"
                  src="@/assets/img/svg/google-play.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="mb-4 mb-md-0 px-0 px-md-2">
          <div class="mb-4" data-cy="wrapper-shops">
            <div class="mb-2 font-18 fw-bolder">Commerçants</div>
            <ul class="grey-typo">
              <li><a href="/fr/commercant">Rejoindre la Marketplace</a></li>
              <li><a href="/fr/commercant/pack-starter">Pack Starter</a></li>
              <li><a href="/fr/commercant/pack-booster">Pack Booster</a></li>
              <li>
                <a href="/fr/commercant/pack-communication"
                  >Pack Communication</a
                >
              </li>
            </ul>
          </div>

          <div data-cy="wrapper-cityzens">
            <div class="mb-2 font-18 fw-bolder">Cityzens</div>
            <ul class="grey-typo">
              <li><a href="/fr/cityzens">La communauté</a></li>
              <li><a href="/fr/devenir-cityzen">Devenir Cityzen</a></li>
              <li>
                <a target="_blank" href="/fr/jeuconcourstousinfluenceurs"
                  >Règlement Jeu #TousInfluenceurs</a
                >
              </li>
              <li>
                <a target="_blank" href="/fr/jeuconcoursfetedesperes"
                  >Règlement Jeu-concours Fête des Pères</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-4 mb-md-0 px-0 px-md-2">
          <div class="mb-4" data-cy="wrapper-partners">
            <div class="mb-2 font-18 fw-bolder">Partenaires</div>
            <ul class="grey-typo">
              <li>
                <a
                  target="_blank"
                  href="https://lp.mavillemonshopping.fr/territoires/"
                  >Devenir Partenaire</a
                >
              </li>

              <li>
                <a target="_blank" href="/fr/territoires_partenaires"
                  >Nos territoires partenaires</a
                >
              </li>
            </ul>
          </div>

          <div data-cy="wrapper-informations">
            <div class="mb-2 font-18 fw-bolder">Informations</div>
            <ul class="grey-typo">
              <li class="fw-bolder">
                <a href="https://faq.mavillemonshopping.fr/hc/fr"
                  >Foire Aux Questions</a
                >
              </li>
              <li><a href="/fr/services">Modes de livraison</a></li>
              <li>
                <a href="/fr/privacy_policy">Politique de confidentialité</a>
              </li>
              <li>
                <a href="/fr/politique-sur-les-cookies"
                  >Politique des cookies</a
                >
              </li>
              <li>
                <a href="javascript:openAxeptioCookies()"
                  >Paramétrer les cookies</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="px-0 px-md-2 blue-mvms-dark">
          <div>Une entreprise de</div>
          <img src="/assets/img/laposte-logo.png" />
        </div>
      </div>
    </div>

    <div
      class="container text-center"
      style="font-size: 75%; line-height: 14px"
      id="footer-legal-notice-free_service_offer"
    >
      *Offre soumise aux Conditions Générales de la Marketplace, valable du
      20/06 au 31/12/2022 inclus, applicable pour la Livraison par votre facteur
      et la livraison Colissimo, excluant la livraison par le commerçant ou
      autre prestataire. Remise appliquée après validation du panier d'achat sur
      www.mavillemonshopping.fr dès 50 € d'achat en ligne hors réservation, hors
      frais de livraison et hors remises promotionnelles. Offre cumulable avec
      les offres en cours si le montant final de la commande (une fois les
      remises appliquées) atteint 50 € ou plus. **L’abus d’alcool est dangereux
      pour la santé. À consommer avec modération.
    </div>

    <section class="background-blue-very-light">
      <div class="container-xxl p-3">
        <div
          class="d-flex flex-column flex-md-row justify-content-start justify-content-md-evenly align-items-start align-items-md-center font-12 grey-typo"
        >
          <div class="mb-3 mb-md-0 grey-typo">
            © mavillemonshopping.fr 2022 • Tous droits réservés
          </div>
          <div class="mb-3 mb-md-0">
            <a href="/fr/cgv_website">Conditions Générales de la MarketPlace</a>
          </div>
          <div class="mb-3 mb-md-0">
            <a href="/fr/mentions_legales">Mentions légales</a>
          </div>
          <div>
            <i class="icons8 icons8-lock"></i>
            <i class="icons8 icons8-visa"></i>
            <i class="icons8 icons8-mastercard-credit-card"></i>
            <i class="icons8 icons8-mastercard-logo"></i>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
<style lang="scss" scoped>
.st0 {
  fill: #de8e00;
}
</style>
