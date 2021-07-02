<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
    <q-page class="row">
    <q-parallax class="fullscreen" style="height: auto;">
          <template v-slot:media>
            <img src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" >
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
                top: (scope.percentScrolled * 20) + '%',
                left: 0,
                right: 0
              }"
            > <div
              class="col-xs-10 col-sm-8 col-md-4 col-lg-3 col-xl-2"
              style="margin: auto"
            >
            <q-intersection
              transition="rotate"
              >
              <q-card style="border-radius: 40px;">
                <q-card-section class="justify-center items-center row">
                  <q-img style="width: 80%" src="../assets/logo.png"/>
                </q-card-section>
                <q-card-section>
                <q-form
                  class="q-ma-md"
                >
                  <q-input
                    rounded outlined
                    dense
                    v-model="form.email"
                    label="Usuario *"
                    :error="$v.form.email.$error" error-message="Usuario necesario"
                  >
                    <template v-slot:prepend>
                      <q-icon  style="padding-right: 4px;"  name="mail"></q-icon>
                    </template>
                  </q-input>

                  <q-input
                    rounded outlined
                    dense
                    :type="isPwd ? 'password' : 'text'"
                    v-model="form.password"
                    label="Contraseña *"
                    :error="$v.form.password.$error" error-message="Contraseña necesaria"
                  >
                    <template v-slot:prepend>
                      <q-icon  style="padding-right: 4px;"  name="vpn_key"></q-icon>
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <div class="text-center q-ma-sm">
                    <vs-button-group>
                        <vs-button
                        @click="onSubmit"
                          block
                          circle
                          floating
                          class="bg-primary text-white"
                          style="font-size: 12pt"
                          >
                          <q-icon style="padding-right: 4px;" name="people"/>
                          Ingresar
                        </vs-button>
                        <vs-button
                          @click="$router.push('/register')"
                          block
                          circle
                          floating
                          class="bg-secondary text-white"
                          style="font-size: 12pt"
                          >
                          <q-icon style="padding-right: 4px;" name="edit"/>
                          Postularme
                        </vs-button>
                    </vs-button-group>
                  </div>
                </q-form>
                </q-card-section>
              </q-card>
              </q-intersection>
            </div>
            </div>
          </template>
        </q-parallax>
    </q-page>
    </q-page-container>
    </q-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'MyLayout',
  validations: {
    form: {
      email: { required },
      password: { required }
    }
  },
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false,
      band: ''
    }
  },
  mounted () {
    this.logout()
    this.$q.dark.set(false)
  },
  methods: {
    ...mapActions('generals', ['logout']),
    ...mapMutations('generals', ['login']),
    onSubmit () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        console.log('error')
      } else {
        this.$q.loading.show()
        this.$api.post('login', this.form).then(res => {
          if (res) {
            this.login(res)
            this.$router.push('menu')
          }
          this.$q.loading.hide()
        })
      }
    }
  }
}
</script>
