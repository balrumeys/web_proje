<template>
  <div class="home-banner" tabindex="4594">
    <div class="saleLp-Container">
      <a href="/indirim-VKP-834">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="
              https://st-vans.mncdn.com/Content/img/sale_lp/HO22_Sale_HPStripe_4CTA_03.jpg
            "
          />
          <img
            rel="preload"
            src="https://st-vans.mncdn.com/Content/img/sale_lp/HO22_Sale_HPStripe_4CTA_02.jpg"
          />
        </picture>
      </a>
      <div class="col-lg-12 hero-sale flex-space">
        <div class="col-lg-7 sale-img-logo">
          <img
            alt=""
            src="https://st-vans.mncdn.com/Content/img/sale_lp/indirim.png"
          />
        </div>
        <div class="col-lg-5 forDesktop">
          <a
            class="col-lg-6 col-sm-12"
            href="https://www.vans.com.tr/kadin-indirim"
            ><span class="button">Kadın </span></a
          ><a
            class="col-lg-6 col-sm-12"
            href="https://www.vans.com.tr/erkek-indirim"
            ><span class="button">Erkek </span></a
          ><a
            class="col-lg-6 col-sm-12"
            href="https://www.vans.com.tr/cocuk-indirim"
            ><span class="button"> Çocuk </span></a
          ><a class="col-lg-6 col-sm-12" href="/indirim-VKP-834"
            ><span class="button">Tümünü İncele </span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
.saleLp-Container {
  position: relative;
  margin-top: 50px;
  margin-left: 70px;
}

.saleLp-Container .hero-sale {
  position: absolute;
  top: 20px;
  left: -50px;
}

.saleLp-Container .hero-sale span.button {
  background-color: #000;
  color: #fff;
  word-break: keep-all;
  padding: 1em 0.5em;
  min-width: 200px;
  text-align: center;
  font-size: 1rem;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.saleLp-Container .hero-sale span.button:hover {
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  color: #000;
}

.saleLp-Container .sale-img-logo img {
  width: 65%;
  padding-left: 50px;
  box-sizing: border-box;
}

.saleLp-Container .flex-space {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 996px) {
  .saleLp-Container .flex-space {
    justify-content: center;
  }

  .sale-img-logo {
    position: absolute;
    top: -57%;
    left: 0;
    text-align: center;
  }

  .saleLp-Container .hero-sale {
    position: relative;
    top: 0;
    left: 0;
  }

  .saleLp-Container .sale-img-logo img {
    width: 85%;
    padding-left: 0;
  }

  .saleLp-Container .hero-sale span.button {
    background-color: #c9192e;
    color: #fefefe;
    word-break: keep-all;
    padding: 1em 0.5em;
    min-width: 260px;
    text-align: center;
    font-size: 1rem;
    margin: 8px;
  }
}
</style>
