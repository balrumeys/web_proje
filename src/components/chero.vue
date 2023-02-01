<template>
  <section class="secondary-module hero-module mb-15" id="mini-me">
    <div class="row">
      <div class="bg-wrapper">
        <a href="/mini-me">
          <picture>
            <source
              height="552"
              media="(min-width: 768px)"
              srcset="
                https://st-vans.mncdn.com/Content/img/Unisite/220915-LPKids-HeroMiniMe-desk.webp
              "
              width="1380"
            />
            <img
              height="540"
              src="https://st-vans.mncdn.com/Content/img/Unisite/220915-LPKids-HeroMiniMe-mob.webp"
              width="640"
            />
          </picture>
        </a>
      </div>
      <div class="full-link"></div>
      <div class="content-wrapper">
        <h3>MINI ME</h3>

        <p>
          İkonik Vans modellerinin keyfini beraber çıkarmak için, aile boyu Vans
          !
        </p>

        <div class="buttons-wrapper single-button">
          <a
            class="button gender-track"
            data-action="Click"
            data-category="LPKids"
            data-label="Hero_MiniMe_CTAShopNow"
            href="https://www.vans.com.tr/mini-me"
            >ALIŞVERİŞE BAŞLA</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
#mini-me {
  position: relative;
}

#mini-me .content-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  width: 55%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: transparent;
  text-align: left;
  height: 100%;
  padding: 0;
  right: 0;
  left: 5%;
  bottom: 0;
}

#mini-me h3 {
  font-size: 42px;
  color: #fff;
  margin-bottom: 0.3em;
  line-height: 1em;
  letter-spacing: 0.03em;
}

#mini-me p {
  font-family: "franklin-gothic-urw-cond", Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 2.5%;
  max-width: 52%;
  letter-spacing: 0.04em;
  text-align: left;
  color: #fff;
}

#mini-me .buttons-wrapper .button {
  cursor: pointer;
  background-color: #c9192e;
  color: #fefefe;
  width: 100%;
  font-size: 1rem;
  border: none;
}

#mini-me .buttons-wrapper .button:hover {
  background-color: #000;
  color: #fff;
}

@media (max-width: 996px) {
  #mini-me .content-wrapper {
    position: relative;
    width: 100%;
    left: auto;
    right: auto;
    text-align: center;
    height: auto;
    background-color: #fff;
  }

  #mini-me h3 {
    font-size: 42px;
    color: #000;
    margin: 0;
    line-height: 1em;
    letter-spacing: 0.03em;
    width: 100%;
    padding: 15px 0;
  }

  #mini-me p {
    font-family: "franklin-gothic-urw-cond", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    max-width: 100%;
    letter-spacing: 0.04em;
    text-align: center;
    color: #000;
    width: 100%;
    padding: 20px;
  }

  #mini-me .buttons-wrapper {
    justify-content: center;
    display: flex;
    margin: 0;
    width: 100%;
  }

  #mini-me .buttons-wrapper .button {
    width: 200px;
    margin: 15px 0;
  }
}
</style>
