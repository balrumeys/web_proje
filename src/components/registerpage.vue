<template>
  <div class="member-inside">
    <div class="col-xs-12 member-container">
      <div class="vans-my-account-area">
        <div class="breadcrumb">
          <div class="myaccount-breadcrumbs">
            <a href="/" class="breadcrumb-home">Anasayfa</a>
            <a href="/Uye" class="breadcrumb-myaccount"
              >Giriş Yap/Siparişimi Takip Et &gt;
            </a>
            <a href="#" class="breadcrumb-myaccount">Hesap Oluştur </a>
          </div>
        </div>
      </div>

      <div class="register-box-area">
        <div class="member-register col-md-6">
          <div class="register-box">
            <div class="member-header">
              <div class="title">HESAP OLUŞTUR</div>
              <p class="required-text">
                <span class="required-star">* </span>Tüm alanlar zorunludur.
              </p>
            </div>

            <form
              id="signInForm"
              autocomplete="off"
              method="post"
              action="/Uye/KayitOl"
            >
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="feFowPWkdtL86oKJnl_6IApFH1tkODdnMb0xb1rA9MkSMuT3_98QF-1otTbtj2LZs764-IE-hB8pAoZ12EAhvLwhzFxqAv20x-noCs_6D16u3wI_y7MZ8lfvTO9BkKpiHHfOBA2"
              />
              <div class="name-surname-sex">
                <input id="ReturnUrl" name="ReturnUrl" type="hidden" value="" />
                <div class="m-row name">
                  <div>
                    <span class="required-star">* </span>
                    <label>Ad </label>
                  </div>
                  <input
                    autocomplete="false"
                    class="fa-input"
                    id="Register_Name"
                    name="Register.Name"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Name"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row surname">
                  <div>
                    <span class="required-star">* </span>
                    <label>Soyad </label>
                  </div>
                  <input
                    autocomplete="off"
                    class="fa-input"
                    id="Register_Surname"
                    name="Register.Surname"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Surname"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row phone">
                  <div>
                    <span class="required-star">* </span>
                    <label>Telefon </label>
                  </div>

                  <input
                    id="Register_Tel"
                    name="Register.Tel"
                    type="text"
                    value=""
                  />
                  <span class="icon-arrow-down-indicator"></span>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Tel"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row gender">
                  <div>
                    <label>Cinsiyet </label>
                  </div>

                  <select id="Register_Sex" name="Register.Sex">
                    <option value="">Seçiniz</option>
                    <option value="Erkek">Erkek</option>
                    <option value="Kadın">Kadın</option>
                  </select>
                  <span class="icon-arrow-down-indicator"></span>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Sex"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>

              <div class="email-password">
                <div class="m-row e-mail-area">
                  <div>
                    <span class="required-star">* </span>
                    <label>Email Adresi </label>
                  </div>
                  <input
                    autocomplete="off"
                    class="fa-input"
                    id="Register_Email"
                    name="Register.Email"
                    type="email"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Email"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row password-area-cli">
                  <div>
                    <span class="required-star">* </span>
                    <label
                      >Şifre <a class="tooltip-password-info-area"></a
                    ></label>
                  </div>
                  <input
                    autocomplete="off"
                    class="fa-input input-password"
                    id="Password"
                    name="Register.Password"
                    type="password"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.Password"
                    data-valmsg-replace="true"
                  ></span>
                  <p class="input-info">
                    Şifre en az 8 karakter içermeli ve 1 rakam, 1 büyük harf ve
                    1 küçük harf içermelidir.
                  </p>
                </div>
                <div class="m-row password-area-cli">
                  <div>
                    <span class="required-star">* </span>
                    <label>Şifre Tekrarı </label>
                  </div>
                  <input
                    autocomplete="off"
                    class="fa-input input-password"
                    id="Register_PasswordAgain"
                    name="Register.PasswordAgain"
                    type="password"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Register.PasswordAgain"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row recaptcha">
                  <div class="form-group">
                    <label for="FormReCaptchaHidden"></label>
                    <div
                      id="FormReCaptcha"
                      data-js="grecaptcha"
                      data-type="image"
                      name="FormReCaptcha"
                    >
                      <div style="width: 304px; height: 78px">
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LekmgIiAAAAANbixMrxsT3F3fykSau7AqYmG9zI&amp;co=aHR0cHM6Ly93d3cudmFucy5jb20udHI6NDQz&amp;hl=tr&amp;type=image&amp;v=RGRQD9tdxHtnt-Bxkx9pM75S&amp;size=normal&amp;cb=suu9qu8zr5qw"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-5tjzhj74yc5q"
                            frameborder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          class="g-recaptcha-response"
                          style="
                            width: 250px;
                            height: 40px;
                            border: 1px solid rgb(193, 193, 193);
                            margin: 10px 25px;
                            padding: 0px;
                            resize: none;
                            display: none;
                          "
                        ></textarea>
                      </div>
                      <iframe style="display: none"></iframe>
                    </div>
                    <input
                      type="text"
                      id="FormReCaptchaHidden"
                      name="FormReCaptchaHidden"
                      data-js="HiddenReCaptcha"
                      data-recaptcha="true"
                      class="hidden-input"
                    />
                  </div>
                </div>
              </div>

              <div class="form-bottom-area">
                <div class="m-row register-check">
                  <input
                    class="Register_Contract"
                    data-val="true"
                    data-val-required="The Contract field is required."
                    id="Register_Contract"
                    name="Register.Contract"
                    type="checkbox"
                    value="true"
                  /><input
                    name="Register.Contract"
                    type="hidden"
                    value="false"
                  />
                  <label class="checkbox-label" for="Register_Contract">
                    <a href="/vans_uyelik-sozlesmesi">Üyelik Sözleşmesi</a>’ni
                    ve
                    <a href="/vans_kvkk-aydinlatma-metni"
                      >KVKK Aydınlatma Metni</a
                    >’ni okuduğumu ve anladığımı ve Üyelik Sözleşmesi’ndeki
                    hükümleri kabul ettiğimi beyan ederim.
                  </label>
                  <div class="check-control">
                    <label></label>
                  </div>
                </div>
                <div class="abroad-text" style="display: none">
                  <p>
                    VF Ege Giyim Sanayi ve Ticaret Ltd. Şti., Müşteri Hizmetleri
                    süreçlerinde (üyeliğin alınması, siparişin kabulü, ödemenin
                    alınması, faturanın iletilmesi, kargo ve iade süreçleri,
                    iade ürünün teslim alınması gibi) çeşitli aşamalarda e-posta
                    aracılığı ile bilgilendirmeler yapmaktadır. Bu e-postalar
                    yurtdışında barındırılan hizmetler kullanılarak
                    hazırlanmaktadır. Bu kapsamda sadece adınız, soyadınız,
                    e-posta adresiniz, fatura ve teslimat adresleriniz ve satın
                    aldığınız ürünlere ait bilgiler, yurtdışında barındırılan
                    sistemlerine aktarılmakta ve e-postalar bu sistemlerden
                    gönderilmektedir. Gönderimden 1 gün sonra aktarılan tüm bu
                    bilgiler ilgili yurtdışı sistemlerinden kalıcı olarak
                    silinmektedir.
                  </p>
                </div>
                <div class="m-row register-subscribe">
                  <input
                    class="Register_Subscribe"
                    data-val="true"
                    data-val-required="The Subscribe field is required."
                    id="Register_Subscribe"
                    name="Register.Subscribe"
                    type="checkbox"
                    value="false"
                  /><input
                    name="Register.Subscribe"
                    type="hidden"
                    value="false"
                  />
                  <label class="checkbox-label" for="Register_Subscribe">
                    VF Ege Giyim Sanayi ve Ticaret Limited Şirketi’nin Vans
                    markası için e-posta aracılığıyla tarafıma ticari elektronik
                    ileti göndermesine
                    <a
                      href="javascript:void(0);"
                      rel="nofollow"
                      data-target="#registerEpostaModal"
                      data-toggle="modal"
                      class="order-contract-link"
                      data-id="4454"
                    >
                      <span class="text-underline">izin</span> </a
                    >veriyorum.
                  </label>
                </div>
                <div class="abroad-text-2" style="display: none">
                  <p>
                    VF Ege Giyim Sanayi ve Ticaret Ltd. Şti., e-posta aracılığı
                    ile Ticari Elektronik İleti gönderirken, yurtdışında
                    barındırılan hizmetleri kullanmaktadır. Bu kapsamda sadece
                    adınız, soyadınız, e-posta adresiniz ve satın aldığınız
                    ürünlere ait bilgiler yurtdışında barındırılan Emarsys
                    sistemlere aktarılmaktadır ve e-postalar bu sistemlerden
                    gönderilmektedir.
                  </p>
                </div>
                <div class="m-row register-subscribe">
                  <input
                    class="Register_Subscribe2"
                    data-val="true"
                    data-val-required="The Subscribe2 field is required."
                    id="Register_Subscribe2"
                    name="Register.Subscribe2"
                    type="checkbox"
                    value="true"
                  /><input
                    name="Register.Subscribe2"
                    type="hidden"
                    value="false"
                  />
                  <label class="checkbox-label" for="Register_Subscribe2">
                    VF Ege Giyim Sanayi ve Ticaret Limited Şirketi’nin Vans
                    markası için sms aracılığıyla tarafıma ticari elektronik
                    ileti göndermesine
                    <a
                      href="javascript:void(0);"
                      rel="nofollow"
                      data-target="#registerSmsModal"
                      data-toggle="modal"
                      class="order-contract-link"
                      data-id="4454"
                    >
                      <span class="text-underline">izin</span> </a
                    >veriyorum.
                  </label>
                </div>
              </div>

              <div class="m-row succes-btn register-warning-area">
                <div class="register-warning"></div>
                <button
                  class="btn-dark-border btn-join"
                  onclick="memberModule.registerValidation();"
                >
                  <span>Üye Ol</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#member {
  display: block;
  float: left;
  width: 100%;
}

#member .member-inner {
  /* padding: 30px 0px; */
  width: 100%;
}

/* - - - - - LOGIN AND REGISTER SECTION - - - - - */
#member .member-container {
  padding-top: 25px;
  padding-bottom: 40px;
  max-width: 1380px;
  float: none;
  display: block;
  text-align: left;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  margin: auto;
}

#member .member-login {
  padding-left: 60px;
  padding-right: 60px;
  min-height: 640px;
  background: white;
  border: 1px solid #e8e8e2;
  padding: 30px;
  height: auto; /* margin-top: 20px; */
  width: 660px;
}

#member .member-login .login-box {
  display: block;
  float: left;
  width: 100%;
  padding-bottom: 15px;
}

#member .member-register {
  margin: 20px 0 50px;
  padding: 30px;
  margin-top: 15px;
  margin-left: -5px;
}

#member .member-header {
  text-transform: uppercase;
  font-size: 20px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
  line-height: 22px;
  font-weight: normal;
  text-align: center;
  color: #333333;
}

#member .m-row {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  margin-bottom: 2px;
}

#member .m-row.width-50 {
  width: 50%;
}

#member input[type="text"],
#member input[type="email"],
#member input[type="password"],
#member input[type="Tel"] {
  display: block;
  float: left;
  width: 100%;
  height: 40px;
  color: #333333;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  font-family: Arial;
  font-weight: 300;
  font-size: 16px;
  text-indent: 10px;
  margin-bottom: 6px;
  margin-top: 0;
  margin-left: 1px;
}

#member input[type="text"]:focus,
#member input[type="email"]:focus,
#member input[type="password"]:focus,
#member input[type="Tel"]:focus {
  border-color: rgba(0, 0, 0, 0.5);
}

#member input[type="checkbox"] {
  background-color: #f9f9f9;
  border: solid 1px #cccccc;
  font-size: 28px;
  cursor: pointer;
  float: left;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
  align-self: center;
}
#member input[type="checkbox"]:checked:before {
  display: inline-block;
  color: #333333;
  background-color: #ffffff;
  border: solid 1px #333333;
  padding: 0 4px 2px 5px;
  font-family: "icomoon";
  content: "\e90a";
}
*/ #member .checkbox-label {
  padding-left: 10px;
  margin: 0;
  font-size: 14px;
  font-family: Arial, "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 400;
  line-height: 20px;
  display: inline-block;
  text-transform: none;
  color: #767676;
  width: 100%;
}

#member .checkbox-label a {
  color: #589bc6;
  font-weight: 500;
}

#member input[type="text"].error,
#member input[type="email"].error,
#member input[type="password"].error,
#member input[type="Tel"].error {
  border: solid 1px #c41230 !important;
  margin-bottom: 20px;
  background-color: #e29597;
  font-family: Arial;
}

#member label.error {
  display: block;
  float: left;
  width: 100%;
  position: absolute;
  top: 76px;
  color: #ed1b2a;
  font-size: 12px;
  font-weight: 300;
  text-transform: none;
}

#member .field-validation-error {
  display: block;
  float: left;
  width: 100%;
  color: #c41230;
  font-size: 12px;
  font-weight: 300;
  text-transform: none;
}

#member .placeholder {
  pointer-events: none;
  font-size: 16px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 22px;
  position: absolute;
  left: 10px;
  margin: 12px 0;
  color: #949494;
  z-index: 100;
  transition: all 0.2s;
  text-transform: none;
  background: #fff;
}

#member .placeholder.hover {
  color: #333333;
  text-transform: uppercase;
  font-size: 11px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 400;
  line-height: 13px;
  color: #949494;
  text-transform: none;
  margin: 0;
  left: 6px;
  top: -7px;
  cursor: text;
  padding-left: 5px;
  padding-right: 5px;
  line-height: normal;
}

#member .show-password {
  position: absolute;
  top: 10px;
  font-size: 26px;
  right: 10px;
  color: #cccccc;
}

#member .show-password .icon-Show {
  display: none;
}

#member .show-password.active .icon-Show {
  display: block;
}

#member .show-password.active .icon-Hide {
  display: none;
}

#member .btn-forgot-pass {
  font-size: 16px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 20.8px;
  color: #4990e2;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 10px;
  display: block;
}

#member .btn-guest-forgot-pass {
  color: #c41230;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
}

#member .privacy-text {
  font-size: 12px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 16px;
  text-transform: none;
  color: #767676;
  text-align: left;
  margin: 0 0 20px 0;
}

#member .privacy-text a {
  color: #333;
  font-weight: bold;
}

#member .btn-login {
  margin: 0;
  width: 100%;
  max-width: 100%;
  background-color: #c9192e;
}

#member .btn-join {
  max-width: 100%;
  width: 180px;
  text-transform: uppercase;
  background-color: #c9192e;
  color: #fefefe;
  margin-right: 0;
  margin: 0 0 1rem 0;
  border: 1px solid transparent;
  border-radius: 0;
  height: 50px;
  margin-left: 10px;
  margin-top: 18px;
}

#member .register-info,
#member .input-info {
  font-weight: 300;
  line-height: 20px;
  text-transform: none;
  color: black;
  text-align: left;
  margin: 0;
  position: absolute;
  left: 100%;
  right: 0;
  width: 100%;
  padding-left: 10px;
  bottom: 10px;
}

#member .register-info a {
  color: #333;
  font-weight: bold;
}

#member .line-seperator {
  width: 220px;
  border-top: solid 2px #dddddd;
  margin: 30px auto;
}

#member .login-error {
  font-size: 14px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 20px;
  color: #c41230;
  margin-bottom: 10px;
}

#member .register-warning {
  background-color: #eac6c5;
  border-color: #dca1a0;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  text-align: center;
  text-transform: none;
  padding: 0;
  color: #e72b1e;
}

#member .register-warning a {
  color: #2b2b2b;
  text-decoration: underline;
}

#member .register-warning a.red {
  color: red;
}

/* - - - - - LOGIN AND REGISTER SECTION - - END - */

/* - - - - - MEMBER LEFT & MEMBER RIGHT GENERAL - - - - - */
#member .member-left {
  width: 100%;
  float: left;
  padding-right: 15px;
}

#member .member-right {
  background-color: #fefefe;
  float: left;
  margin-bottom: 20px;
  padding: 0 25px 15px;
  position: relative;
  width: 100%;
}

#member .member-right .member-title {
  color: #333333;
  text-transform: uppercase;
  font-size: 22px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
  line-height: 24px;
  margin: 25px 0;
  margin-bottom: -5px;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#member .member-right .member-content {
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

#member .member-right .member-content .empty-content {
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #333333;
}
/* - - - - - - MEMBER LEFT & RIGHT GENERAL - - END - */

/* - - - - - MEMBER ACCOUNT MENU SECTION - - - - -*/
#member .account-menu .account-menu-inner ul {
  list-style: none;
  padding: 0;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  width: 100%;
  margin: 27px 0;
  margin-bottom: 15px;
}

#member .account-menu .account-menu-inner ul > li > a {
  padding: 10px 25px;
  color: #929292;
  display: block;
  font-size: 15px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: bold;
  line-height: 22px;
  color: #767676;
  text-transform: uppercase;
}

#member .account-menu .account-menu-inner ul > li.active > a {
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
  background: #fefefe;
  border-top: 2px solid #1c1c1c;
  color: #1c1c1c;
  height: 40px;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}
/* - - - - - MEMBER ACCOUNT MENU SECTION - - END - */

/* - - - - - PERSONAL INFORMATION SECTION - - - - - */
#member .member-right .information-content {
  width: 100%;
  margin-top: 18px !important;
  margin-left: 6px !important;
}

#member .member-right .information-content .btn-edit {
  margin: 0px;
  width: 100%;
  max-width: 100%;
  background-color: #c9192e;
  color: #fefefe;
}

#member .member-right .information-content .result-message {
  font-size: 14px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 20px;
  color: #009900;
  padding: 5px 0 10px 10px;
}

#member .member-right .information-content .site-alert {
  font-size: 14px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 20px;
  color: #009900;
  padding: 0px 0 10px 10px;
}

#member .member-right .information-content .btn-change-pass {
  margin: -1px;
  width: 650px;
  max-width: 100%;
  margin-top: 36px !important;
}
/* - - - - - PERSONAL INFORMATION SECTION - - END - */

/* - - - - - ORDER TRACKER SECTION - - - - - */
#member.order-tracker .member-title {
  text-align: center;
}

#member.order-tracker .member-right {
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

#member.order-tracker .btn-order-tracker {
  margin: 0;
  width: 100%;
  max-width: 100%;
}

#member.order-tracker .order-tracker-text {
  font-size: 16px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 22px;
  text-transform: none;
}

#member.order-tracker .order-tracker-text p {
  margin-bottom: 10px;
}

#member.order-tracker .order-tracker-text a {
  font-size: 14px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 400;
  line-height: 20px;
  color: #1664be;
  text-transform: none;
}

#member.order-tracker .line-seperator {
  display: block;
  float: left;
  width: 100%;
  margin: 40px 0px 20px 0px;
  border-top: 1px solid #eee;
  clear: both;
}

#member.order-tracker input#txtOrderNumber {
  margin: 0;
}

#member.order-tracker label#txtOrderNumber-error {
  padding: 20px 0;
  position: relative !important;
  top: 0 !important;
  padding-bottom: 0;
}

#member.order-tracker label#txtEmail-error {
  padding: 0;
  position: relative !important;
  top: 0 !important;
}
/* - - - - - ORDER TRACKER SECTION - -  END - */

/* - - - - - FORGOT PASSWORD SECTION - - - - - */
#forgotPasswordModal .modal-dialog {
  width: 480px;
  max-height: calc(100% - 70px);
  margin-top: 100px;
}

.forgot-password-popup p {
  font-size: 16px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 22px;
  text-align: center;
}

.forgot-password-popup .m-row {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  margin-bottom: 10px;
}

.forgot-password-popup input[type="email"] {
  display: block;
  float: left;
  width: 100%;
  height: 45px;
  color: #333333;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-indent: 10px;
}

.forgot-password-popup input[type="email"]:focus {
  border-color: rgba(0, 0, 0, 0.5);
}

.forgot-password-popup .placeholder {
  pointer-events: none;
  font-size: 16px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 300;
  line-height: 22px;
  position: absolute;
  left: 10px;
  margin: 12px 0;
  color: #949494;
  z-index: 100;
  transition: all 0.2s;
  text-transform: none;
  background: #fff;
}

.forgot-password-popup .placeholder.hover {
  color: #333333;
  text-transform: uppercase;
  font-size: 11px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 400;
  line-height: 13px;
  color: #949494;
  text-transform: none;
  margin: 0;
  left: 6px;
  top: -7px;
  cursor: text;
  padding-left: 5px;
  padding-right: 5px;
  line-height: normal;
}

.forgot-password-popup .btn-forgot-password {
  margin: 0;
  max-width: 100%;
  width: 100%;
}

#formForgotPassword {
  width: 100%;
  margin: 0 auto; /* min-height: 115px; */ /* overflow: hidden; */
  display: block; /* padding: 10px 0px; */
}

.check-icon {
  font-size: 51px;
  color: #1e9e1e;
  margin-bottom: 10px;
  text-align: center;
}

.minus-icon {
  font-size: 51px;
  margin-bottom: 10px;
  text-align: center;
}

.minus-icon:before {
  background: #c41230;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  color: #fff;
  line-height: 40px;
}
/* - - - - - FORGOT PASSWORD SECTION - - END - */

/* - - - - - UYELIK IPTALI - - - - - */
#member .member-cancel-container {
  padding-top: 35px;
  padding-bottom: 40px;
  margin: 0 auto 50px;
  max-width: 842px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  float: none;
  display: block;
  text-align: left;
}

#member .member-cancel-container .note {
  font-weight: 300;
}

#member .member-cancel-header {
  text-transform: uppercase;
  font-size: 20px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: #333333;
  padding: 0 0 25px 0;
  margin-top: 50px;
}

#member .btn-unsubscribe {
  margin: 0;
  width: 100%;
  max-width: 100%;
}
/* - - - - - UYELIK IPTALI - - END - */

/*vans */
.member-inside {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: center;
  background: transparent;
}

#member .member-header div.title {
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #2b2b2b;
  text-rendering: optimizeLegibility;
  font-size: 22px;
  text-align: left;
}

#member .member-header p {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  display: block;
  font-weight: 300;
  text-align: left;
  color: #2b2b2b;
  margin-top: 10px;
  margin-bottom: 20px;
  text-rendering: optimizeLegibility;
  clear: none;
  width: 100%;
  text-transform: none;
}

#loginForm div label {
  color: #64686b;
  font-size: 1em;
  margin-top: 5px;
}

#loginForm div {
  align-items: center;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
}

.login-error {
  display: none;
  margin-top: -25px;
  color: #ed1b2a !important;
  background-color: #efe5e2;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 16px !important;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold !important;
  padding: 20px 0 !important;
}

.login-success {
  display: none;
  margin-top: -25px;
  color: #28a745 !important;
  background-color: #c2efcc;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 16px !important;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold !important;
  padding: 20px 0 !important;
}

#member .btn-login:hover {
  color: #fefefe;
  font-weight: 500;
  background: #a11425;
}

.text-align-center.w100 {
  font-family: "HelveticaNeue", Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: #2b2b2b;
  font-weight: 400;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: center;
  padding: 7px 0;
}

.login-box-area {
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  margin-top: 13px;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: space-between;
}

.member-order-control {
  min-height: 640px;
  background: white;
  border: 1px solid #e8e8e2;
  padding: 30px;
  margin-left: 20px;
  width: 660px;
  margin: 0;
}

.member-order-control .row {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin-right: 0 !important;
}

.member-order-control form#frmOrderTracker {
  width: 100%;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.member-order-control #frmOrderTracker .m-row > div {
  align-items: center;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  font-family: Helvetica Neue, Arial, sans-serif;
}

.member-order-control #frmOrderTracker .m-row > div label {
  color: #64686b;
  font-size: 1em;
  margin-top: 9px;
}

.member-order-control #frmOrderTracker .col-sm-12.col-md-12 {
  padding: 0;
  margin: 0;
}

.member-order-control #frmOrderTracker button#sbmtOrderTracker {
  margin-top: 50px;
  text-transform: uppercase;
  background-color: #c9192e;
  color: #fefefe;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
}

.member-order-control #frmOrderTracker button#sbmtOrderTracker:hover {
  background-color: #a11425;
  color: #fefefe;
}

.member-password-control #member .member-container .container {
  padding: 0;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.member-password-control .member-logged.forgot-password {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 660px;
}

.member-password-control div#member-title {
  display: none;
}

.member-password-control .disp-flex {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-wrap: wrap;
}

.member-password-control .j-center {
  justify-content: center;
}

.member-password-control .forgot-form {
  background-color: #fefefe;
  border: 1px solid #e8e8e2;
  height: auto;
  max-height: 450px;
  margin: 10px 0;
  padding: 8%;
}

.member-password-control .member-logged.forgot-password label.fa-lbl {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  font-size: 0.875em;
  text-align: left;
  color: #64686b;
  display: block;
  margin: 0;
  line-height: 1.8;
  float: left;
  clear: none;
}

.member-password-control .member-logged.forgot-password h3 {
  font-size: 1.375em;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-style: normal;
  font-weight: 700;
}

.member-password-control button.green-btn.btn-forgot {
  margin-top: 20px;
  text-transform: uppercase;
  background-color: #c9192e;
  color: #fefefe;
  display: block;
  width: 230px;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
}
/*.member-password-control .m-row.captcha { display: none !important; }*/
.member-password-control .forgot-form .col-xs-12.col-md-12 {
  padding: 0;
  margin: 0;
}

.member-password-control .cancel-btn {
  text-align: center;
  width: 230px;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: franklin-gothic-urw-cond, Arial Narrow Bold, Arial, sans-serif;
  font-size: 16px;
}

.member-password-control button.green-btn.btn-forgot span {
  font-weight: normal;
}

.member-password-control button.green-btn.btn-forgot:hover {
  background: #a11425;
}

.member-register {
  min-height: 640px;
  background: white;
  height: auto;
  width: 1340px;
}

.register-box {
  display: block;
  float: left;
  width: 100%; /* margin-top: 10px; */
  padding-bottom: 15px;
}

.register-box-area {
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}

form#signInForm div > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
  margin-top: 2px;
  position: relative;
}

form#signInForm div > div label {
  font-size: 1em;
  margin-top: 5px;
}

.m-row.password-area-cli > div > label {
  display: flex;
  align-items: center;
}

.register-box .member-header {
  padding-left: 6px;
  padding-bottom: 5px;
}

button.btn-dark-border.btn-join span {
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: normal;
}

#signInForm .m-row {
  height: auto;
}

form#signInForm {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
}

.name-surname-sex {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  padding-right: 0.625rem;
  padding-left: 0.525rem;
}

.email-password {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}

.form-bottom-area {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  margin-top: 7px;
}

.form-bottom-area .m-row {
  display: flex !important;
  width: 100% !important;
  align-items: center;
  align-content: center;
  height: auto;
}

input#Register_Contract {
  color: #c9192e;
  margin: 0;
  background: #fff;
  width: 15px !important;
  height: 15px !important;
}

input#Register_Subscribe,
input#Register_Subscribe2 {
  width: 15px !important;
  height: 15px !important;
  margin-right: 10px;
  color: #c9192e;
  margin: 0;
  background: #fff;
}

.name-surname-sex .m-row.name {
  width: 420px !important;
}

.register-box p.required-text {
  font-size: 12px !important;
  margin: 0 !important;
}

.email-password .m-row input {
  width: 430px !important;
}

p.input-info {
  font-family: Arial !important;
  font-size: 0.75em !important;
}

[type="checkbox"]:checked:after {
  content: "✓";
  display: block;
  font-size: 12px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  left: 0;
  line-height: 1;

  text-align: center;
  top: 0;
}

.m-row.register-subscribe {
  margin-top: 15px !important;
}

.pass-change-success {
  display: none;
  justify-content: center;
  width: 100%;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  float: none;
  clear: both;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
  margin-bottom: 10px;
  color: #10b782;
  background-color: #dfede5;
  text-align: center;
  height: 55px;
  align-items: center;
}

.pass-change-error {
  display: none;
  justify-content: center;
  width: 100%;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  float: none;
  clear: both;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ed1b2a;
  background-color: #efe5e2;
  text-align: center;
  height: 55px;
  align-items: center;
}

.back-to-top {
  display: none;
}

label#Login_Password-error {
  top: 70px !important;
}

label#Login_Email-error {
  top: 70px !important;
}

select#Register_Sex {
  width: 100%;
}

.styled.error#Register_Contract {
  border: 1px solid red;
}

.check-control.Register-Contract {
  position: absolute !important;
  top: -64px;
  width: 100%;
}

input#Register_Contract:hover {
  border: 1px solid red;
}

.m-row.register-check {
  position: relative;
}

.check-control {
  position: absolute !important;
  top: inherit;
  left: 0;
  width: 100%;
}

.check-control label {
  top: 0 !important;
  left: 0;
  position: absolute !important;
  width: 100%;
}

input#Register_Subscribe:hover,
input#Register_Subscribe2:hover {
  border: 1px solid red;
}

button.btn-sign-up:hover {
  background-color: #444343;
}

#captchaError {
  display: none;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
}

#EmailError {
  display: none;
}

p.response-text {
  font-family: Arial, "HelveticaNeue", sans-serif;
  font-size: 16px;
}

.register-warning p {
  transition: 0.5s;
  padding: 15px;
}

span.icon-arrow-down-indicator {
  position: absolute;
  right: 0;
  top: 60%;
  margin-right: 10px;
  color: #64686b;
  font-size: 12px;
}

.account-menu .member-title span {
  color: #333333;
  text-transform: uppercase;
  font-size: 19px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 25px;
  margin-left: 10px;
}

.account-menu .member-title {
  margin-top: 53px;
}

.member-right .member-title span:nth-child(2) {
  color: #333333;
  text-transform: uppercase;
  font-size: 22px;
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
  align-items: center;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: center;
}

/*current user information page styles*/

/*general*/
.result-message-newsletter,
.result-message,
.result-message-password-change {
  display: none;
  color: #10b782;
  background-color: #dfede5;
  margin: 15px 0;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
  padding-top: 15px;
  padding-bottom: 15px;
  clear: both;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
}

.m-row.name > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.m-row.surname > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.m-row.mobile > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.m-row.gender > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.m-row.birthday > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.m-row.storelist > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.col-6-row .m-row.name > div span,
.col-6-row .m-row.name > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row .m-row.surname > div span,
.col-6-row .m-row.surname > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row .m-row.gender > div span,
.col-6-row .m-row.gender > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row .m-row.mobile > div span,
.col-6-row .m-row.mobile > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row .m-row.birthday > div span,
.col-6-row .m-row.birthday > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row .m-row.storelist > div span,
.col-6-row .m-row.storelist > div label {
  margin-top: 4px;
  font-size: 16px;
}

.col-6-row:nth-child(2) {
  width: 670px;
  height: 244px;
  padding-left: 13px;
}

.col-6-row:nth-child(1) {
  width: 667px;
  height: 244px;
}
/*general*/
#member .member-right .member-title p.required-text {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
  width: 100%;
  align-self: center;
  margin-top: 12px;
  font-size: 12px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: normal;
  text-transform: capitalize;
}

.col-full-row.d-flex-dir-row {
  flex-direction: row;
}

.col-full-row > .m-row > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.col-full-row {
  width: 100%;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: column;
}

.m-row.storelist > select {
  width: 100%;
}

.m-row.gender select {
  width: 100%;
  margin-bottom: 7px;
}

.containers {
  max-width: 86.25rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}

#formKisiselBilgiler button.btn-edit {
  margin: 23px 0 !important;
}

#formKisiselBilgiler input {
  padding: 0;
}

#kisisel span {
  font-family: "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 700;
}

.change-pass-desc {
  line-height: normal;
  font-size: 16px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: normal;
  color: #2b2b2b;
  margin-top: 16px;
  margin-bottom: 5px;
}

.password-change form .m-row > div {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
}

.change-password-area p.required-text {
  margin-top: 0px !important;
}

.member-content.information-content.password-change label {
  margin-top: -1px;
  font-size: 16px;
}

.member-content.information-content.password-change input {
  width: 655px !important;
  margin-top: 2px !important;
  margin-left: -2px !important;
}

input#PasswordAgain {
  margin-top: 10px !important;
  margin-left: -2px !important;
}

input#PasswordAgain:nth-child(2) {
  margin-top: 4px !important;
}

input#txtEmail {
  margin-bottom: 0 !important;
}

.newsletter-subscription {
  margin-top: 20px;
}

.m-row.logged .dflex {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
  height: auto;
  margin: 0 !important;
}

.m-row.logged .dflex input {
  margin: 0;
}

button.btn-edit.newsletter-edit-btn {
  width: 95px !important;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #c9192e;
  color: #fefefe;
  margin-top: 20px !important;
}

.member-password-control .member-right.disp-flex.j-center {
  background: transparent !important;
}

.captcha label.fa-lbl {
  margin-bottom: 5px !important;
}

input#Contact_BirthDay,
input#Contact_BirthMonth,
input#Contact_BirthYear {
  width: 33% !important;
  padding: 10px;
  margin-bottom: 7px;
}

.birth-date-area {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: space-between;
}

.currentUserDateControlValidation {
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.currentUserDateControlValidation label {
  position: relative !important;
  top: 0 !important;
}

div#registerSmsModal .icon-icon-x,
div#registerContractModal .icon-icon-x,
div#registerEpostaModal .icon-icon-x {
  position: absolute;
  top: 1%;
  right: 1%;
  z-index: 1;
}

div#registerSmsModal .icon-icon-x:before,
div#registerContractModal .icon-icon-x:before,
div#registerEpostaModal .icon-icon-x:before {
  font-size: 20px;
  color: #2b2b2b;
}

div#registerContractModal .modal-body,
div#registerEpostaModal .modal-body,
div#registerSmsModal .modal-body {
  margin: 0;
}

.eposta-label,
.sms-label {
  height: auto;
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex !important;
  align-items: center;
  margin-top: 2px;
  position: relative;
}

#formContactCancel label {
  font-size: 16px;
  margin-top: -1px;
}

#formContactCancel input {
  width: 655px !important;
}

#formContactCancel .contact-cancel {
  margin: -1px;
  width: 650px;
  max-width: 100%;
  margin-top: 36px !important;
}

#formContactCancel .contact-cancel:hover {
  background: #a11425 !important;
}

.contact-cancel-result {
  text-align: center;
  width: 655px;
  display: block;
  float: left;
  margin-top: 25px;
}
/*.contact-cancel-result.success { color: #10b782 !important;  background: #BEE5CC !important; }
.contact-cancel-result.error { color: #ed1b2a !important; background-color: #eac6c5 !important; }*/

.contact-cancel-form .warning-container {
  display: block;
  float: left;
  width: 655px;
  padding: 10px 0;
}

.contact-cancel-form .warning-container p {
  display: block;
  font-size: 0.9em;
}

.contact-cancel-form .warning-container ul {
  display: block;
  float: left;
  font-size: 0.9em;
  margin-top: 10px;
}

.contact-cancel-form .warning-container ul li {
  margin-bottom: 5px;
  list-style: disc;
  line-height: normal;
}

.shoes-warning-wrap {
  display: block;
  width: 60%;
  margin-left: 40%;
}

.shoes-warning-wrap p {
  line-height: normal !important;
  margin-top: 0 !important;
  font-weight: 300;
  font-family: inherit !important;
}

.order-contracts {
  display: block;
  float: left;
  width: 100%;
  margin-top: 10px;
  padding: 0px;
}

.contract-check {
  display: block;
  float: left;
  width: 100%;
  margin: 20px 0px 0px;
}

.contract-check .contract-item {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.contract-check .contract-item label.invalid {
  padding-left: 25px;
}

.information-form-content,
.order-contract-content {
  display: none;
  max-height: 600px;
}

.information-form-content .modal-body,
.order-contract-content .modal-body {
  max-height: 600px;
}

.contract-check a {
  font-size: 14px;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 300;
  line-height: 22px;
  text-transform: none;
  color: #333;
  padding-left: 10px;
  display: block;
  float: left;
  width: 90%;
  margin-top: -15px;
}

.contract-check .contract-item .text-underline {
  text-decoration: underline;
}

button.close {
  display: none !important;
  opacity: 0;
}

#myModal .modal-body {
  background-color: #f1f1eb;
  margin: 0;
  width: 100%;
  overflow: hidden;
  margin: 0;
  max-height: max-content !important;
  padding: 70px 30px 50px;
}

#myModal.modal.in .modal-dialog {
  width: 60%;
  height: 100%;
  margin-bottom: 0 !important;
}

.information-form-content::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}

div#myModal {
  margin-bottom: 20px;
}

div#myModal::-webkit-scrollbar {
  display: none;
}

#myModal button.close {
  display: block !important;
  z-index: 9;
  top: -5px;
  right: 0 !important;
  font-size: 19px !important;
}

#myModal .modal-header {
  display: block;
}

#myModal .modal-body {
  padding: 70px 30px 50px;
}

div#registerContractModal .modal-header,
h4.modal-title {
  display: block;
}

.member-right.change-password .forgot-form {
  width: 100%;
  display: flex;
}

.member-right.change-password .forgot-form > .col-md-4 {
  width: 100%;
  left: 0;
}

.member-right.change-password > .col-md-4 {
  width: 100%;
  left: 0;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
}

div#breadcrumbs {
  opacity: 0;
}

ul.breadcrumbs.member-breadcrumbs {
  margin-bottom: 0;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  #myModal .modal.in .modal-dialog {
    width: 95%;
  }

  #myModal button.close {
    display: block !important;
    z-index: 9;
    top: 0px;
    right: 0 !important;
    font-size: 15px !important;
  }

  #myModal .modal-header {
    display: block;
  }

  #myModal .modal-body {
    padding: 70px 30px 50px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  #myModal .modal.in .modal-dialog {
    width: 95%;
  }

  #myModal button.close {
    display: block !important;
    z-index: 9;
    top: -15px;
    right: 0 !important;
    font-size: 25px !important;
  }

  #myModal .modal-header {
    display: block;
  }

  #myModal .modal-body {
    padding: 70px 30px 50px;
  }

  .contract-item.form-row {
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 767px) {
  div#registerContractModal,
  div#registerEpostaModal,
  div#registerSmsModal {
    width: 100%;
    height: 100%;
    z-index: 999999;
  }

  div#registerContractModal.modal.in .modal-dialog {
    width: auto;
  }

  #formKisiselBilgiler input#Contact_WantsNewsletter,
  #formKisiselBilgiler input#Contact_IsSms {
    color: #c9192e;
    margin: 0;
    background: #fff;
    width: 15px !important;
    height: 15px !important;
  }

  .col-6-row:nth-child(2) {
    height: auto;
  }

  #formContactCancel input {
    width: 152px !important;
  }

  #formContactCancel .contact-cancel {
    margin-top: 20px !important;
  }

  .device .newsletter-area .member-right {
    height: auto !important;
    min-height: 450px;
  }

  .register-box-area .member-register.col-md-6.abroad-text-height {
    height: 1290px !important;
  }

  .check-control {
    bottom: 8px;
    top: unset;
  }

  .contact-cancel-result {
    width: 100%;
    padding: 0 25px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .contact-cancel-form .warning-container {
    width: 100%;
  }

  .shoes-warning-wrap {
    display: block;
    width: 100%;
    margin-left: 0;
    order: 3;
  }

  .contract-check {
    margin: 30px 0px 0px;
  }

  .contract-item.form-row {
    margin-bottom: 30px;
  }

  .xs-mb-0 {
    margin-bottom: 0 !important;
  }

  .xs-mb-30 {
    margin-bottom: 30px !important;
  }

  #myModal.modal.in .modal-dialog {
    width: auto;
  }

  #member .member-register {
    display: block;
    float: left;
    position: relative;
  }

  #member .m-row.width-50 {
    width: 100%;
  }

  #wrapper[data-path*="SifreDegistir"] #container {
    margin-top: 139px !important;
  }
}

@media only screen and (min-width: 768px) {
  .md-mt-20 {
    margin-top: 20px;
  }

  #registerSmsModal,
  #registerEpostaModal {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 999999;
  }
}

#signInForm .abroad-text,
#signInForm .abroad-text-2 {
  display: none;
}

#signInForm .abroad-text p,
#signInForm .abroad-text-2 p {
  padding-left: 25px;
  margin: 0;
  font-size: 14px;
  font-family: Arial, "franklin-gothic-urw-cond", "Arial Narrow Bold", Arial,
    sans-serif;
  font-weight: 400;
  line-height: 20px;
  display: inline-block;
  text-transform: none;
  color: #767676;
  width: 100%;
}

span.btn-edit {
  display: inline-block;
  vertical-align: middle;
  padding: 1em 1.8em;
  border: 1px solid transparent;
  border-radius: 0;
  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-family: franklin-gothic-urw-cond, Arial Narrow Bold, Arial, sans-serif;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1;
  text-align: center;
  cursor: pointer;
}

span.btn-edit:hover {
  background: #a11425;
}

#member .m-row.recaptcha {
  margin-top: 15px;
}

.input-title {
  margin-bottom: 20px;
  font-size: 15px;
}

.countdown {
  position: relative;
  width: 105px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.countdown:before {
  content: ":";
  position: absolute;
  left: calc(50% - 5px);
  width: 10px;
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.count-node {
  width: 45px;
  height: 60px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 -1px #000;
  background: #333;
  background-image: linear-gradient(#555, #333);
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
