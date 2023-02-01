<template>
  <div id="member" class="login-page">
    <div class="member-inside">
      <div class="col-xs-12 member-container">
        <div class="login-error"></div>
        <div class="vans-my-account-area">
          <div class="breadcrumb">
            <div class="myaccount-breadcrumbs">
              <a href="/" class="breadcrumb-home">Anasayfa</a>
              <a href="/Uye" class="breadcrumb-myaccount"
                >Giriş Yap/Siparişimi Takip Et
              </a>
            </div>
          </div>
        </div>

        <div class="login-box-area">
          <div class="member-login col-md-6">
            <div class="login-box">
              <div class="member-header">
                <div class="title">HESAP GİRİŞİ</div>
                <p>
                  Vans hesabın var mı? Siparişlerinizi görüntülemek ve daha
                  fazlası için giriş yapın
                </p>
              </div>

              <form id="loginForm" method="post" autocomplete="off">
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="eUpU9iG56Y_kJHbODx9X31Vj2949sc7sXdOKeA_YVZdRE5xLrBh3NBhs69EWw1X-QH_aHJgJ6eNPnrq5RBdaf0c1R51721vEbedQcxXuCbObipmhy-8G1_iWVGwApiGhdZ7mmw2"
                />

                <p class="required-text">
                  <span class="required-star">* </span>Zorunlu Alan
                </p>
                <div class="m-row">
                  <div>
                    <span class="required-star">* </span>
                    <label>Email Adresi </label>
                  </div>
                  <input
                    data-val="true"
                    data-val-regex="E-posta adresi geçerli değil."
                    data-val-regex-pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    data-val-required="* E-posta adresini girmelisin."
                    id="Login_Email"
                    name="Login.Email"
                    type="email"
                    value=""
                    autocomplete="off"
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Login.Email"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="m-row">
                  <div>
                    <span class="required-star">* </span>
                    <label>Şifre</label>
                  </div>
                  <input
                    class="input-password"
                    data-val="true"
                    data-val-required="* Şifreni girmelisin."
                    id="Login_Password"
                    name="Login.Password"
                    type="password"
                  />
                  <input
                    id="returnUrl_m-guest-body"
                    name="Login.ReturnUrl"
                    type="hidden"
                    value=""
                  />
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="Login.Password"
                    data-valmsg-replace="true"
                  ></span>
                  <a
                    href="javascript:void(0);"
                    title="Şifreyi Göster"
                    class="show-password"
                    ><i class="icon-Hide"></i><i class="icon-Show"></i
                  ></a>
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
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LekmgIiAAAAANbixMrxsT3F3fykSau7AqYmG9zI&amp;co=aHR0cHM6Ly93d3cudmFucy5jb20udHI6NDQz&amp;hl=tr&amp;type=image&amp;v=RGRQD9tdxHtnt-Bxkx9pM75S&amp;size=normal&amp;cb=4p2muw82zabb"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-k8gjqtk0zubf"
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
                <div class="m-row">
                  <a
                    href="/Uye/SifremiUnuttum"
                    rel="nofollow"
                    class="btn-forgot-pass"
                    title="Şifremi Unuttum"
                    >Şifremi Unuttum ?</a
                  >
                </div>
                <div class="m-row">
                  <button class="btn-login"><span>Giriş Yap</span></button>
                </div>
              </form>
              <span class="text-align-center w100">- ya da -</span>
              <div class="m-row">
                <button
                  onclick='window.location.href="/Uye/register";'
                  class="btn-sign-up"
                >
                  <span>Kayıt Ol </span>
                </button>
              </div>
            </div>
          </div>

          <div class="member-order-control col-md-6">
            <div class="order-control-form">
              <div class="member-header">
                <div class="title">SİPARİŞİMİ TAKİP ET / İADE OLUŞTUR</div>
                <p>
                  Hesabınız yok mu? Sipariş durumunu buradan kontrol edin veya
                  bir iade oluşturun.
                </p>
              </div>

              <div id="member" class="order-tracker">
                <div class="member-inner">
                  <div>
                    <div class="member-right">
                      <div class="member-content">
                        <div>
                          <form id="frmOrderTracker" method="post">
                            <div class="col-sm-12 col-md-12">
                              <div class="m-row">
                                <p class="required-text">
                                  <span class="required-star">*</span> Zorunlu
                                  Alan
                                </p>
                                <div>
                                  <span class="required-star">* </span>
                                  <label class=""> Sipariş numaranız </label>
                                </div>
                                <input
                                  type="text"
                                  id="txtOrderNumber"
                                  name="orderNumber"
                                  autocomplete="off"
                                />
                              </div>
                            </div>

                            <div class="col-sm-12 col-md-12">
                              <div class="m-row">
                                <div>
                                  <span class="required-star">* </span>
                                  <label class=""> Email Adresiniz</label>
                                </div>
                                <input
                                  type="email"
                                  id="txtEmail"
                                  name="email"
                                  autocomplete="off"
                                />
                              </div>
                            </div>

                            <div class="col-sm-12 col-md-12">
                              <div class="m-row tcenter">
                                <button
                                  id="sbmtOrderTracker"
                                  type="submit"
                                  class="btn-order-tracker"
                                >
                                  <span>Siparişi Sorgula</span>
                                </button>
                              </div>
                            </div>
                          </form>

                          <div class="col-md-12 col-sm-12">
                            <div id="tracker-result"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tracker-result" data-js="tracker-result"></div>
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.member-inside {
  display: -webkit-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  display: flex;
  justify-content: center;
  background: transparent;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.vans-my-account-area {
  padding-bottom: 30px;
  padding-left: 10px;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.breadcrumb {
  margin: 0;
  padding: 0;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.breadcrumb .myaccount-breadcrumbs a {
  color: #64686b;
  font-size: 0.875em;
  font-family: Helvetica Neue, Arial, sans-serif;
}
a,
a:active,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
a,
a:focus,
a:hover {
  text-decoration: none;
}
a {
  color: #589bc6;
}
a {
  background-color: transparent;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.breadcrumb .myaccount-breadcrumbs a.breadcrumb-home::after {
  content: ">";
  font-family: inherit;
  padding: 0 5px;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.breadcrumb .myaccount-breadcrumbs a {
  color: #64686b;
  font-size: 0.875em;
  font-family: Helvetica Neue, Arial, sans-serif;
}
a,
a:active,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
a,
a:focus,
a:hover {
  text-decoration: none;
}
a {
  color: #589bc6;
}
a {
  background-color: transparent;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#member .member-login {
  padding-left: 60px;
  padding-right: 60px;
  min-height: 640px;
  background: white;
  border: 1px solid #e8e8e2;
  padding: 30px;
  height: auto;
  /* margin-top: 20px; */
  width: 660px;
}
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-15,
.col-lg-35,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-15,
.col-md-35,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-15,
.col-sm-35,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-15,
.col-xs-35 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-15,
.col-lg-35,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-15,
.col-md-35,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-15,
.col-sm-35,
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-15,
.col-xs-35 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#member .member-login .login-box {
  display: block;
  float: left;
  width: 100%;
  padding-bottom: 15px;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

form {
  display: inline;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet form {
  display: block;
  margin-top: 0em;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#member .m-row {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  margin-bottom: 2px;
}
blockquote,
body,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
input,
legend,
li,
ol,
p,
pre,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet div {
  display: block;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
button.btn-sign-up {
  background-color: #2b2b2b;
  color: #fefefe;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  margin-top: 10px;
  text-transform: uppercase;
}
button {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem;
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
  background-color: #c9192e;
  color: #fefefe;
}
.button,
button {
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button,
input,
select,
textarea {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet button {
  appearance: auto;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: buttonface;
  margin: 0em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
button.btn-sign-up {
  background-color: #2b2b2b;
  color: #fefefe;
  display: block;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  margin-top: 10px;
  text-transform: uppercase;
}
button {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem;
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
  background-color: #c9192e;
  color: #fefefe;
}
.button,
button {
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button,
input,
select,
textarea {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet button {
  appearance: auto;
  writing-mode: horizontal-tb !important;

  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: buttonface;
  margin: 0em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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

a,
a:focus,
a:hover {
  text-decoration: none;
}
a {
  color: #589bc6;
}
a {
  background-color: transparent;
}
a,
a:active,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  outline: none;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
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
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  text-rendering: optimizeLegibility;
}
body {
  font-style: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  padding: 0 !important;
  overflow-x: hidden;
  background: #f1f2ed;
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #2b2b2b;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
