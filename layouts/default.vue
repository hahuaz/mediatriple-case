<template>
  <v-app>
    <v-app-bar app absolute fade-img-on-scroll :height="headerImage.height">
      <template #img>
        <v-img v-bind="headerImage"></v-img>
      </template>
      <div class="nav__container">
        <div class="nav__left">
          <div class="logo__container"><p>LOGO</p></div>
          <div class="nav__links">
            <ul>
              <li><v-btn text :ripple="false">Menu1</v-btn></li>
              <li><v-btn text :ripple="false">Menu2</v-btn></li>
              <li>
                <v-menu
                  offset-x
                  right
                  :nudge-left="15"
                  :nudge-bottom="15"
                  content-class="menu "
                >
                  <template #activator="{ on, attrs }">
                    <v-btn v-bind="attrs" :depressed="true" text v-on="on">
                      Localization
                    </v-btn>
                  </template>

                  <v-list dense class="menu__list">
                    <v-list-item @click="onClick">
                      <v-list-item-title>TR</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onClick">
                      <v-list-item-title>EN</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav__right">
          <div class="watchlist__container">
            <v-menu
              offset-y
              offset-x
              left
              :close-on-content-click="false"
              content-class="menu watchlist__menu"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  :depressed="true"
                  text
                  :ripple="false"
                  v-on="on"
                >
                  Watchlist <v-icon color="red" small right>mdi-circle</v-icon>
                </v-btn>
              </template>
              <v-list class="menu__list" width="240" height="210">
                <v-list-item
                  v-for="i in 5"
                  :key="i"
                  class="movie"
                  @click="onClick"
                >
                  <v-img
                    class="movie__image"
                    cover
                    width="70"
                    src="/images/rick-and-morty.jpg"
                  ></v-img>
                  <div class="movie__content">
                    <span>Rick and Morty</span>
                    <v-btn x-small text>x</v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="sign__container">
            <v-btn text :ripple="false" @click="dialog = !dialog"
              >Sign In</v-btn
            >
            <v-dialog v-model="dialog" width="490" internal-activator>
              <div class="logModal">
                <h1>Sign In</h1>
                <p>Do you have an tooh account?</p>
                <div class="logModal__inputs">
                  <v-text-field
                    color="#f1f1f1"
                    background-color="black"
                    label="Email"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    color="#f1f1f1"
                    background-color="black"
                    label="Password"
                    outlined
                  ></v-text-field>
                  <v-btn class="logModal__forgot" plain>Forgot password?</v-btn>
                </div>
                <div class="actions">
                  <v-btn class="signup" text>Sign Up</v-btn>
                  <v-btn class="signin" outlined rounded x-large>Sign In</v-btn>
                </div>
                <div class="tos">
                  <p>
                    This site is protected by reCAPTCHA and the
                    <span>Google Privacy Policy</span> and
                    <span>Terms of Service</span> apply.
                  </p>
                </div>
              </div>
            </v-dialog>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      headerImage: {
        height: '324',
        src: '/images/index-hero.jpg',
        gradient:
          '180deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,.7) 100%',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin white-blur($blur: 10px, $color: white) {
  background-color: rgba($color, $alpha: 0.2);
  backdrop-filter: blur(10px);
}
@mixin b-rounded($round-value: 0.7rem) {
  border: 1px solid rgba($color: #d686ff, $alpha: 0.3);
  border-radius: $round-value;
}

::v-deep .v-toolbar__content {
  padding-top: 45px;
  display: block;
}

.nav {
  &__container {
    height: 43px;
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 100;
    ::v-deep .v-btn {
      font-weight: 100;
    }
  }

  &__left,
  &__right {
    display: flex;
    gap: 0 20px;
  }

  &__links {
    @include white-blur();
    @include b-rounded();
    align-self: stretch;
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      gap: 0 1rem;
      padding-left: 0;
    }
  }
}

.watchlist__container,
.sign__container {
  @include white-blur();
  @include b-rounded();
  display: flex;
  align-items: center;
  cursor: pointer;

  ::v-deep .v-btn:hover,
  ::v-deep .v-btn:focus,
  ::v-deep .v-btn:active {
    &::before {
      opacity: 0;
    }
  }
}

.menu {
  border-radius: 0.7rem;
  min-width: unset !important; /* vuetify adds min-width as inline-style. only way i change this by !important */
  backdrop-filter: blur(
    10px
  ); /* adding this property direclty to list gives glitch for blur */
  &__list {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.7rem;
    border: 1px solid rgba($color: #d686ff, $alpha: 0.3);
    > div {
      cursor: pointer;
    }
  }
}

.watchlist__menu {
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1f1f1f;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }
}

.movie {
  @include b-rounded(0.3rem);
  padding: unset;
  margin: 0.2rem 0.5rem;
  align-items: stretch;
  overflow: hidden;
  height: 41px;
  &__image {
    flex: 0 0 auto;
  }
  &__content {
    padding: 0 0.5rem;
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    justify-content: space-between;
    background-color: #1f1f1f;
    font-size: 0.6rem;
  }
}

.logModal {
  @include white-blur();
  @include b-rounded(1rem);
  min-height: 550px;
  text-align: center;
  padding: 48px 60px 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ::v-deep .v-btn {
    text-transform: unset;
    font-weight: 100;
    font-size: 0.8rem;
  }

  ::v-deep .v-label {
    color: white;
    font-weight: bolder;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    input::placeholder {
      color: red;
    }
  }
  &__forgot {
    align-self: flex-end;
    height: 1.5rem;
  }

  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;

    ::v-deep .v-input__slot {
      margin-bottom: unset;
    }

    .signin {
      @include white-blur(undefined, gray);
      font-size: 1rem;
      padding: 0 2.4rem;
      height: 2.5rem;
    }
  }
  .tos {
    font-weight: 100;
    font-size: 0.7rem;
    padding: 0 2rem;
    color: rgb(197, 197, 197);
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
