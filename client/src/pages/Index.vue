<template>
  <q-page class="row items-center justify-center">
    <div class="row justify-center items-center" v-if="can('client.list')">
      <q-table
        grid
        :card-container-class="cardContainerClass"
        title="Productos"
        :data="form"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        :pagination.sync="pagination"
        :rows-per-page-options="rowsPerPageOptions"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:item="props">
          <div class="row justify-center items-center q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <vs-card type="5">
              <template #title>
                <div class="text-center">
                  {{props.row.name}}<br/>
                  ${{props.row.price}}
                </div>
              </template>
              <template #img>
                <q-img
                  :src="`${props.row.photo}`"
                  style="height: 200px; max-width: 250px; width: 250px"
                  alt='Fotographia'
                />
              </template>
              <template #text>
                <q-rating
                  disable
                  size="xs"
                  v-model="props.row.calificate"
                  icon="stars"
                  color="accent"
                />
              </template>
              <template #interactions>
                <div class="text-subtitle2 text-center">
                  <q-icon name="store"/>
                  {{props.row.nameCustomer}}
                </div>
              </template>
            </vs-card>
          </div>
        </template>
      </q-table>
    </div>
    <br/>
  </q-page>
</template>

<script>
import env from '../env'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      filter: '',
      form: [],
      baseu: '',
      pagination: {
        page: 1,
        rowsPerPage: this.getItemsPerPage()
      },
      columns: [
        { name: 'name', label: 'nombre', field: 'name' },
        { name: 'price', label: 'Precio', field: 'price' },
        { name: 'calificate', label: 'Calificación', field: 'calificate' }
      ]
    }
  },
  computed: {
    ...mapGetters('generals', ['can']),
    cardContainerClass () {
      if (this.$q.screen.gt.xs) {
        return 'grid-masonry grid-masonry--' + (this.$q.screen.gt.sm ? '3' : '2')
      }
      return void 0
    },
    rowsPerPageOptions () {
      if (this.$q.screen.gt.xs) {
        return this.$q.screen.gt.sm ? [ 3, 6, 9 ] : [ 3, 6 ]
      }
      return [ 3 ]
    }
  },
  watch: {
    '$q.screen.name' () {
      this.pagination.rowsPerPage = this.getItemsPerPage()
    }
  },
  mounted () {
    this.baseu = env.apiUrl
    if (this.can('client.list')) {
      this.getProducts()
      this.$emit('setTittle', 'Productos')
    } else {
      this.$emit('setTittle', 'Inicio')
    }
  },
  methods: {
    getProducts () {
      this.$q.loading.show(),
      this.$api.get('productList').then(res => {
        this.form = res
        this.form.forEach(element => {
          element.photo = `${this.baseu}file/${element.photo}`
        })
        this.$q.loading.hide()
      })
    },
    getItemsPerPage () {
      const { screen } = this.$q
      if (screen.lt.sm) {
        return 3
      }
      if (screen.lt.md) {
        return 6
      }
      return 8
    }
  }
}
</script>
