<template>
  <q-page class="q-pa-sm" style="min-height: 400px;">
    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div class="q-pa-sm">
       <div style="float: right;">
          <vs-button class="bg-accent text-black" circle :to="`${ruta}/agg_${ruta}`">
            Nuevo
          </vs-button>
        </div>
        <div class="center">
          <vs-table dark>
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
            <template slot="thead">
              <vs-tr>
                <vs-th>Nombre</vs-th>
                <vs-th>Costo</vs-th>
                <vs-th>Acciones</vs-th>
              </vs-tr>
            </template>
            <template dense #tbody>
              <vs-tr
                :key="i"
                v-for="(tr, i) in $vs.getPage($vs.getSearch(date, search), page, max)"
                :data="tr"
              >
                <vs-td>{{ tr.name }}</vs-td>
                <vs-td>{{ tr.price }}</vs-td>
                <vs-td class="row justify-center items-center">
                  <vs-button :to="`${ruta}/edit_${ruta}/${tr._id}`" primary>
                    Editar
                    <q-icon name="edit"/>
                  </vs-button>
                  <vs-button @click="deleteItem(tr)" success>
                    Eliminar
                    <q-icon name="delete"/>
                  </vs-button>
                </vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination dark v-model="page" :length="$vs.getLength(date, max)"></vs-pagination>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <vs-dialog width="550px" v-model="dialog">
      <template #header>
        Atención
      </template>
      <div class="con-content">
        <p>¿Esta seguro de eliminar {{temp.name}} de sus registros?</p>
      </div>
      <template #footer>
        <div class="row item-center">
          <vs-button danger @click="deleteEnd">Ok</vs-button>
          <vs-button @click="dialog = false">Cancelar</vs-button>
        </div>
      </template>
    </vs-dialog>
  </q-page>
</template>
<script>
export default {
  mounted () {
    this.infoSolicity()
    this.$emit('setTittle', 'Listado de Productos')
  },
  data () {
    return {
      date: [],
      page: 1,
      max: 7,
      dialog: false,
      id: '',
      search: '',
      ruta: 'product',
      temp: {}
    }
  },
  methods: {
    async infoSolicity () {
      this.date = []
      this.$q.loading.show()
      this.$api.get(`${this.ruta}`).then(res => {
        this.$q.loading.hide()
        this.date = res
      })
    },
    async deleteItem (item) {
      this.temp = {}
      this.temp = item
      this.dialog = true
    },
    async deleteEnd () {
      this.$q.loading.show()
      this.$api.delete(`${this.ruta}/${this.temp._id}`).then(res => {
        this.dialog = false
        this.$q.loading.hide()
        this.infoSolicity()
      })
    }
  }
}
</script>
