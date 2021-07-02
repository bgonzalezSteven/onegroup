<template>
        <div>
          <q-carousel
            swipeable
            animated
            arrows
            navigation
            height="300px"
            class="rounded-borders full-height"
            control-color="primary"
            v-model="slide"
          >
            <!--Preguntas de la 0-50-->
            <q-carousel-slide :name="1" class="column no-wrap">
              <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <!--Drag and Drop para las palabras-->
                  <div class="row no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Relacione las palabras</div>
                  </div>
                  <div class="row no-wrap justify-around q-px-md q-pt-md">
                    <div class="row full-width">
                      <div class="col full-width">
                          <q-toolbar class="bg-secondary text-white shadow-2">
                            <q-toolbar-title style="font-size: 18px;">Sobreesdrújula
                              <q-tooltip>Sobreesdrújula</q-tooltip>
                            </q-toolbar-title>
                          </q-toolbar>
                          <q-select disable
                            dense 
                            filled
                            v-model="form.gramatical.esdrujula"
                            :options="options"
                            label="Sobreesdrújula"
                            multiple
                            emit-value
                            map-options
                        >
                          <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                            <q-item
                              v-bind="itemProps"
                              v-on="itemEvents"
                            >
                              <q-item-section>
                                <q-item-label v-html="opt.label" ></q-item-label>
                              </q-item-section>
                              <q-item-section side>
                                <q-toggle :value="selected" @input="toggleOption(opt)" />
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                      </div>
                      <div style="padding-left: 1em;" class="col full-width">
                          <q-toolbar class="bg-secondary text-white shadow-2">
                            <q-toolbar-title style="font-size: 18px;">Aguda
                              <q-tooltip>Aguda</q-tooltip>
                            </q-toolbar-title>
                          </q-toolbar>
                          <q-select disable
                            dense 
                            filled
                            v-model="form.gramatical.aguda"
                            :options="options"
                            label="Aguda"
                            multiple
                            emit-value
                            map-options
                        >
                          <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                            <q-item
                              v-bind="itemProps"
                              v-on="itemEvents"
                            >
                              <q-item-section>
                                <q-item-label v-html="opt.label" ></q-item-label>
                              </q-item-section>
                              <q-item-section side>
                                <q-toggle :value="selected" @input="toggleOption(opt)" />
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                      </div>
                      <div style="padding-left: 1em;" class="col full-width">
                          <q-toolbar class="bg-secondary text-white shadow-2">
                            <q-toolbar-title style="font-size: 18px;">Grave
                              <q-tooltip>Grave</q-tooltip>
                            </q-toolbar-title>
                          </q-toolbar>
                          <q-select disable
                            dense 
                            filled
                            v-model="form.gramatical.grave"
                            :options="options"
                            label="Graves"
                            multiple
                            emit-value
                            map-options
                        >
                          <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                            <q-item
                              v-bind="itemProps"
                              v-on="itemEvents"
                            >
                              <q-item-section>
                                <q-item-label v-html="opt.label" ></q-item-label>
                              </q-item-section>
                              <q-item-section side>
                                <q-toggle :value="selected" @input="toggleOption(opt)" />
                              </q-item-section>
                            </q-item>
                          </template>
                        </q-select>
                      </div>
                    </div>
                    <!---<draggable v-model="aguda" :options="{group:'clothes'}">
                      <div v-for="tshirt in aguda" :key="tshirt">
                        {{ tshirt.title }}
                      </div>
                    </draggable>
                    <draggable v-model="esdrujula" :options="{group:'clothes'}">
                      <div v-for="pants in esdrujula" :key="pants">
                        {{ pants.title }}
                      </div>
                    </draggable>-->
                    </div>
                  <div class="row no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6"> Coloque las tildes</div>
                  </div>
                  <div class="row q-px-md items-start">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Lapiz</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.ii"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Camison</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.iii"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Debilmente</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.iv"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Pared</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.v"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Compramelo</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.vi"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Ciempies</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.vii"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Marmol</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.viii"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Caracter</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.ix"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Subterraneo</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.x"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Dificil</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.xi"/>
                  </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 ">
                      <strong class="text-italic">Frigorifico</strong>
                      <q-input disable  dense rounded outlined lazy-rules v-model="form.gramatical.xii"/>
                  </div>
                  </div>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap"><q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">En la siguiente oración identifica al sujeto, verbo y a los complementos del Verbo:</div>
                    <div class="text-h8 text-italic">Antonio, el hermano de Luis, regaló a José, un libro de historia universal, ayer, en INSTIVOC.</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Ayer</strong>
                      <q-select disable dense rounded outlined label="Ayer" v-model="form.gramatical.subjectI.i" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Antonio</strong>
                      <q-select disable dense rounded outlined label="Antonio" v-model="form.gramatical.subjectI.ii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Regaló</strong>
                      <q-select disable dense rounded outlined label="Regaló" v-model="form.gramatical.subjectI.iii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">En Instivoc</strong>
                      <q-select disable dense rounded outlined label="En Instivoc" v-model="form.gramatical.subjectI.iv" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">A José</strong>
                      <q-select disable dense rounded outlined label="A José" v-model="form.gramatical.subjectI.v" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">El hermano de Luis</strong>
                      <q-select disable dense rounded outlined label="El hermano de Luis" v-model="form.gramatical.subjectI.vi" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Un libro de Historia</strong>
                      <q-select disable dense rounded outlined label="Un libro de Historia" v-model="form.gramatical.subjectI.vii" :options="subjest" emit-value map-options />
                    </div>
                  </div>
                </div>
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">En la siguiente oración identifica al sujeto, verbo y a los complementos del Verbo:</div>
                    <div class="text-h8 text-italic">María, compró en una tienda de Valencia, un lapicero extremadamente fino, para su hermano Juan.</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Un lapicero extremadamente fino</strong>
                      <q-select disable dense rounded outlined label="Un lapicero extremadamente fino" v-model="form.gramatical.subjectII.i" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Compró</strong>
                      <q-select disable dense rounded outlined label="Compró" v-model="form.gramatical.subjectII.ii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Para su hermano Juan</strong>
                      <q-select disable dense rounded outlined label="Para su hermano Juan" v-model="form.gramatical.subjectII.iii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">María</strong>
                      <q-select disable dense rounded outlined label="María" v-model="form.gramatical.subjectII.iv" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">En una tienda de Valencia</strong>
                      <q-select disable dense rounded outlined label="En una tienda de Valencia" v-model="form.gramatical.subjectII.v" :options="subjest" emit-value map-options />
                    </div>
                  </div>
                </div>
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">En la siguiente oración identifica al sujeto, verbo y a los complementos del Verbo:</div>
                    <div class="text-h8 text-italic">El año pasado, la selección de Francia ganó el mundial de fútbol en Rusia, de manera espectacular.</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">De manera espectacular</strong>
                      <q-select disable dense rounded outlined label="De manera espectacular" v-model="form.gramatical.subjectIII.i" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Ganó</strong>
                      <q-select disable dense rounded outlined label="Ganó" v-model="form.gramatical.subjectIII.ii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">La selección de Francia</strong>
                      <q-select disable dense rounded outlined label="La selección de Francia" v-model="form.gramatical.subjectIII.iii" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">El año pasado</strong>
                      <q-select disable dense rounded outlined label="El año pasado" v-model="form.gramatical.subjectIII.iv" :options="subjest" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">El mundial de fútbol en Rusia</strong>
                      <q-select disable dense rounded outlined label="El mundial de fútbol en Rusia" v-model="form.gramatical.subjectIII.v" :options="subjest" emit-value map-options />
                    </div>
                  </div>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap"><q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Complete la palabra, escribiendo las letras que le hacen falta:</div>
                    <div class="text-h8">Dentro del parentesis tienes algunas letras de ayuda</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Per_ua_c_ión (ssczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.i"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">En_al_ar (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.ii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Adivinan_a (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.iii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Per_un_ión (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.iv"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">E_cavar (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.v"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">E_for_ar (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.vi"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Cru_ifi_ión (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.vii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">De_i_ión (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.viii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Confe_ión (sczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.ix"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">E__ep_ión (sccczx)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.x"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">An_erso (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xi"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">acilo (Microbio) (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Su_le_ación (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xiii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Cor_eta (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xiv"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">_acante (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xv"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Re_elar (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xvi"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">E_adir (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xvii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Sil_ar (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xviii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">Her_í_oro (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xix"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2  text-center">
                      <strong class="text-italic">_ál_ula (bv)</strong>
                      <q-input disable  dense rounded outlined v-model="form.gramatical.complete.xx"/>
                    </div>
                  </div>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
           <q-carousel-slide :name="4" class="column no-wrap">
             <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Define cada palabra:</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 text-center">
                      <strong class="text-italic">Gramática</strong>
                      <q-input disable autogrow rounded outlined dense v-model="form.gramatical.defined.i"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 text-center">
                      <strong class="text-italic">Verbo</strong>
                      <q-input disable autogrow rounded outlined dense v-model="form.gramatical.defined.ii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 text-center">
                      <strong class="text-italic">Lenguaje</strong>
                      <q-input disable autogrow rounded outlined dense v-model="form.gramatical.defined.iii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 text-center">
                      <strong class="text-italic">Ortografía</strong>
                      <q-input disable autogrow rounded outlined dense v-model="form.gramatical.defined.iv"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 text-center">
                      <strong class="text-italic">Habla</strong>
                      <q-input disable autogrow rounded outlined dense v-model="form.gramatical.defined.v"/>
                    </div>
                  </div>
                </div>
             </q-scroll-area>
           </q-carousel-slide>
           <q-carousel-slide :name="5" class="column no-wrap">
             <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">En la siguiente parte, escriba correctamente el párrafo usando los acentos, signos de puntuación y entonación:</div>
                    <br/>
                    <div class="text-h8">Un hombre visito un parque zoologico o sea donde hay variedad de animales en su habitat Alli pudo ver leones con larga melena panteras de exuberante belleza monos de muchas especies y muchas aves Cuando ya estaba por terminar su recorrido encontro una seccion de animales raros lo cual lo hizo razonar asi de donde las habran traido cual sera el nombre cientificoCuando llego a la casa le conto a sus hijos la emocionante experiencia y ellos dijeron oh papa por que no nos llevaste cuanto nos habria gustado ir a ese parque a lo que contesto la proxima vez los llevo siempre y cuando que</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <q-input disable autogrow dense rounded outlined placeholder="..." v-model="form.gramatical.texte"/>
                    </div>
                  </div>
                    <div class="q-pa-xs text-center text-bold text-italic text-center items-center justify-center row">Aprobación para la Prueba de Gramática: 
                      <vs-checkbox @click="changeEvaluated(form.aprovation)" style="padding-left: 8px;" v-model="form.aprovation.gramatical">
                        <template #icon>
                          <q-icon name="done_all"/>
                        </template>
                      </vs-checkbox>
                    </div>
                </div>
             </q-scroll-area>
           </q-carousel-slide>
          </q-carousel>
        </div>
</template>
<script>
export default {
  mounted () {
    this.form = JSON.parse(this.$q.sessionStorage.getItem('form'))
  },
  data () {
    return {

      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      alert: true,
      test: true,
      slide: 1,
      screen: true,
      form: {
        gramatical: {
          esdrujula: [],
          aguda: [],
          grave: [],
          subjectI: {},
          subjectII: {},
          subjectIII: {},
          complete: {},
          defined: {}
        },
        aprovation: {}
      },
      options: [
        {
          label: 'Cómpramelo',
          value: 1
        },
        {
          label: 'Pared',
          value: 2
        },
        {
          label: 'Débilmente',
          value: 3
        },
        {
          label: 'Frigorífico',
          value: 4
        },
        {
          label: 'Lápiz',
          value: 5
        },
        {
          label: 'Difícil',
          value: 6
        },
        {
          label: 'Camisón',
          value: 7
        },
        {
          label: 'Mármol',
          value: 8
        },
        {
          label: 'Ciempiés',
          value: 9
        },
        {
          label: 'Subterráneo',
          value: 10
        },
        {
          label: 'Carácter',
          value: 11
        }
      ],
      subjest: [
        {
          label: 'Sujeto',
          value: 1
        },
        {
          label: 'Verbo',
          value: 2
        },
        {
          label: 'Ninguno',
          value: 3
        }
      ]
    }
  },
  methods: {
    async changeEvaluated (info) {
      await this.$api.put('Change_aprovation_gramatical', info).then(res => {
        this.$vs.notification({
          color: 'success',
          position: 'bottom-center',
          title: '¡Muy Bien!',
          text: 'Se ha cambiado de manera exitosa el resultado de la evaluación de Gramática del Aspirante'
        })
      })
    }
  }
}
</script>
