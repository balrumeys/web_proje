<template>
  <div class="col-lg-12 alva-banner-men">
    <a class="full-a" href="https://www.vans.com.tr/alva-koleksiyonu"
      ><picture>
        <source
          media="(min-width: 769px)"
          srcset="https://st-vans.mncdn.com/Content/img/erkek_alva.jpg"
        />
        <img
          alt="Vans"
          srcset="https://st-vans.mncdn.com/Content/img/erkek_mobil_alva.jpg"
        />
      </picture>
    </a>
    <div class="content-wrapper">
      <p class="title">
        Vans x Alva Skates koleksiyonu Tony Alva'nın kaykaya adanmış yıllarını
        kutluyor!
      </p>

      <div class="buttons-wrapper-alva">
        <a href="https://www.vans.com.tr/alva-koleksiyonu">ALIŞVERİŞE BAŞLA </a>
      </div>
    </div>
  </div>
</template>

<style>
.buttons-wrapper-alva {
  display: flex;
  justify-content: center;
  margin: 15px;
}
.buttons-wrapper-alva {
  margin-top: 20px;
}
.men--container * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.alva-banner-men {
  position: relative;
  margin-top: 20px;
}
.alva-banner-men .full-a {
  width: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
}
.buttons-wrapper-alva a {
  max-width: 200px;
  background-color: #c9192e;
  color: #fefefe;
  font-family: "franklin-gothic-urw-cond", Helvetica, sans-serif;
  font-size: 1em;
  padding: 1em 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alva-banner-men .content-wrapper {
  position: absolute;
  width: 346px;
  padding: 0;
  bottom: 33%;
  left: 10%;
  margin-bottom: 15px;
}
.alva-banner-men .content-wrapper p.title {
  font-size: 17px;
  color: #000;
  text-align: start;
  width: 100%;
  margin: auto;
  padding: 0;
  max-width: 100%;
}

.alva-banner-men .content-wrapper p.title a {
  color: #000;
  padding: 0;
  margin-bottom: 17px;
  display: flex;
}

.buttons-wrapper-alva {
  margin-top: 20px;
}
@media only screen and (max-width: 996px) {
  .alva-banner-men .full-a {
    padding: 5px;
  }

  .alva-banner-men {
    padding: 0;
  }
  .alva-banner-men .content-wrapper {
    position: relative;
    width: 100%;
    left: auto;
    right: auto;
  }
  .alva-banner-men .content-wrapper p.title {
    text-align: center;
    margin-top: 30px;
  }
  .buttons-wrapper-alva {
    display: flex;
    justify-content: center;
    margin: 15px;
  }
}
</style>
