<template>
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
            <!--Selección Multiple-->
            <q-carousel-slide :name="1" style="padding-right: 0;padding-left: 0;">
                   <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div class="text-h6">Selección simple y multiple</div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El Manual de Iglesia existe en su formato actual desde:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.i" :options="formato" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La organización de la iglesia está basada en:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.ii" :options="organizacion" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La Reunión Constituyente o Congreso de una iglesia local se denomina:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.iii" :options="constituyente" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El esquema de la organización denominacional es:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.iv" :options="esquema" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es superintendente y primer anciano de todas las iglesias de una asociación:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.v" :options="superintendente" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Quienes con anterioridad hayan sido ordenados como pastores, pero ya no tienen credenciales válidas, pueden ser elegidos como ancianos y, si su ordenación no fue anulada, entonces:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.vi" :options="pastores" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Una iglesia es organizada por un pastor ordenado cuando:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.vii" :options="ordenado" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El nuevo bautismo se aplica a personas:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.viii" :options="bautismo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Se debe solicitar la carta de traslado cuando un miembro de iglesia se muda a una localidad por un tiempo superior a:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.ix" :options="translado" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El acuerdo sobre cualquier transferencia de miembros, a favor o en contra, debe ser tomado por:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.x" :options="transferencia" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Pasaje bíblico que fundamenta el proceso para la disciplina eclesiástica:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xi" :options="fundamenta" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Si los dirigentes de la iglesia descuidan la investigación diligente de los pecados que traen el desagrado de Dios sobre el cuerpo, entonces:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xii" :options="dirigentes" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La autoridad y las funciones de un anciano se limitan a:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xiii" :options="autoridad" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Deber del diácono es:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xiv" :options="diacono" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Principal responsable del programa de comunicación de la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xv" :options="comunicacion" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es el cuerpo administrativo de toda escuela de iglesia, primaria o secundaria:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xvi" :options="administrativo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Proporciona el liderazgo necesario en las actividades evangelizadoras mediante el uso de materiales impresos:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xvii" :options="liderazgo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Programa centrado en la iglesia en el contexto de un desarrollo espiritual y de ganancia de almas para el grupo de jóvenes entre las edades de 10 a 15 años:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xviii" :options="programa" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Los dirigentes de las iglesias locales son elegidos por uno o dos años a través de una comisión:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xix" :options="locales" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En una asociación, toda la autoridad administrativa emana de:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xx" :options="emana" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es el sábado misionero de la Iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxi" :options="misionero" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Rito que es la preparación indicada por Cristo para el servicio sacramental de la Cena del Señor:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxii" :options="rito" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Deben ser los cultos más interesantes que se tengan:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxiii" :options="cultos" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Oficiantes del servicio de comunión:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxiv" :options="oficiantes" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es la tarea fundamental de la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxv" :options="tarea" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es la función fundamental de la junta directiva de la iglesia es:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxvi" :options="función" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Como cuerpo de Cristo, el propósito de la iglesia es:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxvii" :options="cuerpo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El diezmo ha de ser consagrado a la obra del ministerio, para:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxviii" :options="diezmo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Nuestra indumentaria debe caracterizarse por la:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxix" :options="indumentaria" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El matrimonio es una relación monógama heterosexual entre un:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxx" :options="matrimonio" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El Manual de Iglesia describe:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxxi" :options="manual" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El Manual de la iglesia expresa:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.selection.xxxii" :options="expresa" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Indique dos de las posibles razones aceptadas por la iglesia para admitir a un miembro por profesión de fe:</strong>
                      <q-select disable  multiple dense outlined rounded v-model="form.manual.selection.xxxiii" :options="razones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Indique el proceso para conferir carta de traslado con una sola respuesta:</strong>
                      <q-select disable  multiple dense outlined rounded v-model="form.manual.selection.xxxiv" :options="proceso" emit-value map-options />
                    </div>
                  </div>
                <div class="text-h6 text-center">Selecciona la respuesta correcta para cada pregunta</div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Disciplina cuando ocurran pecados graves, pero la ofensa no es de sufisiente gravedad como para justificar la extrema medida de excluir al miembro de la feligresia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.i" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Tiene acceso a todas las iglesias y a sus cultos, reuniones administrativas y juntas:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.ii" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Motivo de disciplina:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.iii" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Solicitud que debe pedir un feligrés que se muda de una iglesia a otra:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.iv" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Sistema de gobierno de la Iglesia Adventista del Séptimo Día:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.v" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Vía de entrada a la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.vi" :options="emparejar" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">No tendrá voz ni voto en las deliberaciones de la iglesia, ni podrá dirigir actividades de la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.vii" :options="emparejar2" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Motivo por el que se puede separar a alguien de la feligresía de la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.viii" :options="emparejar2" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Cargo en la iglesia cuando no hay nadie con la experiencia y las cualidades necesarias para servir como anciano:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.ix" :options="emparejar2" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Fondos destinados a programas misioneros, a Vida Familiar, al Ministerio Juvenil Adventista:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.x" :options="emparejar3" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Junta de mayor rango de la iglesia local:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xi" :options="emparejar3" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Los diezmos, todos los fondos misioneros regulares y los destinados a proyectos especiales de la asociación y las instituciones:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xii" :options="emparejar3" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es miembro ex officio y presidirá la comisión de nombramientos:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xiii" :options="emparejar3" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es «la iglesia dedicada al estudio»:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xiv" :options="emparejar3" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Perversiones del plan original de Dios:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xv" :options="emparejar4" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Método más satisfactorio de proveer para los gastos locales de la iglesia:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xvi" :options="emparejar4" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es una relación pública, legalmente vinculante, entre un hombre y una mujer, y entre la pareja y Dios:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xvii" :options="emparejar4" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Es el único remedio para la ruptura que provoca el divorcio:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xviii" :options="emparejar4" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Vínculo que es el más estrecho, el más tierno y sagrado de la tierra:</strong>
                      <q-select disable  dense outlined rounded v-model="form.manual.emparejar.xix" :options="emparejar4" emit-value map-options />
                    </div>
                  </div>
                    </q-scroll-area>
            </q-carousel-slide>
            <!--Verdadero y falso-->
            <q-carousel-slide :name="2" style="padding-right: 0;padding-left: 0;">
                   <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                style="height: 37em; max-width: 100% !important;"
              >
                <div class="text-h6">Verdadero Falso</div>
                <div class="q-pa-md row fit justify-start items-center no-wrap">
                  <!--Primera parte-->
                  <div class="col q-pa-md q-gutter-sm">
                    <q-toggle disable
                      v-model="form.manual.val.i"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Manual de Iglesia Impone un modelo completo de gobierno eclesiástico? (${form.manual.val.i ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.iii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Manual de Iglesia Impone un modelo completo de gobierno eclesiástico? (${form.manual.val.iii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.v"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cristo, que es la cabeza de la iglesia y su Señor viviente, profesa un profundo amor a los miembros de su cuerpo? (${form.manual.val.v ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.vii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cada miembro de la iglesia tiene voz para elegir los dirigentes de ella? (${form.manual.val.vii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.ix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los directores de los departamentos de una asociación tienen autoridad administrativa y ejecutiva? (${form.manual.val.ix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El pastor es miembro de la junta de iglesia y actúa como presidente de la misma? (${form.manual.val.xi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El pastor es miembro de la junta de iglesia y actúa como presidente de la misma? (${form.manual.val.xi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La posesión de una credencial o una licencia vencida confiere a una persona autoridad en la iglesia? (${form.manual.val.xv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xvii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cualquier iglesia tiene derecho de solicitar el traslado de un miembro que se encuentre bajo disciplina? (${form.manual.val.xvii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La carta de traslado se concede únicamente a los miembros en regla? (${form.manual.val.xix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La autoridad celestial ratifica la disciplina de la iglesia con respecto a sus miembros,cuando se ha seguido la regla bíblica? (${form.manual.val.xxi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La junta directiva puede excluir de la iglesia a algún miembro? (${form.manual.val.xxiii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Quienes se oponen a la unidad no son idóneos para ser dirigentes de la iglesia? (${form.manual.val.xxv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxvii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La Iglesia confiere al pastor, al anciano de iglesia o a cualquier otro miembro el derecho de hacer del púlpito un foro para defender cuestiones doctrinales o de procedimiento controvertidos? (${form.manual.val.xxvii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Las deliberaciones de la comisión de nombramientos no son confidenciales? (${form.manual.val.xxix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cuando brilla nueva luz procedente de la página sagrada para recompensar al diligente buscador de la verdad, esta nueva luz no invalida la antigua? (${form.manual.val.xxxi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿En el acto del lavamiento de los pies de los discípulos, Cristo ejecutó una limpieza más profunda: la de lavar el corazón de la mancha del pecado? (${form.manual.val.xxxiii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Banquetes, rifas y cosas parecidas son métodos aceptados para recolectar fondos? (${form.manual.val.xxxv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                  </div>
                  <div class="col q-pa-md q-gutter-sm">
                    <q-toggle disable
                      v-model="form.manual.val.ii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Manual de Iglesia da a conocer y salvaguarda nuestras normas y prácticas denominacionales? (${form.manual.val.ii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.iv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Espíritu de Profecía recalca los principios presentados por el MI? (${form.manual.val.iv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.vi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Sin organización, alguna institución o movimiento puede prosperar? (${form.manual.val.vi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.viii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La Iglesia, en sus diferentes niveles de organización, administra Instituciones educativas, de salud, de publicaciones y otras instituciones quetratan de alcanzar a otros en nombre de Cristo? (${form.manual.val.viii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.x"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El pastor es miembro de la junta de iglesia y actúa como presidente de la misma? (${form.manual.val.x ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El obrero cuando se niega a colaborar con la junta y rehúsa trabajar en armonía con las decisiones de la junta de asociación, su conducta puede ser considerada como una insubordinación y tratada como tal.? (${form.manual.val.xii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Una iglesia puede ser disuelta o expulsada de la hermandad de iglesias? (${form.manual.val.xiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Antes del bautismo, debe examinarse cabalmente la experiencia de los candidatos? (${form.manual.val.xvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xviii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Se conceden cartas de traslado solo a los miembros en regla? (${form.manual.val.xviii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xx"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El presidente de la asociación no es el primer anciano de la iglesia de la Asociación? (${form.manual.val.xx ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La Palabra de Dios da licencia a algún hombre para oponer su juicio al de la iglesia, y le permite insistir en sus opiniones contrarias a las de la misma? (${form.manual.val.xxii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Durante el período de censura se le puede conceder a un feligrés, una carta de traslado a otra iglesia? (${form.manual.val.xxiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El anciano tiene autoridad para admitir o excluir miembros? (${form.manual.val.xxvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxviii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El director del Departamento de Música se halla bajo la dirección del pastor o de los ancianos y no actúa independientemente? (${form.manual.val.xxviii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxx"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Puede haber ocasiones en que sea conveniente que nuestras congregaciones escuchen discursos de funcionarios del gobierno u otras personalidades públicas? (${form.manual.val.xxx ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿No existe un esquema ni un programa específico establecidos para el culto público? (${form.manual.val.xxxii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los pastores y los dirigentes de la iglesia otorgarán el privilegio del púlpito para solicitar fondos a nadie que no cuente con el reconocimiento o la recomendación de la asociación? (${form.manual.val.xxxiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.manual.val.xxxvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿No hay una enseñanza directa en las Escrituras con relación a un nuevo casamiento después del divorcio? (${form.manual.val.xxxvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                  </div>
                </div>
                    </q-scroll-area>
            </q-carousel-slide>
            <!--Responder-->
            <q-carousel-slide :name="3" style="padding-right: 0;padding-left: 0;">
                   <q-scroll-area
                :thumb-style="thumbStyle"
                :bar-style="barStyle"
                style="height: 37em; max-width: 100% !important;"
              >
                <div class="text-h6">Responda cada una de las preguntas</div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <strong class="text-italic">Mencione 5 de las 10 funciones de la junta directiva de la iglesia:</strong>
                     <q-input disable autogrow dense outlined rounded v-model="form.manual.defined.i" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                      <strong class="text-italic">Mencione 7 motivos de disciplina:</strong>
                     <q-input disable  autogrow dense outlined rounded v-model="form.manual.defined.ii" emit-value map-options />
                    </div>
                </div>
                    <div class="q-pa-xs text-center text-bold text-italic text-center items-center justify-center row">Aprobación para la Prueba de Manual de Iglesia: 
                      <vs-checkbox @click="changeEvaluated(form.aprovation)" style="padding-left: 8px;" v-model="form.aprovation.manual">
                        <template #icon>
                          <q-icon name="done_all"/>
                        </template>
                      </vs-checkbox>
                    </div>
              </q-scroll-area>
            </q-carousel-slide>
  </q-carousel>
</template>
<script>
export default {
  mounted () {
    this.form = JSON.parse(this.$q.sessionStorage.getItem('form'))
  },
  data () {
    return {
      formato: [
        {
          label: '1883',
          value: 1
        },
        {
          label: '1907',
          value: 2
        },
        {
          label: '1932',
          value: 3
        },
        {
          label: '1931',
          value: 4
        },
        {
          label: '2000',
          value: 5
        }
      ],
      organizacion: [
        {
          label: 'Principios eclesiásticos',
          value: 1
        },
        {
          label: 'Principios básicos',
          value: 2
        },
        {
          label: 'Principios humanos',
          value: 3
        },
        {
          label: 'Principios divinos',
          value: 4
        }
      ],
      constituyente: [
        {
          label: 'Reunión Disciplinaria',
          value: 1
        },
        {
          label: 'Reunión Gerencial',
          value: 2
        },
        {
          label: 'Reunión Administrativa',
          value: 3
        },
        {
          label: 'Reunión Figurativa',
          value: 4
        }
      ],
      esquema: [
        {
          label: 'Iglesia local-Unión de iglesias-Unión-Asociación General y sus Divisiones',
          value: 1
        },
        {
          label: 'Unión de Iglesia-Iglesia local- Unión-Asociación General y sus Divisiones',
          value: 2
        },
        {
          label: 'Ninguna de las anteriores',
          value: 3
        },
        {
          label: 'Unión-Asociación General y sus Divisiones-Iglesia local',
          value: 4
        }
      ],
      superintendente: [
        {
          label: 'Pastor departamental',
          value: 1
        },
        {
          label: '1er. Anciano',
          value: 2
        },
        {
          label: 'Pastor distrital',
          value: 3
        },
        {
          label: 'Presidente de la asociación',
          value: 4
        }
      ],
      pastores: [
        {
          label: 'Ninguna de las anteriores',
          value: 1
        },
        {
          label: 'No necesitan ser ordenados como ancianos.',
          value: 2
        },
        {
          label: 'Necesitan ser ordenados como ancianos.',
          value: 3
        },
        {
          label: 'Necesitan ser bautizados de nuevo',
          value: 4
        }
      ],
      ordenado: [
        {
          label: 'Atiende la recomendación de la junta de ancianos',
          value: 1
        },
        {
          label: 'Atiende la recomendación de la junta directiva de la asociación',
          value: 2
        },
        {
          label: 'Atiende la recomendación de la junta directiva de la iglesia',
          value: 3
        },
        {
          label: 'Ninguna de las anteriores',
          value: 4
        }
      ],
      bautismo: [
        {
          label: 'Ambas',
          value: 1
        },
        {
          label: 'Ninguna',
          value: 2
        },
        {
          label: 'Que han apostatado',
          value: 3
        },
        {
          label: 'Provenientes de otra confesión cristiana',
          value: 4
        }
      ],
      translado: [
        {
          label: 'Tres meses',
          value: 1
        },
        {
          label: 'Doce meses',
          value: 2
        },
        {
          label: 'Nueve meses',
          value: 3
        },
        {
          label: 'Seis meses',
          value: 4
        }
      ],
      transferencia: [
        {
          label: 'La junta de ancianos',
          value: 1
        },
        {
          label: 'La iglesia',
          value: 2
        },
        {
          label: 'La junta de iglesia',
          value: 3
        },
        {
          label: 'El pastor',
          value: 4
        }
      ],
      fundamenta: [
        {
          label: 'Juan 1: 1',
          value: 1
        },
        {
          label: 'Mateo 18: 15-18',
          value: 2
        },
        {
          label: 'Santiago 3: 6-9',
          value: 3
        },
        {
          label: 'Apocalipsis 21: 8',
          value: 4
        },
        {
          label: 'Éxodo 20: 8-11',
          value: 5
        }
      ],
      dirigentes: [
        {
          label: 'No son responsables',
          value: 1
        },
        {
          label: 'Son responsables de esos pecados',
          value: 2
        },
        {
          label: 'La iglesia es la responsable',
          value: 3
        }
      ],
      autoridad: [
        {
          label: 'A toda la asociación',
          value: 1
        },
        {
          label: 'Varias iglesias',
          value: 2
        },
        {
          label: 'A todas las iglesias',
          value: 3
        },
        {
          label: 'La iglesia que lo eligió',
          value: 4
        }
      ],
      diacono: [
        {
          label: 'Visitar a los miembros',
          value: 1
        },
        {
          label: 'Oficiar la ceremonia matrimonial',
          value: 2
        },
        {
          label: 'Presidir la Cena del Señor',
          value: 3
        }
      ],
      comunicacion: [
        {
          label: 'Pastor de iglesia',
          value: 1
        },
        {
          label: 'Junta de iglesia',
          value: 2
        },
        {
          label: 'Primer Anciano',
          value: 3
        },
        {
          label: 'Director de comunicación',
          value: 4
        }
      ],
      administrativo: [
        {
          label: 'Junta de asociación',
          value: 1
        },
        {
          label: 'Junta de pastores',
          value: 2
        },
        {
          label: 'Junta escolar',
          value: 3
        },
        {
          label: 'Junta de Iglesia',
          value: 4
        }
      ],
      liderazgo: [
        {
          label: 'Secretario de Ministerios Personales',
          value: 1
        },
        {
          label: 'Pastor de iglesia',
          value: 2
        },
        {
          label: 'Director de publicaciones',
          value: 3
        }
      ],
      programa: [
        {
          label: 'Club de Conquistadores',
          value: 1
        },
        {
          label: 'Club de Guías Mayores',
          value: 2
        },
        {
          label: 'Club JA',
          value: 3
        },
        {
          label: 'Club de Aventureros',
          value: 4
        }
      ],
      locales: [
        {
          label: 'Ninguna de las anteriores',
          value: 1
        },
        {
          label: 'Especial',
          value: 2
        },
        {
          label: 'General',
          value: 3
        },
        {
          label: 'Nombramiento',
          value: 4
        },
        {
          label: 'Disciplina',
          value: 5
        }
      ],
      emana: [
        {
          label: 'Presidente',
          value: 1
        },
        {
          label: 'Respectivos congresos',
          value: 2
        },
        {
          label: 'Respectiva administración',
          value: 3
        },
        {
          label: 'Respectivas juntas',
          value: 4
        }
      ],
      misionero: [
        {
          label: '2do. Sábado',
          value: 1
        },
        {
          label: '3er. Sábado',
          value: 2
        },
        {
          label: '1er. Sábado',
          value: 3
        },
        {
          label: '4to. Sábado',
          value: 4
        }
      ],
      rito: [
        {
          label: 'Lavamiento de los pies',
          value: 1
        },
        {
          label: 'Comer el pan',
          value: 2
        },
        {
          label: 'Homilía',
          value: 3
        },
        {
          label: 'Tomar el vino',
          value: 4
        },
        {
          label: 'Penitencia',
          value: 5
        }
      ],
      cultos: [
        {
          label: 'Oración',
          value: 1
        },
        {
          label: '3er. Sábado',
          value: 2
        },
        {
          label: 'Evangelísticos',
          value: 3
        },
        {
          label: 'Sabáticos',
          value: 4
        },
        {
          label: 'Juveniles',
          value: 5
        }
      ],
      oficiantes: [
        {
          label: 'Pastores y diáconos',
          value: 1
        },
        {
          label: 'Pastores y diaconisas',
          value: 2
        },
        {
          label: 'Pastores y maestros',
          value: 3
        },
        {
          label: 'Pastores y ancianos',
          value: 4
        }
      ],
      tarea: [
        {
          label: 'La ley',
          value: 1
        },
        {
          label: 'El protoevangelio',
          value: 2
        },
        {
          label: 'Relaciones públicas',
          value: 3
        },
        {
          label: 'La gran comisión evangélica de Jesús',
          value: 4
        }
      ],
      función: [
        {
          label: 'La ley',
          value: 1
        },
        {
          label: 'La gran comisión evangélica de Jesús',
          value: 2
        },
        {
          label: 'El protoevangelio',
          value: 3
        },
        {
          label: 'Relaciones públicas',
          value: 4
        }
      ],
      cuerpo: [
        {
          label: 'Discipular a los miembros',
          value: 1
        },
        {
          label: 'Organizar los departamentos',
          value: 2
        },
        {
          label: 'Diezmar y ofrendar',
          value: 3
        }
      ],
      diezmo: [
        {
          label: 'Para el sostén de la asociación en el cuidado de las iglesias y las actividades misioneras y para programas de construcción',
          value: 1
        },
        {
          label: 'La enseñanza de la Biblia y para el sostén de la asociación en el cuidado de las iglesias y las actividades misioneras.',
          value: 2
        },
        {
          label: 'La enseñanza de la Biblia y suplir las necesidades particulares del pastor.',
          value: 3
        },
        {
          label: 'La enseñanza de la Biblia y el pago de las deudas de las iglesias o las instituciones.',
          value: 4
        }
      ],
      indumentaria: [
        {
          label: 'Modestia, la belleza, la gracia',
          value: 1
        },
        {
          label: 'Todas las anteriores',
          value: 2
        },
        {
          label: 'Ninguna de las anteriores',
          value: 3
        },
        {
          label: 'las cualidades propias de la sencillez natural',
          value: 4
        }
      ],
      matrimonio: [
        {
          label: 'Mujer y mujer',
          value: 1
        },
        {
          label: 'Hombre y hombre',
          value: 2
        },
        {
          label: 'Hombre y una mujer',
          value: 3
        },
        {
          label: 'Ninguna de las anteriores',
          value: 4
        }
      ],
      emparejar: [
        {
          label: 'Voto de censura',
          value: 1
        },
        {
          label: 'Presidente de asociación',
          value: 2
        },
        {
          label: 'Conducta que traiga oprobio a la iglesia',
          value: 3
        },
        {
          label: 'Carta de traslado',
          value: 4
        },
        {
          label: 'Representativo',
          value: 5
        },
        {
          label: 'Bautismo',
          value: 6
        }
      ],
      emparejar2: [
        {
          label: 'Miembro en censura',
          value: 1
        },
        {
          label: 'La negación de la fe en los principios fundamentales del evangelio',
          value: 2
        },
        {
          label: 'Anciano de iglesia',
          value: 3
        },
        {
          label: 'Director de iglesia',
          value: 4
        }
      ],
      emparejar3: [
        {
          label: 'Fondos de organizaciones auxiliares',
          value: 1
        },
        {
          label: 'Junta administrativa/iglesia',
          value: 2
        },
        {
          label: 'Fondo de la asociación',
          value: 3
        },
        {
          label: 'Pastor de iglesia',
          value: 4
        },
        {
          label: 'Escuela sabática',
          value: 5
        }
      ],
      emparejar4: [
        {
          label: 'Incesto',
          value: 1
        },
        {
          label: 'Presupuesto de iglesia',
          value: 2
        },
        {
          label: 'El matrimonio',
          value: 3
        },
        {
          label: 'La gracia Divina',
          value: 4
        },
        {
          label: 'La familia',
          value: 5
        }
      ],
      manual: [
        {
          label: 'La obra y las funciones de las iglesias locales',
          value: 1
        },
        {
          label: 'Las funciones ministeriales y administrativas organizacionales',
          value: 2
        },
        {
          label: 'La relación de la iglesia con las estructuras organizacionales a las que pertenecen',
          value: 3
        },
        {
          label: 'Las funciones de las iglesias organizadas en función de los Distritos',
          value: 4
        }
      ],
      expresa: [
        {
          label: 'La comprensión de los aspectos históricos del cristianismo',
          value: 1
        },
        {
          label: 'El gobierno y la disciplina eclesiástica',
          value: 2
        },
        {
          label: 'La relación que la iglesia debe tener con otras confesiones de fe',
          value: 3
        },
        {
          label: 'El entendimiento que la iglesia tiene de la vida cristiana',
          value: 4
        }
      ],
      razones: [
        {
          label: 'Miembro fiel cuya feligresía se ha extraviado o ha sido excluido del registro de miembros por paradero desconocido',
          value: 1
        },
        {
          label: 'Miembro de la iglesia cuya solicitud de carta de traslado ha sido respondida por la iglesia donde es miembro',
          value: 2
        },
        {
          label: 'Cristiano consagrado de otras denominaciones que haya sido bautizado por inmersión, de acuerdo con las creencias y prácticas bautismales de la Iglesia Adventista del Séptimo Día',
          value: 3
        }
      ],
      proceso: [
        {
          label: 'El feligrés solicita la carta de traslado al (la) secretario (a) de la iglesia a la cual desea unirse',
          value: 1
        },
        {
          label: 'El feligrés solicita la carta de traslado por escrito a la junta de la iglesia de la cual es miembro',
          value: 2
        },
        {
          label: 'El feligrés solicita la carta de traslado por escrito a la junta plenaria de la iglesia a la cual desea unirse',
          value: 3
        },
        {
          label: 'El feligrés solicita la carta de traslado al (la) secretario (a) de la iglesia de la cual es miembro',
          value: 4
        }
      ],

      form: {
        manual: {
          selection: {},
          emparejar: {},
          val: {},
          defined: {}
        },
        aprovation: {}
      },
      slide: 1,

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
    }
  },
  methods: {
    async changeEvaluated (info) {
      await this.$api.put('Change_aprovation_Manual', info).then(res => {
        this.$vs.notification({
          color: 'success',
          position: 'bottom-center',
          title: '¡Muy Bien!',
          text: 'Se ha cambiado de manera exitosa el resultado de la evaluación de Manual de Iglesia del Aspirante'
        })
      })
    }
  }
}
</script>