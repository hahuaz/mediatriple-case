<template>
  <v-app>
    <v-app-bar app absolute fade-img-on-scroll :height="headerImage.height">
      <template #img>
        <v-img v-bind="headerImage"></v-img>
      </template>
      <div class="nav__container">
        <div class="nav__left">
          <div class="logo__container"><p>LOGO</p></div>
          <div class="nav__links bg--white-50 border--rounded">
            <ul>
              <li>MENU1</li>
              <li>MENU2</li>
              <li>
                <v-menu
                  offset-x
                  right
                  :nudge-left="15"
                  :nudge-bottom="15"
                  content-class="locales__container bg--white-50"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn v-bind="attrs" :depressed="true" text v-on="on">
                      Localization
                    </v-btn>
                  </template>

                  <v-list dense class="locales">
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
          <div class="nav__watchlist bg--white-50 border--rounded">
            vuetify menu
          </div>
          <div class="nav__sign bg--white-50 border--rounded">Sign In</div>
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
  }

  &__left,
  &__right {
    display: flex;
    gap: 0 20px;
  }

  &__left {
  }

  &__links {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    ul {
      display: flex;
      align-items: center;
      list-style-type: none;
      gap: 0 2rem;
      padding-left: 0;
    }
    ::v-deep .v-btn {
      font-weight: 100;
    }
  }

  &__watchlist,
  &__sign {
    padding: 0.6rem 1.5rem;
  }
}

.locales {
  background-color: unset !important;
  background: unset !important;
  overflow: hidden;
  border-radius: 0.7rem;
  border: 1px solid rgba($color: purple, $alpha: 0.3);
  &__container {
    border-radius: 0.7rem;
    min-width: unset !important; /* vuetify adds min-width as inline-style. only way i change this by !important */
  }

  > div {
    cursor: pointer;
  }
}

/* Utility classes */
.bg--white-50 {
  background-color: rgba($color: white, $alpha: 0.2);
  backdrop-filter: blur(10px);
}
.border--rounded {
  border: 1px solid rgba($color: purple, $alpha: 0.3);
  border-radius: 0.7rem;
}
</style>
