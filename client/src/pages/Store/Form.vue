<template>
<q-page class="q-pa-sm" style="min-height: 420px;">
    <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <!--Cambia la estructura de este card para que tnga un boton para agregar la foto del cliente y se visualice de una vez-->

          <div class="column items-center justify-center">

            <q-img
              class="q-mt-lg q-mb-lg"
              :src="img"
              style="height: 200px; max-width: 220px"
            >
              <q-btn
                class="absolute-top-right all-pointer-events"
                size="lg"
                flat
                round
                icon="delete_forever"
                color="red"
                @click="img_default"
                v-if="file || edit"
              >
                <q-tooltip>
                  Eliminar
                </q-tooltip>
              </q-btn>

            </q-img>

            <div class="col" style="padding-bottom: 3%;">
              <label class="boton_personalizado">
                Cargar Imagen
                <q-file
                  v-model="file"
                  @input="upload"
                  @clear="img_default"
                  borderless
                  style="display:none"
                  accept=".jpg, image/*"
                  @rejected="onRejected"
                />
              </label>
            </div>

          </div>
      <div class="q-pa-sm row items-center justify-center">
        <div class="center content-inputs" style="padding-right: 10px">
          <vs-input style="width: 23em; padding-top: 1em;" block success class="col col q-ma-sm" placeholder="Evan Sthephen" v-model="form.name" label="Nombres"/>
        </div>
        <div class="center content-inputs" style="padding-right: 10px">
          <vs-input @blur="bounce" style="width: 23em; padding-top: 1em;" block success class="col col q-ma-sm" placeholder="$1.000.000,00" v-model="form.price" label="Precio"/>
        </div>
        <div class="center content-inputs" style="padding-right: 10px">
          Calificaión
          <q-rating
            size="xs"
            v-model="form.calificate"
            icon="stars"
            color="accent"
          />
      </div>
      </div>
        <div class="q-pa-md center">
          <vs-button class="text-black" block success @click="save"> <q-icon name="save"/>Guardar</vs-button>
        </div>
    </div>
  </q-page>
</template>
<script>
import env from '../../env'
import { required } from 'vuelidate/lib/validators'
export default {
  validations: {
    form: {
      name: {
        required
      },
      price: {
        required
      },
      calificate: {
        required
      }
    }
  },
  mounted () {
    this.baseu = env.apiUrl
    this.getInfo()
    this.$emit('setTittle', 'Registro de Clientes')
  },
  data () {
    return {
      form: {
        calificate: 3
      },
      edit: false,
      units: [],
      baseu: '',
      file: '',
      img: '~statics/app-logo-128x128.png',
      copyForm: [],
      id: '',
      ruta: 'product'
    }
  },
  methods: {
    async getInfo () {
      this.form = {}
      this.id = this.$route.params.id
      if (this.id) {
        this.img = ''
        this.$q.loading.show()
        await this.$api.get(`${this.ruta}/${this.id}`).then(res => {
          this.form = res
          this.img = `${this.baseu}file/${this.form.photo}`
          console.log(this.img)
          this.$q.loading.hide()
        })
      }
    },
    img_default () {
      this.img = '~assets/logo.png'
      this.file = ''
    },
    async upload () {
      if (this.file) {
        this.img = URL.createObjectURL(this.file)
      }
    },
    async onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `Por favor solo se permite la foto con extensión tipo .jgp`
      })
    },
    onReset () {
      this.form = {}
      this.img_default()
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    async bounce () {
      const buy = this.formatPrice(this.form.price)
      if (buy === 'NaN') {
        console.log('AWANTAAA WEY')
      } else {
        this.form.price = buy
      }
    },
    async save () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$vs.notification({
          color: 'danger',
          position: 'center',
          title: '¡Ojo!',
          text: 'Por favor, ingresa los datos necesarios'
        })
      } else {
        this.$q.loading.show()
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('dates', JSON.stringify(this.form))
        console.log(formData)
        this.$api.post('products', formData).then(res => {
          this.$q.loading.hide()
          this.$router.go(-1)
        })
      }
    }
  }
}
</script>
<style>
.right {
  float: right;
}
.size {
  width: 100%;
  max-width: 250px;
  min-width: 200px;
}
.boton_personalizado {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 15px;
  color: #0016b0;
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid #1883ba;
}
.boton_personalizado:hover {
  color: #ffffff;
  background-color: #0016b0;
}
</style>
