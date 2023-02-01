<template>
  <section class="hero-module mb-15" id="vogue-banner">
    <div class="row">
      <div class="bg-wrapper">
        <a href="/kadin/ayakkabilar/bilekli-ve-orta-bilekli">
          <picture>
            <source
              height="552"
              media="(min-width: 768px)"
              srcset="
                https://st-vans.mncdn.com/Content/img/Unisite/221223_LPWomen_Hero_Bg_Desk.gif
              "
              width="1380"
            />
            <img
              height="540"
              src="https://st-vans.mncdn.com/Content/img/Unisite/221223_LPWomen_Hero_Bg_Mob.gif"
              width="640"
            /> </picture
        ></a>
      </div>

      <div class="content-wrapper">
        <div class="text-wrapper">
          <h1 class="heading-3">
            THIS IS<br class="mobil-none" />
            THE SK8-<span>HI<sup>®</sup></span>
          </h1>

          <p>CLASSIC SINCE FOREVER</p>
        </div>

        <div class="buttons-wrapper">
          <a
            class="button gender-track shop-all"
            data-action="Click"
            data-category="LPWomen"
            data-label="Hero_ThisIsTheSk8Hi_CTAShopNow"
            href="https://www.vans.com.tr/kadin/ayakkabilar/bilekli-ve-orta-bilekli"
            >ALIŞVERİŞE BAŞLA
          </a>
          <!-- <a class="button gender-track" href="/news/classics-beatrice-domond.html"
                                data-category="LPWomen" data-action="Click"
                                data-label="Hero_ThisIsTheSk8Hi_CTADiscoverMore">DISCOVER MORE</a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#vogue-banner {
  position: relative;
  padding: 20px;
  box-sizing: border-box;
}

#vogue-banner h1 {
  font-size: 84px !important;
  font-weight: 700;
  line-height: 0.9;
  margin: 0 0 1rem;
  letter-spacing: 0.15rem;
  text-align: left;
  color: #000;
}

#vogue-banner p {
  font-size: 18px;
  color: #000;
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 26px 0;
  font-weight: bold;
}

.secondary-module {
  padding: 0;
  max-width: 1380px;
  margin: 0 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.women--container * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.women--container {
  font-family: "franklin-gothic-urw-cond", Helvetica, sans-serif;
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 40px;
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

:-webkit-any(article, aside, nav, section) h1 {
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-weight: 700;
}
</style>
