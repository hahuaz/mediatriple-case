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
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="ma-4">
          <v-btn block>Tr</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app height="200" shrink-on-scroll>
      <v-toolbar-title v-text="title" />
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
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Us',
          to: '/inspire',
        },
      ],

      title: 'LOGO',
    }
  },
}
</script>
<style scoped lang="scss">
.logo__container {
  text-align: center;
  margin: 1rem 0;
}
</style>
