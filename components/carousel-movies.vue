<template>
  <v-sheet class="mx-auto" elevation="8" max-width="1328px">
    <v-slide-group
      id="movie-slide"
      v-model="model"
      class="my-4"
      active-class="hovered"
      show-arrows
      :center-active="$nuxt.context.isMobile"
    >
      <v-slide-item v-for="(movie, i) in movies" :key="i" v-slot="{ toggle }">
        <div
          class="movie__container mx-4 my-8"
          height="250"
          width="300"
          @mouseenter="toggle"
          @mouseleave="toggle"
        >
          <div class="movie">
            <v-img
              :src="'/images/' + movie.image + '.jpg'"
              width="300"
              height="250"
              alt=""
            >
            </v-img>
            <div class="movie__content">
              <div class="movie__details">
                <span class="movie__name">{{ movie.name }}</span>
                <span>{{ movie.year }} - 1h 22m</span>
              </div>
              <div class="movie__actions">
                <v-btn icon @click.stop="addWatchlist">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon x-large @click.stop="addWatchlist">
                  <v-icon class="action__play">mdi-google-play</v-icon>
                </v-btn>
                <v-btn icon @click.stop="addWatchlist">
                  <v-icon>mdi-heart-broken</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      movies: [
        {
          name: 'Rick and Morty',
          image: 'rick-and-morty',
          year: 2015,
        },
        {
          name: 'Children of Men',
          image: 'children-of-men',
          year: 2012,
        },
        { name: 'La La Land', image: 'la-la-land', year: 2019 },
        { name: 'Gravity', image: 'gravity', year: 2010 },
        { name: 'Community', image: 'community', year: 2008 },
        { name: 'The godfather', image: 'the-godfather', year: 1980 },
      ],
    }
  },

  methods: {
    addWatchlist() {
      console.log('watchlist added')
    },
  },
}
</script>

<style lang="scss">
#movie-slide {
  .v-slide-group__prev,
  .v-slide-group__next {
    position: absolute;
    top: calc(50% - 12px);
    z-index: 2;
    .v-icon {
      font-size: 2rem;
      border-radius: 100%;
      background-color: rgba($color: black, $alpha: 0.4);
    }
  }
  .v-slide-group__prev {
    left: 1rem;
  }
  .v-slide-group__next {
    right: 1rem;
  }

  .v-image {
    transition: all 700ms;
  }

  @media screen and (min-width: 960px) {
    .v-slide-group__prev,
    .v-slide-group__next {
      .v-icon {
        font-size: 3rem;
        border-radius: 100%;
        background-color: rgba($color: black, $alpha: 0.4);
      }
    }
    .v-slide-group__prev {
      left: 3rem;
    }
    .v-slide-group__next {
      right: 3rem;
    }
  }
}
</style>

<style lang="scss" scoped>
.movie__container.hovered {
  .v-image {
    height: 180px !important;
  }
  .movie__content {
    visibility: visible;
    opacity: 1;
  }
}

.movie {
  width: 300px;
  height: 250px;
  position: relative;
  &__content {
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: all 700ms;
    font-size: 0.7rem;
    font-weight: 100;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    span:first-child {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    i {
      font-size: 1.3rem;
    }
    .action__play {
      font-size: 2.2rem;
    }
  }
}
</style>
