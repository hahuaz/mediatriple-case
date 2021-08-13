<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <div class="logo__container"><p>LOGO</p></div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              v-text="$i18n.messages[$i18n.locale].header.mobile[item.title]"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="ma-4">
          <v-menu offset-x right>
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" style="text-transform: lowercase" v-on="on">
                {{ $i18n.locale }} &ggg;
              </v-btn>
            </template>

            <v-list dense class="menu__list">
              <v-list-item
                v-for="locale in $i18n.locales"
                :key="locale.code"
                @click="changeLocal(locale.code)"
              >
                <v-list-item-title>{{ locale.iso }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app height="200" shrink-on-scroll>
      <div class="logo__container"><p>LOGO</p></div>

      <v-spacer />

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.7)"
          src="/images/index-hero.jpg"
        ></v-img>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app class="justify-center">
      <div class="font-weight-thin text-caption">
        <span>
          this app created for front-end position at
          <i class="font-weight-medium"> Mediatriple </i> -
          {{ new Date().getFullYear() }}
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'about',
          to: '/about',
        },
      ],
    }
  },

  methods: {
    changeLocal(code) {
      this.$i18n.setLocale(code)
    },
  },
}
</script>
<style scoped lang="scss">
.logo__container {
  text-align: center;
  margin: 0.5rem 0;
}
</style>
