<template>
  <div id="header">
    <div class="header-inner">
      <div class="header-top">
        <div class="w1380">
          <div class="f-right" tabindex="4299">
            <div
              class="vans-header-top-area col-md-12 vans-float-right top-links"
            >
              <div class="vans-header-top-area-items">
                <div class="vans-top-area-items-other">
                  <ul>
                    <li>
                      <a
                        href="https://www.vans.co.uk/shop/en-gb/vans-gb/select-country"
                      >
                        <div class="vans-top-area-item-language-flag">
                          <img
                            width="20"
                            height="20"
                            data-original="https://st-vans.mncdn.com/mnresize/20/20/Content/img/tr.png"
                            class=""
                            alt="Türkiye "
                            src="https://st-vans.mncdn.com/mnresize/20/20/Content/img/tr.png"
                            style=""
                          />
                          <div>Türkiye</div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="/Uye/Favorilerim">
                        <span class="icon icon-wishlist"></span>
                        <em
                          >Favoriler (<em class="favorite-list-count">0</em>)
                        </em>
                      </a>
                    </li>

                    <li class="usermenu-area">
                      <div class="user-menu">
                        <a href="/Uye" title="Giriş" rel="nofollow">
                          <i class="icon icon-account"></i>
                          <RouterLink to="/login">Üye Girişi/Üye Ol</RouterLink>
                        </a>

                        <div class="datalayerUserScript"></div>
                      </div>
                    </li>

                    <li>
                      <a href="/vans_sss">
                        <span class="icon icon-help"></span>
                        <em>Yardım</em>
                      </a>
                    </li>
                    <li>
                      <a href="/vans_magazalar">
                        <span class="icon icon-location"></span>
                        <em>Mağaza Bul</em>
                      </a>
                    </li>

                    <li>
                      <div id="smallBasket">
                        <a
                          href="/Sepet"
                          class="show-basket"
                          title="Sepetinizde ürün bulunmamaktadır"
                          rel="nofollow"
                        >
                          <div class="m-visible">
                            <span class="icon-shopcart">
                              <span>
                                <span class="cart-number-is-int hidden">
                                  0
                                </span>
                                0
                              </span>
                            </span>
                            <span class="lbl-text">Sepet</span>
                          </div>
                          <span class="cart-number">Sepet (0)</span>
                        </a>

                        <div
                          id="smallBasketModal"
                          class="modal fade"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="smallBasketModalLabel"
                          style="right: 69.4px"
                        >
                          <div class="modal-dialog" role="document">
                            <div id="small-basket-container">
                              <div id="small-basket-inside">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <div class="error-area-small-basket"></div>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                    <h3
                                      class="modal-title count-product-basket"
                                    >
                                      0 ÜRÜN
                                    </h3>
                                    <h4
                                      class="modal-title Interstate-Bold"
                                      aria-label="title"
                                    >
                                      ALIŞVERİŞ SEPETİM
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-body">
        <div class="w1380">
          <div class="header-logo">
            <div id="logo">
              <a title="Vans" href="/">
                <div class="icon-vans-logo">
                  <img
                    src="../components/img/VANS.png"
                    alt="vans-logo"
                    height=" 50px "
                    width="100px"
                  />
                </div>
              </a>
            </div>
          </div>

          <div class="main-nav">
            <ul>
              <li class="">
                <RouterLink to="/kadin"> KADIN </RouterLink>
                <div class="l2-dropdown">
                  <div class="d-flex">
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">ÖNE ÇIKANLAR</div>
                        <ul>
                          <li>
                            <a target="" class="" href="beyaz-koleksiyonu-kadin"
                              >TÜM BEYAZLAR
                            </a>
                          </li>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/bahar-koleksiyonu-kadin"
                              >BAHAR RENKLERİ
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/the-lizzie"
                              >THE LIZZIE
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/kadin/yeni-gelenler"
                              >YENİ GELENLER
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/mini-me">MINI ME </a>
                          </li>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/sustainability-page-11857"
                              >SÜRDÜRÜLEBİLİRLİK
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">AYAKKABILAR</div>
                        <ul>
                          <li>
                            <a class="" href="/stilini-sec-kadin"
                              >SHOP BY STYLE
                            </a>
                          </li>
                          <li>
                            <a class="" href="kadin/ayakkabi/classics"
                              >CLASSICS
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/ayakkabilar/bileksiz"
                              >Bileksiz
                            </a>
                          </li>
                          <li>
                            <a
                              class=""
                              href="/kadin/ayakkabilar/bilekli-ve-orta-bilekli"
                              >Bilekli &amp; Orta Bilekli
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/ayakkabilar/slip-on"
                              >Slip-on
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/ayakkabilar/light-weight"
                              >Lightweight
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/ayakkabilar/kaykay"
                              >Kaykay
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/ayakkabilar/sorf">Sörf </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/kadin/ayakkabilar"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">GİYİM</div>
                        <ul>
                          <li>
                            <a class="" href="/kadin/giyim/ust-giyim-ve-tshirt"
                              >Üst giyim &amp; T-shirt
                            </a>
                          </li>
                          <li>
                            <a
                              class=""
                              href="/kadin/giyim/sweatshirt-ve-kapusonlu"
                              >Sweatshirt &amp; Kapüşonlu
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/giyim/mont-ve-ceket"
                              >Mont &amp; Ceket
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/giyim/elbise">Elbise </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/giyim/alt-giyim"
                              >Alt giyim
                            </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/kadin/giyim"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">AKSESUARLAR</div>
                        <ul>
                          <li>
                            <a class="" href="/cantalar "
                              >Çanta &amp; Sırt Çantası
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/aksesuar/sapka-ve-bere"
                              >Şapka &amp; Bere
                            </a>
                          </li>
                          <li>
                            <a class="" href="/kadin/aksesuar/corap">Çorap </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/kadin/aksesuarlar"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-item-bottom-content">
                    <div class="dropdown-item-bottom-content">
                      <div class="first-line"></div>
                      <div class="text">İKONİK SİLÜETLER</div>
                      <div class="last-line"></div>
                    </div>
                    <div class="dropdown-item-bottom-content-icons">
                      <div class="icons_block">
                        <a
                          href="/kadin/ikonik-siluetler/slip-on"
                          class="sil_link"
                        >
                          <img
                            alt="Slip-On"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/kadin/ikonik-siluetler/authentic"
                          class="sil_link"
                        >
                          <img
                            alt="Authentic"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/kadin/ikonik-siluetler/old-skool"
                          class="sil_link"
                        >
                          <img
                            alt="Old Skool"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a href="/kadin/ikonik-siluetler/era" class="sil_link">
                          <img
                            alt="Era"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/kadin/ikonik-siluetler/sk8-hi"
                          class="sil_link"
                        >
                          <img
                            alt="Sk8-Hi"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            style=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="">
                <RouterLink to="/erkek"> ERKEK </RouterLink>
                <div class="l2-dropdown">
                  <div class="d-flex">
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">ÖNE ÇIKANLAR</div>
                        <ul>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/beyaz-koleksiyonu-erkek"
                              >TÜM BEYAZLAR
                            </a>
                          </li>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/bahar-koleksiyonu-erkek"
                              >BAHAR RENKLERİ
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/erkek/yeni-gelenler"
                              >YENİ GELENLER
                            </a>
                          </li>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/sustainability-page-11857"
                              >SÜRDÜRÜLEBİLİRLİK
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">AYAKKABILAR</div>
                        <ul>
                          <li>
                            <a class="" href="/stilini-sec-erkek"
                              >SHOP BY STYLE
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabi/classics"
                              >CLASSICS
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabilar/bileksiz"
                              >Bileksiz
                            </a>
                          </li>
                          <li>
                            <a
                              class=""
                              href="/erkek/ayakkabilar/bilekli-ve-orta-bilekli"
                              >Bilekli &amp; Orta Bilekli
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabilar/slip-on"
                              >Slip-on
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabilar/kaykay"
                              >Kaykay
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabilar/sorf">Sörf </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/ayakkabilar/lightweight"
                              >Lightweight
                            </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/erkek/ayakkabilar"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">GİYİM</div>
                        <ul>
                          <li>
                            <a class="" href="/pantolon-rehberi"
                              >PANTOLON REHBERİ
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/giyim/tshirt-ve-atlet"
                              >Tshirt &amp; Atlet
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/giyim/gomlek">Gömlek </a>
                          </li>
                          <li>
                            <a
                              class=""
                              href="/erkek/giyim/sweatshirt-ve-kapusonlu"
                              >Sweatshirt &amp; Kapüşonlu
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/giyim/mont-ve-ceket"
                              >Mont &amp; Ceket
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/giyim/pantolon-ve-denim"
                              >Pantolon &amp; Denim
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/giyim/sort">Şort </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/erkek/giyim"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">AKSESUARLAR</div>
                        <ul>
                          <li>
                            <a class="" href="/cantalar ">Sırt Çantaları </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/aksesuarlar/sapka-ve-bere"
                              >Şapka &amp; Bere
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/aksesuarlar/corap"
                              >Çorap
                            </a>
                          </li>
                          <li>
                            <a
                              class=""
                              href="/erkek/aksesuarlar/cuzdan-ve-anahtarlik"
                              >Cüzdan &amp; Anahtarlık
                            </a>
                          </li>
                          <li>
                            <a class="" href="/erkek/aksesuarlar/kemer"
                              >Kemer
                            </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/erkek/aksesuarlar"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-item-bottom-content">
                    <div class="dropdown-item-bottom-content">
                      <div class="first-line"></div>
                      <div class="text">İKONİK SİLÜETLER</div>
                      <div class="last-line"></div>
                    </div>
                    <div class="dropdown-item-bottom-content-icons">
                      <div class="icons_block">
                        <a
                          href="/erkek/ikonik-siluetler/slip-on"
                          class="sil_link"
                        >
                          <img
                            alt="Slip-On"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/erkek/ikonik-siluetler/authentic"
                          class="sil_link"
                        >
                          <img
                            alt="Authentic"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/erkek/ikonik-siluetler/old-skool"
                          class="sil_link"
                        >
                          <img
                            alt="Old Skool"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a href="/erkek/ikonik-siluetler/era" class="sil_link">
                          <img
                            alt="Era"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/erkek/ikonik-siluetler/sk8-hi"
                          class="sil_link"
                        >
                          <img
                            alt="Sk8-Hi"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            style=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="tablet-none">
                <RouterLink to="/cocuk"> COCUK </RouterLink>
                <div class="l2-dropdown">
                  <div class="d-flex">
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">ÖNE ÇIKANLAR</div>
                        <ul>
                          <li>
                            <a
                              target=""
                              class=""
                              href="/bahar-koleksiyonu-cocuk"
                              >BAHAR RENKLERİ
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/vans-x-crayola"
                              >VANS X CRAYOLA
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/mini-me">MINI ME </a>
                          </li>
                          <li>
                            <a target="" class="" href="/cocuk/yeni-gelenler"
                              >Yeni Gelenler
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">ERKEK ÇOCUK</div>
                        <ul>
                          <li>
                            <a class="" href="/cocuk/erkek-cocuk/bebek"
                              >Bebek (0-4 Yaş)
                            </a>
                          </li>
                          <li>
                            <a class="" href="/cocuk/erkek-cocuk"
                              >Erkek Çocuk (5+ Yaş)
                            </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/erkek/cocuk"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">KIZ ÇOCUK</div>
                        <ul>
                          <li>
                            <a class="" href="/kiz/bebek">Bebek ( 0-4 Yaş ) </a>
                          </li>
                          <li>
                            <a class="" href="/kiz/cocuk"
                              >Kız Çocuk (5+ Yaş)
                            </a>
                          </li>
                          <li>
                            <a class="bold-text" href="/kiz/cocuk"
                              >TÜMÜNÜ İNCELE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-item-bottom-content">
                    <div class="dropdown-item-bottom-content">
                      <div class="first-line"></div>
                      <div class="text">İKONİK SİLÜETLER</div>
                      <div class="last-line"></div>
                    </div>
                    <div class="dropdown-item-bottom-content-icons">
                      <div class="icons_block">
                        <a
                          href="/cocuk/ikonik-siluetler/slip-on"
                          class="sil_link"
                        >
                          <img
                            alt="Slip-On"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_SlipOn.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/cocuk/ikonik-siluetler/authentic"
                          class="sil_link"
                        >
                          <img
                            alt="Authentic"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Authentic.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/cocuk/ikonik-siluetler/old-skool"
                          class="sil_link"
                        >
                          <img
                            alt="Old Skool"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_OldSkool.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a href="/cocuk/ikonik-siluetler/era" class="sil_link">
                          <img
                            alt="Era"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Era.png"
                            style=""
                          />
                        </a>
                      </div>
                      <div class="icons_block">
                        <a
                          href="/cocuk/ikonik-siluetler/sk8-hi"
                          class="sil_link"
                        >
                          <img
                            alt="Sk8-Hi"
                            data-original="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            class="mobile-hide"
                            src="https://st-vans.mncdn.com/Content/img/menu-icon/SP22_Classics_MenuIcons_Sk8Hi.png"
                            style=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="tablet-none">
                <a class="" href="/okula-donus" style=""> SIRT ÇANTALARI </a>
              </li>
              <li class="tablet-none">
                <a class="" href="/yeni-gelenler" style=""> YENİ GELENLER </a>
              </li>
              <li class="">
                <a class="" href="/classics" style=""> CLASSICS </a>
              </li>
              <li class="tablet-none">
                <a class="" href="/vans_skate" style=""> KAYKAY </a>
              </li>
              <li class="">
                <a class="open-menu" href="" style=""> DAHA FAZLASI </a>
                <div class="l2-dropdown more-menu">
                  <div class="d-flex">
                    <div class="l2-dropdown-column">
                      <div class="l2-dropdown-item">
                        <div class="title">Daha Fazla</div>
                        <ul>
                          <li><a target="" class="" href="/sorf">SÖRF </a></li>
                          <li>
                            <a
                              target="_blank"
                              class=""
                              href="https://www.houseofvanslondon.com/"
                              >HOUSE OF VANS
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/bmx-koleksiyonu"
                              >BMX
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/classics">CLASSICS </a>
                          </li>
                          <li>
                            <a target="_blank" class="" href="/off-the-wall"
                              >THIS IS OFF THE WALL
                            </a>
                          </li>
                          <li>
                            <a target="" class="" href="/haberler">HABERLER </a>
                          </li>
                          <li>
                            <a target="" class="" href="/waffledrops"
                              >WAFFLEDROPS
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="header-right">
            <div class="search-icon">
              <img
                class="search-open-icon active"
                data-original="https://st-vans.mncdn.com/Content/img/search-open.png"
                data-js="search-open"
                src="https://st-vans.mncdn.com/Content/img/search-open.png"
                style=""
              />
              <img
                class="search-close-icon"
                data-original="https://st-vans.mncdn.com/Content/img/search-close.png"
                data-js="search-close"
                src="https://st-vans.mncdn.com/Content/img/search-close.png"
                style="display: inline"
              />
            </div>
            <div class="search-form-container">
              <form id="frm-search" method="get" action="/Ara">
                <div class="search-container">
                  <div class="mobile-search-area hide">
                    <div class="mobile-search-input">
                      <input
                        type="text"
                        itemprop="query-input"
                        name="k"
                        id=""
                        class="search-input"
                        placeholder="Ara"
                        autocomplete="off"
                      />
                      <input
                        type="submit"
                        style="
                          position: absolute;
                          left: -9999px;
                          width: 1px;
                          height: 1px;
                        "
                        tabindex="-1"
                      />
                    </div>

                    <div class="mobile-search-btn-wrap">
                      <button
                        class="hidden-desktop hidden-sm mobile-search-btn"
                      >
                        Ara
                      </button>
                    </div>
                  </div>

                  <div class="search-warning"></div>
                  <a href="javascript:void(0);" class="search-close"
                    ><i class="icon-X"></i
                  ></a>
                </div>
              </form>
            </div>

            <div class="header-m-menu">
              <a href="javascript:void(0);" class="btn-m-menu"
                ><i class="icon-Hamburger"></i
                ><span class="lbl-text">Menu</span></a
              >

              <div id="rnd-mobile-menu">
                <div class="m-navigation">
                  <a href="javascript:void(0);" class="close-m-menu">
                    <span class="icon-close"></span>
                  </a>
                  <ul class="m-first-level">
                    <li class="m-first submenu">
                      <a href="javascript:void(0);" title="" rel="nofollow">
                        KADIN
                      </a>
                      <ul
                        class="m-second-level sublevel"
                        style="margin-left: 425px"
                      >
                        <li class="m-back m-level-title">KADIN</li>
                        <li class="m-second submenu">
                          <div class="accordion-wrap">
                            <div class="accordion-item landing">
                              <a href="/kadin-koleksiyon">Tümü</a>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">ÖNE ÇIKANLAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    ÖNE ÇIKANLAR
                                  </li>
                                  <li>
                                    <a href="beyaz-koleksiyonu-kadin"
                                      >TÜM BEYAZLAR
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/bahar-koleksiyonu-kadin"
                                      >BAHAR RENKLERİ
                                    </a>
                                  </li>
                                  <li><a href="/the-lizzie">THE LIZZIE </a></li>
                                  <li>
                                    <a href="/kadin/yeni-gelenler"
                                      >YENİ GELENLER
                                    </a>
                                  </li>
                                  <li><a href="/mini-me">MINI ME </a></li>
                                  <li>
                                    <a href="/sustainability-page-11857"
                                      >SÜRDÜRÜLEBİLİRLİK
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">AYAKKABILAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    AYAKKABILAR
                                  </li>
                                  <li>
                                    <a href="/stilini-sec-kadin"
                                      >SHOP BY STYLE
                                    </a>
                                  </li>
                                  <li>
                                    <a href="kadin/ayakkabi/classics"
                                      >CLASSICS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar/bileksiz"
                                      >Bileksiz
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/kadin/ayakkabilar/bilekli-ve-orta-bilekli"
                                      >Bilekli &amp; Orta Bilekli
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar/slip-on"
                                      >Slip-on
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar/light-weight"
                                      >Lightweight
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar/kaykay"
                                      >Kaykay
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar/sorf">Sörf </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/ayakkabilar"
                                      >TÜMÜNÜ İNCELE
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">GİYİM</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    GİYİM
                                  </li>
                                  <li>
                                    <a href="/kadin/giyim/ust-giyim-ve-tshirt"
                                      >Üst giyim &amp; T-shirt
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/kadin/giyim/sweatshirt-ve-kapusonlu"
                                      >Sweatshirt &amp; Kapüşonlu
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/giyim/mont-ve-ceket"
                                      >Mont &amp; Ceket
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/giyim/elbise">Elbise </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/giyim/alt-giyim"
                                      >Alt giyim
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/giyim">TÜMÜNÜ İNCELE </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">AKSESUARLAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    AKSESUARLAR
                                  </li>
                                  <li>
                                    <a href="/cantalar "
                                      >Çanta &amp; Sırt Çantası
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/aksesuar/sapka-ve-bere"
                                      >Şapka &amp; Bere
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/aksesuar/corap">Çorap </a>
                                  </li>
                                  <li>
                                    <a href="/kadin/aksesuarlar"
                                      >TÜMÜNÜ İNCELE
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="m-first submenu">
                      <a href="javascript:void(0);" title="" rel="nofollow">
                        ERKEK
                      </a>
                      <ul
                        class="m-second-level sublevel"
                        style="margin-left: 425px"
                      >
                        <li class="m-back m-level-title">ERKEK</li>
                        <li class="m-second submenu">
                          <div class="accordion-wrap">
                            <div class="accordion-item landing">
                              <a href="/erkek-koleksiyon">Tümü</a>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">ÖNE ÇIKANLAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    ÖNE ÇIKANLAR
                                  </li>
                                  <li>
                                    <a href="/beyaz-koleksiyonu-erkek"
                                      >TÜM BEYAZLAR
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/bahar-koleksiyonu-erkek"
                                      >BAHAR RENKLERİ
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/yeni-gelenler"
                                      >YENİ GELENLER
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/sustainability-page-11857"
                                      >SÜRDÜRÜLEBİLİRLİK
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">AYAKKABILAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    AYAKKABILAR
                                  </li>
                                  <li>
                                    <a href="/stilini-sec-erkek"
                                      >SHOP BY STYLE
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabi/classics"
                                      >CLASSICS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar/bileksiz"
                                      >Bileksiz
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/erkek/ayakkabilar/bilekli-ve-orta-bilekli"
                                      >Bilekli &amp; Orta Bilekli
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar/slip-on"
                                      >Slip-on
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar/kaykay"
                                      >Kaykay
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar/sorf">Sörf </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar/lightweight"
                                      >Lightweight
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/ayakkabilar"
                                      >TÜMÜNÜ İNCELE
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">GİYİM</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    GİYİM
                                  </li>
                                  <li>
                                    <a href="/pantolon-rehberi"
                                      >PANTOLON REHBERİ
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/giyim/tshirt-ve-atlet"
                                      >Tshirt &amp; Atlet
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/giyim/gomlek">Gömlek </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/erkek/giyim/sweatshirt-ve-kapusonlu"
                                      >Sweatshirt &amp; Kapüşonlu
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/giyim/mont-ve-ceket"
                                      >Mont &amp; Ceket
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/giyim/pantolon-ve-denim"
                                      >Pantolon &amp; Denim
                                    </a>
                                  </li>
                                  <li><a href="/erkek/giyim/sort">Şort </a></li>
                                  <li>
                                    <a href="/erkek/giyim">TÜMÜNÜ İNCELE </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">AKSESUARLAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    AKSESUARLAR
                                  </li>
                                  <li>
                                    <a href="/cantalar ">Sırt Çantaları </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/aksesuarlar/sapka-ve-bere"
                                      >Şapka &amp; Bere
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/aksesuarlar/corap"
                                      >Çorap
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/erkek/aksesuarlar/cuzdan-ve-anahtarlik"
                                      >Cüzdan &amp; Anahtarlık
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/aksesuarlar/kemer"
                                      >Kemer
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/aksesuarlar"
                                      >TÜMÜNÜ İNCELE
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="m-first submenu">
                      <a href="javascript:void(0);" title="" rel="nofollow">
                        ÇOCUK
                      </a>
                      <ul
                        class="m-second-level sublevel"
                        style="margin-left: 425px"
                      >
                        <li class="m-back m-level-title">ÇOCUK</li>
                        <li class="m-second submenu">
                          <div class="accordion-wrap">
                            <div class="accordion-item landing">
                              <a href="/cocuk-koleksiyon">Tümü</a>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">ÖNE ÇIKANLAR</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    ÖNE ÇIKANLAR
                                  </li>
                                  <li>
                                    <a href="/bahar-koleksiyonu-cocuk"
                                      >BAHAR RENKLERİ
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/vans-x-crayola"
                                      >VANS X CRAYOLA
                                    </a>
                                  </li>
                                  <li><a href="/mini-me">MINI ME </a></li>
                                  <li>
                                    <a href="/cocuk/yeni-gelenler"
                                      >Yeni Gelenler
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">ERKEK ÇOCUK</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    ERKEK ÇOCUK
                                  </li>
                                  <li>
                                    <a href="/cocuk/erkek-cocuk/bebek"
                                      >Bebek (0-4 Yaş)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/cocuk/erkek-cocuk"
                                      >Erkek Çocuk (5+ Yaş)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/erkek/cocuk">TÜMÜNÜ İNCELE </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <div class="accordion-header">KIZ ÇOCUK</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    KIZ ÇOCUK
                                  </li>
                                  <li>
                                    <a href="/kiz/bebek">Bebek ( 0-4 Yaş ) </a>
                                  </li>
                                  <li>
                                    <a href="/kiz/cocuk">Kız Çocuk (5+ Yaş) </a>
                                  </li>
                                  <li>
                                    <a href="/kiz/cocuk">TÜMÜNÜ İNCELE </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="m-first submenu">
                      <a href="/okula-donus" title="" rel="nofollow">
                        SIRT ÇANTALARI
                      </a>
                    </li>
                    <li class="m-first submenu">
                      <a href="/yeni-gelenler" title="" rel="nofollow">
                        YENİ GELENLER
                      </a>
                    </li>
                    <li class="m-first submenu">
                      <a href="/classics" title="" rel="nofollow"> CLASSICS </a>
                    </li>
                    <li class="m-first submenu">
                      <a href="/vans_skate" title="" rel="nofollow"> KAYKAY </a>
                    </li>
                    <li class="m-first submenu">
                      <a href="javascript:void(0);" title="" rel="nofollow">
                        DAHA FAZLASI
                      </a>
                      <ul
                        class="m-second-level sublevel"
                        style="margin-left: 425px"
                      >
                        <li class="m-back m-level-title">DAHA FAZLASI</li>
                        <li class="m-second submenu">
                          <div class="accordion-wrap">
                            <div class="accordion-item">
                              <div class="accordion-header">Daha Fazla</div>
                              <div class="accordion-content">
                                <ul>
                                  <li class="m-back m-level-title m-sub-cont">
                                    Daha Fazla
                                  </li>
                                  <li><a href="/sorf">SÖRF </a></li>
                                  <li>
                                    <a href="https://www.houseofvanslondon.com/"
                                      >HOUSE OF VANS
                                    </a>
                                  </li>
                                  <li><a href="/bmx-koleksiyonu">BMX </a></li>
                                  <li><a href="/classics">CLASSICS </a></li>
                                  <li>
                                    <a href="/off-the-wall"
                                      >THIS IS OFF THE WALL
                                    </a>
                                  </li>
                                  <li><a href="/haberler">HABERLER </a></li>
                                  <li>
                                    <a href="/waffledrops">WAFFLEDROPS </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div class="seperator"></div>
                  <ul class="top-links">
                    <li>
                      <div class="vans-top-area-item-language-flag">
                        <img
                          width="20"
                          height="20"
                          data-original="https://st-vans.mncdn.com/mnresize/20/20/Content/img/tr.png"
                          class=""
                          alt="Türkiye "
                          src="https://st-vans.mncdn.com/mnresize/20/20/Content/img/tr.png"
                          style=""
                        />
                        <a
                          href="https://www.vans.co.uk/shop/en-gb/vans-gb/select-country"
                        >
                          <div>Türkiye</div>
                        </a>
                      </div>
                    </li>

                    <li>
                      <span class="icon icon-wishlist"></span>
                      <a href="/Uye/Favorilerim">Favoriler </a>
                    </li>

                    <li>
                      <span class="icon icon-account"></span>
                      <a href="/Uye">Üye Girişi/Üye Ol </a>
                    </li>

                    <li>
                      <span class="icon icon-help"></span>
                      <a href="/yardim"> Yardım </a>
                    </li>
                    <li>
                      <span class="icon icon-location"></span>
                      <a href="/magaza-bul"> Mağaza Bul </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="rnd-mobile-overlay"></div>

              <div id="smallBasket"></div>
              <a href="/vans_magazalar" class="btn-m-map"
                ><span class="icon-location"></span
                ><span class="lbl-text">Mağaza</span></a
              >
              <a class="m-search-trigger"
                ><i class="icon-search"></i><span class="lbl-text">Ara</span></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="vans-header-bottom-area col-md-12">
          <div class="vans-header-bottom-area-items">
            <ul class="vans-d-flex owl-carousel owl-loaded">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="
                    transform: translate3d(-4140px, 0px, 0px);
                    transition: all 0.25s ease 0s;
                    width: 8280px;
                  "
                >
                  <div class="owl-item cloned" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-isPopup = referance1 - referance2 = popupContentId"
                      class=" "
                      title="350 TL VE ÜZERİ ÜCRETSİZ KARGO"
                    >
                      350 TL VE ÜZERİ ÜCRETSİZ KARGO
                    </li>
                  </div>
                  <div class="owl-item cloned" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-"
                      class=" "
                      title="ÜCRETSİZ İADE SEÇENEĞİ"
                    >
                      ÜCRETSİZ İADE SEÇENEĞİ
                    </li>
                  </div>
                  <div class="owl-item" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-isPopup = referance1 - referance2 = popupContentId"
                      class=" "
                      title="350 TL VE ÜZERİ ÜCRETSİZ KARGO"
                    >
                      350 TL VE ÜZERİ ÜCRETSİZ KARGO
                    </li>
                  </div>
                  <div class="owl-item active" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-"
                      class=" "
                      title="ÜCRETSİZ İADE SEÇENEĞİ"
                    >
                      ÜCRETSİZ İADE SEÇENEĞİ
                    </li>
                  </div>
                  <div class="owl-item cloned" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-isPopup = referance1 - referance2 = popupContentId"
                      class=" "
                      title="350 TL VE ÜZERİ ÜCRETSİZ KARGO"
                    >
                      350 TL VE ÜZERİ ÜCRETSİZ KARGO
                    </li>
                  </div>
                  <div class="owl-item cloned" style="width: 1380px">
                    <li
                      data-toggle=""
                      data-id=""
                      data-target="#headerBottomAreaPopUp-"
                      class=" "
                      title="ÜCRETSİZ İADE SEÇENEĞİ"
                    >
                      ÜCRETSİZ İADE SEÇENEĞİ
                    </li>
                  </div>
                </div>
              </div>
              <div class="owl-nav disabled">
                <div class="owl-prev">prev</div>
                <div class="owl-next">next</div>
              </div>
              <div class="owl-dots disabled"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
