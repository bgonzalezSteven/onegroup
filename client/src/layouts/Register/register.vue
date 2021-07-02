<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-pa-sm bg-grey-2">
        <div class="q-pa-sm text-right text-bold text-h6">{{valueStore === 1 ? 'Registro de Comercio' : 'Registro de Cliente'}}</div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="q-pa-sm row items-center justify-center">
            <template v-if="valueStore === 1">
              <div style="padding-right: 8px;" class="col-xs-12 col-sm-8 col-md-4 col-xl-4">
                <q-input label="Nombre del Comercio" dense rounded outlined v-model="comercio.name" :error="$v.comercio.name.$error" error-message="Su Nombre es importante"/>
              </div>
              <div style="padding-right: 8px;" class="col-xs-12 col-sm-8 col-md-4 col-xl-4">
                <q-input label="Rif del Comercio" mask="A-##########" dense rounded outlined v-model="comercio.rif" :error="$v.comercio.rif.$error" error-message="Su Rif es importante"/>
              </div>
              <div style="padding-right: 8px;" class="col-xs-12 col-sm-8 col-md-4 col-xl-4">
                <q-input label="Email" dense rounded outlined v-model="comercio.email" :error="$v.comercio.email.$error" error-message="Su email es importante"/>
              </div>
            </template>
            <template v-else>
              <div style="padding-right: 8px;" class="col-xs-12 col-sm-8 col-md-4 col-xl-4">
                <q-input label="Nombre Completo" dense rounded outlined v-model="client.name" :error="$v.client.name.$error" error-message="Su Nombre es importante"/>
              </div>
              <div style="padding-right: 8px;" class="col-xs-12 col-sm-8 col-md-4 col-xl-4">
                <q-input label="Email" dense rounded outlined v-model="client.email" :error="$v.client.email.$error" error-message="Su email es importante"/>
              </div>
            </template>
            <vs-button block style="font-size: 11pt;" @click="save" class="bg-secondary">Registrar</vs-button>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <!--Ventana emergente para la selección del Perfil -->
    <vs-dialog blur not-close prevent-close v-model="begin">
      <template #header>
        <div class="text-h6 text-bold text-center">¿Que tipo de registro desea realizar?</div>
      </template>
        <div class="con-content">
          <vs-select warn block  placeholder="Selecciona uno" v-model="valueStore">
            <vs-option v-for="index in stores" :key="index.name" :label="index.name" :value="index.value">
              {{index.name}}
            </vs-option>
          </vs-select>
        </div>
        <template #footer>
          <vs-button block class="bg-secondary" @click="next">Continuar</vs-button>
        </template>
    </vs-dialog>
  </q-layout>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      begin: true,
      valueStore: '',
      stores: [
        {
          name: 'Comerciante',
          value: 1
        },
        {
          name: 'Cliente',
          value: 2
        }
      ],
      comercio: {},
      client: {}
    }
  },
  validations: {
    comercio: {
      name: {required},
      rif: {required},
      email: {required, email},
    },
    client: {
      name: {required},
      email: {required, email},
    }
  },
  methods: {
    async back (url) {
      this.$router.push('/')
    },
    async save () {
      let temp = {
        information: {},
        type: this.valueStore
      }
      if (this.valueStore === 1) {
        this.$v.comercio.$touch()
        if (this.$v.comercio.$error) {
          console.log('error')
        } else {
          temp.information = this.comercio
        }
      } else {
        this.$v.client.$touch()
        if (this.$v.client.$error) {
          console.log('error')
        } else {
          temp.information = this.client
        }
      }
      this.$q.loading.show()
      this.$api.post('register', temp).then(res => {
        this.$q.loading.hide()
        this.$q.dialog({
          title: 'No puedo enviar Emails :c',
          message: `Por falta de un servidor de correos te dare tus credenciales aquí<br/><b>Email: </b>${res.email}<br/><b>Contraseña: </b>${res.password}`,
          html: true
        }).onOk(() => {
          this.$router.go(-1)
        })
      })
    },
    async next () {
      if (this.valueStore) {
        this.begin = false
      } else {
        this.$vs.notification({
          title: '!Ey¡',
          text: 'Debes de seleccionar una opcion antes de continuar',
          position: 'top-right',
          color: 'danger'
        })
      }
    }
  }
}
</script>
