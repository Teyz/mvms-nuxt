<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white m-0 p-0 border-0">
    <div class="container-fluid p-0">
      <section class="col-3 d-lg-none order-1">
        <button
          type="button"
          class="navbar-toggler px-1 border-0 rounded-0 bg-transparent text-center d-inline-block"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="icons8 icons8-menu font-24 grey-dark"></i>
        </button>
      </section>

      <section
        class="col-6 col-lg-auto order-2 d-flex justify-content-center flex-lg-shrink-1"
      >
        <a class="d-flex" style="height: 100%" href="/fr">
          <img
            class="w-100"
            style="object-fit: contain; height: 100%"
            data-cy="img-logo"
            src="../assets/img/svg/logo.svg"
          />
        </a>
      </section>

      <section
        class="col order-4 ms-0 me-0 me-lg-auto order-lg-3 p-0 search d-none"
        style="z-index: 1; min-width: 250px"
      >
        <hr class="hr d-block d-lg-none" />
      </section>

      <section
        class="col-3 col-lg-auto order-3 d-flex justify-content-end px-2"
      >
        <div class="d-none d-lg-flex px-2"></div>
        <div class="dropdown dropdown-help d-none d-lg-block px-2">
          <button
            class="btn p-0 d-flex align-items-center"
            style="height: 100%"
            type="button"
            id="dropdown-nav-help"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <div class="d-flex align-items-center">
              <i class="icons8 icons8-help fs-2"></i>
              <div class="d-none d-lg-flex align-items-center flex-column ms-1">
                <div
                  class="d-flex align-items-center align-self-start line-20 w-100"
                >
                  <p
                    class="m-0 blue-navy font-14 fw-bold line-20 text-start flex-fill"
                  >
                    Aide
                  </p>
                  <i class="icons8 icons8-sort-down grey-typo ml-2"></i>
                </div>
                <p
                  class="text-start m-0 grey-typo font-12 line-18 align-self-start"
                >
                  Une question ?
                </p>
              </div>
            </div>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end p-0 border-0"
            aria-labelledby="dropdown-nav-help"
          >
            <div
              class="background-green-munsell w-100 d-flex"
              style="height: 48px; border-radius: 8px 8px 0 0"
            >
              <div
                class="fw-bold font-20 m-auto white"
                style="line-height: 24px"
              >
                Besoin d’aide ?
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex">
                <i class="icons8 icons8-help me-2 font-20 d-flex"></i>
                <div class="mb-4">
                  <div class="fw-normal font-14 line-17 blue-navy mb-1">
                    Foire Aux Questions
                  </div>
                  <div class="fw-light font-12 line-15 grey-hanoi">
                    Trouvez des réponses rapidement en visitant notre
                    <a
                      class="link grey-hanoi"
                      href="https://faq.mavillemonshopping.fr/hc/fr"
                      >Foire aux Questions</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="p-2 background-yellow-light"
                style="border-radius: 4px"
              >
                <div class="d-flex">
                  <div class="me-3 d-flex" style="min-width: 42px">
                    <img
                      width="42"
                      height="42"
                      class="my-auto"
                      src="../assets/img/avatar-header.png"
                    />
                  </div>
                  <div>
                    <div class="d-flex align-items-center mb-1">
                      <div class="me-3 fw-bold font-14 line-17 blue-navy">
                        0 800 800 181
                      </div>
                      <div
                        class="py-1 px-3 background-yellow-amber font-12 brown-medium-dark"
                        style="border-radius: 20px"
                      >
                        Gratuit*
                      </div>
                    </div>
                    <div class="font-12 line-15 grey-hanoi">
                      Notre service client vous assiste du lundi au vendredi de
                      10h à 18h hors jours fériés (*appels et service
                      non-surtaxés)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="dropdown dropdown-menu-nav ml-2 position-relative d-none d-lg-flex px-2"
          data-cy="dropdown-account"
        >
          <button
            class="btn p-0 d-flex align-items-center"
            style="height: 100%"
            type="button"
            id="dropdown-nav-account"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <div class="d-flex align-items-center">
              <i class="icons8 icons8-male-user fs-2"></i>
              <div
                class="d-none d-lg-flex align-items-center flex-column ms-1 ml-1"
              >
                <div
                  class="d-flex align-items-center align-self-start d-flex line-20 w-100"
                >
                  <p
                    class="m-0 blue-navy font-14 bold line-20 text-start flex-fill"
                  >
                    Client ou Vendeur
                  </p>
                  <i class="icons8 icons8-sort-down grey-typo ml-2"></i>
                </div>
                <p
                  class="text-start m-0 grey-typo font-12 line-18 align-self-start"
                >
                  Se connecter ou s'inscrire
                </p>
              </div>
            </div>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end m-0"
            aria-labelledby="dropdown-nav-account"
          >
            <li>
              <a
                data-bs-toggle="modal"
                data-bs-target="#sign-in"
                class="blue-navy semi-bold border-b-blue-back d-flex px-3 py-1"
                style="cursor: pointer"
                >Se connecter</a
              >
            </li>
            <li class="pt-1">
              <a
                class="grey-typo d-flex px-3 py-1"
                data-cy="link-signup-customer"
                href="/fr/users/sign_up"
                >S'inscrire</a
              >
            </li>
            <li>
              <a
                class="grey-typo d-flex px-3 py-1"
                data-cy="link-signup-shop"
                href="/fr/creer-ma-boutique"
                >Créer ma boutique</a
              >
            </li>
          </ul>
        </div>

        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#sign-in"
          data-cy="link-signin"
          class="d-flex d-lg-none align-items-center"
        >
          <i class="icons8 icons8-male-user fs-2 grey-dark"></i>
        </a>

        <div
          id="my-cart"
          class="cart-nav-container position-relative d-flex align-items-center px-2"
        >
          <a id="cart-link" data-cy="btn-cart" href="/fr/cart">
            <div class="d-flex display-flex-end align-items-center">
              <div class="grey-dark">
                <i class="icons8 icons8-shopping-bag fs-2"></i>
              </div>
              <div class="ml-1 ms-1 d-none d-lg-block">
                <div class="font-14 bold blue-navy line-20">Panier</div>
                <div id="cart-price" class="font-12 grey-typo line-18">
                  0,00 €
                </div>
              </div>
            </div>
          </a>
          <div id="cart-content" class="cart-nav-content"></div>
        </div>
      </section>
    </div>
  </nav>
</template>
